import Layout from '../components/Layout'
import Link from 'next/link'
import TrustSignals from '../components/TrustSignals'

export default function NinetyNinePlan() {
  return (
    <Layout 
      title="The 99 Plan - Monthly Home Maintenance Subscription | Metroplex Pros"
      description="Your home's monthly check-up for just $99/month. Preventative maintenance, priority service, and peace of mind. Catch problems before they become expensive emergencies. Licensed electricians, plumbers & handymen."
      keywords="home maintenance plan, monthly home inspection, preventative maintenance Dallas, home maintenance subscription, 99 plan, home care plan, Dallas home maintenance, DFW home inspection"
      canonicalUrl="https://www.metroplexpros.com/99-plan/"
    >
      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)'}}>
        <div className="container">
          <div className="hero-content text-center" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
              padding: '8px 24px',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              The 99 Plan
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Your Home's Monthly Check-Up
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#c9d1d9',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Just like you get your car serviced and your teeth cleaned, your home needs regular attention. 
              For less than a service call, catch problems early and keep your biggest investment protected.
            </p>
            <div style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '2px solid #00f0ff',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
              }}>
                <div>
                  <div style={{fontSize: '3rem', fontWeight: '800', color: '#00f0ff', marginBottom: '0.5rem'}}>
                    $99<span style={{fontSize: '1.5rem', fontWeight: '400', color: '#8b949e'}}>/month</span>
                  </div>
                  <p style={{color: '#8b949e', fontSize: '1rem', margin: 0}}>
                    Monthly plan
                  </p>
                </div>
                <div style={{color: '#8b949e', fontSize: '2rem'}}>or</div>
                <div>
                  <div style={{fontSize: '3rem', fontWeight: '800', color: '#ffa500', marginBottom: '0.5rem'}}>
                    $988<span style={{fontSize: '1.5rem', fontWeight: '400', color: '#8b949e'}}>/year</span>
                  </div>
                  <p style={{color: '#ffa500', fontSize: '1rem', margin: 0, fontWeight: '600'}}>
                    Save $200 annually!
                  </p>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a 
                href="#subscribe" 
                className="cta-button"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}
              >
                Subscribe Now
              </a>
              <a 
                href="tel:6824662130" 
                className="cta-button-secondary"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  background: 'transparent',
                  border: '2px solid #00f0ff',
                  color: '#00f0ff'
                }}
              >
                Questions? Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* What's Included Section */}
      <section style={{padding: '5rem 0', background: '#0d1117'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              What's Included Every Month
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Comprehensive home care delivered by licensed professionals
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔍</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                1-Hour Monthly Inspection
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.6'}}>
                Rotating focus each month through all major home systems. Every visit catches what you might miss.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔧</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Minor Fixes Included
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.6'}}>
                Small adjustments done on the spot: filters changed, outlets tightened, doors adjusted, and more.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📸</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Photo Documentation
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.6'}}>
                Visual record of your home's condition with photos and a simple report delivered after every visit.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Priority Scheduling
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.6'}}>
                Skip the line. 99 Plan members get priority booking for any repairs needed.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                10% Off Additional Services
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.6'}}>
                Save on all repairs and upgrades. Your membership pays for itself with major work.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✅</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Systemized Inspections
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.6'}}>
                Nothing gets missed. Our checklist approach ensures every system gets expert attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rotating Inspection Schedule */}
      <section style={{padding: '5rem 0', background: '#161b22'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              Your Rotating Inspection Schedule
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Each month focuses on a different system to ensure comprehensive coverage year-round
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#ffa500',
                color: '#000',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700'
              }}>
                Month 1
              </div>
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>⚡</div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Electrical System
              </h3>
              <ul style={{color: '#8b949e', lineHeight: '2', listStyle: 'none', padding: 0}}>
                <li>✓ Outlet and switch inspection</li>
                <li>✓ Electrical panel check</li>
                <li>✓ Smoke detector testing</li>
                <li>✓ Lighting system review</li>
                <li>✓ GFCI outlet testing</li>
                <li>✓ Cord and plug inspection</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#00b8d4',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700'
              }}>
                Month 2
              </div>
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>❄️</div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                HVAC & Air Quality
              </h3>
              <ul style={{color: '#8b949e', lineHeight: '2', listStyle: 'none', padding: 0}}>
                <li>✓ Filter replacement</li>
                <li>✓ Vent and duct inspection</li>
                <li>✓ Thermostat calibration</li>
                <li>✓ Seasonal system prep</li>
                <li>✓ Air quality assessment</li>
                <li>✓ Carbon monoxide detector check</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#4a90e2',
                color: '#fff',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700'
              }}>
                Month 3
              </div>
              <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>💧</div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Plumbing & Water
              </h3>
              <ul style={{color: '#8b949e', lineHeight: '2', listStyle: 'none', padding: 0}}>
                <li>✓ Fixture inspection (faucets, toilets)</li>
                <li>✓ Water heater check</li>
                <li>✓ Drain flow testing</li>
                <li>✓ Shut-off valve inspection</li>
                <li>✓ Leak detection</li>
                <li>✓ Water pressure testing</li>
              </ul>
            </div>
          </div>

          <div style={{
            marginTop: '3rem',
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(0, 240, 255, 0.05)',
            borderRadius: '15px',
            border: '1px solid rgba(0, 240, 255, 0.2)'
          }}>
            <p style={{fontSize: '1.1rem', color: '#c9d1d9', margin: 0}}>
              🔄 This cycle repeats quarterly with seasonal variations to keep your home in peak condition year-round
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose 99 Plan */}
      <section style={{padding: '5rem 0', background: '#0d1117'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              Why Homeowners Love The 99 Plan
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}>
                🛡️
              </div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
                Catch Problems Early
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8'}}>
                Most homeowners don't know what needs attention until something breaks. Our monthly inspections 
                catch small issues before they become expensive emergencies.
              </p>
            </div>

            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}>
                💡
              </div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
                Value Every Visit
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8'}}>
                You're not paying for "just checking in." Every visit includes actual work: filters changed, 
                minor adjustments made, and a detailed inspection of critical systems.
              </p>
            </div>

            <div>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}>
                📊
              </div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
                Complete Peace of Mind
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8'}}>
                Know exactly what's happening with your biggest investment. Photo documentation and simple 
                reports mean you always know your home's condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{padding: '5rem 0', background: '#161b22'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              Better Than Waiting for Problems
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e'}}>
              See how the 99 Plan saves you money and stress
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(255, 59, 48, 0.1)',
              border: '2px solid rgba(255, 59, 48, 0.3)',
              borderRadius: '15px',
              padding: '2rem'
            }}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ff3b30'}}>
                ❌ Without The 99 Plan
              </h3>
              <ul style={{color: '#8b949e', lineHeight: '2', listStyle: 'none', padding: 0}}>
                <li>💸 Emergency service calls: $150-400</li>
                <li>😰 Discover problems too late</li>
                <li>🕐 Wait days for availability</li>
                <li>❓ Never know what needs attention</li>
                <li>💰 Pay full price for all repairs</li>
                <li>📉 Declining home value</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '2px solid #00f0ff',
              borderRadius: '15px',
              padding: '2rem'
            }}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                ✅ With The 99 Plan
              </h3>
              <ul style={{color: '#8b949e', lineHeight: '2', listStyle: 'none', padding: 0}}>
                <li>✨ Predictable $99/month</li>
                <li>🎯 Catch issues before they're emergencies</li>
                <li>⚡ Priority scheduling included</li>
                <li>📋 Monthly professional inspections</li>
                <li>💰 10% off all additional work</li>
                <li>📈 Protected home investment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{padding: '5rem 0', background: '#0d1117'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>
                How long does each monthly visit take?
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8', margin: 0}}>
                Each visit is approximately 1 hour. This gives our licensed professionals enough time to thoroughly 
                inspect your home's systems, make minor adjustments, and document any findings.
              </p>
            </div>

            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Can I cancel anytime?
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8', margin: 0}}>
                Yes! There's no long-term contract. You can cancel your subscription at any time with no cancellation fees. 
                We're confident you'll love the peace of mind the 99 Plan provides.
              </p>
            </div>

            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>
                What if you find something that needs repair?
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8', margin: 0}}>
                We'll document it with photos and explain the issue clearly. Minor fixes are included in your monthly 
                visit. For larger repairs, you'll get priority scheduling and 10% off the work—plus you caught it early 
                before it became a costly emergency.
              </p>
            </div>

            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Who performs the inspections?
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8', margin: 0}}>
                All inspections are performed by our licensed electricians, plumbers, and handymen. Every technician 
                is fully licensed, insured, and background-checked. You get the same quality professionals you'd get 
                for any service call.
              </p>
            </div>

            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Can I schedule my monthly visit at a convenient time?
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8', margin: 0}}>
                Absolutely! We work around your schedule. As a 99 Plan member, you get priority scheduling, so we'll 
                find a time that works best for you each month.
              </p>
            </div>

            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '15px',
              padding: '2rem'
            }}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Is the 99 Plan available in my area?
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8', margin: 0}}>
                We serve the entire Dallas-Fort Worth metroplex, including Dallas, Plano, Frisco, McKinney, Allen, 
                Richardson, Garland, Irving, Highland Park, University Park, and surrounding areas. Call us at 
                (682) 466-2130 to confirm we service your neighborhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="subscribe" style={{padding: '5rem 0', background: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1rem'}}>
              Ready to Protect Your Home?
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6'}}>
              Join homeowners who care about their homes as much as their vehicles. 
              Choose the plan that works best for you.
            </p>
          </div>

          {/* Pricing Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto 3rem'
          }}>
            {/* Monthly Plan */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(0, 184, 212, 0.1) 100%)',
              border: '2px solid #00f0ff',
              borderRadius: '20px',
              padding: '3rem 2rem',
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 240, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: '1.2rem',
                color: '#8b949e',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1rem'
              }}>
                Monthly Plan
              </div>
              <div style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#00f0ff',
                marginBottom: '1rem',
                lineHeight: '1'
              }}>
                $99
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#8b949e',
                marginBottom: '2rem'
              }}>
                per month
              </div>
              <ul style={{
                textAlign: 'left',
                color: '#c9d1d9',
                lineHeight: '2',
                marginBottom: '2rem',
                listStyle: 'none',
                padding: 0
              }}>
                <li>✓ Monthly home inspection</li>
                <li>✓ Minor fixes included</li>
                <li>✓ Photo documentation</li>
                <li>✓ Priority scheduling</li>
                <li>✓ 10% off additional work</li>
                <li>✓ Cancel anytime</li>
              </ul>
              <a 
                href="https://buy.stripe.com/7sY9AM1esc2K37s77Zdby00"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                style={{
                  display: 'block',
                  padding: '1.2rem 2rem',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  width: '100%'
                }}
              >
                Subscribe Monthly
              </a>
              <p style={{fontSize: '0.85rem', color: '#8b949e', marginTop: '1rem', marginBottom: 0}}>
                No contracts • Cancel anytime
              </p>
            </div>

            {/* Annual Plan */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.15) 0%, rgba(255, 140, 0, 0.15) 100%)',
              border: '2px solid #ffa500',
              borderRadius: '20px',
              padding: '3rem 2rem',
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 165, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                color: '#000',
                padding: '8px 24px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.4)'
              }}>
                Save $200/year
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#8b949e',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1rem',
                marginTop: '0.5rem'
              }}>
                Annual Plan
              </div>
              <div style={{
                fontSize: '4rem',
                fontWeight: '800',
                color: '#ffa500',
                marginBottom: '0.5rem',
                lineHeight: '1'
              }}>
                $988
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#8b949e',
                marginBottom: '0.5rem'
              }}>
                <span style={{textDecoration: 'line-through'}}>$1,188</span> per year
              </div>
              <div style={{
                fontSize: '1.1rem',
                color: '#ffa500',
                fontWeight: '600',
                marginBottom: '2rem'
              }}>
                Only $82.33/month!
              </div>
              <ul style={{
                textAlign: 'left',
                color: '#c9d1d9',
                lineHeight: '2',
                marginBottom: '2rem',
                listStyle: 'none',
                padding: 0
              }}>
                <li>✓ Monthly home inspection</li>
                <li>✓ Minor fixes included</li>
                <li>✓ Photo documentation</li>
                <li>✓ Priority scheduling</li>
                <li>✓ 10% off additional work</li>
                <li>✓ <strong style={{color: '#ffa500'}}>2 months FREE</strong></li>
              </ul>
              <a 
                href="https://buy.stripe.com/fZueV67CQd6O9vQdwndby01"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-annual"
                style={{
                  display: 'block',
                  padding: '1.2rem 2rem',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  width: '100%',
                  background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                  color: '#000'
                }}
              >
                Subscribe Annually
              </a>
              <p style={{fontSize: '0.85rem', color: '#8b949e', marginTop: '1rem', marginBottom: 0}}>
                Best value • Pay upfront & save
              </p>
            </div>
          </div>

          <div style={{textAlign: 'center'}}>
            <p style={{fontSize: '1rem', color: '#c9d1d9', marginBottom: '1rem'}}>
              🎉 <strong>Limited Time:</strong> First inspection scheduled within 48 hours of signup!
            </p>
            <p style={{fontSize: '0.95rem', color: '#8b949e', marginBottom: 0}}>
              Questions? Call us at <a href="tel:6824662130" style={{color: '#00f0ff', textDecoration: 'none', fontWeight: '600'}}>(682) 466-2130</a>
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cta-button {
          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);
          color: #0a0e27;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          display: inline-block;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 240, 255, 0.3);
        }

        .cta-button-annual {
          background: linear-gradient(135deg, #ffa500 0%, #ff8c00 100%);
          color: #000;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          display: inline-block;
          border: none;
          cursor: pointer;
        }

        .cta-button-annual:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 165, 0, 0.4);
        }

        .cta-button-secondary {
          transition: all 0.3s ease;
        }

        .cta-button-secondary:hover {
          background: rgba(0, 240, 255, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </Layout>
  )
}
