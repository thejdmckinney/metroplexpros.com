import Layout from '../components/Layout'
import Link from 'next/link'
import ServiceAreaMap from '../components/ServiceAreaMap'

export default function ServiceAreas() {
  const serviceAreas = [
    {
      city: "Dallas",
      description: "Serving Dallas with comprehensive home improvement services including kitchen remodeling, bathroom renovation, electrical, plumbing, and HVAC services.",
      population: "1.3 million",
      highlights: ["Downtown Dallas", "Oak Cliff", "East Dallas", "North Dallas"]
    },
    {
      city: "Plano",
      description: "Premier home improvement contractor in Plano, TX. Specializing in luxury kitchen and bathroom remodels for Plano homeowners.",
      population: "287,000",
      highlights: ["West Plano", "East Plano", "Legacy West", "Willow Bend"]
    },
    {
      city: "Frisco",
      description: "Top-rated contractors serving Frisco with quality home renovations, flooring installation, and painting services.",
      population: "200,000",
      highlights: ["The Star District", "Stonebriar", "Preston Road Corridor"]
    },
    {
      city: "McKinney",
      description: "Professional home improvement services in McKinney, TX. Licensed contractors for all your renovation needs.",
      population: "195,000",
      highlights: ["Historic Downtown", "Stonebridge Ranch", "Adriatica"]
    },
    {
      city: "Allen",
      description: "Trusted Allen contractors providing exceptional kitchen remodeling, bathroom renovation, and home addition services.",
      population: "105,000",
      highlights: ["Bethany Lakes", "Twin Creeks", "Watters Creek"]
    },
    {
      city: "Richardson",
      description: "Quality home improvement contractor serving Richardson with professional renovation and remodeling services.",
      population: "120,000",
      highlights: ["Canyon Creek", "Cottonwood Heights", "Spring Valley"]
    }
  ];

  return (
    <Layout 
      title="Service Areas - Dallas DFW Home Improvement Contractors | Metroplex Pros"
      description="Metroplex Pros serves Dallas, Plano, Frisco, McKinney, Allen, Richardson & all DFW cities. Licensed home improvement contractors for kitchen remodeling, bathroom renovation & more."
      keywords="Dallas contractors service area, DFW home improvement, Plano contractors, Frisco renovation, McKinney remodeling, Allen contractors, Richardson home improvement"
      canonicalUrl="https://metroplexpros.com/service-areas"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              <span className="text-accent">Dallas-Fort Worth</span> Service Areas
            </h1>
            <p className="hero-subtitle text-tagline">
              Professional Home Improvement Throughout the Metroplex
            </p>
            <p className="hero-description">
              Metroplex Pros proudly serves homeowners across the Dallas-Fort Worth metroplex with 
              quality home improvement services. From downtown Dallas to suburban Plano, we bring 
              exceptional craftsmanship to your neighborhood.
            </p>
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
            <ServiceAreaMap mapboxToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN} />
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
                <p>15+ years serving DFW communities with deep understanding of local building codes and styles.</p>
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