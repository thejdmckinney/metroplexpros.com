import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simple test endpoint to check environment variables
  const hasSupabaseUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
  const hasSupabaseKey = !!process.env.SUPABSE_SERVICE_ROLE_KEY
  const hasResendKey = !!process.env.RESEND_API_KEY
  const hasSiteUrl = !!process.env.NEXT_PUBLIC_SITE_URL
  
  return res.status(200).json({
    status: 'ok',
    environment: process.env.NODE_ENV,
    variables: {
      NEXT_PUBLIC_SUPABASE_URL: hasSupabaseUrl,
      SUPABSE_SERVICE_ROLE_KEY: hasSupabaseKey,
      RESEND_API_KEY: hasResendKey,
      NEXT_PUBLIC_SITE_URL: hasSiteUrl,
    },
    supabaseUrl: hasSupabaseUrl ? process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + '...' : 'MISSING'
  })
}
