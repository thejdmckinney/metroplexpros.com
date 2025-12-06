import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout 
      title="Dallas Home Improvement Contractors | Kitchen & Bath Remodel | Metroplex Pros"
      description="⭐ Top-Rated Dallas Contractors! Kitchen remodels from $15K, bathroom renovations, flooring, electrical & plumbing. Licensed, insured, 5-year warranty. FREE estimates! Call (682) 466-2130 today!"
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
          <div className="grid services-grid">
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
              <div className="service-icon">🏗️</div>
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
              <div className="service-icon">🔧</div>
              <h3>General Repairs</h3>
              <p>Handyman services for all your home maintenance and repair needs.</p>
            </div>
            <div className="card">
              <div className="service-icon">🏡</div>
              <h3>Smart Home Installations</h3>
              <p>Modern smart home technology integration including thermostats, lighting, security systems, and automation.</p>
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
                  <div className="stat-number text-accent">Licensed</div>
                  <div className="stat-label">& Insured</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">20+</div>
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

      {/* FAQ Section with Schema */}
      <section className="section faq-section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="text-center text-muted mb-5">Common questions about our Dallas home improvement services</p>
          
          <div className="faq-grid" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a'}}>What areas do you serve in the Dallas-Fort Worth metroplex?</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>We serve Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Irving, and surrounding DFW areas. We offer free in-home estimates throughout the entire metroplex with same-day availability for emergency services.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a'}}>How much does a kitchen remodel cost in Dallas?</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>Kitchen remodels in Dallas typically range from $15,000 for basic updates to $75,000+ for high-end renovations. We offer free detailed estimates and flexible financing options including 0% financing for qualified homeowners. Final costs depend on materials, size, and scope of work.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a'}}>Are you licensed and insured contractors?</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>Yes! Metroplex Pros is fully licensed, bonded, and insured to operate in Texas. We carry comprehensive liability insurance and workers' compensation coverage. All our work comes with a 5-year craftsmanship warranty and we're A+ rated with the BBB.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a'}}>How long does a typical bathroom renovation take?</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>Most bathroom renovations take 2-3 weeks from start to finish. Simple updates can be completed in 5-7 days, while luxury master bath remodels may take 4-6 weeks. We provide detailed project timelines during your free consultation and keep you informed throughout the entire process.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a'}}>Do you offer emergency home repair services?</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>Yes! We provide 24/7 emergency services for urgent issues like plumbing leaks, electrical problems, HVAC failures, and storm damage. Call (682) 466-2130 anytime for immediate assistance. Our emergency response team is available nights, weekends, and holidays.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a'}}>What financing options are available?</h3>
              <p style={{color: '#666', lineHeight: '1.6'}}>We offer flexible financing with approved credit, including 0% interest plans for 12-18 months. We also accept all major credit cards, personal checks, and can work with your home equity line of credit. Payment plans can be customized to fit your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What areas do you serve in the Dallas-Fort Worth metroplex?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Irving, and surrounding DFW areas. We offer free in-home estimates throughout the entire metroplex with same-day availability for emergency services."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a kitchen remodel cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kitchen remodels in Dallas typically range from $15,000 for basic updates to $75,000+ for high-end renovations. We offer free detailed estimates and flexible financing options including 0% financing for qualified homeowners."
                }
              },
              {
                "@type": "Question",
                "name": "Are you licensed and insured contractors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Metroplex Pros is fully licensed, bonded, and insured to operate in Texas. We carry comprehensive liability insurance and workers' compensation coverage. All our work comes with a 5-year craftsmanship warranty and we're A+ rated with the BBB."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a typical bathroom renovation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most bathroom renovations take 2-3 weeks from start to finish. Simple updates can be completed in 5-7 days, while luxury master bath remodels may take 4-6 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency home repair services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We provide 24/7 emergency services for urgent issues like plumbing leaks, electrical problems, HVAC failures, and storm damage. Call (682) 466-2130 anytime for immediate assistance."
                }
              },
              {
                "@type": "Question",
                "name": "What financing options are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer flexible financing with approved credit, including 0% interest plans for 12-18 months. We also accept all major credit cards, personal checks, and can work with your home equity line of credit."
                }
              }
            ]
          })
        }}
      />

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
            <p className="mt-3 text-sm">
              <em>Real estate professionals: Check out our <Link href="/for-realtors" className="text-accent">specialized services for realtors & property managers</Link></em>
            </p>
          </div>
        </div>
      </section>


    </Layout>
  )
}