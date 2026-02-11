import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'

export default function Rewiring() {
  return (
    <Layout 
      title="House Rewiring Services Dallas | Whole Home Electrical Rewiring | MetroPlex Pros"
      description="Professional house rewiring services in Dallas-Fort Worth. Whole home rewiring, aluminum wiring replacement, knob & tube removal. Licensed electricians. Safe, code-compliant electrical upgrades. Call (682) 466-2130."
      keywords="house rewiring Dallas, whole home rewiring, electrical rewiring near me, aluminum wiring replacement, knob and tube wiring, old house rewiring, home electrical repair service, residential rewiring Dallas"
      canonicalUrl="https://www.metroplexpros.com/services/electrical/rewiring/"
      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-electrical-metroplex.png',
            width: 1200,
            height: 630,
            alt: 'Metroplex Pros - Professional Electrical Rewiring Services in Dallas',
            type: 'image/png'
          }
        ]
      }}
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical Rewiring Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://www.metroplexpros.com"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Texas"
            },
            "description": "Professional house rewiring services including whole home rewiring, aluminum wiring replacement, and knob and tube removal in Dallas-Fort Worth area."
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 25% 30%, #ff6b6b 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%)'}}></div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 107, 107, 0.05))', border: '1px solid #ff6b6b', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#ff6b6b', animation: 'pulse 2s infinite'}}>
              ⚠️ SAFETY CRITICAL SERVICE
            </div>
            
            <h1 className="hero-title" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.1'}}>
              <span style={{color: '#fff'}}>Professional</span>{' '}
              <span className="text-accent">House Rewiring</span><br />
              <span style={{color: '#fff'}}>Services in Dallas</span>
            </h1>
            
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', lineHeight: '1.6'}}>
              Is your home's wiring from the 1960s or earlier? Aluminum wiring? Knob and tube? 
              <strong style={{color: '#ff6b6b'}}> You could be sitting on a fire hazard.</strong>
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto 2rem', background: 'rgba(255, 107, 107, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255, 107, 107, 0.3)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6b6b'}}>55x</div>
                <div style={{color: '#c9d1d9', fontSize: '0.9rem'}}>Higher fire risk with aluminum wiring</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#ff6b6b'}}>100+</div>
                <div style={{color: '#c9d1d9', fontSize: '0.9rem'}}>Years old for knob & tube systems</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>$10K+</div>
                <div style={{color: '#c9d1d9', fontSize: '0.9rem'}}>Avg. fire damage cost</div>
              </div>
            </div>
            
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                📞 Call Now: (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Get Free Safety Inspection
              </Link>
            </div>
            
            <p style={{color: '#8b949e', textAlign: 'center'}}>
              ⚡ Licensed Electricians • 24/7 Emergency Service • FREE Estimates
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals - Fixed Container */}
      <section style={{background: '#0d1117', padding: '2rem 0'}}>
        <div className="container">
          <TrustSignals />
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section style={{backgroundColor: '#161b22', padding: '3rem 0', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
              💡 Free Electrical Calculators & Tools
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Plan your electrical project with our free calculators. Get instant estimates before you call.
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto'}}>
            {/* Panel Upgrade Calculator */}
            <Link href="/tools/panel-upgrade-calculator" style={{textDecoration: 'none'}}>
              <div style={{
                background: 'linear-gradient(135deg, #1c2128 0%, #161b22 100%)',
                border: '2px solid #30363d',
                borderRadius: '12px',
                padding: '2rem',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#00f0ff'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#30363d'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: '700'}}>
                  Panel Upgrade Calculator
                </h3>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Estimate the cost to upgrade your electrical panel during rewiring. Essential for older homes.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f0ff', fontSize: '0.9rem', fontWeight: '600'}}>
                  Get Instant Estimate →
                </div>
              </div>
            </Link>

            {/* Electrical Cost Estimator */}
            <Link href="/tools/electrical-cost-estimator" style={{textDecoration: 'none'}}>
              <div style={{
                background: 'linear-gradient(135deg, #1c2128 0%, #161b22 100%)',
                border: '2px solid #30363d',
                borderRadius: '12px',
                padding: '2rem',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#00f0ff'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#30363d'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: '700'}}>
                  Rewiring Cost Estimator
                </h3>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Calculate costs for whole house or partial rewiring projects with our comprehensive estimator.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f0ff', fontSize: '0.9rem', fontWeight: '600'}}>
                  Start Estimating →
                </div>
              </div>
            </Link>

            {/* Outlet & Switch Pricing */}
            <Link href="/tools/outlet-switch-pricing" style={{textDecoration: 'none'}}>
              <div style={{
                background: 'linear-gradient(135deg, #1c2128 0%, #161b22 100%)',
                border: '2px solid #30363d',
                borderRadius: '12px',
                padding: '2rem',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#00f0ff'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#30363d'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔌</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '0.75rem', fontWeight: '700'}}>
                  Outlet & Switch Pricing
                </h3>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem'}}>
                  Price new outlets and switches after rewiring. Includes GFCI, USB, and smart device options.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f0ff', fontSize: '0.9rem', fontWeight: '600'}}>
                  Calculate Pricing →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            {/* Before & After Section */}
            <div style={{marginBottom: '4rem'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#00f0ff', textAlign: 'center'}}>
                The Shocking Truth About Old Wiring
              </h2>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem'}}>
                {/* BEFORE - Old Wiring Dangers */}
                <div style={{background: 'linear-gradient(135deg, #2d0a0a 0%, #1a0606 100%)', border: '2px solid #ff6b6b', borderRadius: '16px', padding: '2rem', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '-15px', left: '20px', background: '#ff6b6b', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '800'}}>
                    ❌ OLD WIRING
                  </div>
                  <h3 style={{color: '#ff6b6b', marginTop: '1rem', marginBottom: '1.5rem', fontSize: '1.5rem'}}>Dangerous & Outdated</h3>
                  <ul style={{listStyle: 'none', padding: 0, color: '#ffb3b3'}}>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(255, 107, 107, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>🔥</span>
                      <span>Fire hazard from degraded insulation</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(255, 107, 107, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>⚠️</span>
                      <span>Aluminum wiring 55x more fire-prone</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(255, 107, 107, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>⚡</span>
                      <span>No grounding = shock risk</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(255, 107, 107, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>🚫</span>
                      <span>Can't handle modern electrical loads</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(255, 107, 107, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>💰</span>
                      <span>Higher insurance premiums (or denied)</span>
                    </li>
                    <li style={{padding: '0.75rem 0', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#ff6b6b', fontSize: '1.3rem'}}>📉</span>
                      <span>Lowers home value significantly</span>
                    </li>
                  </ul>
                </div>

                {/* AFTER - Modern Safe Wiring */}
                <div style={{background: 'linear-gradient(135deg, #0a2d1a 0%, #061a0f 100%)', border: '2px solid #50c878', borderRadius: '16px', padding: '2rem', position: 'relative'}}>
                  <div style={{position: 'absolute', top: '-15px', left: '20px', background: '#50c878', color: '#0d1117', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '800'}}>
                    ✅ MODERN WIRING
                  </div>
                  <h3 style={{color: '#50c878', marginTop: '1rem', marginBottom: '1.5rem', fontSize: '1.5rem'}}>Safe & Future-Proof</h3>
                  <ul style={{listStyle: 'none', padding: 0, color: '#b3ffcc'}}>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(80, 200, 120, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#50c878', fontSize: '1.3rem'}}>🛡️</span>
                      <span>Full AFCI/GFCI fire & shock protection</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(80, 200, 120, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#50c878', fontSize: '1.3rem'}}>⚡</span>
                      <span>Copper wiring with proper gauge</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(80, 200, 120, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#50c878', fontSize: '1.3rem'}}>✓</span>
                      <span>Fully grounded 3-prong outlets</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(80, 200, 120, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#50c878', fontSize: '1.3rem'}}>🔌</span>
                      <span>Handles EVs, smart homes, appliances</span>
                    </li>
                    <li style={{padding: '0.75rem 0', borderBottom: '1px solid rgba(80, 200, 120, 0.2)', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#50c878', fontSize: '1.3rem'}}>💰</span>
                      <span>Lower insurance rates</span>
                    </li>
                    <li style={{padding: '0.75rem 0', display: 'flex', alignItems: 'start', gap: '0.5rem'}}>
                      <span style={{color: '#50c878', fontSize: '1.3rem'}}>📈</span>
                      <span>Increases home value & saleability</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <style jsx>{`
                @media (max-width: 768px) {
                  div[style*="grid-template-columns: 1fr 1fr"] {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
            </div>

            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              When Your Home Definitely Needs Rewiring
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              MetroPlex Pros provides comprehensive house rewiring services throughout Dallas-Fort Worth. 
              Our licensed electricians specialize in replacing dangerous outdated wiring with modern, code-compliant systems.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '2rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                ⚠️ Signs Your Home Needs Rewiring
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Safety Hazards:</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Frequent circuit breaker trips</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Burning smell from outlets</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Discolored or warm outlets</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Sparks when plugging in devices</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Flickering or dimming lights</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Age & Condition:</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Home built before 1980</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Aluminum wiring present</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Knob and tube wiring</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Two-prong outlets (no ground)</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Visible wire damage or fraying</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff', marginTop: '3rem'}}>
              Our Rewiring Services
            </h3>

            <div style={{display: 'grid', gap: '2rem', marginBottom: '3rem'}}>
              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🏠</span> Whole House Rewiring
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Complete replacement of your home's electrical wiring system from the panel to every outlet, switch, 
                  and fixture. Ideal for older homes with outdated or unsafe wiring.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• New circuit breaker panel installation</li>
                  <li style={{padding: '0.5rem 0'}}>• Updated wiring throughout entire home</li>
                  <li style={{padding: '0.5rem 0'}}>• Modern grounded outlets (3-prong)</li>
                  <li style={{padding: '0.5rem 0'}}>• GFCI & AFCI protection where required</li>
                  <li style={{padding: '0.5rem 0'}}>• Full code compliance certification</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🔧</span> Partial Rewiring
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Targeted rewiring for specific rooms, circuits, or problem areas. Cost-effective solution when only 
                  portions of your electrical system need updating.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Kitchen & bathroom rewiring</li>
                  <li style={{padding: '0.5rem 0'}}>• Room additions & renovations</li>
                  <li style={{padding: '0.5rem 0'}}>• Garage & workshop circuits</li>
                  <li style={{padding: '0.5rem 0'}}>• Problem circuit replacement</li>
                  <li style={{padding: '0.5rem 0'}}>• Outlet & switch upgrades</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #1a1f2e 0%, #161b22 100%)', border: '2px solid #ff6b6b'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#ff6b6b', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>⚠️</span> Aluminum Wiring Replacement
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  <strong style={{color: '#ff6b6b'}}>SAFETY CRITICAL:</strong> Aluminum wiring (common in 1960s-1970s homes) is a serious fire hazard. 
                  It expands and contracts with temperature changes, loosening connections and creating dangerous hot spots.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Complete aluminum-to-copper rewiring</li>
                  <li style={{padding: '0.5rem 0'}}>• CPSC-approved repair methods</li>
                  <li style={{padding: '0.5rem 0'}}>• Pigtailing with copper connections</li>
                  <li style={{padding: '0.5rem 0'}}>• May reduce home insurance costs</li>
                  <li style={{padding: '0.5rem 0'}}>• Eliminates fire hazard</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #1a1f2e 0%, #161b22 100%)', border: '2px solid #ffa500'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#ffa500', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🕯️</span> Knob & Tube Wiring Removal
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  <strong style={{color: '#ffa500'}}>OUTDATED & UNSAFE:</strong> Knob and tube wiring (pre-1940s) lacks grounding, 
                  has degraded insulation, and can't handle modern electrical loads. Most insurance companies won't cover homes with this wiring.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Complete removal of old wiring</li>
                  <li style={{padding: '0.5rem 0'}}>• Modern grounded wiring installation</li>
                  <li style={{padding: '0.5rem 0'}}>• Safe for modern appliances</li>
                  <li style={{padding: '0.5rem 0'}}>• Restores insurability of home</li>
                  <li style={{padding: '0.5rem 0'}}>• Increases home value</li>
                </ul>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff', marginTop: '3rem'}}>
              Our Rewiring Process
            </h3>

            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  step: '1',
                  title: 'Inspection & Assessment',
                  description: 'Comprehensive evaluation of your current electrical system, identifying safety hazards, code violations, and areas requiring attention.'
                },
                {
                  step: '2',
                  title: 'Detailed Quote & Planning',
                  description: 'Transparent pricing with detailed breakdown of work needed. We create a rewiring plan that minimizes disruption to your home.'
                },
                {
                  step: '3',
                  title: 'Safe Rewiring Execution',
                  description: 'Licensed electricians carefully install new wiring, following all Texas electrical codes. We protect your walls, floors, and furnishings.'
                },
                {
                  step: '4',
                  title: 'Testing & Inspection',
                  description: 'Thorough testing of all circuits and obtaining necessary permits and inspections to ensure everything meets code requirements.'
                },
                {
                  step: '5',
                  title: 'Final Walkthrough',
                  description: 'We review all completed work with you, answer questions, and ensure your complete satisfaction with your new electrical system.'
                }
              ].map((item, index) => (
                <div key={index} style={{padding: '1.5rem', background: '#161b22', border: '1px solid #30363d', borderRadius: '8px', display: 'flex', gap: '1rem'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00f0ff, #0088cc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{item.title}</h4>
                    <p style={{color: '#c9d1d9', margin: 0, lineHeight: '1.6'}}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                💡 Benefits of Professional Rewiring
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>🛡️ Safety First</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Eliminate fire hazards, prevent electrical shocks, and protect your family from dangerous outdated wiring.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>⚡ Modern Capacity</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Support today's electrical demands - smart homes, EV chargers, multiple devices, and high-power appliances.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>💰 Lower Insurance</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Many insurance companies reduce premiums or won't insure homes with aluminum or knob and tube wiring.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>🏠 Home Value</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Modern electrical systems increase property value and make your home more attractive to buyers.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>📜 Code Compliance</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>All work meets current National Electrical Code (NEC) and local Dallas building requirements.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>💡 Energy Efficiency</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>New wiring reduces energy waste and allows for modern energy-efficient lighting and appliances.</p>
                </div>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Choose MetroPlex Pros for Rewiring?
            </h3>

            <div style={{display: 'grid', gap: '1rem', marginBottom: '3rem'}}>
              {[
                { icon: '✓', text: 'Licensed & insured electricians with 15+ years experience' },
                { icon: '✓', text: 'Detailed quotes with no hidden fees or surprises' },
                { icon: '✓', text: 'Minimal disruption to your daily routine' },
                { icon: '✓', text: 'Clean, professional job sites with debris removal' },
                { icon: '✓', text: 'All necessary permits and inspections handled' },
                { icon: '✓', text: 'Warranty on all labor and materials' },
                { icon: '✓', text: '24/7 emergency electrical services available' },
                { icon: '✓', text: 'Serving Dallas, Richardson, Garland, Irving & surrounding areas' }
              ].map((item, index) => (
                <div key={index} style={{padding: '1rem', background: '#161b22', border: '1px solid #30363d', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <span style={{color: '#00f0ff', fontSize: '1.5rem', fontWeight: 'bold'}}>{item.icon}</span>
                  <span style={{color: '#c9d1d9', fontSize: '1.05rem'}}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{background: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            {/* Customer Testimonials */}
            <div style={{marginBottom: '4rem'}}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#00f0ff', textAlign: 'center'}}>
                Real Stories from Dallas Homeowners
              </h2>
              
              <div style={{display: 'grid', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)', border: '1px solid #30363d', borderRadius: '12px', padding: '2rem', position: 'relative'}}>
                  <div style={{fontSize: '3rem', color: '#00f0ff', marginBottom: '1rem'}}>★★★★★</div>
                  <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic'}}>
                    "Our 1968 home had aluminum wiring that our insurance company flagged. MetroPlex Pros rewired our entire house in 5 days with minimal disruption. Jeremy and his team were professional, clean, and explained everything clearly. Our insurance premiums dropped by $800/year!"
                  </p>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #0088cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#0d1117'}}>
                      SM
                    </div>
                    <div>
                      <div style={{color: '#00f0ff', fontWeight: '600'}}>Sarah M.</div>
                      <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Richardson, TX • Whole House Rewiring</div>
                    </div>
                  </div>
                </div>

                <div style={{background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)', border: '1px solid #30363d', borderRadius: '12px', padding: '2rem', position: 'relative'}}>
                  <div style={{fontSize: '3rem', color: '#00f0ff', marginBottom: '1rem'}}>★★★★★</div>
                  <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic'}}>
                    "We bought a 1950s home with knob and tube wiring. No insurance company would cover us. MetroPlex Pros gave us a fair quote, completed the rewiring on schedule, and handled all the permits and inspections. Now we're fully insured and our home value increased!"
                  </p>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #0088cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#0d1117'}}>
                      JR
                    </div>
                    <div>
                      <div style={{color: '#00f0ff', fontWeight: '600'}}>James R.</div>
                      <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Dallas, TX • Knob & Tube Removal</div>
                    </div>
                  </div>
                </div>

                <div style={{background: 'linear-gradient(135deg, #161b22 0%, #1c2128 100%)', border: '1px solid #30363d', borderRadius: '12px', padding: '2rem', position: 'relative'}}>
                  <div style={{fontSize: '3rem', color: '#00f0ff', marginBottom: '1rem'}}>★★★★★</div>
                  <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', fontStyle: 'italic'}}>
                    "After flickering lights and warm outlets, we knew something was wrong. MetroPlex Pros found multiple fire hazards in our 40-year-old wiring. They rewired our kitchen, bathrooms, and bedrooms. Peace of mind knowing our family is safe!"
                  </p>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #0088cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#0d1117'}}>
                      LC
                    </div>
                    <div>
                      <div style={{color: '#00f0ff', fontWeight: '600'}}>Linda C.</div>
                      <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Garland, TX • Partial Rewiring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#00f0ff', textAlign: 'center'}}>
              Common Questions About Rewiring
            </h2>

            <div style={{display: 'grid', gap: '1.5rem'}}>
              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  How much does house rewiring cost in Dallas?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Rewiring costs vary based on home size, accessibility, and scope of work. Whole house rewiring typically 
                  ranges from $4,000-$12,000+. Partial rewiring or single rooms cost $1,500-$4,000. Aluminum wiring 
                  replacement averages $8,000-$15,000. We provide free detailed estimates after inspecting your home.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  How long does a whole house rewire take?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Most whole house rewiring projects take 3-7 days depending on home size and complexity. Partial rewiring 
                  can be completed in 1-3 days. We work efficiently to minimize disruption while maintaining safety and 
                  quality standards. You can typically remain in your home during the work.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Will rewiring damage my walls?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  We use fishing techniques to run new wiring with minimal wall damage whenever possible. Some access holes 
                  may be necessary, especially for older homes. We patch and repair any openings we create, though final 
                  painting is typically handled by the homeowner or their contractor. We always aim for minimal disruption.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Is aluminum wiring really dangerous?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Yes. The Consumer Product Safety Commission (CPSC) reports that homes with aluminum wiring are 55 times 
                  more likely to have fire hazard conditions. Aluminum expands and contracts more than copper, loosening 
                  connections over time and creating dangerous hot spots. We strongly recommend replacement for safety.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Do I need permits for rewiring work?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Yes, electrical rewiring requires permits and inspections in Dallas and surrounding areas. We handle all 
                  permit applications, schedule inspections, and ensure all work meets current electrical codes. This protects 
                  you legally and ensures safety compliance.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Can I rewire just one room or circuit?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Absolutely! Partial rewiring is a cost-effective option when only specific areas need updating. Common 
                  projects include kitchen rewiring for new appliances, bathroom upgrades for GFCI compliance, or adding 
                  circuits for home offices. We'll assess your needs and recommend the most practical solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #1a1f2e 100%)', textAlign: 'center'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Ready to Update Your Home's Electrical System?
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              Don't risk your family's safety with outdated or dangerous wiring. Get a free inspection and 
              detailed quote from our licensed electricians today.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.2rem', padding: '1.2rem 2.5rem'}}>
                📞 Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.2rem', padding: '1.2rem 2.5rem'}}>
                Schedule Free Inspection
              </Link>
            </div>
            <p style={{color: '#8b949e', fontSize: '1rem'}}>
              ⚡ 24/7 Emergency Service Available • Licensed & Insured • FREE Estimates
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" style={{background: '#161b22'}}>
        <div className="container">
          <h3 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#00f0ff'}}>
            Related Electrical Services
          </h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            <Link href="/services/electrical/panel-upgrades" className="card" style={{padding: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚡</div>
              <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>Panel Upgrades</h4>
              <p style={{color: '#8b949e', fontSize: '0.95rem'}}>Increase electrical capacity with modern panel upgrades</p>
            </Link>
            
            <Link href="/services/electrical/outlets" className="card" style={{padding: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔌</div>
              <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>Outlet Installation</h4>
              <p style={{color: '#8b949e', fontSize: '0.95rem'}}>Add or upgrade outlets throughout your home</p>
            </Link>
            
            <Link href="/services/electrical/code-compliance" className="card" style={{padding: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>📋</div>
              <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>Code Compliance</h4>
              <p style={{color: '#8b949e', fontSize: '0.95rem'}}>Ensure your electrical system meets all codes</p>
            </Link>
            
            <Link href="/services/electrical" className="card" style={{padding: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease', cursor: 'pointer'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🏠</div>
              <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>All Electrical Services</h4>
              <p style={{color: '#8b949e', fontSize: '0.95rem'}}>View our complete electrical service offerings</p>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
