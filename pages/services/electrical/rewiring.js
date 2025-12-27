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
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff'}}>
              LICENSED ELECTRICIANS
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">House Rewiring Services</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Safe, Modern Electrical Systems for Your Home
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Professional Home Rewiring Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Is your home's electrical wiring outdated, damaged, or unsafe? MetroPlex Pros provides comprehensive 
              house rewiring services throughout the Dallas-Fort Worth metroplex. Our licensed electricians specialize 
              in whole home rewiring, partial rewiring, and replacing dangerous old wiring systems with modern, 
              code-compliant electrical infrastructure.
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
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#00f0ff', textAlign: 'center'}}>
              Frequently Asked Questions
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
