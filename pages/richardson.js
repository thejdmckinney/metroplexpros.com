import Layout from '../components/Layout'
import Link from 'next/link'

export default function Richardson() {
  return (
    <Layout 
      title="Richardson Handyman, Electrical & Plumbing plus Smart Home Services TX | MetroPlex Pros"
      description="Professional home electrical repair service, handyman, and plumbing for Richardson homes. Panel upgrades, slab leak repair, aluminum wiring, older home specialists. Fast service, honest pricing."
      keywords="Richardson electrician, home electrical repair Richardson, electrical home repair, home electrical repair near me, Richardson plumber, Richardson handyman, electrical panel upgrade Richardson, slab leak Richardson, aluminum wiring Richardson"
      canonicalUrl="https://www.metroplexpros.com/richardson"
    >
      {/* LocalBusiness Schema for Richardson */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "MetroPlex Pros - Richardson",
            "image": "https://www.metroplexpros.com/logo.svg",
            "@id": "https://www.metroplexpros.com/richardson",
            "url": "https://www.metroplexpros.com/richardson",
            "telephone": "(682) 466-2130",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Richardson",
              "addressLocality": "Richardson",
              "addressRegion": "TX",
              "postalCode": "75080",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.9483,
              "longitude": -96.7299
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
              "name": "Richardson",
              "sameAs": "https://en.wikipedia.org/wiki/Richardson,_Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Richardson Home Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Panel Upgrades"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Slab Leak Detection & Repair"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Aluminum Wiring Remediation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Home Inspection Repairs"}}
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

      {/* Hero Section - Community Focused */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 50% 50%, #00f0ff 0%, transparent 60%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
              SERVING RICHARDSON SINCE 2022
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Trusted Home Services</span><br />
              for Richardson Neighborhoods
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '0.5px'}}>
              Handyman • Electrical • Plumbing • Smart Home Upgrades
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.9', color: '#8b949e'}}>
              MetroPlex Pros provides reliable handyman, electrical, and plumbing services throughout Richardson, serving one of 
              DFW's most established and diverse communities. From charming mid-century homes in Canyon Creek to luxury estates in 
              Northrich and Spring Valley, we understand Richardson's unique mix of home styles and maintenance needs.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Request Service
              </Link>
            </div>
            <div style={{display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>2-Hour</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Response Time</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Emergency Service</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>Honest</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Fair Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Richardson Homeowners Choose Us */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Richardson Homeowners Choose MetroPlex Pros
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Local expertise meets affordable, reliable service
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏘️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>We Know Richardson Homes</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Richardson has a rich housing history - from 1950s-70s ranch homes to modern luxury builds. Many homes are reaching 
                the age where they need significant updates. We've worked on hundreds of Richardson properties and understand the 
                common issues in each era of construction.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Honest, Fair Pricing</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Richardson homeowners appreciate straightforward pricing without the premium markup of high-end areas. We provide 
                competitive rates and transparent estimates that respect your budget.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Fast Local Response</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                We're based in the DFW metroplex and know Richardson well - quick response times for service calls throughout 
                the city. Most calls answered within 2 hours.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔧</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Experienced with Older Homes</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Many Richardson homes were built 40-60 years ago and need modernization. We specialize in bringing older homes 
                up to current standards while preserving their character.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛡️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Licensed & Insured</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Fully licensed electricians and plumbers with comprehensive insurance and workmanship guarantees on all services.
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
              Our Richardson Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Complete home services for every Richardson neighborhood
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem'}}>
            {/* Electrical Services */}
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '2px solid #00f0ff', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.2)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '3rem'}}>⚡</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.8rem', margin: 0}}>Electrical Services</h3>
              </div>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
                {[
                  'Electrical panel upgrades (essential for older Richardson homes)',
                  'Circuit breaker replacement and additions',
                  'Outlet and switch upgrades/replacement',
                  'GFCI and AFCI installation (code compliance)',
                  'Ceiling fan installation',
                  'Recessed lighting and fixture updates',
                  'Smart home device installation',
                  'Landscape and security lighting',
                  'Emergency electrical repairs'
                ].map((service, index) => (
                  <li key={index} style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Plumbing Services */}
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '2px solid #00f0ff', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.2)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '3rem'}}>🔧</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.8rem', margin: 0}}>Plumbing Services</h3>
              </div>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
                {[
                  'Slab leak detection and repair',
                  'Water heater replacement and service',
                  'Faucet and fixture repair/replacement',
                  'Toilet repairs and installations',
                  'Drain cleaning and sewer line service',
                  'Re-piping and pipe replacement',
                  'Garbage disposal installation',
                  'Outdoor hose bibs and irrigation',
                  'Emergency plumbing response'
                ].map((service, index) => (
                  <li key={index} style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Handyman Services */}
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '2px solid #00f0ff', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.2)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{fontSize: '3rem'}}>🔨</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.8rem', margin: 0}}>Handyman Services</h3>
              </div>
              <ul style={{color: '#c9d1d9', lineHeight: '2.2', fontSize: '1.05rem', listStyle: 'none', padding: 0}}>
                {[
                  'Drywall repair and texturing',
                  'Interior and exterior painting',
                  'Door and window repairs',
                  'Fence and gate repair/replacement',
                  'Deck and patio maintenance',
                  'Cabinet repairs and hardware updates',
                  'Shelving and storage solutions',
                  'General home repairs and maintenance'
                ].map((service, index) => (
                  <li key={index} style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Richardson Home Service Needs - Major Issues */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Common Richardson Home Service Needs
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Specialized solutions for Richardson's aging housing stock
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '⚡',
                title: 'Electrical Panel Upgrades',
                desc: 'Most Richardson homes built before 1980 have 100-150 amp electrical service. Modern demands (central AC, multiple appliances, home offices, EV charging) require 200 amp panels. We handle complete upgrades with proper permitting.'
              },
              {
                icon: '⚠️',
                title: 'Aluminum Wiring Remediation',
                desc: 'Many 1960s-70s Richardson homes have aluminum wiring, which can be a fire hazard. We offer COPALUM connections and copper pigtailing to make these systems safe.'
              },
              {
                icon: '💧',
                title: 'Slab Foundation Plumbing Issues',
                desc: 'Like much of North Texas, Richardson homes on slab foundations occasionally experience under-slab pipe leaks. We provide leak detection, epoxy lining, and re-routing solutions that avoid expensive foundation work.'
              },
              {
                icon: '🔥',
                title: 'Water Heater Replacement',
                desc: "Richardson's aging housing stock means lots of water heaters reaching end-of-life. We replace traditional tank units and can upgrade to tankless systems."
              },
              {
                icon: '🚰',
                title: 'Galvanized Pipe Replacement',
                desc: 'Older Richardson homes often have galvanized steel pipes that corrode over time, causing low water pressure and rusty water. We replace with modern PEX or copper.'
              },
              {
                icon: '🪟',
                title: 'Window and Door Weatherization',
                desc: 'Older homes need updated weatherstripping and caulking. We improve energy efficiency while maintaining original character.'
              }
            ].map((need, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span>{need.icon}</span> {need.title}
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{need.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Modernization Services */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Home Modernization Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '800px', margin: '0 auto'}}>
              Richardson homeowners are updating their properties - we help with upgrades for modern living
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {/* Kitchen & Bath Updates */}
            <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🍽️</span> Kitchen & Bath Updates
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'New outlet placement for modern appliances',
                  'Under-cabinet lighting installation',
                  'Plumbing for new fixtures and appliances',
                  'Electrical for garbage disposals, dishwashers',
                  'Ventilation fan installation'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Home Upgrades */}
            <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🏠</span> Smart Home Upgrades
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'Smart thermostat installation (often requires C-wire)',
                  'Smart switches and dimmer installation',
                  'Video doorbell wiring',
                  'Smart lock installation',
                  'Security camera placement',
                  'USB charging outlets'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Energy Efficiency */}
            <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>💡</span> Energy Efficiency
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'LED recessed lighting conversion',
                  'Programmable thermostat installation',
                  'Attic ventilation fans',
                  'Whole-house fan installation'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outdoor Living */}
            <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🌳</span> Outdoor Living
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'Deck and patio lighting',
                  'Outdoor outlet installation (GFCI required)',
                  'Ceiling fans for covered patios',
                  'Landscape lighting'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home Inspection Repair Services */}
      <section className="section" style={{backgroundColor: '#0d1117', borderTop: '2px solid rgba(0, 240, 255, 0.3)', borderBottom: '2px solid rgba(0, 240, 255, 0.3)'}}>
        <div className="container">
          <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📋</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.8rem', marginBottom: '1.5rem'}}>Home Inspection Repair Services</h2>
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '1rem', fontWeight: '300'}}>
              Buying or selling a Richardson home?
            </p>
            <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '3rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 3rem'}}>
              We handle inspection repair items with fast turnaround to keep your closing on schedule.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
              {[
                { icon: '🔌', title: 'GFCI Outlets', desc: 'Code requirement installation' },
                { icon: '🚨', title: 'Smoke Detectors', desc: 'Hardwiring & compliance' },
                { icon: '💧', title: 'Plumbing Leaks', desc: 'Fast leak repairs' },
                { icon: '⚡', title: 'Electrical Safety', desc: 'Code compliance upgrades' },
                { icon: '✅', title: 'Code Issues', desc: 'Minor compliance fixes' },
                { icon: '🏠', title: 'Pre-Listing', desc: 'Maintenance & repairs' }
              ].map((feature, index) => (
                <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>{feature.icon}</div>
                  <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.5rem'}}>{feature.title}</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem'}}>{feature.desc}</div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn" style={{fontSize: '1.2rem', padding: '1rem 3rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)'}}>
              Get Inspection Repairs Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Richardson Neighborhoods We Serve */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Richardson Neighborhoods We Serve
            </h2>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: '#00f0ff', fontSize: '1.6rem', marginBottom: '1.5rem', textAlign: 'center'}}>Established/Luxury Areas</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem'}}>
              {[
                'Northrich Estates',
                'Spring Valley',
                'Canyon Creek',
                'Richland Park',
                'Breckinridge Park',
                'Cottonwood Creek'
              ].map((area, index) => (
                <div key={index} style={{padding: '1rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)', textAlign: 'center'}}>
                  <div style={{color: '#c9d1d9', fontSize: '1.05rem'}}>{area}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <h3 style={{color: '#00f0ff', fontSize: '1.6rem', marginBottom: '1.5rem', textAlign: 'center'}}>Mid-Century/Family Neighborhoods</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem'}}>
              {[
                'Arapaho Heights',
                'Buckingham area',
                'Hamilton Park',
                'Richardson Heights',
                'Reservation',
                'Galatyn Park area'
              ].map((area, index) => (
                <div key={index} style={{padding: '1rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)', textAlign: 'center'}}>
                  <div style={{color: '#c9d1d9', fontSize: '1.05rem'}}>{area}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{color: '#00f0ff', fontSize: '1.6rem', marginBottom: '1.5rem', textAlign: 'center'}}>Newer Developments</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem'}}>
              {[
                'CityLine mixed-use district',
                'Renaissance neighborhood',
                'Properties near Bush Turnpike'
              ].map((area, index) => (
                <div key={index} style={{padding: '1rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)', textAlign: 'center'}}>
                  <div style={{color: '#c9d1d9', fontSize: '1.05rem'}}>{area}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Types We Serve */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '2rem'}}>Serving All Richardson Property Types</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
              {[
                { icon: '🏡', title: 'Single-Family Homes', desc: 'All eras and price ranges' },
                { icon: '🏘️', title: 'Townhomes & Condos', desc: 'Individual unit service' },
                { icon: '🔑', title: 'Investment Properties', desc: 'Landlord maintenance' },
                { icon: '🏢', title: 'Small Commercial', desc: 'Office & retail properties' }
              ].map((type, index) => (
                <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>{type.icon}</div>
                  <div style={{color: '#00f0ff', fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem'}}>{type.title}</div>
                  <div style={{color: '#8b949e', fontSize: '0.85rem'}}>{type.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section" style={{backgroundColor: '#161b22', borderTop: '2px solid #00f0ff', borderBottom: '2px solid #00f0ff'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚨</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>24/7 Emergency Response</h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              We offer round-the-clock emergency service for Richardson residents:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem'}}>
              {[
                { title: 'Electrical Hazards', desc: 'Power outages & safety' },
                { title: 'Water Leaks', desc: 'Pipe bursts & flooding' },
                { title: 'Slab Leak Emergency', desc: 'Under-foundation leaks' },
                { title: 'No Hot Water', desc: 'Emergency water heater' },
                { title: 'Sewer Backups', desc: 'Severe drain clogs' }
              ].map((emergency, index) => (
                <div key={index} style={{padding: '1.5rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                  <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>{emergency.title}</div>
                  <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>{emergency.desc}</div>
                </div>
              ))}
            </div>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.4)'}}>
              Call Emergency Line: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* About Richardson */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              About Richardson
            </h2>
            <div style={{padding: '3rem', backgroundColor: '#161b22', borderRadius: '16px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2', marginBottom: '1.5rem'}}>
                Richardson is a thriving city of over 120,000 residents between Dallas and Plano, known for excellent schools 
                (Richardson ISD and Plano ISD), the telecom corridor, and diverse housing options. The city features everything 
                from affordable starter homes to million-dollar estates.
              </p>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2'}}>
                Richardson offers a strong sense of community with walkable neighborhoods, parks and trails (including the Spring 
                Creek Nature Trail), great restaurants, and convenient access to North Texas highways. The city's mature trees and 
                established neighborhoods give it character that newer suburbs lack. With most homes built between 1950-2000, 
                Richardson represents a huge opportunity for home improvement and maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: '#161b22', textAlign: 'center'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#00f0ff', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Schedule Your Richardson Service Today
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you're dealing with an older home that needs updates, planning a kitchen remodel, or facing an emergency 
              repair, MetroPlex Pros brings affordable expertise to Richardson homeowners.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📞</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Call or Text</div>
                <Link href="tel:682-466-2130" style={{color: '#c9d1d9', fontSize: '1.3rem', textDecoration: 'none'}}>
                  (682) 466-2130
                </Link>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📧</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Email Us</div>
                <a href="mailto:info@metroplexpros.com" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  info@metroplexpros.com
                </a>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💻</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Online Booking</div>
                <Link href="/contact" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  Request Service →
                </Link>
              </div>
            </div>

            <p style={{color: '#8b949e', fontSize: '1rem', fontStyle: 'italic'}}>
              Serving Richardson and North Texas with professional handyman, electrical, and plumbing services since 2022.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
