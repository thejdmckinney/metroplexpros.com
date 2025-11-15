import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout 
      title="Metroplex Pros - Dallas Home Improvement Contractors | Kitchen & Bathroom Remodeling"
      description="Top-rated Dallas home improvement contractors specializing in kitchen remodeling, bathroom renovation, flooring, painting & home additions. Serving Dallas, Plano, Frisco & DFW. Free estimates!"
      keywords="Dallas home improvement, Dallas contractors, kitchen remodeling Dallas, bathroom renovation Plano, Frisco contractors, DFW home renovation, Dallas home additions, licensed contractors Texas"
      canonicalUrl="https://metroplexpros.com"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Transform Your Home with 
                <span className="text-accent"> Metroplex Pros</span>
              </h1>
              <p className="hero-subtitle text-tagline">
                Dallas's Premier Home Improvement Specialists
              </p>
              <p className="hero-description">
                From kitchen remodels to complete home renovations, we bring your vision to life 
                with quality craftsmanship, attention to detail, and exceptional customer service. 
                Serving the Dallas-Fort Worth metroplex with pride.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn">
                  Get Free Estimate
                </Link>
                <Link href="/gallery" className="btn btn-outline">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-logo-container">
                <img src="/logo.svg" alt="Metroplex Pros - Dallas Home Improvement Specialists" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="service-icon">🏠</div>
              <h3>Kitchen Remodeling</h3>
              <p>Complete kitchen transformations with custom cabinets, countertops, and modern appliances.</p>
            </div>
            <div className="card">
              <div className="service-icon">🚿</div>
              <h3>Bathroom Renovation</h3>
              <p>Luxury bathroom upgrades featuring tile work, fixtures, and spa-like amenities.</p>
            </div>
            <div className="card">
              <div className="service-icon">🎨</div>
              <h3>Interior Painting</h3>
              <p>Professional interior and exterior painting services with premium materials.</p>
            </div>
            <div className="card">
              <div className="service-icon">🪟</div>
              <h3>Flooring Installation</h3>
              <p>Hardwood, tile, laminate, and luxury vinyl flooring installation and refinishing.</p>
            </div>
            <div className="card">
              <div className="service-icon">🏗️</div>
              <h3>Home Additions</h3>
              <p>Expand your living space with room additions, outdoor decks, and patios.</p>
            </div>
            <div className="card">
              <div className="service-icon">🔧</div>
              <h3>General Repairs</h3>
              <p>Handyman services for all your home maintenance and repair needs.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="section-title">Why Choose Metroplex Pros?</h2>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">✅</div>
                  <div>
                    <h3>Licensed & Insured</h3>
                    <p>Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">⭐</div>
                  <div>
                    <h3>5-Star Reviews</h3>
                    <p>Consistently rated 5 stars by our satisfied customers throughout the Dallas metroplex.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🛡️</div>
                  <div>
                    <h3>Quality Guarantee</h3>
                    <p>We stand behind our work with comprehensive warranties on all projects.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">💰</div>
                  <div>
                    <h3>Fair Pricing</h3>
                    <p>Transparent, competitive pricing with no hidden fees or surprise charges.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-container">
              <div className="stats">
                <div className="stat">
                  <div className="stat-number text-accent">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">100%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">24/7</div>
                  <div className="stat-label">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Transform Your Home?</h2>
            <p className="text-muted mb-4">
              Contact us today for a free consultation and estimate. Let's bring your vision to life!
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
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%);
          transform: rotate(45deg);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.2;
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
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-logo-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .hero-logo {
          width: 100%;
          max-width: 400px;
          height: auto;
          filter: drop-shadow(0 10px 30px rgba(0, 240, 255, 0.2));
          animation: logoFloat 6s ease-in-out infinite;
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hero-placeholder {
          width: 100%;
          height: 400px;
          background: var(--color-bg-alt);
          border: 2px solid var(--color-border);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .logo-placeholder h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .services-overview {
          background: var(--color-bg-alt);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .feature {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-icon {
          font-size: 1.5rem;
          color: var(--color-accent);
          min-width: 2rem;
        }

        .feature h3 {
          margin-bottom: 0.5rem;
          color: var(--color-accent);
        }

        .stats-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
        }

        .stat-label {
          color: var(--color-text-muted);
          font-weight: 500;
          margin-top: 0.5rem;
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
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-placeholder {
            height: 300px;
          }

          .stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-buttons,
          .cta-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </Layout>
  )
}