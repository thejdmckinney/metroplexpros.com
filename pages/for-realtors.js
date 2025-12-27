import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function ForRealtors() {
  return (
    <Layout 
      title="For Realtors & Property Managers | Market Ready Home Services - Metroplex Pros"
      description="Professional market ready home preparation and rental make ready services for Dallas realtors and property managers. Fast turnaround, competitive pricing, reliable service."
      keywords="market ready homes Dallas, rental make ready services, realtor contractors Dallas, property management contractors, pre-listing home services Dallas, investment property renovation"
      canonicalUrl="https://www.metroplexpros.com/for-realtors/"
    >
      {/* Structured Data for Better SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Real Estate Professional Services",
            "description": "Market ready home preparation and rental make ready services for Dallas realtors and property managers",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Metroplex Pros",
              "url": "https://www.metroplexpros.com",
              "telephone": "(682) 466-2130",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "addressCountry": "US"
              }
            },
            "serviceType": "Home Improvement Services for Real Estate",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 32.7767,
                "longitude": -96.7970
              },
              "geoRadius": 50000
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Real Estate Professionals"
            },
            "url": "https://www.metroplexpros.com/for-realtors"
          })
        }}
      />

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
          
          {/* Package 1 - Basic Refresh */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem', padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
            <div>
              <h3 style={{color: '#00f0ff', fontSize: '2rem', marginBottom: '1rem'}}>Basic Refresh Package</h3>
              <div style={{color: '#8b949e', fontSize: '1.2rem', marginBottom: '1rem'}}>Starting at competitive rates</div>
              <p style={{color: '#c9d1d9', marginBottom: '1.5rem', fontSize: '1.1rem'}}>Perfect for properties in good condition that need minor updates</p>
              <ul style={{color: '#c9d1d9', lineHeight: '2', marginBottom: '2rem'}}>
                <li>✓ Interior paint touch-ups</li>
                <li>✓ Deep cleaning</li>
                <li>✓ Minor repairs</li>
                <li>✓ Fixture cleaning and polishing</li>
                <li>✓ Landscaping cleanup</li>
              </ul>
              <Link href="/contact" className="btn">Get Quote</Link>
            </div>
            <div style={{position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image 
                src="/basic_refrest.png" 
                alt="Basic Refresh Package - Minor updates and cleaning"
                width={600}
                height={400}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                loading="lazy"
              />
            </div>
          </div>

          {/* Package 2 - Market Ready (Featured - Image on Left) */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem', padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '2px solid #00f0ff', boxShadow: '0 0 20px rgba(0,240,255,0.3)'}}>
            <div style={{position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image 
                src="/market_ready.png" 
                alt="Market Ready Package - Comprehensive property preparation"
                width={600}
                height={400}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                loading="lazy"
              />
            </div>
            <div>
              <div style={{display: 'inline-block', backgroundColor: '#00f0ff', color: '#0d1117', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem'}}>MOST POPULAR</div>
              <h3 style={{color: '#00f0ff', fontSize: '2rem', marginBottom: '1rem'}}>Market Ready Package</h3>
              <div style={{color: '#8b949e', fontSize: '1.2rem', marginBottom: '1rem'}}>Custom pricing available</div>
              <p style={{color: '#c9d1d9', marginBottom: '1.5rem', fontSize: '1.1rem'}}>Comprehensive preparation for maximum market appeal</p>
              <ul style={{color: '#c9d1d9', lineHeight: '2', marginBottom: '2rem'}}>
                <li>✓ Complete interior painting</li>
                <li>✓ Flooring updates</li>
                <li>✓ Kitchen and bath improvements</li>
                <li>✓ Lighting and fixture upgrades</li>
                <li>✓ Curb appeal enhancements</li>
                <li>✓ All repairs and maintenance</li>
              </ul>
              <Link href="/contact" className="btn">Get Quote</Link>
            </div>
          </div>

          {/* Package 3 - Rental Make Ready */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d'}}>
            <div>
              <h3 style={{color: '#00f0ff', fontSize: '2rem', marginBottom: '1rem'}}>Rental Make Ready</h3>
              <div style={{color: '#8b949e', fontSize: '1.2rem', marginBottom: '1rem'}}>Fast turnaround guaranteed</div>
              <p style={{color: '#c9d1d9', marginBottom: '1.5rem', fontSize: '1.1rem'}}>Complete tenant turnover preparation</p>
              <ul style={{color: '#c9d1d9', lineHeight: '2', marginBottom: '2rem'}}>
                <li>✓ Full cleaning and sanitizing</li>
                <li>✓ Paint and touch-ups</li>
                <li>✓ Carpet cleaning/replacement</li>
                <li>✓ Appliance service</li>
                <li>✓ Safety inspections</li>
                <li>✓ Move-in ready certification</li>
              </ul>
              <Link href="/contact" className="btn">Get Quote</Link>
            </div>
            <div style={{position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image 
                src="/rmr.png" 
                alt="Rental Make Ready Package - Tenant turnover services"
                width={600}
                height={400}
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
                loading="lazy"
              />
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
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Licensed</div>
                <div className="stat-label">& Insured</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Fast</div>
                <div className="stat-label">Turnaround</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Quality</div>
                <div className="stat-label">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section why-partner">
        <div className="container">
          <h2 className="section-title">Ready to Build a Partnership?</h2>
          <p className="section-description text-center">
            We're looking to establish long-term relationships with Dallas area real estate professionals. 
            Let's discuss how we can support your business with reliable, quality home preparation services.
          </p>
          <div className="partnership-intro">
            <div className="intro-content">
              <h3>What We Offer Partners:</h3>
              <ul>
                <li>Responsive communication and quick project estimates</li>
                <li>Flexible scheduling to meet your closing timelines</li>
                <li>Professional work that helps properties show their best</li>
                <li>Honest, transparent pricing with no surprises</li>
                <li>Licensed and insured for your peace of mind</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="section partner-application">
        <div className="container">
          <div className="application-content">
            <div className="application-intro">
              <h2>Become a Partner</h2>
              <p>
                Ready to work together? Fill out this quick form to get started. We'll contact you within 
                24 hours to discuss partnership opportunities and how we can support your business.
              </p>
            </div>
            
            <form className="partner-form" action="https://formspree.io/f/mvgdadnq" method="POST">
              <input type="hidden" name="_subject" value="New Realtor Partnership Inquiry" />
              <input type="hidden" name="form_type" value="partner_application" />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="partner_name">Full Name *</label>
                  <input
                    type="text"
                    id="partner_name"
                    name="partner_name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="partner_email">Email Address *</label>
                  <input
                    type="email"
                    id="partner_email"
                    name="partner_email"
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="partner_phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="partner_phone"
                    name="partner_phone"
                    required
                    placeholder="(682) 466-2130"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="partner_company">Company/Brokerage</label>
                  <input
                    type="text"
                    id="partner_company"
                    name="partner_company"
                    placeholder="Your brokerage or company name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="partner_role">Your Role *</label>
                <select id="partner_role" name="partner_role" required>
                  <option value="">Select your role</option>
                  <option value="realtor">Real Estate Agent/Realtor</option>
                  <option value="broker">Broker</option>
                  <option value="property_manager">Property Manager</option>
                  <option value="investor">Real Estate Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="monthly_volume">Approximate Monthly Property Volume</label>
                <select id="monthly_volume" name="monthly_volume">
                  <option value="">Select volume range</option>
                  <option value="1-3">1-3 properties per month</option>
                  <option value="4-8">4-8 properties per month</option>
                  <option value="9-15">9-15 properties per month</option>
                  <option value="16+">16+ properties per month</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="service_interest">Services You're Most Interested In *</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="service_interest" value="market_ready" />
                    <span>Market Ready Home Preparation</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="service_interest" value="rental_make_ready" />
                    <span>Rental Make Ready Services</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="service_interest" value="minor_repairs" />
                    <span>Minor Repairs & Touch-ups</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="service_interest" value="major_renovations" />
                    <span>Major Renovations</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="partnership_goals">What are your main goals for this partnership?</label>
                <textarea
                  id="partnership_goals"
                  name="partnership_goals"
                  rows="4"
                  placeholder="Tell us about your business needs, typical project timelines, budget ranges, or any specific requirements..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="preferred_contact">Preferred Contact Method</label>
                <select id="preferred_contact" name="preferred_contact">
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                  <option value="text">Text Message</option>
                </select>
              </div>

              <button type="submit" className="btn btn-submit">
                Submit Partnership Application
              </button>
              
              <p className="form-note">
                We'll review your application and contact you within 24 hours to discuss partnership opportunities.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}