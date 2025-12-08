import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function UniversityPark() {
  return (
    <Layout 
      title="University Park Handyman, Electrical & Plumbing | Smart Home Integrations | MetroPlex Pros"
      description="Professional Handyman, electrical, plumbing, and smart home integrations for University Park, TX homes. Licensed, insured, fast response. Serving Highland Park ISD area. Call today!"
      keywords="University Park electrician, University Park plumber, University Park handyman, SMU area electrician, Highland Park ISD electrician, Turtle Creek plumber, luxury home services Dallas"
      canonicalUrl="https://metroplexpros.com/university-park"
    >
      {/* LocalBusiness Schema for University Park */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "MetroPlex Pros - University Park",
            "image": "https://metroplexpros.com/logo.svg",
            "@id": "https://metroplexpros.com/university-park",
            "url": "https://metroplexpros.com/university-park",
            "telephone": "(682) 466-2130",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "University Park",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75205",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.8501,
              "longitude": -96.8004
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
              "name": "University Park",
              "sameAs": "https://en.wikipedia.org/wiki/University_Park,_Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "University Park Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Plumbing Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Handyman Services"}},
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

      {/* Hero Section - Elegant Design */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 20% 50%, #00f0ff 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00f0ff 0%, transparent 50%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', backgroundColor: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '1px', color: '#00f0ff'}}>
              SERVING UNIVERSITY PARK SINCE 2023
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              Premium <span className="text-accent">Home Services</span><br />
              for University Park
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Handyman, Electrical & Plumbing Excellence
            </p>
            <p className="hero-description" style={{maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8', color: '#8b949e'}}>
              MetroPlex Pros provides exceptional handyman, electrical, and plumbing services to University Park's distinguished homes. 
              From historic estates near SMU to elegant properties along Turtle Creek Boulevard, we deliver the quality craftsmanship 
              your home deserves.
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
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>15+</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Years Experience</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Emergency Service</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>30min</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Average Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why University Park Homeowners Choose Us */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why University Park Homeowners Choose MetroPlex Pros
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Premium service for one of Dallas's most prestigious neighborhoods
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏛️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>We Know Your Homes</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                University Park features Dallas's most beautiful architecture - from 1920s Tudor estates to mid-century modern masterpieces. 
                We specialize in historic and luxury homes requiring careful attention to detail.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Fast Local Response</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Based in the DFW metroplex, we're never more than 20-30 minutes away. Same-day service available for most requests. 
                Emergency response available 24/7 for urgent electrical and plumbing issues.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💎</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Transparent Pricing</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                No hidden fees, no surprises. Detailed estimates before starting work. Competitive rates while maintaining the 
                exceptional quality University Park homes deserve.
              </p>
            </div>

            <div style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛡️</div>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>Licensed & Insured</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Fully licensed electricians and plumbers, comprehensive liability insurance, and workmanship guarantees on all services. 
                Your home and investment are protected.
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
              Our University Park Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Comprehensive home services tailored to luxury residences
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
                  Outlet and switch replacement/upgrades
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Lighting installation and fixture updates
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Ceiling fan installation
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Electrical panel inspections
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Landscape lighting repair
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Smart home electrical integration
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
                  Faucet and fixture repair/replacement
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Toilet repairs and installations
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Water heater service
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Drain cleaning and repairs
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Leak detection and repair
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Garbage disposal service
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
                  Custom carpentry and built-ins
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Door and window repairs
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Drywall repair and painting
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Deck and fence maintenance
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Home safety upgrades
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.8rem'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  Seasonal maintenance
                </li>
                <li style={{paddingLeft: '1.5rem', position: 'relative'}}>
                  <span style={{position: 'absolute', left: 0, color: '#00f0ff'}}>✓</span>
                  General home repairs
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
              Common University Park Home Service Needs
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Specialized solutions for historic and luxury homes
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>💡</span> Older Home Electrical Updates
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                Many University Park homes were built between 1920-1960 and need modern electrical capacity for today's technology demands - 
                more outlets, updated panels, improved wiring, and smart home compatibility.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🚰</span> Historic Fixture Restoration
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                We work with classic plumbing fixtures and can source period-appropriate replacements when needed, maintaining the 
                historic character of your home while ensuring modern functionality.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🪵</span> Custom Built-In Carpentry
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                University Park homes often feature beautiful built-in shelving, window seats, and cabinetry that occasionally need 
                repair, refinishing, or custom matching additions.
              </p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
              <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>🌳</span> Landscape Lighting
              </h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                With University Park's tree-lined streets and well-maintained yards, outdoor lighting systems need regular maintenance 
                and occasional upgrades to showcase your property's beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              University Park Neighborhoods We Serve
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
            {[
              'Hackberry Creek area',
              'Preston Hollow border properties',
              'SMU campus vicinity',
              'Turtle Creek corridor',
              'Caruth Boulevard estates',
              'Lovers Lane commercial district'
            ].map((neighborhood, index) => (
              <div key={index} style={{padding: '1.5rem', backgroundColor: '#0d1117', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>{neighborhood}</div>
              </div>
            ))}
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
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Power issues & safety concerns</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>💧 Water Leaks</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Burst pipes & flooding</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>🔥 No Hot Water</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Water heater failures</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d'}}>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', fontWeight: '500'}}>🚽 Major Backups</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem', marginTop: '0.5rem'}}>Severe plumbing blockages</div>
              </div>
            </div>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem'}}>
              Emergency Call: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* About University Park */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center'}}>
              About University Park
            </h2>
            <div style={{padding: '3rem', backgroundColor: '#0d1117', borderRadius: '16px', border: '1px solid #30363d'}}>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2', marginBottom: '1.5rem'}}>
                University Park is an independent municipality completely surrounded by Dallas, known for its top-rated schools 
                (Highland Park ISD), beautiful tree-canopy streets, and proximity to Southern Methodist University.
              </p>
              <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '2'}}>
                With a median home value well above the Dallas average and some of the most architecturally significant properties 
                in North Texas, University Park residents expect - and deserve - premium home service quality. MetroPlex Pros is 
                proud to serve this distinguished community with the same attention to detail and craftsmanship that defines the 
                neighborhood itself.
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
              Schedule Your University Park Service Today
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you need a quick repair or are planning a larger home improvement project, MetroPlex Pros is ready to help. 
              We serve University Park homeowners with the same attention to detail and quality workmanship that's made us a trusted 
              name throughout the DFW area.
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
              Serving University Park and surrounding Dallas communities with professional handyman, electrical, and plumbing services.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
