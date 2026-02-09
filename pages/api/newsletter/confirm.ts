import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABSE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { token } = req.query

    if (!token || typeof token !== 'string') {
      return res.redirect(302, '/newsletter-error?reason=invalid-token')
    }

    // Find subscriber with this token
    const { data: subscriber, error: findError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('confirm_token', token)
      .single()

    if (findError || !subscriber) {
      console.error('Token not found:', findError)
      return res.redirect(302, '/newsletter-error?reason=token-not-found')
    }

    // Check if already confirmed
    if (subscriber.confirmed) {
      return res.redirect(302, '/newsletter-confirmed?already=true')
    }

    // Update subscriber to confirmed
    const { error: updateError } = await supabase
      .from('newsletter_subscribers')
      .update({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
      })
      .eq('confirm_token', token)

    if (updateError) {
      console.error('Update error:', updateError)
      return res.redirect(302, '/newsletter-error?reason=update-failed')
    }

    // Redirect to success page
    return res.redirect(302, '/newsletter-confirmed')
  } catch (error) {
    console.error('Confirmation error:', error)
    return res.redirect(302, '/newsletter-error?reason=server-error')
  }
}
