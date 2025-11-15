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
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        budget: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout 
      title="Contact Metroplex Pros - Dallas Home Improvement Contractors | Free Estimates"
      description="Contact Metroplex Pros for your Dallas home improvement project. Free estimates, 24/7 emergency service. Call (555) 123-4567 or request quote online today!"
      keywords="contact Dallas contractors, home improvement estimates Dallas, Dallas renovation quotes, Metroplex Pros contact, DFW contractors phone number"
      canonicalUrl="https://metroplexpros.com/contact"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Contact <span className="text-accent">Metroplex Pros</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              Ready to Transform Your Home?
            </p>
            <p className="hero-description">
              Get in touch with Dallas's premier home improvement specialists. We're here to bring your vision to life 
              with quality craftsmanship and exceptional service.
            </p>
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
                      placeholder="(555) 123-4567"
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
                      <option value="kitchen">Kitchen Remodeling</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="painting">Painting Services</option>
                      <option value="flooring">Flooring Installation</option>
                      <option value="additions">Home Additions</option>
                      <option value="roofing">Roofing Services</option>
                      <option value="other">Other/Multiple Services</option>
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
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
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
                    <p>(555) 123-4567</p>
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

              <div className="service-areas-card">
                <h3>We Serve These Areas</h3>
                <div className="areas-list">
                  <span>Dallas</span>
                  <span>Plano</span>
                  <span>Frisco</span>
                  <span>McKinney</span>
                  <span>Allen</span>
                  <span>Richardson</span>
                  <span>Garland</span>
                  <span>Irving</span>
                  <span>Carrollton</span>
                  <span>Fort Worth</span>
                  <span>Arlington</span>
                  <span>Grand Prairie</span>
                </div>
                <p className="text-muted text-center mt-2">
                  Don't see your city? <span className="text-accent">Call us!</span> We may still service your area.
                </p>
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

      {/* Call to Action */}
      <section className="section emergency-cta">
        <div className="container">
          <div className="emergency-content">
            <h2>Need Emergency Service?</h2>
            <p>
              Water damage, electrical issues, or other home emergencies? We're available 24/7 for urgent repairs.
            </p>
            <a href="tel:555-123-4567" className="btn emergency-btn">
              Call Emergency Line: (555) 123-4567
            </a>
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

        .contact-section {
          background: var(--color-bg-alt);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          align-items: start;
        }

        .contact-form-container h2 {
          color: var(--color-accent);
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        .form-description {
          margin-bottom: 2rem;
        }

        .contact-form {
          background: var(--color-bg);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--color-border);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--color-text);
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--color-bg-alt);
          border: 1px solid var(--color-border);
          border-radius: 5px;
          color: var(--color-text);
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 2px rgba(0, 240, 255, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-info-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-card,
        .business-hours-card,
        .service-areas-card {
          background: var(--color-bg);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--color-border);
        }

        .contact-card h3,
        .business-hours-card h3,
        .service-areas-card h3 {
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 1.5rem;
          min-width: 2rem;
        }

        .contact-details h4 {
          color: var(--color-text);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .contact-details p {
          margin: 0;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }

        .hours-item span:first-child {
          color: var(--color-text-muted);
        }

        .hours-item span:last-child {
          color: var(--color-text);
          font-weight: 500;
        }

        .areas-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .areas-list span {
          background: var(--color-bg-alt);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.9rem;
          color: var(--color-accent);
          border: 1px solid var(--color-border);
        }

        .why-choose {
          background: var(--color-bg);
        }

        .feature-card {
          text-align: center;
          padding: 2rem 1rem;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .feature-card h4 {
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .emergency-cta {
          background: linear-gradient(135deg, var(--color-accent2), var(--color-accent));
          color: var(--color-bg);
        }

        .emergency-content {
          text-align: center;
          padding: 2rem 0;
        }

        .emergency-content h2 {
          color: var(--color-bg);
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        .emergency-content p {
          color: var(--color-bg);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .emergency-btn {
          background: var(--color-bg);
          color: var(--color-accent);
          font-size: 1.1rem;
          padding: 1rem 2rem;
          text-decoration: none;
          display: inline-block;
        }

        .emergency-btn:hover {
          background: var(--color-bg-alt);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .contact-card,
          .business-hours-card,
          .service-areas-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}