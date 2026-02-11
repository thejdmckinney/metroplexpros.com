import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Validate environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendApiKey = process.env.RESEND_API_KEY

    if (!supabaseUrl || !supabaseKey || !resendApiKey) {
      console.error('Missing environment variables:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
        hasResend: !!resendApiKey,
      })
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'Missing required environment variables',
      })
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    // Create Resend client
    const resend = new Resend(resendApiKey)

    // Extract and validate request data
    const {
      name,
      email,
      phone,
      address,
      calculator_inputs,
      estimated_cost_low,
      estimated_cost_high,
      source,
    } = req.body

    if (!name || !email || !calculator_inputs) {
      return res.status(400).json({
        error: 'Missing required fields',
        details: 'name, email, and calculator_inputs are required',
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
      })
    }

    // Insert lead into database
    const { data: lead, error: insertError } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          address: address || null,
          source: source || 'panel-calculator',
          calculator_inputs: calculator_inputs,
          estimated_cost_low: estimated_cost_low || null,
          estimated_cost_high: estimated_cost_high || null,
        },
      ])
      .select()
      .single()

    if (insertError) {
      console.error('Error inserting lead:', insertError)
      throw insertError
    }

    // Format calculator inputs for email
    const formatCalculatorInputs = () => {
      const inputs = calculator_inputs
      return `
        <strong>Current Panel:</strong> ${inputs.currentPanel || 'N/A'}<br/>
        <strong>Desired Panel:</strong> ${inputs.desiredPanel || 'N/A'}<br/>
        <strong>Home Age:</strong> ${inputs.homeAge || 'N/A'}<br/>
        <strong>Home Size:</strong> ${inputs.homeSize || 'N/A'}<br/>
        <strong>Upgrade Reasons:</strong> ${Array.isArray(inputs.reasons) ? inputs.reasons.join(', ') : 'N/A'}<br/>
        <strong>Location:</strong> ${inputs.location || 'N/A'}
      `
    }

    // Send notification email to business
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #00f0ff, #0080ff); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                        🔌 New Panel Calculator Lead
                      </h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                        You have a new lead from the Electrical Panel Upgrade Calculator!
                      </p>

                      <!-- Contact Info -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #00f0ff; padding: 20px; margin: 20px 0;">
                        <h2 style="margin: 0 0 15px; color: #0d1117; font-size: 18px;">Contact Information</h2>
                        <p style="margin: 5px 0; color: #333; font-size: 15px;">
                          <strong>Name:</strong> ${name}
                        </p>
                        <p style="margin: 5px 0; color: #333; font-size: 15px;">
                          <strong>Email:</strong> <a href="mailto:${email}" style="color: #00f0ff; text-decoration: none;">${email}</a>
                        </p>
                        ${phone ? `<p style="margin: 5px 0; color: #333; font-size: 15px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #00f0ff; text-decoration: none;">${phone}</a></p>` : ''}
                        ${address ? `<p style="margin: 5px 0; color: #333; font-size: 15px;"><strong>Address:</strong> ${address}</p>` : ''}
                      </div>

                      <!-- Calculator Results -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #0080ff; padding: 20px; margin: 20px 0;">
                        <h2 style="margin: 0 0 15px; color: #0d1117; font-size: 18px;">Calculator Details</h2>
                        <p style="margin: 5px 0; color: #333; font-size: 15px;">
                          ${formatCalculatorInputs()}
                        </p>
                        ${estimated_cost_low && estimated_cost_high ? `
                          <div style="margin-top: 15px; padding: 15px; background-color: #e6f7ff; border-radius: 6px;">
                            <strong style="color: #0d1117;">Estimated Cost Range:</strong>
                            <div style="font-size: 24px; color: #00f0ff; font-weight: 700; margin-top: 5px;">
                              $${estimated_cost_low.toLocaleString()} - $${estimated_cost_high.toLocaleString()}
                            </div>
                          </div>
                        ` : ''}
                      </div>

                      <!-- Action Button -->
                      <div style="text-align: center; margin: 30px 0 20px;">
                        <a href="mailto:${email}?subject=Re: Your Electrical Panel Upgrade Estimate" 
                           style="display: inline-block; padding: 15px 40px; background: linear-gradient(135deg, #00f0ff, #0080ff); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 16px;">
                          Reply to Lead
                        </a>
                      </div>

                      <p style="margin: 20px 0 0; color: #666; font-size: 14px; line-height: 1.6; text-align: center;">
                        Lead submitted from: ${source || 'panel-calculator'}
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px; text-align: center;">
                      <p style="margin: 0; color: #666; font-size: 13px;">
                        Metroplex Pros - Professional Home Services<br/>
                        Dallas-Fort Worth Area
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'Metroplex Pros <onboarding@resend.dev>', // Update to your verified domain
        to: 'info@metroplexpros.com', // Update to your business email
        subject: `🔌 New Panel Calculator Lead: ${name}`,
        html: emailHtml,
        replyTo: email,
      })
    } catch (emailError: any) {
      console.error('Error sending email:', emailError)
      // Don't fail the request if email fails, lead is already saved
    }

    return res.status(200).json({
      success: true,
      message: 'Lead submitted successfully',
      leadId: lead.id,
      estimatedCost: {
        low: estimated_cost_low,
        high: estimated_cost_high,
      },
    })
  } catch (error: any) {
    console.error('Error in calculator API:', error)
    return res.status(500).json({
      error: 'Failed to process calculator submission',
      details: error.message || 'Unknown error',
    })
  }
}
