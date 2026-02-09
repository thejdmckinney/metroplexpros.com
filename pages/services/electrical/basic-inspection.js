import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'

export default function BasicInspection() {
  return (
    <Layout
      title="Basic Electrical Inspection - $150 | MetroPlex Pros Dallas"
      description="Comprehensive basic electrical inspection for homes up to 2,500 sq ft. Visual assessment of all accessible electrical components. Licensed electricians. Book online today!"
      keywords="electrical inspection, home inspection Dallas, electrical safety check, basic inspection, electrical assessment"
    >
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        padding: '5rem 0 3rem',
        borderBottom: '1px solid #30363d'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Link href="/services/electrical" style={{
              color: '#00f0ff',
              textDecoration: 'none',
              fontSize: '0.95rem',
              marginBottom: '2rem',
              display: 'inline-block'
            }}>
              ← Back to Electrical Services
            </Link>
            
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid #00f0ff',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#00f0ff',
              marginBottom: '1.5rem'
            }}>
              PERFECT FOR STANDARD HOMES
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              fontWeight: '800',
              color: '#c9d1d9'
            }}>
              Basic Electrical Inspection
            </h1>
            
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#00f0ff',
              marginBottom: '1rem'
            }}>
              $150
            </div>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#8b949e',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Ideal for routine home maintenance or pre-purchase assessments of standard residential properties up to 2,500 square feet.
            </p>

            <a
              href="https://calendly.com/metroplexpros/basic-electrical-inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-block',
                fontSize: '1.1rem',
                padding: '1rem 2.5rem'
              }}
            >
              Book Basic Inspection
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '3rem',
              textAlign: 'center',
              color: '#c9d1d9'
            }}>
              What's Included
            </h2>

            <div style={{
              display: 'grid',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: 'Visual Inspection',
                  items: [
                    'Main electrical panel assessment',
                    'Sub-panels and distribution boards',
                    'Visible wiring throughout the home',
                    'Outlets and switches in all rooms'
                  ]
                },
                {
                  title: 'Safety Checks',
                  items: [
                    'GFCI and AFCI protection verification',
                    'Grounding system inspection',
                    'Circuit breaker functionality',
                    'Basic voltage testing'
                  ]
                },
                {
                  title: 'Code Compliance',
                  items: [
                    'Current electrical code review',
                    'Safety hazard identification',
                    'Required upgrades assessment',
                    'Written inspection report'
                  ]
                },
                {
                  title: 'Service Details',
                  items: [
                    'Homes up to 2,500 sq ft',
                    '1-2 hour inspection time',
                    'Same-day scheduling available',
                    'Licensed electrician included'
                  ]
                }
              ].map((section, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#161b22',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #30363d'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#00f0ff',
                    marginBottom: '1rem',
                    fontWeight: '700'
                  }}>
                    {section.title}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: '0.75rem 0',
                          borderBottom: idx !== section.items.length - 1 ? '1px solid #30363d' : 'none',
                          color: '#8b949e',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}
                      >
                        <span style={{ color: '#00f0ff', fontSize: '1.2rem' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Inspection */}
      <section style={{ backgroundColor: '#161b22', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#c9d1d9'
            }}>
              Perfect For
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  icon: '🏠',
                  title: 'Home Buyers',
                  description: 'Essential pre-purchase assessment for standard homes'
                },
                {
                  icon: '🔍',
                  title: 'Annual Checkups',
                  description: 'Routine maintenance for safety and peace of mind'
                },
                {
                  icon: '📋',
                  title: 'Rental Properties',
                  description: 'Landlord compliance and tenant safety verification'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#0d1117',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #30363d',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    color: '#c9d1d9',
                    marginBottom: '0.75rem',
                    fontWeight: '700'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#161b22',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid #30363d'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#c9d1d9'
            }}>
              Ready to Book Your Basic Inspection?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#8b949e',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              Schedule online in minutes. Same-day appointments available.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://calendly.com/metroplexpros/basic-electrical-inspection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
              >
                Book Now - $150
              </a>
              <Link href="/services/electrical" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ background: '#0d1117', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <TrustSignals variant="compact" />
        </div>
      </section>
    </Layout>
  )
}
