'use client'

import { useState, FormEvent } from 'react'

interface NewsletterSignupProps {
  source: string
  className?: string
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterSignup({ source, className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setState('success')
      setEmail('')
      setName('')
    } catch (error) {
      setState('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
    }
  }

  if (state === 'success') {
    return (
      <div className={`newsletter-signup success ${className}`}>
        <div style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          padding: '2rem',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>
            Check Your Email!
          </h3>
          <p style={{ fontSize: '1rem', opacity: 0.95 }}>
            We've sent you a confirmation link. Click it to complete your subscription.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`newsletter-signup ${className}`}>
      <div style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        padding: '2.5rem',
        borderRadius: '12px',
        color: 'white',
        boxShadow: '0 10px 40px rgba(37, 99, 235, 0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: '800' }}>
            📬 Get Home Maintenance Tips
          </h3>
          <p style={{ fontSize: '1rem', opacity: 0.95 }}>
            Expert electrical and home improvement advice for North Texas homeowners
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="newsletter-name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
              Name (Optional)
            </label>
            <input
              id="newsletter-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              disabled={state === 'loading'}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label htmlFor="newsletter-email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
              Email Address *
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              disabled={state === 'loading'}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {state === 'error' && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.5)',
              padding: '0.75rem',
              borderRadius: '8px',
              fontSize: '0.9rem'
            }}>
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={state === 'loading'}
            style={{
              background: 'white',
              color: '#2563eb',
              padding: '0.875rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: state === 'loading' ? 'not-allowed' : 'pointer',
              opacity: state === 'loading' ? 0.7 : 1,
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              if (state !== 'loading') {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)'
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            {state === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
          </button>

          <p style={{
            fontSize: '0.8rem',
            opacity: 0.8,
            textAlign: 'center',
            margin: 0
          }}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  )
}
