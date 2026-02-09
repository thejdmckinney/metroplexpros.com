import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NewsletterError() {
  const router = useRouter()
  const { reason } = router.query

  const getErrorMessage = () => {
    switch (reason) {
      case 'invalid-token':
        return 'The confirmation link is invalid.'
      case 'token-not-found':
        return 'This confirmation link is not valid or has expired.'
      case 'update-failed':
        return 'We encountered an error confirming your subscription.'
      case 'server-error':
        return 'A server error occurred. Please try again later.'
      default:
        return 'Something went wrong with your subscription confirmation.'
    }
  }

  return (
    <Layout
      title="Newsletter Subscription Error | MetroPlex Pros"
      description="There was an error confirming your newsletter subscription."
      keywords="newsletter, subscription error, MetroPlex Pros"
      canonicalUrl="https://www.metroplexpros.com/newsletter-error"
      openGraph={{}}
    >
      <section style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 20px 60px rgba(239, 68, 68, 0.3)'
            }}>
              <span style={{ fontSize: '4rem' }}>✕</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '1rem',
              fontWeight: '800',
              color: '#c9d1d9'
            }}>
              Confirmation Failed
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#8b949e',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              {getErrorMessage()}
            </p>

            <div style={{
              background: '#161b22',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #30363d',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#00f0ff',
                marginBottom: '1rem',
                fontWeight: '700'
              }}>
                What You Can Do
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block'
              }}>
                {[
                  'Check your email for the most recent confirmation link',
                  'Try subscribing again from our blog',
                  'Contact us if the problem persists',
                  'Make sure you\'re clicking the full link from the email'
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '0.75rem 0',
                      borderBottom: index !== 3 ? '1px solid #30363d' : 'none',
                      color: '#c9d1d9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <span style={{ color: '#00f0ff', fontSize: '1.2rem' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                href="/blog"
                className="btn"
                style={{
                  fontSize: '1rem',
                  padding: '0.875rem 1.75rem'
                }}
              >
                Try Again
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline"
                style={{
                  fontSize: '1rem',
                  padding: '0.875rem 1.75rem'
                }}
              >
                Contact Support
              </Link>
            </div>

            <p style={{
              marginTop: '2rem',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
              Need help? Email us at{' '}
              <a href="mailto:info@metroplexpros.com" style={{ color: '#00f0ff' }}>
                info@metroplexpros.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
