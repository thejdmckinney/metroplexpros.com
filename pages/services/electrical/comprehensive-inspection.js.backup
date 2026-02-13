import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'

export default function ComprehensiveInspection() {
  return (
    <Layout
      title="Comprehensive Electrical Inspection - $200 | MetroPlex Pros Dallas"
      description="Detailed electrical inspection for larger homes up to 4,000 sq ft. Includes thermal imaging and detailed load analysis. Licensed electricians. Book online!"
      keywords="comprehensive electrical inspection, thermal imaging inspection, electrical load analysis, detailed inspection Dallas"
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
              MOST POPULAR CHOICE
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              fontWeight: '800',
              color: '#c9d1d9'
            }}>
              Comprehensive Electrical Inspection
            </h1>
            
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#00f0ff',
              marginBottom: '1rem'
            }}>
              $200
            </div>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#8b949e',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Our most popular package with thermal imaging and detailed analysis for homes up to 4,000 square feet. Perfect for larger properties or when you need deeper insights.
            </p>

            <a
              href="https://calendly.com/metroplexpros/comprehensive-electrical-inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-block',
                fontSize: '1.1rem',
                padding: '1rem 2.5rem'
              }}
            >
              Book Comprehensive Inspection
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
                  title: 'Everything in Basic, Plus:',
                  items: [
                    'Thermal imaging of electrical panels',
                    'Hot spot detection and analysis',
                    'Load capacity assessment',
                    'Future expansion planning'
                  ]
                },
                {
                  title: 'Advanced Testing',
                  items: [
                    'Detailed voltage drop testing',
                    'Circuit load analysis',
                    'Power quality measurement',
                    'Grounding resistance testing'
                  ]
                },
                {
                  title: 'Comprehensive Report',
                  items: [
                    'Detailed written findings',
                    'Thermal imaging photos included',
                    'Priority-ranked recommendations',
                    'Cost estimates for repairs'
                  ]
                },
                {
                  title: 'Service Details',
                  items: [
                    'Homes up to 4,000 sq ft',
                    '2-3 hour inspection time',
                    'Same-day scheduling available',
                    'Master electrician included'
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
                  icon: '🏡',
                  title: 'Larger Homes',
                  description: 'Comprehensive coverage for properties up to 4,000 sq ft'
                },
                {
                  icon: '🔬',
                  title: 'Pre-Purchase',
                  description: 'Detailed analysis before buying high-value properties'
                },
                {
                  icon: '🏢',
                  title: 'Older Homes',
                  description: 'Thermal imaging reveals hidden issues in aging systems'
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

      {/* Thermal Imaging Benefits */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#c9d1d9'
            }}>
              Why Thermal Imaging Matters
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#8b949e',
              textAlign: 'center',
              marginBottom: '3rem',
              lineHeight: '1.8'
            }}>
              Thermal imaging reveals problems invisible to the naked eye, preventing costly repairs and potential fire hazards.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                'Detects overheating circuits before failure',
                'Identifies loose connections',
                'Reveals hidden electrical issues',
                'Prevents potential fire hazards',
                'Validates proper installation',
                'Confirms load distribution'
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#161b22',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #30363d',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ color: '#00f0ff', fontSize: '1.5rem' }}>🔥</span>
                  <span style={{ color: '#c9d1d9' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#161b22', padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#0d1117',
            padding: '3rem',
            borderRadius: '16px',
            border: '1px solid #30363d'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#c9d1d9'
            }}>
              Ready to Book Your Comprehensive Inspection?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#8b949e',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              Get the detailed analysis you need with our most popular inspection package.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://calendly.com/metroplexpros/comprehensive-electrical-inspection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
              >
                Book Now - $200
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
