import Layout from '../components/Layout'
import Link from 'next/link'

export default function ServiceAreas() {
  const serviceAreas = [
    {
      city: "Dallas",
      description: "Serving Dallas with comprehensive home improvement services including kitchen remodeling, bathroom renovation, and home additions.",
      population: "1.3 million",
      highlights: ["Downtown Dallas", "Oak Cliff", "East Dallas", "North Dallas"],
      zipCodes: ["75201", "75202", "75203", "75204", "75205", "75206"]
    },
    {
      city: "Plano",
      description: "Premier home improvement contractor in Plano, TX. Specializing in luxury kitchen and bathroom remodels for Plano homeowners.",
      population: "287,000",
      highlights: ["West Plano", "East Plano", "Legacy West", "Willow Bend"],
      zipCodes: ["75023", "75024", "75025", "75074", "75075", "75093"]
    },
    {
      city: "Frisco",
      description: "Top-rated contractors serving Frisco with quality home renovations, flooring installation, and painting services.",
      population: "200,000",
      highlights: ["The Star District", "Stonebriar", "Preston Road Corridor"],
      zipCodes: ["75033", "75034", "75035"]
    },
    {
      city: "McKinney",
      description: "Professional home improvement services in McKinney, TX. Licensed contractors for all your renovation needs.",
      population: "195,000",
      highlights: ["Historic Downtown", "Stonebridge Ranch", "Adriatica"],
      zipCodes: ["75069", "75070", "75071"]
    },
    {
      city: "Allen",
      description: "Trusted Allen contractors providing exceptional kitchen remodeling, bathroom renovation, and home addition services.",
      population: "105,000",
      highlights: ["Bethany Lakes", "Twin Creeks", "Watters Creek"],
      zipCodes: ["75013", "75002"]
    },
    {
      city: "Richardson",
      description: "Quality home improvement contractor serving Richardson with professional renovation and remodeling services.",
      population: "120,000",
      highlights: ["Canyon Creek", "Cottonwood Heights", "Spring Valley"],
      zipCodes: ["75080", "75081", "75082", "75083"]
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
                
                <div className="zip-codes">
                  <h4>Zip Codes Served:</h4>
                  <div className="zip-list">
                    {area.zipCodes.map((zip, idx) => (
                      <span key={idx} className="zip-tag">{zip}</span>
                    ))}
                  </div>
                </div>
                
                <Link href="/contact" className="btn area-cta">
                  Get Free Estimate in {area.city}
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
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Local Experience</span>
                </div>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="placeholder-content">
                <h4>DFW Service Area Map</h4>
                <p>Interactive map showing all cities and zip codes we serve</p>
                <div className="map-icon">🗺️</div>
              </div>
            </div>
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
              <Link href="tel:555-123-4567" className="btn btn-outline">
                Call (555) 123-4567
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 4rem 0 6rem;
          background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .service-areas-grid {
          background: var(--color-bg-alt);
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .area-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .area-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          box-shadow: 0 15px 30px rgba(0, 240, 255, 0.1);
        }

        .area-header h3 {
          color: var(--color-accent);
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .population {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .area-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .area-highlights,
        .zip-codes {
          margin-bottom: 1.5rem;
        }

        .area-highlights h4,
        .zip-codes h4 {
          color: var(--color-text);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .highlights-list,
        .zip-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .highlight-tag,
        .zip-tag {
          background: var(--color-bg-alt);
          color: var(--color-accent);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid var(--color-border);
        }

        .area-cta {
          width: 100%;
          margin-top: 1rem;
        }

        .coverage-map {
          background: var(--color-bg);
        }

        .map-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .coverage-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }

        .coverage-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .coverage-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-accent);
        }

        .stat-label {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .map-placeholder {
          height: 400px;
          background: var(--color-bg-alt);
          border: 2px dashed var(--color-border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .placeholder-content h4 {
          color: var(--color-accent);
          margin-bottom: 1rem;
        }

        .map-icon {
          font-size: 4rem;
          margin-top: 1rem;
        }

        .local-commitment {
          background: var(--color-bg-alt);
        }

        .commitment-description {
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        .local-features {
          margin-top: 3rem;
        }

        .feature {
          text-align: center;
          padding: 2rem 1rem;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature h4 {
          color: var(--color-accent);
          margin-bottom: 1rem;
        }

        .cta {
          background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .areas-grid {
            grid-template-columns: 1fr;
          }

          .map-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .coverage-stats {
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </Layout>
  )
}