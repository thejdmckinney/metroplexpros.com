import Layout from '../components/Layout'
import Link from 'next/link'
import ServiceAreaMap from '../components/ServiceAreaMap'

export default function ServiceAreas() {
  const serviceAreas = [
    {
      city: "Dallas",
      description: "Licensed Dallas electricians & plumbers providing expert electrical repairs, plumbing services, and smart home installations throughout Dallas, TX.",
      population: "1.3 million",
      highlights: ["Downtown Dallas", "Oak Cliff", "East Dallas", "North Dallas"]
    },
    {
      city: "Plano",
      description: "Professional Plano electricians & plumbers specializing in electrical repairs, plumbing services, and smart home automation for Plano homes.",
      population: "287,000",
      highlights: ["West Plano", "East Plano", "Legacy West", "Willow Bend"]
    },
    {
      city: "Frisco",
      description: "Top-rated Frisco electricians & plumbers offering electrical repairs, plumbing solutions, and smart home technology installations.",
      population: "200,000",
      highlights: ["The Star District", "Stonebriar", "Preston Road Corridor"]
    },
    {
      city: "McKinney",
      description: "Expert McKinney electricians & plumbers providing electrical services, plumbing repairs, and smart home installations with 24/7 emergency service.",
      population: "195,000",
      highlights: ["Historic Downtown", "Stonebridge Ranch", "Adriatica"]
    },
    {
      city: "Allen",
      description: "Trusted Allen electricians & plumbers delivering professional electrical repairs, plumbing services, and home automation solutions.",
      population: "105,000",
      highlights: ["Bethany Lakes", "Twin Creeks", "Watters Creek"]
    },
    {
      city: "Richardson",
      description: "Licensed Richardson electricians & plumbers offering quality electrical services, plumbing repairs, and smart home installations.",
      population: "120,000",
      highlights: ["Canyon Creek", "Cottonwood Heights", "Spring Valley"]
    }
  ];

  return (
    <Layout 
      title="Electrician & Plumber Service Areas: Dallas, Plano, Frisco | DFW"
      description="⭐ Licensed electricians & plumbers serving 30+ DFW cities! Expert electrical repairs, plumbing services & smart home installations in Dallas, Plano, Frisco, McKinney, Allen. 24/7 emergency service. Call (682) 466-2130!"
      keywords="Dallas electrician service area, Plano plumber, Frisco electrician, McKinney plumber, Allen electrician, Richardson plumber, DFW electrician, North Dallas plumber, smart home installer DFW"
      canonicalUrl="https://metroplexpros.com/service-areas"
    >
      {/* Service Areas Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical, Plumbing & Smart Home Services",
            "provider": {
              "@type": "Electrician",
              "name": "Metroplex Pros",
              "telephone": "(682) 466-2130",
              "priceRange": "$$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "127"
              }
            },
            "areaServed": [
              {"@type": "City", "name": "Dallas", "sameAs": "https://en.wikipedia.org/wiki/Dallas"},
              {"@type": "City", "name": "Plano", "sameAs": "https://en.wikipedia.org/wiki/Plano,_Texas"},
              {"@type": "City", "name": "Frisco", "sameAs": "https://en.wikipedia.org/wiki/Frisco,_Texas"},
              {"@type": "City", "name": "McKinney", "sameAs": "https://en.wikipedia.org/wiki/McKinney,_Texas"},
              {"@type": "City", "name": "Allen", "sameAs": "https://en.wikipedia.org/wiki/Allen,_Texas"},
              {"@type": "City", "name": "Richardson", "sameAs": "https://en.wikipedia.org/wiki/Richardson,_Texas"},
              {"@type": "City", "name": "Garland", "sameAs": "https://en.wikipedia.org/wiki/Garland,_Texas"},
              {"@type": "City", "name": "Irving", "sameAs": "https://en.wikipedia.org/wiki/Irving,_Texas"}
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electrical, Plumbing & Smart Home Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Repairs"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Plumbing Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Installations"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Electrical Service"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Plumbing Service"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Home Automation"}}
              ]
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              <span className="text-accent">Dallas-Fort Worth</span> Electrical & Plumbing Services
            </h1>
            <p className="hero-subtitle text-tagline">
              Licensed Electricians & Plumbers Serving 30+ DFW Cities
            </p>
            <p className="hero-description">
              Metroplex Pros proudly serves homeowners in Dallas, Plano, Frisco, McKinney, Allen, Richardson, and all surrounding DFW communities with 
              professional electrical, plumbing, and smart home installation services. Licensed professionals with 15+ years of experience bringing quality workmanship to your neighborhood. 
              <strong> Call (682) 466-2130 for FREE estimates or 24/7 emergency service!</strong>
            </p>
            <div style={{marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>500+</div>
                <div>Happy Customers</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>30+</div>
                <div>Cities Served</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>15+</div>
                <div>Years Experience</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>⭐ 5.0</div>
                <div>Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services by City */}
      <section style={{padding: '3rem 0', backgroundColor: '#0d1117'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '1rem', color: '#ffffff'}}>Popular Services by City</h2>
          <p style={{textAlign: 'center', color: '#8b949e', marginBottom: '3rem'}}>
            Our most requested electrical, plumbing, and smart home services across the Dallas-Fort Worth metroplex
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
            <div style={{padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Dallas Electrical Services</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Licensed Dallas electricians for panel upgrades, outlet installation, lighting, EV charger installation, and 24/7 emergency electrical repairs.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Plano Plumbing Repairs</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Expert Plano plumbers for leak repairs, drain cleaning, water heater installation, fixture upgrades, and emergency plumbing services.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Frisco Smart Home Installations</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Complete smart home automation in Frisco including smart thermostats, lighting systems, video doorbells, and whole-home integration.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>McKinney Electricians</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Trusted McKinney electricians for residential electrical work, ceiling fans, recessed lighting, generators, and code compliance inspections.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Allen Plumbing Services</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Expert Allen plumbers specializing in water heater repairs, sewer line cleaning, fixture installation, and 24/7 emergency plumbing.</p>
            </div>
            <div style={{padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Richardson EV Charger Installation</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Professional EV charger installation in Richardson for Tesla, Chevy, Ford & all electric vehicles. Level 1 & 2 charging stations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DFW Metroplex Image */}
      <section className="section dfw-hero-image">
        <div className="container">
          <div className="metroplex-image-container">
            <img 
              src="/dfw-metroplex-hero.png" 
              alt="Dallas-Fort Worth Metroplex Skyline - Service Area Coverage" 
              className="metroplex-hero-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>Serving the Entire DFW Metroplex</h3>
                <p>Professional home improvement services across all major cities and suburbs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="section service-areas-grid">
        <div className="container">
          <h2 className="section-title">Cities We Serve</h2>
          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-header">
                  <h3>{area.city}, Texas</h3>
                  <p className="population">Population: {area.population}</p>
                </div>
                
                <p className="area-description">{area.description}</p>
                
                <div className="area-highlights">
                  <h4>Popular Areas:</h4>
                  <div className="highlights-list">
                    {area.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                </div>
                
                <Link href="/contact" className="btn area-cta">
                  Get Free Estimate
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="section coverage-map">
        <div className="container">
          <h2 className="section-title">Our Coverage Area</h2>
          <div className="map-content">
            <div className="map-info">
              <h3>Complete DFW Metroplex Coverage</h3>
              <p>
                Metroplex Pros provides comprehensive home improvement services throughout 
                the Dallas-Fort Worth metroplex. Our service area includes:
              </p>
              <ul className="coverage-list">
                <li>✅ <strong>Dallas County:</strong> Dallas, Garland, Irving, Mesquite, Carrollton</li>
                <li>✅ <strong>Collin County:</strong> Plano, Frisco, McKinney, Allen, Richardson</li>
                <li>✅ <strong>Tarrant County:</strong> Fort Worth, Arlington, Grand Prairie</li>
                <li>✅ <strong>Denton County:</strong> Denton, Flower Mound, Lewisville, Grapevine</li>
              </ul>
              <div className="coverage-stats">
                <div className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Cities Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Licensed</span>
                  <span className="stat-label">& Insured</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <ServiceAreaMap mapboxToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoidGhlamRtY2tpbm5leSIsImEiOiJjbWdkeHd1enYwbTVvMm5vZ2cyNWloZzZsIn0.XDn0iUiSQ22h8y1HvqDb0g'} />
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="section local-commitment">
        <div className="container">
          <div className="commitment-content text-center">
            <h2>Committed to Dallas-Fort Worth Communities</h2>
            <p className="commitment-description">
              As a locally-owned business, we understand the unique needs of DFW homeowners. 
              From historic Dallas neighborhoods to modern Plano developments, we tailor our 
              services to match local architectural styles and community standards.
            </p>
            
            <div className="local-features grid grid-3">
              <div className="feature">
                <div className="feature-icon">🏠</div>
                <h4>Local Expertise</h4>
                <p>20+ years serving DFW communities with deep understanding of local building codes and styles.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <h4>Fast Response</h4>
                <p>Local presence means faster response times and easier scheduling across all service areas.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <h4>Community Focused</h4>
                <p>Supporting local suppliers and subcontractors while giving back to DFW communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Start Your Project?</h2>
            <p className="text-muted mb-4">
              No matter where you are in the DFW metroplex, Metroplex Pros is ready to transform your home. 
              Contact us today for your free consultation and estimate!
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Get Free Estimate
              </Link>
              <Link href="tel:682-466-2130" className="btn btn-outline">
                Call (682) 466-2130
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}