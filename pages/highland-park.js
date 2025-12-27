import Layout from '../components/Layout'
import Link from 'next/link'

export default function HighlandPark() {
  return (
    <Layout 
      title="Highland Park Electrician & Plumber Near Me | Luxury Home Specialists | MetroPlex Pros"
      description="Highland Park Electrician & Plumber Near Me | Luxury Home Specialists | 24/7 Emergency Service | Same-Day | Licensed & Insured | Call (682) 466-2130 for FREE estimate!"
      keywords="Highland Park electrician, electrician near me Highland Park, home electrical repair Highland Park, Highland Park plumber, plumber near me Highland Park, Highland Park handyman, Park Cities electrician, luxury home electrician Dallas, Highland Park Village contractor, smart home Highland Park, emergency electrician Highland Park"
      canonicalUrl="https://www.metroplexpros.com/highland-park"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-university-park.png',
            width: 1200,
            height: 630,
            alt: 'Metroplex Pros - Professional Home Services in Dallas',
            type: 'image/png'
          }
        ]
      }}
    >
      {/* LocalBusiness Schema for Highland Park */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "MetroPlex Pros - Highland Park",
            "image": "https://www.metroplexpros.com/logo.svg",
            "@id": "https://www.metroplexpros.com/highland-park",
            "url": "https://www.metroplexpros.com/highland-park",
            "telephone": "(682) 466-2130",
            "priceRange": "$$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Highland Park",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75205",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.8338,
              "longitude": -96.8015
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
              "name": "Highland Park",
              "sameAs": "https://en.wikipedia.org/wiki/Highland_Park,_Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Highland Park Premium Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Luxury Electrical Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Premium Plumbing Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Estate Handyman Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Automation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Generator Installation"}}
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

      {/* Hero Section - Luxury Estate Feel */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 50% 50%, #00f0ff 0%, transparent 60%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
              SERVING HIGHLAND PARK SINCE 2023
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Premium Home Services</span><br />
              for Highland Park Estates
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300, letterSpacing: '0.5px'}}>
              Handyman • Electrical • Plumbing • Smart Home Integration
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.9', color: '#8b949e'}}>
              MetroPlex Pros provides expert handyman, electrical, and plumbing services to Highland Park homeowners, serving one of 
              the most prestigious addresses in Texas. From grand estates along Armstrong Parkway to elegant homes near Highland Park 
              Village, we deliver the quality craftsmanship and attention to detail that Highland Park properties deserve.
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
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>Same-Day</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Service Available</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Priority Emergency</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>White-Glove</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Service Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Highland Park Homeowners Choose Us */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Highland Park Homeowners Choose MetroPlex Pros
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Premium service for Texas's most prestigious addresses
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⭐</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>We Match Highland Park Standards</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Highland Park is known for impeccably maintained homes and manicured properties. We bring the same level of 
                precision and quality to every project, whether it's a simple repair or a complex installation.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💎</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Experience with Luxury Homes</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Highland Park estates often feature high-end finishes, custom details, and sophisticated systems. Our technicians 
                have the experience to work with premium materials and luxury fixtures properly.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎩</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Discreet, Professional Service</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                We arrive in clean, professional vehicles, respect your property and privacy, and work efficiently to minimize 
                disruption to your household.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Rapid Response</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Based in the DFW metroplex with a focus on the Park Cities, we provide same-day service for most requests and 
                24/7 priority emergency response when needed.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛡️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Licensed & Insured</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Fully licensed electricians and plumbers with comprehensive liability insurance and workmanship guarantees on 
                all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Layout */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Our Highland Park Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Comprehensive estate services tailored to luxury residences
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
                  'Electrical system upgrades and expansions',
                  'Outlet and switch replacement/upgrades',
                  'Custom lighting design and installation',
                  'Chandelier installation and support',
                  'Landscape and architectural lighting',
                  'Smart home electrical integration',
                  'Generator installation and service',
                  'Pool and spa electrical work',
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
                  'Luxury fixture installation',
                  'Water heater and tankless system service',
                  'Kitchen and bath plumbing upgrades',
                  'Irrigation system connections',
                  'Leak detection and repair',
                  'Sewer line inspection and repair',
                  'Water filtration systems',
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
                  'Custom carpentry and millwork',
                  'Crown molding and trim installation',
                  'Built-in cabinetry and shelving',
                  'Door and window service',
                  'Fence and gate repairs',
                  'Deck and patio maintenance',
                  'Exterior painting and wood restoration',
                  'Home preparation for events/entertaining'
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

      {/* Smart Home Integration - Comprehensive */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Smart Home Integration & Automation
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '800px', margin: '0 auto'}}>
              Highland Park homeowners expect cutting-edge technology seamlessly integrated into their estates
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
            {/* Lighting Control */}
            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>💡</span> Lighting Control
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'Lutron RadioRA 2 and HomeWorks systems',
                  'Keypads and scene programming',
                  'Motorized shades integration',
                  'Architectural and accent lighting',
                  'Smart light switches & dimmers',
                  'Smart motion sensor lighting'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Security & Monitoring */}
            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🔒</span> Security & Monitoring
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'Video Doorbells (Ring, Nest, Arlo)',
                  'Smart security cameras',
                  'Smart door locks (August, Schlage, Yale)',
                  'Motion-sensor lighting',
                  'Smart leak detection sensors',
                  'Smart smoke/CO detectors'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Climate Control */}
            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🌡️</span> Climate Control
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'Smart thermostats (Google Nest, Ecobee, Honeywell)',
                  'Multi-zone climate automation',
                  'Whole-home climate management',
                  'Remote monitoring and control',
                  'Smart ceiling fans'
                ].map((item, index) => (
                  <li key={index} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                    <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Convenience & Entertainment */}
            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🎵</span> Entertainment & More
              </h3>
              <ul style={{color: '#c9d1d9', lineHeight: '2', fontSize: '1rem', listStyle: 'none', padding: 0}}>
                {[
                  'Whole-home audio wiring',
                  'Home theater electrical',
                  'Network infrastructure',
                  'Smart garage door openers',
                  'Automated blinds/shades',
                  'Under-cabinet smart lighting',
                  'Smart outlets/receptacles',
                  'USB outlets with smart features'
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

      {/* Common Service Needs */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Common Highland Park Home Service Needs
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Specialized solutions for luxury estates
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '⚡',
                title: 'Estate Electrical Systems',
                desc: 'Large Highland Park homes often require electrical service upgrades to support modern demands - whole-home automation, wine cellars, home theaters, extensive outdoor lighting, and multiple HVAC zones.'
              },
              {
                icon: '🚰',
                title: 'Luxury Fixture Installation',
                desc: 'We work with high-end plumbing fixtures from brands like Waterworks, Kohler, and Rohl, as well as designer lighting from Visual Comfort, Restoration Hardware, and custom sources.'
              },
              {
                icon: '🌳',
                title: 'Landscape Lighting Systems',
                desc: "Highland Park's beautiful properties deserve professional landscape lighting. We install and maintain sophisticated outdoor lighting systems that enhance architectural features and landscaping."
              },
              {
                icon: '🏠',
                title: 'Smart Home Integration',
                desc: 'From Lutron lighting control to whole-home audio, security systems, and climate management - we handle the electrical infrastructure that makes modern automation possible.'
              },
              {
                icon: '🏊',
                title: 'Pool and Spa Service',
                desc: 'Many Highland Park homes have pools and spas requiring specialized electrical work - pump systems, heaters, lighting, and automated controls.'
              },
              {
                icon: '⚙️',
                title: 'Generator Systems',
                desc: 'Backup power is essential for Highland Park estates. We install and maintain whole-home generator systems to keep your property protected during outages.'
              }
            ].map((need, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span>{need.icon}</span> {need.title}
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{need.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MetroPlex Shield Premium Maintenance */}
      <section className="section" style={{backgroundColor: '#0d1117', borderTop: '2px solid rgba(0, 240, 255, 0.3)', borderBottom: '2px solid rgba(0, 240, 255, 0.3)'}}>
        <div className="container">
          <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛡️</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.8rem', marginBottom: '1.5rem'}}>MetroPlex Shield</h2>
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '1rem', fontWeight: '300'}}>
              Luxury Estate Maintenance Program
            </p>
            <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '3rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto 3rem'}}>
              Ask about MetroPlex Shield, our premium maintenance program designed specifically for Highland Park estates. 
              Regular scheduled maintenance keeps your home systems running flawlessly and prevents small issues from becoming expensive emergencies.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
              {[
                { icon: '📋', title: 'Quarterly Inspections', desc: 'Comprehensive system reviews' },
                { icon: '🚨', title: 'Priority Emergency', desc: 'First response guarantee' },
                { icon: '🔧', title: 'Seasonal Maintenance', desc: 'Proactive care tasks' },
                { icon: '📊', title: 'Detailed Reports', desc: 'Complete documentation' },
                { icon: '💰', title: 'Preferred Pricing', desc: 'Exclusive member rates' },
                { icon: '🎩', title: 'White-Glove Service', desc: 'Executive-level care' }
              ].map((feature, index) => (
                <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>{feature.icon}</div>
                  <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.5rem'}}>{feature.title}</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem'}}>{feature.desc}</div>
                </div>
              ))}
            </div>

            <p style={{fontSize: '1.05rem', color: '#c9d1d9', marginBottom: '2rem', fontStyle: 'italic'}}>
              Perfect for busy executives, second homes, and homeowners who expect white-glove service.
            </p>

            <a href="https://metroplexshield.com" target="_blank" rel="noopener noreferrer" className="btn" style={{fontSize: '1.2rem', padding: '1rem 3rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)'}}>
              Learn More at MetroplexShield.com
            </a>
          </div>
        </div>
      </section>

      {/* Highland Park Areas We Serve */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Highland Park Areas We Serve
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            {[
              'Armstrong Parkway estates',
              'Beverly Drive corridor',
              'Lakeside Drive (Turtle Creek area)',
              'Euclid Avenue homes',
              'Preston Road properties',
              'Highland Park Village vicinity',
              'Stratford Avenue area',
              'All Park Cities neighborhoods'
            ].map((area, index) => (
              <div key={index} style={{padding: '1.5rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.2)', textAlign: 'center'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working with Your Team */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🤝</div>
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>Working with Your Team</h2>
            <p style={{fontSize: '1.1rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              We coordinate seamlessly with your professionals:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
              {[
                { icon: '🎨', title: 'Interior Designers', desc: 'Fixture selection & timing' },
                { icon: '🌿', title: 'Landscape Architects', desc: 'Outdoor lighting & irrigation' },
                { icon: '🏗️', title: 'General Contractors', desc: 'Renovation projects' },
                { icon: '🏢', title: 'Property Managers', desc: 'Investment & second homes' },
                { icon: '🔌', title: 'Automation Specialists', desc: 'Integrated smart systems' }
              ].map((team, index) => (
                <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>{team.icon}</div>
                  <div style={{color: '#00f0ff', fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem'}}>{team.title}</div>
                  <div style={{color: '#8b949e', fontSize: '0.85rem'}}>{team.desc}</div>
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
            <h2 style={{color: '#00f0ff', fontSize: '2.5rem', marginBottom: '1.5rem'}}>24/7 Priority Emergency Response</h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.8'}}>
              We offer round-the-clock priority emergency response for Highland Park residents:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem'}}>
              {[
                { title: 'Electrical Hazards', desc: 'Power issues & safety' },
                { title: 'Water Leaks', desc: 'Pipe bursts & flooding' },
                { title: 'No Hot Water', desc: 'Emergency water heater' },
                { title: 'Major Backups', desc: 'Severe drain issues' },
                { title: 'Storm Damage', desc: 'Emergency repairs' }
              ].map((emergency, index) => (
                <div key={index} style={{padding: '1.5rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                  <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>{emergency.title}</div>
                  <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>{emergency.desc}</div>
                </div>
              ))}
            </div>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.4)'}}>
              Emergency: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* About Highland Park */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              About Highland Park
            </h2>
            <div style={{padding: '3rem', backgroundColor: '#161b22', borderRadius: '16px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2', marginBottom: '1.5rem'}}>
                Highland Park is an independent municipality in the heart of Dallas, known as one of America's most affluent communities. 
                With Highland Park Village's luxury shopping, top-ranked Highland Park ISD schools, and proximity to downtown Dallas, 
                Highland Park offers the perfect blend of privacy, prestige, and convenience.
              </p>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2'}}>
                The town maintains strict architectural standards and zoning that preserve its character as a premier residential enclave. 
                Most homes are custom-built estates on generous lots with mature trees and professionally maintained landscapes. MetroPlex 
                Pros is honored to serve this exceptional community with the quality and professionalism Highland Park residents expect.
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
              Schedule Your Highland Park Service Today
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you need immediate repairs, routine maintenance, or are planning upgrades to your Highland Park estate, 
              MetroPlex Pros delivers the expertise and service excellence you expect.
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
              Serving Highland Park and the Park Cities with premium handyman, electrical, and plumbing services.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
