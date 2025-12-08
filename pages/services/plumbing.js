import Layout from '../../components/Layout'
import Link from 'next/link'

export default function PlumbingServices() {
  return (
    <Layout 
      title="Professional Plumbing Services Dallas-Fort Worth | MetroPlex Pros"
      description="Licensed plumbers serving DFW. Water heater repair, slab leak detection, drain cleaning, fixture installation, emergency plumbing. Call (682) 466-2130."
      keywords="plumber Dallas, plumbing services DFW, water heater repair, slab leak detection, drain cleaning, emergency plumber, fixture installation, pipe repair"
      canonicalUrl="https://metroplexpros.com/services/plumbing"
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://metroplexpros.com"
            },
            "areaServed": {
              "@type": "State",
              "name": "Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Water Heater Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Slab Leak Detection"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Drain Cleaning"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fixture Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pipe Repair & Replacement"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Plumbing"}}
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
              LICENSED & INSURED PLUMBERS
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Professional Plumbing Services</span><br />
              for Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Water Heaters • Slab Leaks • Drains • Fixtures • Repairs
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.9', color: '#8b949e'}}>
              MetroPlex Pros provides comprehensive plumbing services throughout the Dallas-Fort Worth area. Our licensed 
              plumbers handle everything from leaky faucets to complex slab leak repairs, ensuring your plumbing system runs 
              smoothly and efficiently.
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
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Master Plumbers</div>
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

      {/* Our Plumbing Services */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Our Plumbing Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Complete plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '🔥',
                title: 'Water Heater Services',
                desc: 'Installation, repair, and replacement of tank and tankless water heaters. We service all major brands and can upgrade your system for better efficiency.',
                features: ['Tank water heaters', 'Tankless systems', 'Water heater repair', 'Expansion tanks', 'Gas & electric']
              },
              {
                icon: '💧',
                title: 'Slab Leak Detection & Repair',
                desc: 'Advanced leak detection technology to locate under-slab leaks without unnecessary demolition. Epoxy lining, re-routing, and repair solutions.',
                features: ['Electronic leak detection', 'Epoxy pipe lining', 'Re-routing solutions', 'Minimal property damage']
              },
              {
                icon: '🚿',
                title: 'Fixture Installation',
                desc: 'Professional installation of faucets, sinks, toilets, showers, and bathtubs. From basic replacements to luxury fixtures.',
                features: ['Faucets & sinks', 'Toilets', 'Showers & tubs', 'Luxury fixtures', 'Kitchen & bath']
              },
              {
                icon: '🚰',
                title: 'Drain Cleaning & Repair',
                desc: 'Professional drain cleaning services using advanced equipment. Clear clogs, clean main lines, and video inspection services.',
                features: ['Hydro jetting', 'Snake/auger service', 'Video inspection', 'Main line cleaning', 'Root removal']
              },
              {
                icon: '🔧',
                title: 'Pipe Repair & Replacement',
                desc: 'Repair or replace damaged, corroded, or leaking pipes. Galvanized pipe replacement, PEX re-piping, and copper installation.',
                features: ['Galvanized pipe replacement', 'PEX re-piping', 'Copper piping', 'Leak repairs', 'Whole-house re-pipe']
              },
              {
                icon: '🚽',
                title: 'Toilet Repair & Installation',
                desc: 'Toilet installation, repair, and replacement. Fix running toilets, clogs, leaks, and weak flushes. Install new water-efficient models.',
                features: ['Running toilet repair', 'Toilet replacement', 'Wax ring replacement', 'Flush valve repair', 'Water-saving toilets']
              },
              {
                icon: '🌊',
                title: 'Water Filtration Systems',
                desc: 'Whole-house water filtration, softeners, and reverse osmosis systems. Improve water quality and protect your plumbing.',
                features: ['Water softeners', 'Whole-house filters', 'Reverse osmosis', 'Carbon filters', 'UV purification']
              },
              {
                icon: '🔨',
                title: 'Garbage Disposal Services',
                desc: 'Garbage disposal installation, repair, and replacement. Proper disposal selection and professional installation for reliable operation.',
                features: ['Disposal installation', 'Jammed disposal repair', 'Disposal replacement', 'Leak repair', 'Electrical connections']
              },
              {
                icon: '🏡',
                title: 'Sewer Line Services',
                desc: 'Sewer line inspection, cleaning, and repair. Video camera inspection to diagnose issues and trenchless repair options available.',
                features: ['Video inspection', 'Sewer line cleaning', 'Root removal', 'Sewer line replacement', 'Trenchless options']
              },
              {
                icon: '💦',
                title: 'Leak Detection & Repair',
                desc: 'Find and fix hidden leaks before they cause major damage. Advanced leak detection equipment and thorough diagnostics.',
                features: ['Hidden leak detection', 'Pinhole leak repair', 'Slab leaks', 'Wall leaks', 'Emergency leak repair']
              },
              {
                icon: '🌳',
                title: 'Outdoor Plumbing',
                desc: 'Hose bibs, irrigation connections, outdoor kitchens, and freeze-proof faucets. Protect outdoor plumbing from Texas freeze events.',
                features: ['Hose bib installation', 'Irrigation connections', 'Freeze-proof faucets', 'Outdoor kitchens', 'Sprinkler connections']
              },
              {
                icon: '🚨',
                title: 'Emergency Plumbing',
                desc: '24/7 emergency plumbing service for burst pipes, major leaks, sewer backups, and no-water situations. Fast response when you need it most.',
                features: ['Burst pipe repair', 'Major leak response', 'Sewer backups', 'No hot water', 'Water main issues']
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

      {/* Why Choose Our Plumbing Services */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Choose MetroPlex Pros for Plumbing?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '✅', title: 'Licensed & Insured', desc: 'All work performed by licensed master plumbers with comprehensive liability insurance and workmanship guarantees.' },
              { icon: '🔍', title: 'Advanced Diagnostics', desc: 'We use video inspection, electronic leak detection, and other advanced tools to diagnose problems accurately.' },
              { icon: '💰', title: 'Upfront Pricing', desc: 'Transparent estimates before we start work. No surprise charges or hidden fees.' },
              { icon: '🚀', title: 'Fast Response', desc: 'Quick scheduling for routine work and 24/7 emergency service for urgent plumbing issues.' },
              { icon: '🔧', title: 'Quality Parts', desc: 'We use professional-grade plumbing fixtures and parts from trusted manufacturers.' },
              { icon: '🏠', title: 'Clean Work', desc: 'We protect your home, clean up thoroughly, and leave your property better than we found it.' }
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

      {/* Common Plumbing Issues */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Common Plumbing Problems We Fix
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { title: 'Low Water Pressure', desc: 'Low pressure can indicate pipe corrosion, clogs, or valve issues. We diagnose and restore proper water flow.' },
              { title: 'Dripping Faucets', desc: 'Constant dripping wastes water and money. We repair or replace worn washers, cartridges, and seals.' },
              { title: 'Running Toilets', desc: 'Running toilets waste gallons of water daily. We fix flapper valves, fill valves, and overflow issues.' },
              { title: 'Slow Drains', desc: 'Slow drains indicate clogs or venting issues. We clear drains and ensure proper drainage throughout your home.' },
              { title: 'Water Heater Problems', desc: 'No hot water, lukewarm water, or strange noises indicate water heater issues. We diagnose and repair or replace.' },
              { title: 'Pipe Leaks', desc: 'Leaking pipes can cause water damage and mold. We locate and repair leaks before they become major problems.' }
            ].map((issue, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>⚠️ {issue.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Plumbing */}
      <section className="section" style={{backgroundColor: '#161b22', borderTop: '2px solid #00f0ff', borderBottom: '2px solid #00f0ff'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚨</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>24/7 Emergency Plumbing Service</h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              Plumbing emergencies can cause serious damage. We provide round-the-clock emergency service for:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem'}}>
              {['Burst pipes', 'Major leaks', 'Sewer backups', 'No hot water', 'Flooding', 'Gas leaks'].map((item, index) => (
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
              Schedule Your Plumbing Service
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you need a dripping faucet fixed or a complete water heater replacement, our licensed plumbers 
              are ready to help. Contact us today for a free estimate.
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

    </Layout>
  )
}
