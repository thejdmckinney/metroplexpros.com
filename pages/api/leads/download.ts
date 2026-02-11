import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Map of valid resource IDs to their PDF filenames
const RESOURCES: Record<string, { filename: string; title: string }> = {
  'electrical-safety-checklist': {
    filename: 'electrical-safety-checklist.pdf',
    title: "DFW Homeowner's Electrical Safety Checklist",
  },
  'seasonal-maintenance-calendar': {
    filename: 'seasonal-maintenance-calendar.pdf',
    title: 'Seasonal Home Maintenance Calendar',
  },
  'storm-prep-checklist': {
    filename: 'storm-prep-checklist.pdf',
    title: 'Storm Prep Checklist for DFW Homes',
  },
  'contractor-questions': {
    filename: 'hiring-contractor-questions.pdf',
    title: 'Questions to Ask Before Hiring a Contractor',
  },
}

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

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing environment variables:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
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

    // Extract and validate request data
    const { name, email, resource_id, source } = req.body

    if (!name || !email || !resource_id) {
      return res.status(400).json({
        error: 'Missing required fields',
        details: 'name, email, and resource_id are required',
      })
    }

    // Validate resource exists
    const resource = RESOURCES[resource_id]
    if (!resource) {
      return res.status(400).json({
        error: 'Invalid resource',
        details: 'Resource not found',
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
      })
    }

    // Check if this email already downloaded this resource
    const { data: existingLead, error: checkError } = await supabase
      .from('leads')
      .select('id')
      .eq('email', email)
      .eq('source', `download:${resource_id}`)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is "no rows returned", which is fine
      console.error('Error checking existing lead:', checkError)
      throw checkError
    }

    if (existingLead) {
      // Lead already exists, send them the download link again
      const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://metroplexpros.com'}/downloads/${resource.filename}`
      
      // Send email with download link
      await sendDownloadEmail(name, email, resource.title, downloadUrl)
      
      return res.status(200).json({
        success: true,
        message: 'Download link sent to your email',
        alreadyRegistered: true,
        downloadUrl, // Also return URL for immediate download
      })
    }

    // Insert new lead into database
    const { data: lead, error: insertError } = await supabase
      .from('leads')
      .insert([
        {
          name,
          email,
          source: `download:${resource_id}`,
          calculator_inputs: null,
          estimated_cost_low: null,
          estimated_cost_high: null,
        },
      ])
      .select()
      .single()

    if (insertError) {
      console.error('Error inserting lead:', insertError)
      throw insertError
    }

    // Generate download URL
    const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://metroplexpros.com'}/downloads/${resource.filename}`

    // Send download link via email using Resend
    await sendDownloadEmail(name, email, resource.title, downloadUrl)

    return res.status(200).json({
      success: true,
      message: 'Download link sent to your email',
      leadId: lead.id,
      downloadUrl, // Also return URL for immediate download
    })
  } catch (error: any) {
    console.error('Error in download API:', error)
    return res.status(500).json({
      error: 'Failed to process download request',
      details: error.message || 'Unknown error',
    })
  }
}

// Helper function to send download email via Resend
async function sendDownloadEmail(
  name: string,
  email: string,
  resourceTitle: string,
  downloadUrl: string
): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.warn('RESEND_API_KEY not configured, skipping email')
    return
  }

  try {
    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: 'Metroplex Pros <noreply@metroplexpros.com>',
      to: email,
      subject: `Your Free Download: ${resourceTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0d1117 0%, #161b22 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h1 style="color: #00f0ff; margin: 0; font-size: 28px; font-weight: 700;">Metroplex Pros</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: #0d1117; margin-top: 0; font-size: 24px;">Hi ${name},</h2>
            <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
              Thank you for downloading <strong>${resourceTitle}</strong>! We hope this resource helps you with your home improvement projects.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${downloadUrl}" 
                 style="display: inline-block; padding: 15px 40px; background: #00f0ff; color: #0d1117; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px;">
                Download Your PDF
              </a>
            </div>
            
            <p style="font-size: 14px; color: #777; margin-top: 20px;">
              <strong>Direct link:</strong><br>
              <a href="${downloadUrl}" style="color: #00f0ff; word-break: break-all;">${downloadUrl}</a>
            </p>
          </div>
          
          <div style="background: #fff; padding: 25px; border-radius: 12px; border: 2px solid #e9ecef; margin-bottom: 30px;">
            <h3 style="color: #0d1117; margin-top: 0; font-size: 20px;">Need Professional Help?</h3>
            <p style="color: #555; margin-bottom: 15px;">
              Our licensed professionals are ready to help with your electrical, plumbing, handyman, and smart home projects in the Dallas-Fort Worth area.
            </p>
            <ul style="color: #555; padding-left: 20px; margin-bottom: 20px;">
              <li>Free estimates</li>
              <li>Licensed & insured</li>
              <li>Same-day service available</li>
              <li>100% satisfaction guaranteed</li>
            </ul>
            <p style="margin-bottom: 20px;">
              <a href="tel:469-993-9740" style="color: #00f0ff; font-weight: 600; text-decoration: none; font-size: 18px;">
                📞 Call (469) 993-9740
              </a>
            </p>
            <p>
              <a href="https://metroplexpros.com/contact" style="color: #00f0ff; font-weight: 600; text-decoration: none;">
                Schedule Online →
              </a>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #888; font-size: 14px;">
            <p style="margin: 5px 0;">Metroplex Pros - Dallas-Fort Worth's Trusted Home Services</p>
            <p style="margin: 5px 0;">
              <a href="https://metroplexpros.com" style="color: #00f0ff; text-decoration: none;">metroplexpros.com</a>
            </p>
            <p style="margin: 15px 0 5px; font-size: 12px;">
              You received this email because you requested a download from our website.
            </p>
          </div>
        </body>
        </html>
      `,
    })

    console.log(`Download email sent to ${email} for resource: ${resourceTitle}`)
  } catch (error) {
    console.error('Error sending download email:', error)
    // Don't throw - we still want to return success even if email fails
  }
}
