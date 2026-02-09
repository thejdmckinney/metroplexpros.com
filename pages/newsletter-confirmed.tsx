import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NewsletterConfirmed() {
  const router = useRouter()
  const { already } = router.query

  return (
    <Layout
      title="Newsletter Subscription Confirmed | MetroPlex Pros"
      description="Your newsletter subscription has been confirmed. Thank you for subscribing!"
      keywords="newsletter, subscription, MetroPlex Pros, home maintenance tips"
      canonicalUrl="https://www.metroplexpros.com/newsletter-confirmed"
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
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)'
            }}>
              <span style={{ fontSize: '4rem' }}>✓</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '1rem',
              fontWeight: '800',
              color: '#c9d1d9'
            }}>
              {already ? 'Already Subscribed!' : 'You\'re All Set!'}
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#8b949e',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              {already 
                ? 'Your email is already confirmed. You\'re on our list!'
                : 'Your newsletter subscription has been confirmed. You\'ll receive home maintenance and electrical tips from MetroPlex Pros.'
              }
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
                What to Expect
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left',
                display: 'inline-block'
              }}>
                {[
                  'Expert electrical and home maintenance tips',
                  'Seasonal home care reminders for North Texas',
                  'Special offers on our services',
                  'DIY guides and safety information'
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
                    <span style={{ color: '#10b981', fontSize: '1.2rem' }}>✓</span>
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
                Read Our Blog
              </Link>
              <Link
                href="/"
                className="btn btn-outline"
                style={{
                  fontSize: '1rem',
                  padding: '0.875rem 1.75rem'
                }}
              >
                Back to Home
              </Link>
            </div>

            <p style={{
              marginTop: '2rem',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
              You can unsubscribe at any time by clicking the link in our emails.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
