import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mvgdadnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          budget: ''
        });
      } else {
        alert('Sorry, there was an error sending your message. Please try calling us directly.');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try calling us directly.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <Layout 
      title="Get FREE Quote - Dallas Home Improvement | Call (682) 466-2130"
      description="✓ FREE In-Home Estimates ✓ Same-Day Response ✓ Licensed & Insured ✓ 0% Financing Available. Expert kitchen, bathroom & home remodeling in Dallas. 24/7 emergency service. Book now!"
      keywords="contact Dallas contractors, home improvement estimates Dallas, Dallas renovation quotes, free estimates Dallas, emergency home repair Dallas, licensed contractors DFW"
      canonicalUrl="https://metroplexpros.com/contact"
    >
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Metroplex Pros - Dallas Home Improvement Contractors",
            "url": "https://metroplexpros.com/contact",
            "mainEntity": {
              "@type": "HomeImprovementBusiness",
              "name": "Metroplex Pros",
              "telephone": "(682) 466-2130",
              "email": "info@metroplexpros.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "areaServed": [
                {"@type": "City", "name": "Dallas, TX"},
                {"@type": "City", "name": "Plano, TX"},
                {"@type": "City", "name": "Frisco, TX"},
                {"@type": "City", "name": "McKinney, TX"},
                {"@type": "City", "name": "Allen, TX"},
                {"@type": "City", "name": "Richardson, TX"}
              ],
              "priceRange": "$$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "127"
              }
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Contact <span className="text-accent">Metroplex Pros</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              Dallas's Most Trusted Home Improvement Contractors - FREE Estimates!
            </p>
            <p className="hero-description">
              Looking for reliable contractors in Dallas, Plano, Frisco, or surrounding DFW areas? 
              Get your free, no-obligation estimate today! Licensed, insured, and A+ BBB rated with over 500 satisfied customers.
            </p>
            <div className="hero-contact-highlights" style={{display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem'}}>⚡</div>
                <strong>Same-Day Response</strong>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem'}}>✓</div>
                <strong>Licensed & Insured</strong>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem'}}>⭐</div>
                <strong>5.0 Star Rating</strong>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem'}}>🔧</div>
                <strong>24/7 Emergency Service</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info Banner */}
      <section style={{backgroundColor: '#f8f9fa', padding: '2rem 0', borderTop: '3px solid #ff6b35', borderBottom: '3px solid #ff6b35'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', textAlign: 'center'}}>
            <div>
              <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>📞 Call or Text</strong>
              <a href="tel:682-466-2130" style={{fontSize: '1.5rem', color: '#ff6b35', fontWeight: 'bold', textDecoration: 'none'}}>(682) 466-2130</a>
            </div>
            <div>
              <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>📧 Email Us</strong>
              <a href="mailto:info@metroplexpros.com" style={{color: '#ff6b35', textDecoration: 'none'}}>info@metroplexpros.com</a>
            </div>
            <div>
              <strong style={{display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem'}}>⏰ Business Hours</strong>
              <span>Mon-Fri: 8am-6pm | Sat: 9am-4pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Highlight */}
      <section style={{padding: '3rem 0', backgroundColor: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{marginBottom: '1rem'}}>Serving Dallas-Fort Worth Metroplex</h2>
          <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '1.5rem'}}>
            Professional home improvement contractors serving 30+ cities across DFW
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto'}}>
            {['Dallas', 'Plano', 'Frisco', 'McKinney', 'Allen', 'Richardson', 'Garland', 'Irving', 'Carrollton', 'Lewisville', 'Denton', 'Arlington'].map(city => (
              <span key={city} style={{padding: '0.5rem 1rem', backgroundColor: '#f8f9fa', borderRadius: '20px', fontSize: '0.95rem', border: '1px solid #e0e0e0'}}>
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Get Your Free Estimate</h2>
              <p className="form-description text-muted">
                Fill out the form below and we'll contact you within 24 hours to discuss your project.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(682) 466-2130"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="plumbing">Plumbing Services</option>
                      <option value="smart-home">Smart Home Installation</option>
                      <option value="ev-charger">EV Charger Installation</option>
                      <option value="electrical-repair">Electrical Repair/Troubleshooting</option>
                      <option value="plumbing-repair">Plumbing Repair/Emergency</option>
                      <option value="water-heater">Water Heater Service</option>
                      <option value="other">Other Service</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1k">$500 - $1,000</option>
                    <option value="1k-2.5k">$1,000 - $2,500</option>
                    <option value="2.5k-5k">$2,500 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project... What are you looking to accomplish? Any specific requirements or timeline?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <div className="contact-card">
                <h3>Contact Information</h3>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>(682) 466-2130</p>
                    <p className="text-muted">Mon-Fri: 8AM-6PM</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>info@metroplexpros.com</p>
                    <p className="text-muted">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Service Area</h4>
                    <p>Dallas-Fort Worth Metroplex</p>
                    <p className="text-muted">Licensed & Insured in Texas</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-details">
                    <h4>Emergency Service</h4>
                    <p>24/7 Available</p>
                    <p className="text-muted">For urgent repairs</p>
                  </div>
                </div>
              </div>

              <div className="business-hours-card">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Metroplex Pros?</h2>
          <div className="grid grid-4">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Fast Response</h4>
              <p>We respond to all inquiries within 24 hours, often sooner.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Free Estimates</h4>
              <p>All consultations and project estimates are completely free.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>Fully Insured</h4>
              <p>Licensed, bonded, and insured for your complete protection.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h4>5-Star Reviews</h4>
              <p>Consistently rated 5 stars by our satisfied customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans CTA */}
      <section className="section maintenance-cta">
        <div className="container">
          <div className="maintenance-cta-content text-center">
            <h2>Interested in Ongoing Maintenance?</h2>
            <p>
              Keep your home in perfect condition with our comprehensive maintenance service plans. 
              Visit Metroplex Shield to learn about preventive care options.
            </p>
            <a 
              href="https://metroplexshield.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn maintenance-btn"
            >
              Explore Maintenance Plans
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section emergency-cta">
        <div className="container">
          <div className="emergency-content">
            <h2>Need Emergency Service?</h2>
            <p>
              Water damage, electrical issues, or other home emergencies? We're available 24/7 for urgent repairs.
            </p>
            <a href="tel:682-466-2130" className="btn emergency-btn">
              Call Emergency Line: (682) 466-2130
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}