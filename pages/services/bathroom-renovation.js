import Layout from '../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../components/TrustSignals'


export default function BathroomRenovation() {
  return (
    <Layout 
      title="Bathroom Renovation Dallas | Luxury Bathroom Remodeling - Metroplex Pros"
      description="Complete bathroom renovations in Dallas. Walk-in showers, vanities, tile work & luxury upgrades. Expert bathroom remodeling contractors. Free estimates!"
      keywords="bathroom renovation Dallas, bathroom remodeling DFW, walk-in shower installation Dallas, bathroom tile installation, vanity installation Dallas, bathroom contractors Texas"
      canonicalUrl="https://www.metroplexpros.com/services/bathroom-renovation"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Bathroom <span className="text-accent">Renovation</span>
              </h1>
              <p className="hero-subtitle text-tagline">
                Create Your Personal Spa Retreat
              </p>
              <p className="hero-description">
                Transform your bathroom into a luxurious retreat with our expert renovation services. 
                From modern walk-in showers to elegant vanities, we create beautiful, functional 
                spaces that add value to your home and enhance your daily routine.
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
                <img src="/logo.svg" alt="Metroplex Pros Bathroom Renovation Dallas" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Complete Bathroom Renovation Services</h2>
          <div className="grid grid-2">
            <div className="service-category">
              <h3>Shower & Tub Services</h3>
              <ul>
                <li>Walk-in shower installation</li>
                <li>Tub to shower conversions</li>
                <li>Custom shower enclosures</li>
                <li>Bathtub installation and replacement</li>
                <li>Steam shower systems</li>
                <li>Accessibility modifications</li>
              </ul>
            </div>
            <div className="service-category">
              <h3>Tile & Flooring</h3>
              <ul>
                <li>Ceramic and porcelain tile installation</li>
                <li>Natural stone tile work</li>
                <li>Heated floor systems</li>
                <li>Waterproof flooring installation</li>
                <li>Custom mosaic designs</li>
                <li>Grout cleaning and sealing</li>
              </ul>
            </div>
            <div className="service-category">
              <h3>Vanities & Storage</h3>
              <ul>
                <li>Custom vanity installation</li>
                <li>Double vanity configurations</li>
                <li>Medicine cabinet installation</li>
                <li>Built-in storage solutions</li>
                <li>Countertop installation</li>
                <li>Mirror and lighting integration</li>
              </ul>
            </div>
            <div className="service-category">
              <h3>Plumbing & Electrical</h3>
              <ul>
                <li>Fixture installation and replacement</li>
                <li>Plumbing line modifications</li>
                <li>Electrical outlet installation</li>
                <li>Ventilation fan installation</li>
                <li>GFCI safety upgrades</li>
                <li>Water line and drain work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Styles */}
      <section className="section renovation-styles">
        <div className="container">
          <h2 className="section-title">Popular Bathroom Styles</h2>
          <div className="grid grid-3">
            <div className="style-card">
              <h3>Modern & Contemporary</h3>
              <p>Clean lines, minimalist design, floating vanities, and sleek fixtures create a spa-like atmosphere with contemporary appeal.</p>
              <div className="style-features">
                <span>Floating vanities</span>
                <span>Large format tiles</span>
                <span>Frameless glass showers</span>
              </div>
            </div>
            <div className="style-card">
              <h3>Traditional & Classic</h3>
              <p>Timeless designs featuring classic materials, elegant fixtures, and sophisticated details that never go out of style.</p>
              <div className="style-features">
                <span>Marble surfaces</span>
                <span>Clawfoot tubs</span>
                <span>Classic subway tile</span>
              </div>
            </div>
            <div className="style-card">
              <h3>Luxury Spa</h3>
              <p>High-end finishes, premium materials, and luxurious features create a resort-style bathroom experience at home.</p>
              <div className="style-features">
                <span>Rainfall showers</span>
                <span>Heated floors</span>
                <span>Steam systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="section accessibility-features">
        <div className="container">
          <h2 className="section-title">Accessibility & Aging-in-Place Solutions</h2>
          <p className="section-description text-center">
            We specialize in creating beautiful, accessible bathrooms that allow you to age comfortably in your home.
          </p>
          <div className="grid grid-2">
            <div className="accessibility-category">
              <h3>Safety Features</h3>
              <ul>
                <li>Walk-in tubs and zero-threshold showers</li>
                <li>Grab bar installation (stylish options available)</li>
                <li>Non-slip flooring materials</li>
                <li>Comfort-height toilets</li>
                <li>Lever-style faucet handles</li>
                <li>Improved lighting for visibility</li>
              </ul>
            </div>
            <div className="accessibility-category">
              <h3>Mobility Solutions</h3>
              <ul>
                <li>Wheelchair-accessible vanities</li>
                <li>Roll-in shower configurations</li>
                <li>Fold-down shower seats</li>
                <li>Hand-held shower systems</li>
                <li>Wider doorways and turning spaces</li>
                <li>ADA-compliant modifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section process-timeline">
        <div className="container">
          <h2 className="section-title">Bathroom Renovation Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">Day 1-2</div>
              <div className="timeline-content">
                <h3>Demolition & Preparation</h3>
                <p>Careful removal of existing fixtures, tiles, and materials. Preparation of surfaces and protection of surrounding areas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">Day 3-5</div>
              <div className="timeline-content">
                <h3>Plumbing & Electrical Rough-In</h3>
                <p>Installation of new plumbing lines, electrical circuits, and any structural modifications needed for the new layout.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">Day 6-10</div>
              <div className="timeline-content">
                <h3>Waterproofing & Tile Work</h3>
                <p>Waterproofing installation, tile and flooring work, including walls, floors, and shower areas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">Day 11-14</div>
              <div className="timeline-content">
                <h3>Fixture Installation & Finishing</h3>
                <p>Installation of vanities, fixtures, lighting, mirrors, and all finishing touches. Final cleanup and walkthrough.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Renovate Your Bathroom?</h2>
            <p className="text-muted mb-4">
              Let's create the bathroom of your dreams. Contact us today for a free consultation 
              and detailed estimate for your bathroom renovation project.
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