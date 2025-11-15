import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout 
      title="Metroplex Pros - Dallas Home Improvement Contractors | Kitchen & Bathroom Remodeling"
      description="Top-rated Dallas home improvement contractors specializing in kitchen remodeling, bathroom renovation, flooring, painting, electrical, plumbing & HVAC services. Serving Dallas, Plano, Frisco & DFW. Free estimates!"
      keywords="Dallas home improvement, Dallas contractors, kitchen remodeling Dallas, bathroom renovation Plano, Frisco contractors, DFW home renovation, electrical services Dallas, plumbing contractors Texas, HVAC Dallas, licensed contractors Texas"
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
          <div className="grid grid-4">
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
              <div className="service-icon">⚡</div>
              <h3>Electrical Services</h3>
              <p>Professional electrical installations, repairs, and upgrades for residential properties.</p>
            </div>
            <div className="card">
              <div className="service-icon">🔧</div>
              <h3>Plumbing Services</h3>
              <p>Complete plumbing solutions including repairs, installations, and maintenance services.</p>
            </div>
            <div className="card">
              <div className="service-icon">❄️</div>
              <h3>HVAC Services</h3>
              <p>Heating, ventilation, and air conditioning installation, repair, and maintenance services.</p>
            </div>
            <div className="card">
              <div className="service-icon">�️</div>
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