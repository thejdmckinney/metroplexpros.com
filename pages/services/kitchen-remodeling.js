import Layout from '../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../components/TrustSignals'


export default function KitchenRemodeling() {
  return (
    <Layout 
      title="Kitchen Remodeling Dallas | Custom Kitchen Renovation - Metroplex Pros"
      description="Transform your kitchen with Metroplex Pros' expert remodeling services in Dallas. Custom cabinets, countertops, appliances & complete kitchen renovations. Free estimates!"
      keywords="kitchen remodeling Dallas, kitchen renovation DFW, custom kitchen cabinets Dallas, kitchen countertops installation, kitchen appliances Dallas, kitchen design Dallas"
      canonicalUrl="https://www.metroplexpros.com/services/kitchen-remodeling/"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Kitchen <span className="text-accent">Remodeling</span>
              </h1>
              <p className="hero-subtitle text-tagline">
                Transform Your Kitchen Into the Heart of Your Home
              </p>
              <p className="hero-description">
                Our expert kitchen remodeling team brings your dream kitchen to life with quality 
                craftsmanship, innovative design, and attention to every detail. From custom cabinets 
                to premium countertops, we create kitchens that are both beautiful and functional.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn">
                  Get Free Estimate
                </Link>
                <Link href="tel:682-466-2130" className="btn btn-outline">
                  Call (682) 466-2130
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-logo-container">
                <img src="/logo.svg" alt="Metroplex Pros Kitchen Remodeling Dallas" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Complete Kitchen Transformation Services</h2>
          <div className="grid grid-2">
            <div className="service-category">
              <h3>Design & Planning</h3>
              <ul>
                <li>3D kitchen design consultation</li>
                <li>Space optimization planning</li>
                <li>Material selection guidance</li>
                <li>Budget planning and timeline</li>
                <li>Permit assistance</li>
              </ul>
            </div>
            <div className="service-category">
              <h3>Cabinetry & Storage</h3>
              <ul>
                <li>Custom cabinet design and installation</li>
                <li>Cabinet refacing and refinishing</li>
                <li>Kitchen island construction</li>
                <li>Pantry and storage solutions</li>
                <li>Soft-close hardware installation</li>
              </ul>
            </div>
            <div className="service-category">
              <h3>Countertops & Surfaces</h3>
              <ul>
                <li>Granite countertop installation</li>
                <li>Quartz and engineered stone</li>
                <li>Marble and natural stone</li>
                <li>Butcher block and wood surfaces</li>
                <li>Backsplash tile installation</li>
              </ul>
            </div>
            <div className="service-category">
              <h3>Appliances & Fixtures</h3>
              <ul>
                <li>Appliance installation and integration</li>
                <li>Kitchen sink and faucet installation</li>
                <li>Under-cabinet lighting</li>
                <li>Kitchen ventilation systems</li>
                <li>Electrical and plumbing work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section our-process">
        <div className="container">
          <h2 className="section-title">Our Kitchen Remodeling Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>We meet with you to understand your vision, needs, and budget. We'll assess your current kitchen space and discuss design possibilities.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Planning</h3>
              <p>Our team creates detailed designs and 3D renderings of your new kitchen. We'll finalize materials, timeline, and provide a comprehensive quote.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Demolition & Preparation</h3>
              <p>We carefully remove existing fixtures and prepare the space for renovation while protecting your home from dust and debris.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Installation & Construction</h3>
              <p>Our skilled craftsmen install cabinets, countertops, appliances, and all finishing touches with precision and attention to detail.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Final Inspection</h3>
              <p>We conduct a thorough walkthrough with you to ensure every detail meets our high standards and your complete satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Features */}
      <section className="section popular-features">
        <div className="container">
          <h2 className="section-title">Popular Kitchen Features</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🏝️</div>
              <h3>Kitchen Islands</h3>
              <p>Custom-built kitchen islands that serve as both workspace and gathering place, with storage and seating options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Under-Cabinet Lighting</h3>
              <p>LED lighting systems that illuminate your workspace and create beautiful ambiance in your kitchen.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Smart Storage</h3>
              <p>Pull-out drawers, lazy Susans, and custom organizers that maximize every inch of storage space.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Backsplashes</h3>
              <p>Beautiful tile work that protects your walls and adds personality to your kitchen design.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Upgraded Electrical</h3>
              <p>Additional outlets, upgraded circuits, and electrical work to support modern kitchen appliances.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚰</div>
              <h3>Premium Fixtures</h3>
              <p>High-quality sinks, faucets, and plumbing fixtures that combine style with functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Transform Your Kitchen?</h2>
            <p className="text-muted mb-4">
              Let's discuss your kitchen remodeling project and create the kitchen of your dreams. 
              Contact us today for a free consultation and detailed estimate.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Schedule Consultation
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