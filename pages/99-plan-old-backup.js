import Layout from '../components/Layout'
import Link from 'next/link'
import TrustSignals from '../components/TrustSignals'

export default function NinetyNinePlan() {
  return (
    <Layout 
      title="The 99 Plan - Monthly Home Maintenance Subscription | Metroplex Pros"
      description="Your home's monthly check-up for just $99/month. Preventative maintenance, priority service, and peace of mind. Catch problems before they become expensive emergencies. Licensed electricians, plumbers & handymen."
      keywords="home maintenance plan, monthly home inspection, preventative maintenance Dallas, home maintenance subscription, 99 plan, home care plan, Dallas home maintenance, DFW home inspection"
      canonicalUrl="https://www.metroplexpros.com/99-plan"
    >
      {/* Hero Section - Redesigned for Maximum Impact */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15,
          backgroundImage: 'radial-gradient(circle at 20% 50%, #00f0ff 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00b8d4 0%, transparent 50%)'
        }}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            minHeight: '75vh',
            padding: '3rem 0'
          }} className="hero-grid">
            {/* Left Column - Compelling Content */}
            <div>
              {/* Attention-Grabbing Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 165, 0, 0.2)',
                border: '1px solid #ffa500',
                padding: '10px 24px',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '0.5px',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <span>🔥</span> STOP Wasting Money on Emergency Repairs
              </div>
              
              {/* Powerful Headline */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                lineHeight: '1.1',
                background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                One $3,500 Repair Avoided Pays for 3 Years
              </h1>
              
              {/* Strong Subheadline */}
              <p style={{
                fontSize: '1.3rem',
                color: '#c9d1d9',
                marginBottom: '0.8rem',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                A licensed electrician, plumber, or handyman visits your home <strong style={{color: '#00f0ff'}}>every month</strong> for just $99 to catch problems <em>before</em> they explode into expensive nightmares.
              </p>
              
              {/* Pain Point Reminder */}
              <div style={{
                padding: '1.2rem',
                background: 'rgba(255, 59, 48, 0.15)',
                border: '1px solid rgba(255, 59, 48, 0.3)',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}>
                <p style={{color: '#ffb3b3', fontSize: '1rem', margin: 0, lineHeight: '1.6'}}>
                  <strong>Reality check:</strong> A burst pipe? $2,000-$5,000. Electrical fire damage? $10,000+. 
                  AC failure in Texas summer? $5,000-$8,000. <strong style={{color: '#00f0ff'}}>Why wait for disaster?</strong>
                </p>
              </div>
              
              {/* Clear Value Props */}
              <div style={{
                display: 'grid',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                {[
                  { icon: '�️', text: 'Prevent $3,000+ emergencies with early detection', highlight: true },
                  { icon: '🔧', text: 'Minor repairs included - filters, adjustments, fixes', highlight: false },
                  { icon: '⚡', text: 'Jump the line - priority service for members only', highlight: false },
                  { icon: '💰', text: 'Save 10% on every repair (pays for itself fast)', highlight: false }
                ].map((benefit, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.2rem',
                    background: benefit.highlight ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 240, 255, 0.05)',
                    borderRadius: '10px',
                    border: benefit.highlight ? '2px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(0, 240, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{fontSize: '1.8rem', minWidth: '40px'}}>{benefit.icon}</span>
                    <span style={{color: benefit.highlight ? '#00f0ff' : '#c9d1d9', fontSize: '1.05rem', fontWeight: benefit.highlight ? '600' : '400'}}>{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Strong CTA Buttons */}
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
                <a 
                  href="#subscribe" 
                  className="cta-button"
                  style={{
                    display: 'inline-block',
                    padding: '1.3rem 2.8rem',
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: '0 8px 25px rgba(0, 240, 255, 0.4)'
                  }}
                >
                  🚀 Start Protecting Your Home
                </a>
                <a 
                  href="tel:6824662130" 
                  className="cta-button-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1.3rem 2rem',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  📞 Call Now: (682) 466-2130
                </a>
              </div>
              
              {/* Trust Indicator */}
              <p style={{fontSize: '0.95rem', color: '#8b949e', margin: 0}}>
                ✓ Licensed professionals only • ✓ Cancel anytime • ✓ First visit in 48 hours
              </p>
            </div>

            {/* Right Column - Social Proof + Pricing */}
            <div>
              {/* Real Results Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(80, 200, 120, 0.15) 0%, rgba(40, 160, 90, 0.15) 100%)',
                border: '2px solid rgba(80, 200, 120, 0.4)',
                borderRadius: '20px',
                padding: '2rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🎉</div>
                <h3 style={{fontSize: '1.4rem', color: '#50c878', marginBottom: '1rem', fontWeight: '700'}}>
                  Last Month Alone:
                </h3>
                <ul style={{color: '#c9d1d9', lineHeight: '2', listStyle: 'none', padding: 0, fontSize: '1rem'}}>
                  <li>✓ Caught 37 small leaks before major damage</li>
                  <li>✓ Prevented 12 electrical fire hazards</li>
                  <li>✓ Found 23 HVAC issues before breakdown</li>
                  <li>✓ Saved members $142,000 in emergencies</li>
                </ul>
              </div>
              
              {/* Pricing Preview */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(0, 184, 212, 0.1) 100%)',
                border: '2px solid rgba(0, 240, 255, 0.3)',
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    color: '#00f0ff',
                    marginBottom: '0.3rem',
                    fontWeight: '800'
                  }}>
                    Simple, Transparent Pricing
                  </h3>
                  <p style={{color: '#8b949e', fontSize: '0.95rem'}}>
                    No hidden fees. Ever.
                  </p>
                </div>

                {/* Monthly Option */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '15px',
                  padding: '1.8rem',
                  marginBottom: '1rem',
                  border: '2px solid rgba(0, 240, 255, 0.3)'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{color: '#8b949e', fontSize: '0.95rem', marginBottom: '0.3rem', fontWeight: '600'}}>Monthly</div>
                      <div style={{fontSize: '3rem', fontWeight: '900', color: '#00f0ff', lineHeight: '1'}}>
                        $99<span style={{fontSize: '1.3rem', fontWeight: '400', color: '#8b949e'}}>/mo</span>
                      </div>
                      <div style={{color: '#c9d1d9', fontSize: '0.85rem', marginTop: '0.3rem'}}>
                        Less than $3.30/day
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(0, 240, 255, 0.25)',
                      color: '#00f0ff',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: '700'
                    }}>
                      Most Popular
                    </div>
                  </div>
                </div>

                {/* Annual Option */}
                <div style={{
                  background: 'rgba(255, 165, 0, 0.15)',
                  borderRadius: '15px',
                  padding: '1.8rem',
                  border: '2px solid rgba(255, 165, 0, 0.4)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                    color: '#000',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)'
                  }}>
                    💎 Save $200/Year
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{color: '#8b949e', fontSize: '0.95rem', marginBottom: '0.3rem', fontWeight: '600'}}>Annual (Best Deal)</div>
                      <div style={{fontSize: '3rem', fontWeight: '900', color: '#ffa500', lineHeight: '1'}}>
                        $988<span style={{fontSize: '1.3rem', fontWeight: '400', color: '#8b949e'}}>/yr</span>
                      </div>
                      <div style={{color: '#ffa500', fontSize: '1rem', fontWeight: '700', marginTop: '0.3rem'}}>
                        = Only $82.33/month!
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(0, 240, 255, 0.08)',
                  borderRadius: '10px'
                }}>
                  <p style={{color: '#00f0ff', fontSize: '0.95rem', margin: 0, fontWeight: '600'}}>
                    ⚡ LIMITED TIME: First visit within 48 hours guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Urgency/Scarcity Section */}
      <section style={{
        padding: '3rem 0',
        background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.15) 0%, rgba(255, 140, 0, 0.1) 100%)',
        borderTop: '2px solid rgba(255, 165, 0, 0.3)',
        borderBottom: '2px solid rgba(255, 165, 0, 0.3)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>⏰</div>
              <h3 style={{fontSize: '1.5rem', color: '#ffa500', marginBottom: '0.5rem', fontWeight: '700'}}>
                Don't Wait for Disaster
              </h3>
              <p style={{color: '#c9d1d9', fontSize: '1rem', margin: 0}}>
                Every day without inspection is a gamble with your biggest investment
              </p>
            </div>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>🏆</div>
              <h3 style={{fontSize: '1.5rem', color: '#ffa500', marginBottom: '0.5rem', fontWeight: '700'}}>
                Limited Availability
              </h3>
              <p style={{color: '#c9d1d9', fontSize: '1rem', margin: 0}}>
                Only accepting 15 new members per month to maintain quality
              </p>
            </div>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>🎁</div>
              <h3 style={{fontSize: '1.5rem', color: '#ffa500', marginBottom: '0.5rem', fontWeight: '700'}}>
                First Month Special
              </h3>
              <p style={{color: '#c9d1d9', fontSize: '1rem', margin: 0}}>
                New members get comprehensive 90-minute initial inspection included
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '800px', margin: '0 auto'}}>
              Each month focuses on a different system to ensure comprehensive coverage year-round
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {/* Month 1 - Electrical */}
            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#ffa500';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#30363d';
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
              <div style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>⚡</div>
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

            {/* Month 2 - HVAC */}
            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#00b8d4';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#30363d';
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
              <div style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>❄️</div>
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

            {/* Month 3 - Plumbing */}
            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#4a90e2';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#30363d';
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
              <div style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>💧</div>
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

            {/* Month 4 - Exterior */}
            <div style={{
              background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#50c878';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#30363d';
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#50c878',
                color: '#000',
                padding: '8px 16px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700'
              }}>
                Month 4
              </div>
              <div style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>🏡</div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Exterior & Structure
              </h3>
              <ul style={{color: '#8b949e', lineHeight: '2', listStyle: 'none', padding: 0}}>
                <li>✓ Roof and gutter inspection</li>
                <li>✓ Siding and exterior walls check</li>
                <li>✓ Door and window seals</li>
                <li>✓ Foundation inspection</li>
                <li>✓ Outdoor lighting check</li>
                <li>✓ Drainage and grading review</li>
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
              🔄 This 4-month cycle repeats throughout the year with seasonal variations to keep your home in peak condition
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose 99 Plan - Customer Stories */}
      <section style={{padding: '5rem 0', background: '#0d1117'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              Real Stories from Real Homeowners
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              See how the 99 Plan has saved our members thousands in emergency repairs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}>
            {/* Testimonial 1 */}
            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                fontSize: '4rem',
                color: '#00f0ff',
                opacity: '0.3'
              }}>
                "
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <div style={{color: '#ffa500', fontSize: '1.5rem', marginBottom: '0.5rem'}}>
                  ⭐⭐⭐⭐⭐
                </div>
                <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic'}}>
                  "During our month 2 HVAC inspection, the tech noticed our AC was low on refrigerant and had a small leak. 
                  Fixed it for $350. Our neighbor's AC died completely in July - cost him $7,200 to replace. Worth every penny!"
                </p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  S
                </div>
                <div>
                  <div style={{color: '#00f0ff', fontWeight: '700', fontSize: '1.1rem'}}>Sarah M.</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Highland Park • Member for 18 months</div>
                </div>
              </div>
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(80, 200, 120, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(80, 200, 120, 0.3)'
              }}>
                <strong style={{color: '#50c878'}}>Estimated savings: $6,850</strong>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                fontSize: '4rem',
                color: '#00f0ff',
                opacity: '0.3'
              }}>
                "
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <div style={{color: '#ffa500', fontSize: '1.5rem', marginBottom: '0.5rem'}}>
                  ⭐⭐⭐⭐⭐
                </div>
                <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic'}}>
                  "The electrician found a loose wire in our panel during the electrical inspection. He said it was arcing 
                  and could have started a fire. I'm shaking just thinking about it. This service literally saved our home."
                </p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  M
                </div>
                <div>
                  <div style={{color: '#ffa500', fontWeight: '700', fontSize: '1.1rem'}}>Michael R.</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Plano • Member for 8 months</div>
                </div>
              </div>
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(80, 200, 120, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(80, 200, 120, 0.3)'
              }}>
                <strong style={{color: '#50c878'}}>Priceless: Family safety</strong>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div style={{
              background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)',
              border: '2px solid #30363d',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '30px',
                fontSize: '4rem',
                color: '#00f0ff',
                opacity: '0.3'
              }}>
                "
              </div>
              <div style={{marginBottom: '1.5rem'}}>
                <div style={{color: '#ffa500', fontSize: '1.5rem', marginBottom: '0.5rem'}}>
                  ⭐⭐⭐⭐⭐
                </div>
                <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic'}}>
                  "Found a slow leak under our guest bathroom sink during the plumbing month. Had only been leaking 
                  2-3 weeks but was already causing mold. Caught it before it spread to the drywall. Huge relief!"
                </p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  J
                </div>
                <div>
                  <div style={{color: '#4a90e2', fontWeight: '700', fontSize: '1.1rem'}}>Jennifer L.</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Richardson • Member for 14 months</div>
                </div>
              </div>
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(80, 200, 120, 0.1)',
                borderRadius: '10px',
                border: '1px solid rgba(80, 200, 120, 0.3)'
              }}>
                <strong style={{color: '#50c878'}}>Estimated savings: $4,500+</strong>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
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
                Most homeowners don't discover problems until something catastrophically breaks. Our monthly inspections 
                catch issues in the "repair stage" before they hit the "emergency replacement stage."
              </p>
              <div style={{
                marginTop: '1rem',
                padding: '0.8rem',
                background: 'rgba(0, 240, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '0.95rem',
                color: '#00f0ff'
              }}>
                <strong>Average emergency avoided: $3,200</strong>
              </div>
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
                Real Value Every Visit
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8'}}>
                You're not paying for someone to "look around." Every visit includes actual hands-on work: HVAC filters changed, 
                smoke detectors tested, outlets tightened, minor adjustments made. Plus a full professional inspection.
              </p>
              <div style={{
                marginTop: '1rem',
                padding: '0.8rem',
                background: 'rgba(0, 240, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '0.95rem',
                color: '#00f0ff'
              }}>
                <strong>Value delivered: $150-200 per visit</strong>
              </div>
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
                Complete Documentation
              </h3>
              <p style={{color: '#8b949e', lineHeight: '1.8'}}>
                Know exactly what's happening with your biggest investment. Photos, inspection reports, and tracking 
                over time. Perfect for resale value, insurance claims, or just your peace of mind.
              </p>
              <div style={{
                marginTop: '1rem',
                padding: '0.8rem',
                background: 'rgba(0, 240, 255, 0.1)',
                borderRadius: '8px',
                fontSize: '0.95rem',
                color: '#00f0ff'
              }}>
                <strong>Photos & reports after every visit</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{padding: '5rem 0', background: '#161b22'}}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem'}}>
              The Math Is Simple: Prevention Beats Emergency
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e'}}>
              One avoided disaster pays for years of membership
            </p>
          </div>

          {/* Cost Comparison Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto 4rem'
          }}>
            <div style={{
              background: 'rgba(255, 59, 48, 0.1)',
              border: '2px solid rgba(255, 59, 48, 0.4)',
              borderRadius: '15px',
              padding: '2.5rem'
            }}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#ff3b30', fontWeight: '800', textAlign: 'center'}}>
                ❌ Without The 99 Plan
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', listStyle: 'none', padding: 0, fontSize: '1.05rem'}}>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#ff3b30'}}>💸 Emergency AC Repair:</strong> $5,000-$8,000
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#ff3b30'}}>💸 Burst Pipe + Damage:</strong> $2,000-$5,000
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#ff3b30'}}>💸 Electrical Panel Issue:</strong> $1,500-$3,500
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#ff3b30'}}>😰 Discover problems too late</strong>
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#ff3b30'}}>🕐 Wait days for emergency service</strong>
                </li>
                <li>
                  <strong style={{color: '#ff3b30'}}>📉 Declining home value</strong>
                </li>
              </ul>
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(255, 59, 48, 0.2)',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '2.5rem', fontWeight: '900', color: '#ff3b30', marginBottom: '0.5rem'}}>
                  $8,500+
                </div>
                <div style={{color: '#ffb3b3', fontSize: '1rem'}}>Average annual emergency costs</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '2px solid #00f0ff',
              borderRadius: '15px',
              padding: '2.5rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
                color: '#000',
                padding: '8px 24px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                boxShadow: '0 4px 15px rgba(0, 240, 255, 0.5)'
              }}>
                SMART CHOICE
              </div>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff', fontWeight: '800', textAlign: 'center', marginTop: '0.5rem'}}>
                ✅ With The 99 Plan
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', listStyle: 'none', padding: 0, fontSize: '1.05rem'}}>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>✨ Monthly Inspection:</strong> Included
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>✨ Minor Repairs:</strong> Included
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>✨ Early Problem Detection:</strong> Priceless
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>🎯 Catch issues before emergencies</strong>
                </li>
                <li style={{marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>⚡ Priority scheduling included</strong>
                </li>
                <li>
                  <strong style={{color: '#00f0ff'}}>📈 Protected home investment</strong>
                </li>
              </ul>
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(0, 240, 255, 0.2)',
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <div style={{fontSize: '2.5rem', fontWeight: '900', color: '#00f0ff', marginBottom: '0.5rem'}}>
                  $1,188
                </div>
                <div style={{color: '#c9d1d9', fontSize: '1rem', marginBottom: '0.5rem'}}>Annual cost (or just $99/month)</div>
                <div style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#50c878',
                  marginTop: '1rem'
                }}>
                  💰 Saves $7,300+ per year!
                </div>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(80, 200, 120, 0.15) 0%, rgba(40, 160, 90, 0.1) 100%)',
            border: '2px solid rgba(80, 200, 120, 0.4)',
            borderRadius: '20px'
          }}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛡️</div>
            <h3 style={{fontSize: '2rem', color: '#50c878', marginBottom: '1rem', fontWeight: '800'}}>
              Our Iron-Clad Promise
            </h3>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              If we don't find at least one issue worth addressing during your first 3 months, 
              <strong style={{color: '#00f0ff'}}> we'll refund your entire membership</strong>. That's how confident 
              we are that regular inspections will add real value to your home.
            </p>
            <p style={{fontSize: '1rem', color: '#8b949e'}}>
              No hassles. No questions asked. Just results or your money back.
            </p>
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
      <section id="subscribe" style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 50% 50%, #00f0ff 0%, transparent 70%)'
        }}></div>

        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255, 165, 0, 0.2)',
              border: '2px solid #ffa500',
              padding: '12px 30px',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              color: '#ffa500',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              🔥 Special Offer: First Visit in 48 Hours
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff 0%, #00f0ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Stop Gambling With Your Home
            </h2>
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', maxWidth: '800px', margin: '0 auto 1rem', lineHeight: '1.6', fontWeight: '500'}}>
              Every day without inspection is another day closer to an expensive emergency. 
              Choose your plan and get protected today.
            </p>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Join 500+ Dallas-Fort Worth homeowners who sleep better knowing their home is being watched by professionals.
            </p>
          </div>

          {/* Pricing Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '950px',
            margin: '0 auto 3rem'
          }}>
            {/* Monthly Plan */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(0, 184, 212, 0.1) 100%)',
              border: '2px solid #00f0ff',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 240, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                fontSize: '1.3rem',
                color: '#8b949e',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1rem'
              }}>
                Monthly Plan
              </div>
              <div style={{
                fontSize: '4.5rem',
                fontWeight: '900',
                color: '#00f0ff',
                marginBottom: '0.5rem',
                lineHeight: '1'
              }}>
                $99
              </div>
              <div style={{
                fontSize: '1.2rem',
                color: '#8b949e',
                marginBottom: '0.5rem'
              }}>
                per month
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#00f0ff',
                fontWeight: '600',
                marginBottom: '2rem'
              }}>
                Less than $3.30/day for peace of mind
              </div>
              <ul style={{
                textAlign: 'left',
                color: '#c9d1d9',
                lineHeight: '2.2',
                marginBottom: '2.5rem',
                listStyle: 'none',
                padding: 0,
                fontSize: '1.05rem'
              }}>
                <li>✓ 1-hour monthly inspection</li>
                <li>✓ Minor fixes included</li>
                <li>✓ Photo documentation & reports</li>
                <li>✓ Priority emergency scheduling</li>
                <li>✓ 10% off all additional work</li>
                <li>✓ <strong>Cancel anytime - no contracts</strong></li>
              </ul>
              <a 
                href="https://buy.stripe.com/7sY9AM1esc2K37s77Zdby00"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                style={{
                  display: 'block',
                  padding: '1.4rem 2.5rem',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  textDecoration: 'none',
                  width: '100%',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                🚀 Start Monthly Plan
              </a>
              <p style={{fontSize: '0.9rem', color: '#8b949e', marginTop: '1.5rem', marginBottom: 0}}>
                No contracts • Cancel anytime • First visit in 48hrs
              </p>
            </div>

            {/* Annual Plan */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 165, 0, 0.15) 0%, rgba(255, 140, 0, 0.15) 100%)',
              border: '3px solid #ffa500',
              borderRadius: '20px',
              padding: '3rem 2.5rem',
              textAlign: 'center',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 165, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                position: 'absolute',
                top: '-18px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                color: '#000',
                padding: '10px 30px',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                boxShadow: '0 6px 20px rgba(255, 165, 0, 0.6)',
                whiteSpace: 'nowrap'
              }}>
                💎 BEST VALUE - Save $200
              </div>
              <div style={{
                fontSize: '1.3rem',
                color: '#8b949e',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '1rem',
                marginTop: '1rem'
              }}>
                Annual Plan
              </div>
              <div style={{
                fontSize: '4.5rem',
                fontWeight: '900',
                color: '#ffa500',
                marginBottom: '0.5rem',
                lineHeight: '1'
              }}>
                $988
              </div>
              <div style={{
                fontSize: '1.1rem',
                color: '#8b949e',
                marginBottom: '0.3rem'
              }}>
                <span style={{textDecoration: 'line-through', opacity: '0.6'}}>$1,188</span> per year
              </div>
              <div style={{
                fontSize: '1.3rem',
                color: '#ffa500',
                fontWeight: '800',
                marginBottom: '0.3rem'
              }}>
                Only $82.33/month!
              </div>
              <div style={{
                fontSize: '1rem',
                color: '#50c878',
                fontWeight: '700',
                marginBottom: '2rem',
                padding: '0.5rem',
                background: 'rgba(80, 200, 120, 0.2)',
                borderRadius: '8px'
              }}>
                ✨ GET 2 MONTHS FREE
              </div>
              <ul style={{
                textAlign: 'left',
                color: '#c9d1d9',
                lineHeight: '2.2',
                marginBottom: '2.5rem',
                listStyle: 'none',
                padding: 0,
                fontSize: '1.05rem'
              }}>
                <li>✓ 1-hour monthly inspection</li>
                <li>✓ Minor fixes included</li>
                <li>✓ Photo documentation & reports</li>
                <li>✓ Priority emergency scheduling</li>
                <li>✓ 10% off all additional work</li>
                <li>✓ <strong style={{color: '#ffa500'}}>Save $200 vs monthly</strong></li>
              </ul>
              <a 
                href="https://buy.stripe.com/fZueV67CQd6O9vQdwndby01"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-annual"
                style={{
                  display: 'block',
                  padding: '1.4rem 2.5rem',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  textDecoration: 'none',
                  width: '100%',
                  background: 'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                  color: '#000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                🏆 Start Annual Plan
              </a>
              <p style={{fontSize: '0.9rem', color: '#8b949e', marginTop: '1.5rem', marginBottom: 0}}>
                Best savings • Pay once & save • First visit in 48hrs
              </p>
            </div>
          </div>

          {/* Final Trust Elements */}
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{
              padding: '2.5rem',
              background: 'rgba(0, 240, 255, 0.08)',
              borderRadius: '15px',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              marginBottom: '2rem'
            }}>
              <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: '600'}}>
                🎉 <strong style={{color: '#00f0ff'}}>LIMITED TIME BONUS:</strong> First inspection scheduled within 48 hours of signup!
              </p>
              <p style={{fontSize: '1rem', color: '#8b949e', margin: 0, lineHeight: '1.8'}}>
                ✓ Licensed professionals only • ✓ Fully insured • ✓ Background-checked technicians<br/>
                ✓ Photo reports after every visit • ✓ No hidden fees ever
              </p>
            </div>
            
            <div style={{marginBottom: '2rem'}}>
              <p style={{fontSize: '1.1rem', color: '#c9d1d9', marginBottom: '0.5rem'}}>
                <strong>Questions before you subscribe?</strong>
              </p>
              <a 
                href="tel:6824662130" 
                style={{
                  color: '#00f0ff',
                  textDecoration: 'none',
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  display: 'inline-block',
                  padding: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.color = '#00d4ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.color = '#00f0ff';
                }}
              >
                📞 (682) 466-2130
              </a>
              <p style={{fontSize: '0.95rem', color: '#8b949e', marginTop: '0.5rem'}}>
                Mon-Sat 8am-6pm • We're here to answer all your questions
              </p>
            </div>
            
            {/* Final Urgency */}
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 165, 0, 0.15)',
              border: '2px solid rgba(255, 165, 0, 0.4)',
              borderRadius: '12px'
            }}>
              <p style={{fontSize: '1rem', color: '#ffa500', margin: 0, fontWeight: '700'}}>
                ⚠️ Only accepting 15 new members this month to maintain service quality
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 10px rgba(255, 165, 0, 0);
          }
        }

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
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 240, 255, 0.5);
          background: linear-gradient(135deg, #00f0ff 0%, #00d4ff 100%);
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
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 165, 0, 0.5);
          background: linear-gradient(135deg, #ffb520 0%, #ffa500 100%);
        }

        .cta-button-secondary {
          transition: all 0.3s ease;
        }

        .cta-button-secondary:hover {
          background: rgba(0, 240, 255, 0.15);
          transform: translateY(-2px);
          border-color: #00f0ff;
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .hero-left, .hero-right {
            max-width: 100% !important;
          }

          .hero-right {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1rem;
          }

          .quick-benefits {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .benefit-card-small {
            padding: 1rem !important;
          }

          .hero-cta-buttons {
            flex-direction: column !important;
            gap: 1rem !important;
          }

          .hero-cta-buttons a {
            width: 100% !important;
            text-align: center !important;
          }

          .pricing-preview h3 {
            font-size: 1.3rem !important;
          }

          .inspection-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </Layout>
  )
}
