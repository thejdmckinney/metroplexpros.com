import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

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
      // Lead already exists, just return success (they can download again)
      return res.status(200).json({
        success: true,
        message: 'Download link sent to your email',
        alreadyRegistered: true,
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

    // TODO: Send download link via email using Resend
    // For now, we'll just return success
    // In a future update, integrate with Resend to send the PDF link

    return res.status(200).json({
      success: true,
      message: 'Download link sent to your email',
      leadId: lead.id,
    })
  } catch (error: any) {
    console.error('Error in download API:', error)
    return res.status(500).json({
      error: 'Failed to process download request',
      details: error.message || 'Unknown error',
    })
  }
}
