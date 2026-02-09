import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABSE_SERVICE_ROLE_KEY!
const resend = new Resend(process.env.RESEND_API_KEY!)

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface SubscribeRequest {
  email: string
  name?: string
  source: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, name, source }: SubscribeRequest = req.body

    // Validate email
    if (!email || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    // Validate source
    if (!source) {
      return res.status(400).json({ error: 'Source is required' })
    }

    // Generate confirmation token
    const confirmToken = crypto.randomUUID()

    // Check if email already exists
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('email, confirmed')
      .eq('email', email.toLowerCase())
      .single()

    if (existingSubscriber) {
      if (existingSubscriber.confirmed) {
        return res.status(400).json({ error: 'Email already subscribed' })
      } else {
        return res.status(400).json({ error: 'Email already subscribed. Please check your inbox for the confirmation email.' })
      }
    }

    // Insert subscriber into database
    const { error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email: email.toLowerCase(),
        name: name || null,
        source,
        confirm_token: confirmToken,
        confirmed: false,
        status: 'active',
        subscribed_at: new Date().toISOString(),
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      
      // Handle duplicate email error (in case of race condition)
      if (insertError.code === '23505') {
        return res.status(400).json({ error: 'Email already subscribed' })
      }
      
      throw insertError
    }

    // Generate confirmation link
    const confirmLink = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.metroplexpros.com'}/api/newsletter/confirm?token=${confirmToken}`

    // Send confirmation email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">MetroPlex Pros</h1>
        </div>
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Thanks for subscribing${name ? `, ${name}` : ''}!</h2>
          <p style="color: #4b5563; line-height: 1.6;">Click the button below to confirm your subscription:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmLink}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Confirm Subscription
            </a>
          </div>
          <p style="color: #4b5563; line-height: 1.6;">You'll get notified when we publish new home maintenance and electrical tips for North Texas homeowners.</p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            If the button doesn't work, copy and paste this link into your browser:<br/>
            <a href="${confirmLink}" style="color: #2563eb; word-break: break-all;">${confirmLink}</a>
          </p>
        </div>
        <div style="text-align: center; padding: 20px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">MetroPlex Pros - Licensed Electrical Contractor</p>
          <p style="color: #9ca3af; font-size: 11px; margin: 5px 0 0 0;">Dallas-Fort Worth, TX</p>
        </div>
      </div>
    `

    try {
      await resend.emails.send({
        from: 'MetroPlex Pros <noreply@metroplexpros.com>',
        to: email,
        subject: 'Confirm your subscription to MetroPlex Pros',
        html: emailHtml,
      })
    } catch (emailError) {
      console.error('Resend email error:', emailError)
      // Don't fail the request if email sending fails
      // The subscriber is already in the database
    }

    return res.status(200).json({
      success: true,
      message: 'Please check your email to confirm your subscription',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return res.status(500).json({
      error: 'Failed to subscribe. Please try again later.',
    })
  }
}
