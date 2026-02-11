import Layout from '../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../components/TrustSignals'

export default function ToolsIndex() {
  const tools = [
    {
      title: 'Electrical Panel Upgrade Calculator',
      description: 'Get an instant cost estimate for upgrading your electrical panel. Calculate costs based on your home size, age, and upgrade needs.',
      icon: '⚡',
      link: '/tools/panel-upgrade-calculator',
      available: true,
      benefits: ['Instant estimates', 'No obligation', 'Personalized results'],
    },
    {
      title: 'Outlet & Switch Pricing Calculator',
      description: 'Get instant pricing for outlet and switch replacements with automatic volume discounts. Save up to 30% on bulk orders.',
      icon: '🔌',
      link: '/tools/outlet-switch-pricing',
      available: true,
      benefits: ['Volume discounts', '8 device types', 'Instant pricing'],
    },
    {
      title: 'Electrical Project Cost Estimator',
      description: 'Estimate costs for lighting, circuits, appliances, safety upgrades, and smart home installations. Combine multiple projects for accurate quotes.',
      icon: '⚡',
      link: '/tools/electrical-cost-estimator',
      available: true,
      benefits: ['40+ project types', 'Combine projects', 'Urgent pricing'],
    },
    {
      title: 'HVAC Sizing Calculator',
      description: 'Determine the right size air conditioning or heating system for your home based on square footage and other factors.',
      icon: '❄️',
      link: '#',
      available: false,
      benefits: ['Coming soon', 'Size recommendations', 'Energy estimates'],
    },
    {
      title: 'Kitchen Remodel Cost Estimator',
      description: 'Plan your kitchen renovation budget with our detailed cost calculator. Get estimates for materials, labor, and timeline.',
      icon: '🏠',
      link: '#',
      available: false,
      benefits: ['Coming soon', 'Detailed breakdown', 'Material options'],
    },
    {
      title: 'Smart Home ROI Calculator',
      description: 'Calculate the return on investment for smart home upgrades including energy savings and increased home value.',
      icon: '🤖',
      link: '#',
      available: false,
      benefits: ['Coming soon', 'Energy savings', 'Home value impact'],
    },
  ]

  return (
    <Layout
      title="Free Home Improvement Tools & Calculators | Metroplex Pros"
      description="Free online tools and calculators for homeowners in Dallas-Fort Worth. Get instant estimates for electrical, plumbing, HVAC, and remodeling projects."
      keywords="home improvement calculator, electrical panel calculator, remodel estimator, Dallas home tools, cost calculator"
    >
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
          padding: '5rem 0 3rem',
          borderBottom: '1px solid #30363d',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Free Home Improvement Tools
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#8b949e',
                lineHeight: '1.8',
                marginBottom: '2rem',
              }}
            >
              Plan your projects with confidence using our free calculators and estimators
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#161b22',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  opacity: tool.available ? 1 : 0.7,
                }}
                onMouseEnter={(e) => {
                  if (tool.available) {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 240, 255, 0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {!tool.available && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(139, 148, 158, 0.2)',
                      color: '#8b949e',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      zIndex: 1,
                    }}
                  >
                    Coming Soon
                  </div>
                )}

                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{tool.icon}</div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      marginBottom: '1rem',
                      color: '#c9d1d9',
                      fontWeight: '700',
                    }}
                  >
                    {tool.title}
                  </h3>
                  <p
                    style={{
                      color: '#8b949e',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      minHeight: '4rem',
                    }}
                  >
                    {tool.description}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {tool.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        style={{
                          color: '#8b949e',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ color: '#00f0ff' }}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {tool.available ? (
                    <Link
                      href={tool.link}
                      style={{
                        display: 'inline-block',
                        width: '100%',
                        padding: '1rem',
                        background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
                        color: '#0d1117',
                        borderRadius: '8px',
                        fontWeight: '700',
                        textAlign: 'center',
                        textDecoration: 'none',
                        transition: 'transform 0.2s',
                      }}
                    >
                      Use Calculator →
                    </Link>
                  ) : (
                    <button
                      disabled
                      style={{
                        display: 'inline-block',
                        width: '100%',
                        padding: '1rem',
                        backgroundColor: '#30363d',
                        color: '#8b949e',
                        borderRadius: '8px',
                        fontWeight: '700',
                        textAlign: 'center',
                        border: 'none',
                        cursor: 'not-allowed',
                      }}
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ background: '#0d1117', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <TrustSignals variant="compact" />
        </div>
      </section>

      {/* Why Use Our Tools */}
      <section
        style={{
          backgroundColor: '#161b22',
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '3rem',
                fontWeight: '700',
                color: '#00f0ff',
                textAlign: 'center',
              }}
            >
              Why Use Our Tools?
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  💰
                </div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Save Money
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Get accurate estimates before starting your project to budget effectively
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  ⚡
                </div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Instant Results
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  No waiting - get your estimates and recommendations immediately
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  🎯
                </div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Expert Insights
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Tools built with years of professional experience in the DFW area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: '#0d1117',
          padding: '4rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '700',
              color: '#c9d1d9',
            }}
          >
            Need Professional Help?
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#8b949e',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}
          >
            Our expert team is ready to turn your estimates into reality
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: '#00f0ff',
              color: '#0d1117',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'transform 0.3s',
            }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  )
}
