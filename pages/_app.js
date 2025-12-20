import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

// Optimize Inter font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
