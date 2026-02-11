import Layout from '../../components/Layout'
import Link from 'next/link'
import PanelUpgradeCalculator from '../../components/PanelUpgradeCalculator'
import TrustSignals from '../../components/TrustSignals'

export default function PanelUpgradeCalculatorPage() {
  return (
    <Layout
      title="Electrical Panel Upgrade Cost Calculator | Free Estimate Tool"
      description="Calculate the cost of upgrading your electrical panel in Dallas-Fort Worth. Get instant estimates based on your home's age, size, and upgrade needs. Free tool from Metroplex Pros."
      keywords="electrical panel upgrade cost, panel upgrade calculator, electrical panel cost Dallas, breaker box upgrade estimate, electrical service upgrade cost, panel upgrade price"
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
              Free Tool • No Obligation
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
              Electrical Panel Upgrade Calculator
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#8b949e',
                lineHeight: '1.8',
                marginBottom: '2rem',
              }}
            >
              Get an instant cost estimate for upgrading your electrical panel. Used by hundreds of Dallas-Fort Worth homeowners.
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
                  $2,500+
                </div>
                <div style={{ color: '#8b949e', fontSize: '1rem' }}>
                  Typical Starting Cost
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
                  1-2 Days
                </div>
                <div style={{ color: '#8b949e', fontSize: '1rem' }}>
                  Average Installation Time
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
                  25-40 Years
                </div>
                <div style={{ color: '#8b949e', fontSize: '1rem' }}>
                  Panel Lifespan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <PanelUpgradeCalculator />
        </div>
      </section>

      {/* Why Upgrade Section */}
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
              Why Upgrade Your Electrical Panel?
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
              Modern homes demand more power than ever before. Here's why upgrading makes sense:
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
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Meet Modern Demands
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Support EV chargers, smart home devices, new appliances, and home additions without tripping breakers.
                </p>
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
                  Improve Safety
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Replace outdated panels with modern safety features like AFCI and GFCI protection to prevent electrical fires.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Increase Home Value
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  An upgraded electrical system is a major selling point and often required for home insurance.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Pass Inspections
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Meet current electrical codes required for remodels, additions, and home sales in Dallas-Fort Worth.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔋</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Prepare for the Future
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Ready your home for solar panels, battery backup systems, and other energy innovations.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Lower Insurance Costs
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Many insurance companies offer discounts for upgraded electrical systems with modern safety features.
                </p>
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

      {/* FAQs */}
      <section
        style={{
          backgroundColor: '#161b22',
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
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  How accurate is this calculator?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Our calculator provides estimates based on typical costs in the Dallas-Fort Worth area. Actual costs may vary based on specific site conditions, permit requirements, and material choices. Contact us for a detailed on-site quote.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  What's included in the estimate?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Estimates typically include the new panel, labor for installation, basic wiring modifications, permits, and inspection fees. Additional costs may apply for extensive rewiring, mast replacement, or utility company fees.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  How long does installation take?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Most panel upgrades take 1-2 days, including permit approval and inspection. Your power will be off for 4-8 hours during the actual installation. We coordinate with utility companies to minimize disruption.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  Do I need a permit?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Yes, electrical panel upgrades require permits in all Dallas-Fort Worth municipalities. We handle all permit applications and coordinate inspections as part of our service.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0d1117',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                }}
              >
                <h3 style={{ color: '#c9d1d9', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  What size panel do I need?
                </h3>
                <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                  Most modern homes need at least 200 amps. If you're adding an EV charger, pool, hot tub, or planning major renovations, consider upgrading to 400 amps for future flexibility.
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
            Ready to Upgrade Your Panel?
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
            Get a detailed quote from our licensed electricians
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
                backgroundColor: '#161b22',
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
