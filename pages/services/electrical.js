import Layout from '../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../components/TrustSignals'

export default function ElectricalServices() {
  return (
    <Layout 
      title="Dallas Electrician Near Me | 24/7 Emergency Service | Licensed & Insured | MetroPlex Pros"
      description="Dallas Electrician Near Me | Licensed & Insured | 24/7 Emergency Electrical Service | Panel Upgrades, Rewiring, Lighting, Generators | Same-Day Service Available | Call (682) 466-2130 now!"
      keywords="electrician Dallas, electrician near me Dallas, electrical services DFW, home electrical repair service, electrical home repair, home electrical repair near me, panel upgrade, electrical wiring, lighting installation, generator installation, emergency electrician, emergency electrician near me"
      canonicalUrl="https://www.metroplexpros.com/services/electrical"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-electrical-metroplex.png',
            width: 1200,
            height: 630,
            alt: 'Metroplex Pros - Professional Home Services in Dallas',
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
            "serviceType": "Electrical Services",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electrical Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Panel Upgrades"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Wiring & Rewiring"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lighting Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Electrical"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Generator Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "EV Charger Installation"}}
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
              LICENSED & INSURED ELECTRICIANS
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Professional Electrical Services</span><br />
              for Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Panel Upgrades • Wiring • Lighting • Smart Home • Generators
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.9', color: '#8b949e'}}>
              MetroPlex Pros provides comprehensive home electrical repair service throughout the Dallas-Fort Worth area. Our licensed 
              electricians handle everything from simple outlet installations to complete electrical panel upgrades, ensuring 
              your home's electrical system is safe, efficient, and up to code. Whether you need electrical home repair near me 
              or scheduled installations, we're here to help 24/7.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Request Quote
              </Link>
            </div>
            <div style={{display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Licensed</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Master Electricians</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Emergency Service</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Guaranteed</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Quality Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals variant="compact" />

      {/* Hero Image */}
      <section style={{backgroundColor: '#0d1117', padding: '2rem 0'}}>
        <div className="container">
          <div style={{borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d', maxWidth: '1000px', margin: '0 auto'}}>
            <img 
              src="/og-image-electrical-metroplex.png" 
              alt="Professional Electrical Services in Dallas-Fort Worth" 
              style={{width: '100%', height: 'auto', display: 'block'}}
            />
          </div>
        </div>
      </section>

      {/* Our Electrical Services */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Our Electrical Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Complete electrical solutions for residential and commercial properties
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '⚡',
                title: 'Electrical Panel Upgrades',
                desc: 'Upgrade from 100-150 amp to 200 amp service. Essential for modern homes with increased electrical demands from HVAC, appliances, home offices, and EV charging.',
                features: ['100 to 200 amp upgrades', 'Circuit breaker replacement', 'Panel relocation', 'Subpanel installation']
              },
              {
                icon: '🔌',
                title: 'Outlets & Switches',
                desc: 'Installation, replacement, and upgrades for outlets and switches throughout your property. GFCI and AFCI protection for safety and code compliance.',
                features: ['GFCI outlet installation', 'USB charging outlets', 'Smart switches & dimmers', 'Dedicated appliance circuits']
              },
              {
                icon: '💡',
                title: 'Lighting Installation',
                desc: 'Interior and exterior lighting solutions including recessed lighting, chandeliers, landscape lighting, and security lighting.',
                features: ['Recessed lighting', 'Chandelier installation', 'Landscape lighting', 'Motion sensor lights']
              },
              {
                icon: '🏠',
                title: 'Smart Home Electrical',
                desc: 'Electrical infrastructure for smart home devices. Proper wiring for thermostats, doorbells, security systems, and whole-home automation.',
                features: ['C-wire installation', 'Smart switch wiring', 'Doorbell transformer upgrades', 'Home automation circuits']
              },
              {
                icon: '🔧',
                title: 'Wiring & Rewiring',
                desc: 'New construction wiring, home rewiring, aluminum wiring remediation, and code compliance upgrades for older homes.',
                features: ['Whole house rewiring', 'Aluminum wiring fixes', 'Knob and tube replacement', 'Code compliance upgrades']
              },
              {
                icon: '⚙️',
                title: 'Generator Installation',
                desc: 'Whole-home and portable generator installation. Keep your home powered during outages with properly installed backup power systems.',
                features: ['Whole-home generators', 'Transfer switches', 'Generator maintenance', 'Load calculation']
              },
              {
                icon: '🚗',
                title: 'EV Charger Installation',
                desc: 'Electric vehicle charging station installation. Level 2 chargers for faster, more efficient home charging of your EV.',
                features: ['Level 2 EV chargers', 'Dedicated 240V circuits', 'Tesla & universal chargers', 'Garage & outdoor installation']
              },
              {
                icon: '🏊',
                title: 'Pool & Spa Electrical',
                desc: 'Specialized electrical work for pools, hot tubs, and spas. Pumps, heaters, lighting, and automated control systems.',
                features: ['Pool pump circuits', 'Spa heater wiring', 'Pool lighting', 'Automation systems']
              },
              {
                icon: '🌳',
                title: 'Outdoor Electrical',
                desc: 'Exterior outlets, landscape lighting, security lighting, and electrical for outdoor living spaces.',
                features: ['GFCI outdoor outlets', 'Landscape lighting systems', 'Patio lighting & fans', 'Security lighting']
              },
              {
                icon: '🔥',
                title: 'Ceiling Fan Installation',
                desc: 'Professional ceiling fan installation and replacement. Proper support and wiring for safe, balanced operation.',
                features: ['New fan installation', 'Fan replacement', 'Ceiling box upgrades', 'Remote controls']
              },
              {
                icon: '🏢',
                title: 'Commercial Electrical',
                desc: 'Electrical services for offices, retail spaces, and small commercial properties. Code-compliant installations.',
                features: ['Commercial lighting', 'Office electrical', 'Retail spaces', 'Code compliance']
              },
              {
                icon: '🚨',
                title: 'Emergency Electrical',
                desc: '24/7 emergency electrical service for power outages, electrical hazards, sparking outlets, and urgent safety issues.',
                features: ['Power outage diagnosis', 'Electrical fire hazards', 'Sparking outlets/panels', 'Storm damage repair']
              }
            ].map((service, index) => (
              <div key={index} style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{service.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.5rem', marginBottom: '1rem'}}>{service.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1.5rem'}}>{service.desc}</p>
                <ul style={{color: '#8b949e', lineHeight: '2', fontSize: '0.95rem', listStyle: 'none', padding: 0}}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                      <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Electrical Services */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Choose MetroPlex Pros for Electrical Work?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '✅', title: 'Licensed & Insured', desc: 'All work performed by licensed master electricians with comprehensive liability insurance and workmanship guarantees.' },
              { icon: '📜', title: 'Code Compliant', desc: 'Every installation meets or exceeds National Electrical Code (NEC) and local building code requirements.' },
              { icon: '🛡️', title: 'Safety First', desc: 'We prioritize safety in every project. Proper grounding, GFCI/AFCI protection, and hazard identification.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Upfront estimates with no hidden fees. You know the cost before we start work.' },
              { icon: '⚡', title: 'Fast Response', desc: 'Quick scheduling for routine work and 24/7 availability for electrical emergencies.' },
              { icon: '🔧', title: 'Quality Materials', desc: 'We use professional-grade electrical components from trusted manufacturers for lasting reliability.' }
            ].map((item, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{item.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Electrical Issues */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Common Home Electrical Repair Issues We Fix
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Experienced home electrical repair service for all residential electrical problems
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { title: 'Circuit Breakers Tripping', desc: 'Frequent breaker trips indicate overloaded circuits, short circuits, or failing breakers. We diagnose and fix the root cause.' },
              { title: 'Flickering Lights', desc: 'Flickering can indicate loose connections, overloaded circuits, or voltage issues. We identify and resolve the problem.' },
              { title: 'Outlets Not Working', desc: 'Dead outlets may have tripped GFCI, loose wiring, or need replacement. We troubleshoot and repair.' },
              { title: 'Aluminum Wiring', desc: 'Homes with aluminum wiring need special attention. We provide COPALUM connections and copper pigtailing.' },
              { title: 'Outdated Panels', desc: 'Federal Pacific, Zinsco, and other obsolete panels are safety hazards. We replace with modern, safe panels.' },
              { title: 'Electrical Shocks', desc: 'Getting shocked by outlets or switches indicates dangerous wiring issues. We diagnose and repair immediately.' }
            ].map((issue, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>⚠️ {issue.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Electrical */}
      <section className="section" style={{backgroundColor: '#161b22', borderTop: '2px solid #00f0ff', borderBottom: '2px solid #00f0ff'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚨</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>24/7 Emergency Electrical Service</h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              Electrical emergencies can't wait. We provide round-the-clock emergency service for:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem'}}>
              {['Power outages', 'Sparking outlets', 'Burning smell', 'Electrical shocks', 'Storm damage', 'Panel problems'].map((item, index) => (
                <div key={index} style={{padding: '1rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#c9d1d9', fontSize: '1.05rem'}}>
                  {item}
                </div>
              ))}
            </div>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.4)'}}>
              Call Now: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: '#0d1117', textAlign: 'center'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#00f0ff', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Schedule Your Home Electrical Repair Service
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you need electrical home repair, a simple outlet installation, or a complete electrical panel upgrade, our licensed electricians 
              are ready to help. Looking for home electrical repair near me? Contact us today for a free estimate.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📞</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Call or Text</div>
                <Link href="tel:682-466-2130" style={{color: '#c9d1d9', fontSize: '1.3rem', textDecoration: 'none'}}>
                  (682) 466-2130
                </Link>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💻</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Online Quote</div>
                <Link href="/contact" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  Request Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking for SEO */}
      <section className="section" style={{backgroundColor: '#161b22', borderTop: '1px solid #30363d'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2rem'}}>
              Related Services
            </h2>
            <p style={{color: '#8b949e', fontSize: '1.1rem'}}>
              We also offer these complementary services for your home
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <Link href="/services/smart-home-installations" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🏠</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>Smart Home Installation</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  Smart thermostats, lighting automation, security systems, and whole-home integration.
                </p>
                <span style={{color: '#00f0ff', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
            
            <Link href="/services/plumbing" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔧</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>Plumbing Services</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  Water heaters, leak detection, drain cleaning, fixture installation, and emergency plumbing.
                </p>
                <span style={{color: '#00f0ff', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
            
            <Link href="/services/handyman" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🛠️</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>Handyman Services</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  Painting, drywall, carpentry, door/window installation, and general home repairs.
                </p>
                <span style={{color: '#00f0ff', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <h3 style={{color: '#00f0ff', fontSize: '1.5rem', marginBottom: '1.5rem'}}>
              Serving Dallas-Fort Worth Metroplex
            </h3>
            <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/dallas" style={{color: '#c9d1d9', textDecoration: 'none', padding: '0.5rem 1rem', backgroundColor: '#161b22', borderRadius: '6px', border: '1px solid #30363d'}}>
                Dallas Electrician
              </Link>
              <Link href="/plano" style={{color: '#c9d1d9', textDecoration: 'none', padding: '0.5rem 1rem', backgroundColor: '#161b22', borderRadius: '6px', border: '1px solid #30363d'}}>
                Plano Electrician
              </Link>
              <Link href="/frisco" style={{color: '#c9d1d9', textDecoration: 'none', padding: '0.5rem 1rem', backgroundColor: '#161b22', borderRadius: '6px', border: '1px solid #30363d'}}>
                Frisco Electrician
              </Link>
              <Link href="/highland-park" style={{color: '#c9d1d9', textDecoration: 'none', padding: '0.5rem 1rem', backgroundColor: '#161b22', borderRadius: '6px', border: '1px solid #30363d'}}>
                Highland Park
              </Link>
              <Link href="/richardson" style={{color: '#c9d1d9', textDecoration: 'none', padding: '0.5rem 1rem', backgroundColor: '#161b22', borderRadius: '6px', border: '1px solid #30363d'}}>
                Richardson
              </Link>
              <Link href="/service-areas" style={{color: '#00f0ff', textDecoration: 'none', padding: '0.5rem 1rem', backgroundColor: '#161b22', borderRadius: '6px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                View All Areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
