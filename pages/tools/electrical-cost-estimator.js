import Layout from '../../components/Layout'
import Link from 'next/link'
import ElectricalCostEstimator from '../../components/ElectricalCostEstimator'
import TrustSignals from '../../components/TrustSignals'

export default function ElectricalCostEstimatorPage() {
  return (
    <Layout
      title="Electrical Project Cost Estimator | Free Dallas-Fort Worth Quote Tool"
      description="Calculate the cost of your electrical project in Dallas-Fort Worth. Get instant estimates for outlets, lighting, circuits, appliances, safety upgrades, and smart home installations."
      keywords="electrical cost calculator, electrician estimate Dallas, outlet installation cost, lighting installation price, circuit installation estimate, electrical project cost"
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
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                color: '#00f0ff',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
              }}
            >
              Free Tool • Instant Estimates
            </div>
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
              Electrical Project Cost Estimator
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#8b949e',
                lineHeight: '1.8',
                marginBottom: '2rem',
              }}
            >
              Select your electrical projects and get an instant cost estimate. From simple outlet installations to complete home rewiring.
            </p>

            {/* Quick Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginTop: '3rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#00f0ff',
                    marginBottom: '0.5rem',
                  }}
                >
                  50+
                </div>
                <div style={{ color: '#8b949e', fontSize: '1rem' }}>
                  Project Types
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#00f0ff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Licensed
                </div>
                <div style={{ color: '#8b949e', fontSize: '1rem' }}>
                  & Insured
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#00f0ff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Same Day
                </div>
                <div style={{ color: '#8b949e', fontSize: '1rem' }}>
                  Emergency Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <ElectricalCostEstimator />
        </div>
      </section>

      {/* Project Categories Overview */}
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
                marginBottom: '1rem',
                fontWeight: '700',
                color: '#00f0ff',
                textAlign: 'center',
              }}
            >
              What We Can Help With
            </h2>
            <p
              style={{
                color: '#8b949e',
                fontSize: '1.1rem',
                textAlign: 'center',
                marginBottom: '3rem',
                lineHeight: '1.8',
              }}
            >
              From simple fixes to major installations, we handle all your electrical needs
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔌</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Outlets & Switches
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Standard, GFCI, USB outlets, and smart switches for every room in your home.
                </p>
                <div style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
                  Starting at $100
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Lighting Solutions
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Recessed lighting, ceiling fans, chandeliers, outdoor and landscape lighting.
                </p>
                <div style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
                  Starting at $150
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Circuits & Wiring
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem' }}>
                  New circuits, dedicated lines, complete rewiring, and knob & tube removal.
                </p>
                <div style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
                  Starting at $300
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏠</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Appliances & Equipment
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem' }}>
                  EV chargers, generators, hot tubs, pools, and water heater installations.
                </p>
                <div style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
                  Starting at $800
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Safety & Upgrades
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Smoke detectors, surge protection, AFCI breakers, and code compliance.
                </p>
                <div style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
                  Starting at $100
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Smart Home
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Smart thermostats, doorbells, locks, cameras, and whole-home automation.
                </p>
                <div style={{ color: '#00f0ff', fontSize: '0.9rem' }}>
                  Starting at $150
                </div>
              </div>
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

      {/* Why Choose Us */}
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
              Why Choose Metroplex Pros?
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Licensed & Insured
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Fully licensed electricians with comprehensive insurance coverage
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Fast Response
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Same-day emergency service and 24/7 availability for urgent needs
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Quality Workmanship
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Expert craftsmanship with attention to detail on every project
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Warranty Protected
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  All work backed by our satisfaction guarantee and warranty
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Fair Pricing
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Transparent quotes with no hidden fees or surprise charges
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Local Experts
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Serving Dallas-Fort Worth with deep knowledge of local codes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        style={{
          backgroundColor: '#0d1117',
          padding: '4rem 0',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '3rem',
                fontWeight: '700',
                color: '#00f0ff',
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div
                style={{
                  backgroundColor: '#161b22',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  How accurate are these estimates?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Our estimates are based on typical project costs in the Dallas-Fort Worth area. Final pricing may vary based on specific site conditions, material choices, and complexity. We provide detailed on-site quotes before starting any work.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#161b22',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Can I combine multiple projects?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Absolutely! Select as many projects as you need. Bundling multiple projects together can often result in better overall pricing and scheduling efficiency.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#161b22',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Do you handle permits and inspections?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Yes! We handle all permit applications and coordinate required inspections with local authorities. All permit fees are included in our quotes.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#161b22',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  What's included in the price?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Our estimates include labor, materials, permits, and cleanup. We provide detailed breakdowns of all costs upfront with no hidden fees.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#161b22',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  How quickly can you start?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Standard projects typically begin within 1-2 weeks. We offer urgent service (2-3 days) and emergency same-day service for critical electrical issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: '#161b22',
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
            Ready to Start Your Project?
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
            Get a detailed quote from our licensed electricians today
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Schedule Consultation
            </Link>
            <Link
              href="/tools"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                backgroundColor: '#0d1117',
                color: '#00f0ff',
                border: '1px solid #00f0ff',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'transform 0.3s',
              }}
            >
              More Tools
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
