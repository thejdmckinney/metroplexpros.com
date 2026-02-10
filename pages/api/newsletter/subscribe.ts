import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { confirmationEmailTemplate } from '../../../emails/templates/confirmation'

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

    // Generate email HTML using template
    const emailHtml = confirmationEmailTemplate({
      name,
      confirmLink,
    })

    // Send confirmation email
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
