import Layout from '../components/Layout'
import Link from 'next/link'
import TrustSignals, { InlineTrustBadges } from '../components/TrustSignals'

export default function Irving() {
  return (
    <Layout 
      title="Irving Electrician, Plumber & Handyman | 24/7 Emergency Service Near Me | Same-Day | MetroPlex Pros"
      description="Licensed Irving electrician, plumber & handyman near me! 24/7 emergency electrical & plumbing service, same-day appointments, FREE estimates. Serving Las Colinas, Valley Ranch & all Irving. Call (682) 466-2130!"
      keywords="Irving electrician, electrician near me Irving, Irving plumber, plumber near me Irving, emergency electrician Irving, Irving handyman, handyman near me Irving, electrician Irving TX, same day plumber Irving, 24 hour electrician Irving, licensed plumber Irving, Las Colinas electrician"
      canonicalUrl="https://www.metroplexpros.com/irving/"
      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-university-park.png',
            width: 1200,
            height: 630,
            alt: 'Irving Electrician & Plumber - Metroplex Pros',
            type: 'image/png'
          }
        ]
      }}
    >
      {/* LocalBusiness Schema for Irving */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Electrician", "Plumber", "ProfessionalService"],
            "name": "MetroPlex Pros - Irving",
            "image": "https://www.metroplexpros.com/logo.svg",
            "@id": "https://www.metroplexpros.com/irving",
            "url": "https://www.metroplexpros.com/irving",
            "telephone": "(682) 466-2130",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Irving",
              "addressLocality": "Irving",
              "addressRegion": "TX",
              "postalCode": "75038",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 32.8140,
              "longitude": -96.9489
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
              "name": "Irving",
              "sameAs": "https://en.wikipedia.org/wiki/Irving,_Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Irving Electrical & Plumbing Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "24/7 Emergency Electrical Service"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Plumbing Repairs"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Panel Upgrades"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Water Heater Repair & Replacement"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Handyman Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Electrical Services"}}
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

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
              SERVING IRVING SINCE 2010 • 24/7 EMERGENCY SERVICE
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              Irving's Premier <span className="text-accent">Electrician & Plumber</span>
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Licensed • Insured • Same-Day Service • FREE Estimates
            </p>
            <p className="hero-description" style={{maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.8', color: '#8b949e'}}>
              Searching for a trusted electrician or plumber near me in Irving? MetroPlex Pros delivers expert electrical 
              repairs, plumbing services, and handyman work throughout Irving, Las Colinas, Valley Ranch, and DFW Airport area. 
              Fast response times, honest pricing, and quality workmanship guaranteed.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.2rem', padding: '1.2rem 2.5rem', background: 'linear-gradient(135deg, #00f0ff, #0088cc)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.4)'}}>
                📞 Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Get FREE Estimate
              </Link>
            </div>
            <div style={{display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid #30363d'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>15+</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Years in Irving</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Emergency Service</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>Same Day</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Appointments</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>FREE</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Estimates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals variant="compact" />

      {/* Services Overview */}
      <section className="section" style={{background: '#0d1117'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '3rem'}}>
            Professional Services for <span className="text-accent">Irving Homes & Businesses</span>
          </h2>
          
          <div className="services-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
            
            {/* Electrical Services */}
            <div className="service-card" style={{background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', padding: '2rem', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>Electrical Services</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#8b949e', lineHeight: '2'}}>
                <li>✓ 24/7 emergency electrical repairs</li>
                <li>✓ Panel upgrades & replacements</li>
                <li>✓ Commercial electrical service</li>
                <li>✓ Lighting installation & repair</li>
                <li>✓ Outlet & circuit repairs</li>
                <li>✓ Code violations & inspections</li>
                <li>✓ Generator installation</li>
              </ul>
              <Link href="/services/electrical" className="btn btn-outline" style={{marginTop: '1.5rem', display: 'inline-block'}}>
                View Electrical Services →
              </Link>
            </div>

            {/* Plumbing Services */}
            <div className="service-card" style={{background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', padding: '2rem', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔧</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>Plumbing Services</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#8b949e', lineHeight: '2'}}>
                <li>✓ 24/7 emergency plumbing</li>
                <li>✓ Water heater repair & replacement</li>
                <li>✓ Drain cleaning & sewer repair</li>
                <li>✓ Leak detection & repair</li>
                <li>✓ Fixture installation</li>
                <li>✓ Pipe replacement & repiping</li>
                <li>✓ Slab leak detection</li>
              </ul>
              <Link href="/services/plumbing" className="btn btn-outline" style={{marginTop: '1.5rem', display: 'inline-block'}}>
                View Plumbing Services →
              </Link>
            </div>

            {/* Handyman & Smart Home */}
            <div className="service-card" style={{background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', padding: '2rem', borderRadius: '12px', border: '1px solid #30363d'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔨</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>Handyman & Smart Home</h3>
              <ul style={{listStyle: 'none', padding: 0, color: '#8b949e', lineHeight: '2'}}>
                <li>✓ Smart home installation</li>
                <li>✓ Drywall repair & painting</li>
                <li>✓ Door & window repairs</li>
                <li>✓ Ceiling fan installation</li>
                <li>✓ TV mounting</li>
                <li>✓ General home repairs</li>
                <li>✓ Fixture installation</li>
              </ul>
              <Link href="/services/handyman" className="btn btn-outline" style={{marginTop: '1.5rem', display: 'inline-block'}}>
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{background: '#161b22'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '3rem'}}>
            Why Irving Trusts <span className="text-accent">MetroPlex Pros</span>
          </h2>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏆</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>Licensed & Insured</h3>
              <p style={{color: '#8b949e'}}>Fully licensed electricians and plumbers. All work guaranteed and insured for your peace of mind.</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>Same-Day Service</h3>
              <p style={{color: '#8b949e'}}>Need service today? We offer same-day appointments for most electrical and plumbing repairs in Irving.</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>FREE Estimates</h3>
              <p style={{color: '#8b949e'}}>Get a free, no-obligation estimate on all services. Transparent pricing with no hidden fees.</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⏰</div>
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>24/7 Emergency</h3>
              <p style={{color: '#8b949e'}}>Electrical or plumbing emergency? We're available 24/7 to handle urgent repairs anywhere in Irving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="section" style={{background: '#0d1117'}}>
        <div className="container">
          <h2 className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>
            <span className="text-accent">Irving Areas</span> We Serve
          </h2>
          <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: '#8b949e', fontSize: '1.1rem'}}>
            Looking for an electrician or plumber near me in Irving? We proudly serve all Irving neighborhoods, including:
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', textAlign: 'center'}}>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>Las Colinas</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>Valley Ranch</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>DFW Airport Area</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>Downtown Irving</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>North Irving</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>South Irving</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>University Hills</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>Hackberry Creek</p>
            </div>
            <div style={{padding: '1rem', background: '#161b22', borderRadius: '8px'}}>
              <p style={{color: '#c9d1d9', margin: 0}}>Cottonwood Valley</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #00f0ff15, #0088cc15)', borderTop: '1px solid #30363d', borderBottom: '1px solid #30363d'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
            Need an Electrician or Plumber in Irving?
          </h2>
          <p style={{fontSize: '1.2rem', color: '#8b949e', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem'}}>
            Don't wait for the problem to get worse! Call MetroPlex Pros now for fast, reliable service. Available 24/7 for emergency repairs.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.2rem', padding: '1.2rem 2.5rem'}}>
              📞 Call (682) 466-2130 Now
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
              Schedule Service Online
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
