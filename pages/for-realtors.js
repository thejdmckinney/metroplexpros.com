import Layout from '../components/Layout'
import Link from 'next/link'

export default function ForRealtors() {
  return (
    <Layout 
      title="For Realtors & Property Managers | Market Ready Home Services - Metroplex Pros"
      description="Professional market ready home preparation and rental make ready services for Dallas realtors and property managers. Fast turnaround, competitive pricing, reliable service."
      keywords="market ready homes Dallas, rental make ready services, realtor contractors Dallas, property management contractors, pre-listing home services Dallas, investment property renovation"
      canonicalUrl="https://metroplexpros.com/for-realtors"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                For <span className="text-accent">Realtors & Property Managers</span>
              </h1>
              <p className="hero-subtitle text-tagline">
                Your Trusted Partner for Market Ready Homes
              </p>
              <p className="hero-description">
                We specialize in helping real estate professionals prepare properties for sale and rent. 
                With fast turnaround times, competitive pricing, and reliable service, we're your go-to 
                contractor for market ready preparation and rental make ready services in the DFW area.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn">
                  Partner With Us
                </Link>
                <Link href="tel:682-466-2130" className="btn btn-outline">
                  Call (682) 466-2130
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-logo-container">
                <img src="/logo.svg" alt="Metroplex Pros - Realtor Services Dallas" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Realtors */}
      <section className="section realtor-services">
        <div className="container">
          <h2 className="section-title">Specialized Services for Real Estate Professionals</h2>
          <div className="grid grid-2">
            <div className="service-group">
              <div className="service-header">
                <div className="service-icon">🏡</div>
                <h3>Market Ready Home Preparation</h3>
              </div>
              <p className="service-description">
                Get properties show-ready with our comprehensive pre-listing services designed to maximize appeal and value.
              </p>
              <ul className="service-features">
                <li>Complete interior and exterior painting</li>
                <li>Flooring installation and refinishing</li>
                <li>Kitchen and bathroom updates</li>
                <li>Fixture and lighting upgrades</li>
                <li>Landscaping and curb appeal improvements</li>
                <li>Minor repairs and maintenance issues</li>
                <li>Staging preparation assistance</li>
              </ul>
            </div>
            <div className="service-group">
              <div className="service-header">
                <div className="service-icon">🔑</div>
                <h3>Rental Make Ready Services</h3>
              </div>
              <p className="service-description">
                Fast, efficient turnover services to get rental properties ready for new tenants quickly and professionally.
              </p>
              <ul className="service-features">
                <li>Deep cleaning and preparation</li>
                <li>Paint touch-ups and full room painting</li>
                <li>Carpet cleaning and replacement</li>
                <li>Appliance repair and replacement</li>
                <li>HVAC system maintenance</li>
                <li>Plumbing and electrical repairs</li>
                <li>Safety inspections and updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Real Estate Professionals Choose Metroplex Pros</h2>
          <div className="grid grid-3">
            <div className="advantage-card">
              <div className="advantage-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>We understand time is money in real estate. Our efficient processes and dedicated teams ensure quick project completion without sacrificing quality.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Volume pricing and partnership rates for repeat clients. Transparent estimates with no hidden fees help you budget accurately for each property.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🤝</div>
              <h3>Reliable Partnership</h3>
              <p>Consistent quality, on-time delivery, and professional communication. We're the contractor you can count on for all your properties.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📋</div>
              <h3>Comprehensive Service</h3>
              <p>From minor touch-ups to major renovations, we handle all aspects of property preparation under one roof for your convenience.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">🛡️</div>
              <h3>Licensed & Insured</h3>
              <p>Full licensing and insurance coverage protects you and your clients. Professional work that meets all local codes and standards.</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">📱</div>
              <h3>Easy Communication</h3>
              <p>Direct contractor contact, progress updates, and photo documentation keep you informed throughout every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section service-packages">
        <div className="container">
          <h2 className="section-title">Popular Service Packages</h2>
          <div className="packages-grid">
            <div className="package-card">
              <h3>Basic Refresh Package</h3>
              <div className="package-price">Starting at competitive rates</div>
              <div className="package-description">Perfect for properties in good condition that need minor updates</div>
              <ul className="package-features">
                <li>Interior paint touch-ups</li>
                <li>Deep cleaning</li>
                <li>Minor repairs</li>
                <li>Fixture cleaning and polishing</li>
                <li>Landscaping cleanup</li>
              </ul>
              <Link href="/contact" className="package-btn">Get Quote</Link>
            </div>
            <div className="package-card featured">
              <h3>Market Ready Package</h3>
              <div className="package-price">Custom pricing available</div>
              <div className="package-description">Comprehensive preparation for maximum market appeal</div>
              <ul className="package-features">
                <li>Complete interior painting</li>
                <li>Flooring updates</li>
                <li>Kitchen and bath improvements</li>
                <li>Lighting and fixture upgrades</li>
                <li>Curb appeal enhancements</li>
                <li>All repairs and maintenance</li>
              </ul>
              <Link href="/contact" className="package-btn">Get Quote</Link>
            </div>
            <div className="package-card">
              <h3>Rental Make Ready</h3>
              <div className="package-price">Fast turnaround guaranteed</div>
              <div className="package-description">Complete tenant turnover preparation</div>
              <ul className="package-features">
                <li>Full cleaning and sanitizing</li>
                <li>Paint and touch-ups</li>
                <li>Carpet cleaning/replacement</li>
                <li>Appliance service</li>
                <li>Safety inspections</li>
                <li>Move-in ready certification</li>
              </ul>
              <Link href="/contact" className="package-btn">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section partnership-benefits">
        <div className="container">
          <div className="partnership-content">
            <div className="partnership-text">
              <h2>Partnership Program Benefits</h2>
              <p className="partnership-description">
                Join our preferred partner program and enjoy exclusive benefits designed for busy real estate professionals.
              </p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div>
                    <h4>Priority Scheduling</h4>
                    <p>Partners get priority booking and faster response times for urgent projects.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💳</div>
                  <div>
                    <h4>Volume Discounts</h4>
                    <p>Reduced rates based on annual volume and partnership level.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📊</div>
                  <div>
                    <h4>Property Reports</h4>
                    <p>Detailed before/after documentation and completion reports for your records.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🔧</div>
                  <div>
                    <h4>Emergency Service</h4>
                    <p>24/7 emergency repair service for urgent issues that can affect closing dates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="partnership-stats">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Properties Prepared</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Realtor Partners</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">48hr</div>
                <div className="stat-label">Average Turnaround</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">On-Time Completion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Real Estate Professionals Say</h2>
          <div className="grid grid-2">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Metroplex Pros has been instrumental in helping me prepare properties for market. Their fast turnaround and quality work have helped me close deals faster and at better prices."</p>
              </div>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Keller Williams Realtor</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a property manager with 50+ rental units, I need contractors I can rely on. Jeremy and his team consistently deliver quality work on time and within budget."</p>
              </div>
              <div className="testimonial-author">
                <strong>Mike Rodriguez</strong>
                <span>Property Management Company</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Partner With Us?</h2>
            <p className="text-muted mb-4">
              Let's discuss how we can help you prepare more properties efficiently and profitably. 
              Contact us today to learn about our partnership program and get started.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Become a Partner
              </Link>
              <Link href="/services" className="btn btn-outline">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}