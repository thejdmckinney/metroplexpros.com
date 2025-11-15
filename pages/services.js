import Layout from '../components/Layout'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Kitchen Remodeling",
      icon: "🏠",
      description: "Complete kitchen transformations from design to completion",
      features: [
        "Custom cabinet installation",
        "Countertop installation (granite, quartz, marble)",
        "Appliance installation and integration",
        "Kitchen island construction",
        "Backsplash installation",
        "Plumbing and electrical work"
      ],
      price: "Starting at $15,000"
    },
    {
      title: "Bathroom Renovation",
      icon: "🚿",
      description: "Luxury bathroom upgrades and complete renovations",
      features: [
        "Tile and flooring installation",
        "Vanity and fixture installation",
        "Walk-in shower and tub installation",
        "Bathroom lighting design",
        "Plumbing modifications",
        "ADA compliance modifications"
      ],
      price: "Starting at $8,000"
    },
    {
      title: "Interior & Exterior Painting",
      icon: "🎨",
      description: "Professional painting services inside and out",
      features: [
        "Interior wall painting",
        "Exterior house painting",
        "Cabinet painting and refinishing",
        "Trim and detail work",
        "Pressure washing preparation",
        "Color consultation"
      ],
      price: "Starting at $3,000"
    },
    {
      title: "Flooring Installation",
      icon: "🪟",
      description: "All types of flooring installation and refinishing",
      features: [
        "Hardwood flooring installation",
        "Tile and stone installation",
        "Luxury vinyl plank (LVP)",
        "Laminate flooring",
        "Carpet installation",
        "Floor refinishing and restoration"
      ],
      price: "Starting at $5,000"
    },
    {
      title: "Home Additions",
      icon: "🏗️",
      description: "Expand your living space with custom additions",
      features: [
        "Room additions",
        "Second story additions",
        "Garage construction",
        "Outdoor decks and patios",
        "Pergolas and outdoor structures",
        "ADU (Accessory Dwelling Units)"
      ],
      price: "Starting at $25,000"
    },
    {
      title: "Roofing Services",
      icon: "🏠",
      description: "Complete roofing solutions and repairs",
      features: [
        "Roof replacement",
        "Roof repair and maintenance",
        "Gutter installation and repair",
        "Skylight installation",
        "Roof inspection services",
        "Emergency roof repairs"
      ],
      price: "Starting at $8,000"
    }
  ];

  return (
    <Layout 
      title="Home Improvement Services Dallas | Kitchen, Bathroom, Flooring - Metroplex Pros"
      description="Comprehensive home improvement services in Dallas: kitchen remodeling, bathroom renovation, flooring installation, painting, roofing & home additions. Free estimates!"
      keywords="Dallas home improvement services, kitchen remodeling Dallas, bathroom renovation DFW, flooring installation Plano, painting contractors Dallas, roofing services Texas"
      canonicalUrl="https://metroplexpros.com/services"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              Comprehensive Home Improvement Solutions
            </p>
            <p className="hero-description">
              From small repairs to complete home renovations, we provide quality craftsmanship 
              and exceptional service across all aspects of home improvement in the Dallas metroplex.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid">
        <div className="container">
          <div className="grid services-container">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>✅ {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-footer">
                  <div className="service-price text-accent">{service.price}</div>
                  <Link href="/contact" className="btn btn-outline">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We start with a free in-home consultation to understand your vision, needs, and budget.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Planning</h3>
              <p>Our team creates detailed plans and 3D renderings to help you visualize the final result.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Material Selection</h3>
              <p>We help you choose the best materials and finishes within your budget and style preferences.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Construction</h3>
              <p>Our skilled craftsmen bring your project to life with attention to detail and quality workmanship.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Final Walkthrough</h3>
              <p>We conduct a thorough final inspection with you to ensure everything meets our high standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section service-areas">
        <div className="container">
          <h2 className="section-title">Areas We Serve</h2>
          <div className="areas-grid">
            <div className="area-column">
              <h4>Dallas County</h4>
              <ul>
                <li>Dallas</li>
                <li>Plano</li>
                <li>Garland</li>
                <li>Irving</li>
                <li>Richardson</li>
                <li>Mesquite</li>
              </ul>
            </div>
            <div className="area-column">
              <h4>Tarrant County</h4>
              <ul>
                <li>Fort Worth</li>
                <li>Arlington</li>
                <li>Grand Prairie</li>
                <li>Mansfield</li>
                <li>Euless</li>
                <li>Bedford</li>
              </ul>
            </div>
            <div className="area-column">
              <h4>Collin County</h4>
              <ul>
                <li>Frisco</li>
                <li>McKinney</li>
                <li>Allen</li>
                <li>Carrollton</li>
                <li>The Colony</li>
                <li>Lewisville</li>
              </ul>
            </div>
            <div className="area-column">
              <h4>Denton County</h4>
              <ul>
                <li>Denton</li>
                <li>Flower Mound</li>
                <li>Grapevine</li>
                <li>Coppell</li>
                <li>Highland Village</li>
                <li>Lake Dallas</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted">Don't see your city listed? <Link href="/contact" className="text-accent">Contact us</Link> to see if we service your area!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p className="text-muted mb-4">
              Contact us today for a free consultation and estimate. Let's discuss how we can transform your home!
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

    </Layout>
  )
}