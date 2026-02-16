import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'
import { getServiceBySlug } from '../../../lib/sanityQueries'
import { PortableText } from '@portabletext/react'
import ReverseSiloLinks from '../../../components/ReverseSiloLinks'

export default function LuxuryInspection({ service }) {
  // Fallback to hardcoded values if Sanity data isn't available yet
  const seoTitle = service?.seo?.metaTitle || "Luxury Electrical Inspection - $225 | MetroPlex Pros Dallas"
  const seoDescription = service?.seo?.metaDescription || "Premium electrical inspection for luxury homes and estates. Includes thermal imaging, smart home systems, and priority service. Expert electricians. Book online!"
  const seoKeywords = service?.seo?.keywords?.join(', ') || "luxury electrical inspection, premium home inspection Dallas, smart home inspection, estate electrical assessment"
  const canonicalUrl = service?.seo?.canonicalUrl || "https://www.metroplexpros.com/services/electrical/luxury-inspection/"

  return (
    <Layout
      title={seoTitle}
      description={seoDescription}
      keywords={seoKeywords}
      canonicalUrl={canonicalUrl}
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
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(218, 165, 32, 0.1))',
              border: '1px solid #ffd700',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#ffd700',
              marginBottom: '1.5rem'
            }}>
              PREMIUM SERVICE
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              fontWeight: '800',
              color: '#c9d1d9'
            }}>
              {service?.heroHeadline || 'Luxury Electrical Inspection'}
            </h1>
            
            <div style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              $225
            </div>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#8b949e',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              {service?.heroSubheadline || 'Our premium service for luxury homes, estates, and properties with advanced smart home systems. Unlimited square footage with white-glove service.'}
            </p>

            <a
              href="https://calendly.com/metroplexpros/luxury-electrical-inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: 'inline-block',
                fontSize: '1.1rem',
                padding: '1rem 2.5rem',
                background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                color: '#000'
              }}
            >
              Book Luxury Inspection
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
                  title: 'Everything in Comprehensive, Plus:',
                  items: [
                    'Unlimited square footage coverage',
                    'Smart home system integration review',
                    'Generator and backup power assessment',
                    'Pool, spa, and outdoor electrical'
                  ]
                },
                {
                  title: 'Premium Features',
                  items: [
                    'Home automation system analysis',
                    'Electric vehicle charger inspection',
                    'Luxury lighting system review',
                    'Security system electrical assessment'
                  ]
                },
                {
                  title: 'White-Glove Service',
                  items: [
                    'Dedicated master electrician',
                    'Priority scheduling (24-48 hours)',
                    'Concierge-level communication',
                    'Follow-up consultation included'
                  ]
                },
                {
                  title: 'Executive Report',
                  items: [
                    'Comprehensive bound report',
                    'Thermal imaging analysis',
                    'Smart home optimization plan',
                    'Long-term maintenance schedule'
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
                    color: '#ffd700',
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
                        <span style={{ color: '#ffd700', fontSize: '1.2rem' }}>★</span>
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
                  icon: '🏰',
                  title: 'Luxury Estates',
                  description: 'Unlimited coverage for high-end properties of any size'
                },
                {
                  icon: '🏠',
                  title: 'Smart Homes',
                  description: 'Comprehensive review of automation and integration'
                },
                {
                  icon: '⚡',
                  title: 'Complex Systems',
                  description: 'Generators, pools, EVs, and advanced electrical setups'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#0d1117',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid #ffd700',
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

      {/* Premium Benefits */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#c9d1d9'
            }}>
              Premium Service Benefits
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#8b949e',
              textAlign: 'center',
              marginBottom: '3rem',
              lineHeight: '1.8'
            }}>
              Experience the difference of our white-glove electrical inspection service designed for discerning homeowners.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: 'Priority Access',
                  description: 'Schedule within 24-48 hours, not weeks'
                },
                {
                  title: 'Master Electrician',
                  description: 'Dedicated senior technician for your property'
                },
                {
                  title: 'Smart Home Expertise',
                  description: 'Advanced knowledge of luxury automation systems'
                },
                {
                  title: 'Detailed Documentation',
                  description: 'Professional bound report with photos and analysis'
                },
                {
                  title: 'Follow-Up Support',
                  description: 'Post-inspection consultation and planning included'
                },
                {
                  title: 'Concierge Service',
                  description: 'Direct communication with your inspection team'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#161b22',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid #30363d'
                  }}
                >
                  <h3 style={{
                    color: '#ffd700',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    fontWeight: '700'
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {benefit.description}
                  </p>
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
            border: '2px solid #ffd700'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#c9d1d9'
            }}>
              Ready for Premium Service?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#8b949e',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              Experience our white-glove electrical inspection service designed for luxury properties.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://calendly.com/metroplexpros/luxury-electrical-inspection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  fontSize: '1.1rem',
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  color: '#000'
                }}
              >
                Book Now - $225
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
      {/* Reverse Silo Links - SEO Internal Linking */}
      <ReverseSiloLinks 
        currentPage="/services/electrical/luxury-inspection"
        currentSilo="electrical"
        variant="full"
      />

    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const service = await getServiceBySlug('luxury-inspection')
    
    return {
      props: {
        service
      },
      revalidate: 60 // Regenerate page every 60 seconds
    }
  } catch (error) {
    console.error('Error fetching luxury inspection service:', error)
    return {
      props: {
        service: null
      },
      revalidate: 60
    }
  }
}
