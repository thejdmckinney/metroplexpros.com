import Layout from '../components/Layout'
import Link from 'next/link'

export default function Lakewood() {
  return (
    <Layout 
      title="Lakewood Handyman, Electrical & Plumbing | Smart Home Integrations Dallas | Metroplex Pros"
      description="Expert home electrical repair service, handyman, plumbing, and smart home integration for Lakewood, Dallas historic homes. Upgrade lighting, update outlets/receptacles, smart home installs. Licensed & Insured. Call today!"
      keywords="Lakewood electrician, home electrical repair Lakewood, electrical home repair, home electrical repair near me, Lakewood plumber, Lakewood handyman, White Rock Lake electrician, East Dallas plumber, historic home electrician Dallas"
      canonicalUrl="https://www.metroplexpros.com/lakewood"
    >
      {/* LocalBusiness Schema for Lakewood */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "MetroPlex Pros - Lakewood",
            "image": "https://www.metroplexpros.com/logo.svg",
            "@id": "https://www.metroplexpros.com/lakewood",
            "url": "https://www.metroplexpros.com/lakewood",
            "telephone": "(682) 466-2130",
            "priceRange": "$$-$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lakewood",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75214",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.8406,
              "longitude": -96.7281
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/metroplexpros",
              "https://www.instagram.com/metroplexpros"
            ],
            "areaServed": {
              "@type": "City",
              "name": "Lakewood",
              "sameAs": "https://en.wikipedia.org/wiki/Lakewood,_Dallas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lakewood Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Plumbing Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Handyman Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Historic Home Restoration"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Integration"}}
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })
        }}
      />

      {/* Hero Section - Historic Neighborhood Feel */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0d1117 0%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 30% 40%, #00f0ff 0%, transparent 50%), radial-gradient(circle at 70% 70%, #00f0ff 0%, transparent 50%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', backgroundColor: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '1px', color: '#00f0ff'}}>
              SERVING LAKEWOOD SINCE 2023
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Handyman, Electrical & Plumbing</span><br />
              for Lakewood's Historic Homes
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Preserving Character, Modernizing Function
            </p>
            <p className="hero-description" style={{maxWidth: '850px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8', color: '#8b949e'}}>
              MetroPlex Pros serves Lakewood homeowners with expert services tailored to East Dallas's most desirable neighborhood. 
              From classic 1920s bungalows along Abrams Road to beautifully renovated estates near White Rock Lake, we understand 
              the unique character and maintenance needs of historic Lakewood homes.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Schedule Service
              </Link>
            </div>
            <div style={{display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid #30363d'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>Same-Day</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Service Available</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Emergency Repairs</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>100+</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Lakewood Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lakewood Homeowners Choose Us */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Lakewood Homeowners Choose MetroPlex Pros
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Expert care for East Dallas's most charming historic neighborhood
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏘️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>We Respect Historic Character</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Lakewood features charming early 20th-century architecture - Tudor Revivals, Craftsman bungalows, Spanish Colonial, 
                and Mid-Century Modern gems. We preserve original details while upgrading functionality.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔨</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Renovation Experience</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Many Lakewood homes are being lovingly restored and modernized. We've worked on countless renovation projects, 
                helping homeowners blend historic charm with modern convenience.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Fast East Dallas Response</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                We're never far from Lakewood - quick response times for routine service calls and emergency situations. 
                Same-day or next-day service available for most requests.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛡️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Licensed & Insured</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Fully licensed electricians and plumbers with experience in both historic preservation and modern upgrades. 
                Comprehensive insurance coverage and workmanship guarantees.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Competitive Pricing</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Detailed, transparent estimates and competitive rates that respect your renovation or maintenance budget. 
                No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Our Lakewood Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Comprehensive home services for historic and modern homes
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem'}}>
            {/* Electrical Services */}
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '2px solid #00f0ff', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.15)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '3rem'}}>⚡</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.8rem', margin: 0}}>Electrical Services</h3>
              </div>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Electrical panel upgrades (200 amp service)
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Outlet and switch replacement/modernization
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Recessed lighting installation
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Ceiling fan installation and repair
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Landscape and security lighting
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Smart home device installation
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  GFCI outlet installation (code compliance)
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Emergency electrical repairs
                </li>
              </ul>
            </div>

            {/* Plumbing Services */}
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '2px solid #00f0ff', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.15)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '3rem'}}>🔧</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.8rem', margin: 0}}>Plumbing Services</h3>
              </div>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Slab leak detection and repair
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Water heater replacement and repair
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Faucet and fixture upgrades
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Toilet repair and installation
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Kitchen and bath remodeling plumbing
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Drain cleaning and sewer line service
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Outdoor hose bibs and irrigation
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Emergency plumbing response
                </li>
              </ul>
            </div>

            {/* Handyman Services */}
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '2px solid #00f0ff', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.15)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '3rem'}}>🔨</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.8rem', margin: 0}}>Handyman Services</h3>
              </div>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Historic home restoration and repairs
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Custom carpentry and trim work
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Built-in shelving and cabinetry
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Shiplap and period-appropriate finishes
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Door and window restoration
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Deck and fence repair/replacement
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Drywall repair and texturing
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Interior and exterior painting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Service Needs */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Common Lakewood Home Service Needs
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Specialized solutions for 1920s-1960s homes
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>⚡</span> Electrical Panel Upgrades
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Most pre-1950s Lakewood homes were built with 60-100 amp service. Modern living (AC, kitchen appliances, home offices) 
                requires 200 amp panels. We handle complete upgrades with city permits.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🔌</span> Knob-and-Tube Wiring Replacement
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Some original Lakewood homes still have outdated knob-and-tube wiring. We assess and replace with modern, 
                safe electrical systems while preserving walls and finishes.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>💧</span> Slab Foundation Plumbing
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Like much of Dallas, Lakewood homes on slab foundations occasionally experience under-slab pipe leaks. 
                We offer leak detection and re-routing solutions.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🪟</span> Historic Window and Door Repair
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Original wood windows and doors add character but need maintenance. We repair, weatherstrip, and restore 
                functionality while preserving authenticity.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🚿</span> Bathroom and Kitchen Modernization
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Many Lakewood homeowners are updating small, original bathrooms and galley kitchens. We handle all the 
                electrical and plumbing for these renovations.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🌳</span> Outdoor Living Spaces
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                With proximity to White Rock Lake, Lakewood residents love their outdoor spaces. We install deck lighting, 
                outdoor outlets, ceiling fans for covered patios, and irrigation connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Integration */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Smart Home Installations for Modern Lakewood Living
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '800px', margin: '0 auto'}}>
              Lakewood homeowners are blending historic charm with modern technology
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            {[
              { icon: '🌡️', title: 'Smart Thermostats', desc: 'Nest, Ecobee (C-wire installation)' },
              { icon: '💡', title: 'Smart Lighting', desc: 'Switches and dimmers' },
              { icon: '🔔', title: 'Video Doorbells', desc: 'Ring, Nest Hello' },
              { icon: '🔐', title: 'Smart Locks', desc: 'Front and back doors' },
              { icon: '📹', title: 'Security Cameras', desc: 'Outdoor monitoring' },
              { icon: '📶', title: 'WiFi Outlets', desc: 'Whole-home placement' },
              { icon: '🔌', title: 'USB Charging', desc: 'Kitchen and bedroom outlets' }
            ].map((item, index) => (
              <div key={index} style={{padding: '1.5rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>{item.icon}</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.5rem'}}>{item.title}</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Lakewood Neighborhoods We Serve
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
            {[
              'Original Lakewood (historic district)',
              'Lakewood Heights',
              'Casa View',
              'Lakewood Estates',
              'White Rock Lake corridor (Garland Road)',
              'Abrams Road commercial properties',
              'Skillman Street area'
            ].map((neighborhood, index) => (
              <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>{neighborhood}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Support */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏗️</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>Renovation & Remodeling Support</h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              Working with contractors on a Lakewood renovation? We provide:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem'}}>
              {[
                'Electrical rough-in and finish work',
                'Plumbing relocations and new installations',
                'Custom carpentry and built-ins',
                'Historic detail restoration',
                'Code compliance upgrades',
                'Trim work and finishing'
              ].map((service, index) => (
                <div key={index} style={{padding: '1.25rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid #30363d'}}>
                  <div style={{color: '#c9d1d9', fontSize: '1rem'}}>✓ {service}</div>
                </div>
              ))}
            </div>
            <p style={{color: '#8b949e', fontSize: '1.05rem', fontStyle: 'italic'}}>
              We work alongside your general contractor or directly with you as your dedicated trades partner.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section" style={{backgroundColor: '#0d1117', borderTop: '2px solid #00f0ff', borderBottom: '2px solid #00f0ff'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚨</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>24/7 Emergency Services Available</h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              Home emergencies don't wait for business hours. We offer round-the-clock emergency response for:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem'}}>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>⚡ Electrical Hazards</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Power outages & safety issues</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>💧 Water Leaks</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Burst pipes & flooding</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>🏠 Slab Leaks</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Detection & water damage</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>🔥 No Hot Water</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Water heater emergencies</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>🚽 Major Backups</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Severe drain blockages</div>
              </div>
            </div>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem'}}>
              Emergency Call: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* About Lakewood */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              About Lakewood
            </h2>
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '1px solid #30363d'}}>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2', marginBottom: '1.5rem'}}>
                Lakewood is one of Dallas's most walkable, bike-friendly neighborhoods, bordered by White Rock Lake to the east. 
                Known for excellent local businesses along Abrams Road and Garland Road (including the beloved Lakewood Theater and 
                Whole Foods), top-rated schools, and tree-lined streets with charming historic homes.
              </p>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2'}}>
                The neighborhood attracts young professionals, growing families, and anyone who appreciates vintage architecture 
                with modern walkability. Most Lakewood homes were built between 1920-1960, with ongoing renovations preserving 
                historic character while adding modern amenities. MetroPlex Pros is proud to help maintain and improve these 
                beautiful East Dallas homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: '#0d1117', textAlign: 'center'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#00f0ff', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Schedule Your Lakewood Service Today
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you need emergency repairs, routine maintenance, or are planning a historic home renovation, MetroPlex Pros 
              brings the expertise Lakewood homes deserve. We combine respect for original craftsmanship with modern technical know-how.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📞</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Call or Text</div>
                <Link href="tel:682-466-2130" style={{color: '#c9d1d9', fontSize: '1.3rem', textDecoration: 'none'}}>
                  (682) 466-2130
                </Link>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📧</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Email Us</div>
                <a href="mailto:info@metroplexpros.com" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  info@metroplexpros.com
                </a>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💻</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Online Booking</div>
                <Link href="/contact" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  Schedule Service →
                </Link>
              </div>
            </div>

            <p style={{color: '#8b949e', fontSize: '1rem', fontStyle: 'italic'}}>
              Serving Lakewood and East Dallas with professional handyman, electrical, and plumbing services.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
