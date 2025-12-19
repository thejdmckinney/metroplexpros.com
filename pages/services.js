import Layout from '../components/Layout'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Electrical Services",
      icon: "⚡",
      description: "Professional home electrical repair service, installations, repairs, and upgrades by licensed electricians",
      url: "/contact",
      features: [
        "Home electrical repair & troubleshooting",
        "Circuit breaker panel upgrades & replacement",
        "Outlet and switch installation/repair (GFCI, USB, etc.)",
        "Ceiling fan installation & repair",
        "LED & recessed lighting installation",
        "Whole-house surge protection",
        "EV charger installation (Level 1 & 2)",
        "Generator installation & hookup",
        "Electrical troubleshooting & repairs",
        "Code compliance & safety inspections",
        "24/7 emergency electrical service"
      ]
    },
    {
      title: "Plumbing Services",
      icon: "🔧",
      description: "Expert plumbing repairs, installations, and maintenance by licensed plumbers",
      url: "/contact",
      features: [
        "Leak detection & repair (faucets, pipes, fixtures)",
        "Drain cleaning & unclogging (kitchen, bathroom, main line)",
        "Water heater installation & repair (tank & tankless)",
        "Fixture installation (faucets, sinks, toilets, showers)",
        "Garbage disposal installation & repair",
        "Toilet repair & replacement",
        "Pipe repair, replacement & repiping",
        "Sump pump installation",
        "Water pressure issues & solutions",
        "24/7 emergency plumbing service"
      ]
    },
    {
      title: "Smart Home Installations",
      icon: "🏡",
      description: "Modern smart home technology integration and whole-home automation",
      url: "/services/smart-home-installations",
      features: [
        "Smart thermostat installation (Nest, Ecobee, Honeywell)",
        "Smart lighting systems (Philips Hue, Lutron, LIFX)",
        "Video doorbell installation (Ring, Nest, Arlo)",
        "Smart lock installation & programming",
        "Security camera systems (indoor & outdoor)",
        "Home automation hubs (Alexa, Google Home, SmartThings)",
        "Smart switches & dimmers",
        "Whole-home integration & programming",
        "WiFi network optimization",
        "Consultation & system design"
      ]
    }
  ];

  return (
    <Layout 
      title="Electrical & Plumbing Services Dallas | Smart Home Installation | Metroplex Pros"
      description="Licensed Dallas electricians & plumbers + smart home experts. Electrical repairs, plumbing services, EV chargers, smart thermostats, home automation. 24/7 emergency service. FREE estimates!"
      keywords="Dallas electrician, Dallas plumber, smart home installation Dallas, electrical services Dallas, plumbing repairs Plano, EV charger installation, emergency electrician DFW, licensed plumber Dallas, home automation Dallas, smart thermostat installation"
      canonicalUrl="https://metroplexpros.com/services"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              <span className="text-accent">Electrical, Plumbing & Smart Home</span> Services
            </h1>
            <p className="hero-subtitle text-tagline">
              Expert Solutions for Modern Dallas Homes
            </p>
            <p className="hero-description">
              Licensed electricians and plumbers providing reliable repairs, installations, and upgrades. 
              Plus cutting-edge smart home technology to make your life easier. Available 24/7 for emergencies throughout the Dallas-Fort Worth metroplex.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
              <Link href="/contact" className="btn">
                Get Free Estimate
              </Link>
              <Link href="tel:682-466-2130" className="btn btn-outline">
                24/7 Emergency: (682) 466-2130
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid">
        <div className="container">
          <div className="grid services-detail-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Link href={service.url} className="btn">
                  Request Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <h2 className="section-title text-center" style={{color: '#ffffff'}}>Why Choose Metroplex Pros?</h2>
          <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
            <div className="feature-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✅</div>
              <h3 style={{color: '#00f0ff'}}>Licensed & Insured</h3>
              <p style={{color: '#c9d1d9'}}>All electricians and plumbers are fully licensed in Texas with comprehensive insurance coverage</p>
            </div>
            <div className="feature-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#00f0ff'}}>24/7 Emergency Service</h3>
              <p style={{color: '#c9d1d9'}}>Electrical and plumbing emergencies don't wait. We're available around the clock</p>
            </div>
            <div className="feature-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
              <h3 style={{color: '#00f0ff'}}>Upfront Pricing</h3>
              <p style={{color: '#c9d1d9'}}>No surprises. You'll know the cost before we start any work</p>
            </div>
            <div className="feature-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⭐</div>
              <h3 style={{color: '#00f0ff'}}>5-Star Rated</h3>
              <p style={{color: '#c9d1d9'}}>Consistently rated 5 stars by hundreds of satisfied customers across DFW</p>
            </div>
            <div className="feature-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛡️</div>
              <h3 style={{color: '#00f0ff'}}>Warranty Backed</h3>
              <p style={{color: '#c9d1d9'}}>All work is backed by our comprehensive warranty on parts and labor</p>
            </div>
            <div className="feature-card text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎓</div>
              <h3 style={{color: '#00f0ff'}}>Expert Technicians</h3>
              <p style={{color: '#c9d1d9'}}>Ongoing training in the latest electrical, plumbing, and smart home technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section service-areas">
        <div className="container">
          <h2 className="section-title text-center">Serving Dallas-Fort Worth Metroplex</h2>
          <p className="text-center text-muted mb-5">Professional electrical, plumbing, and smart home services throughout DFW</p>
          <div className="areas-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
            <div className="area-column">
              <h4 style={{color: '#ff6b35', marginBottom: '1rem'}}>Dallas County</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0'}}>✓ Dallas</li>
                <li style={{padding: '0.5rem 0'}}>✓ Plano</li>
                <li style={{padding: '0.5rem 0'}}>✓ Garland</li>
                <li style={{padding: '0.5rem 0'}}>✓ Irving</li>
                <li style={{padding: '0.5rem 0'}}>✓ Richardson</li>
                <li style={{padding: '0.5rem 0'}}>✓ Mesquite</li>
              </ul>
            </div>
            <div className="area-column">
              <h4 style={{color: '#ff6b35', marginBottom: '1rem'}}>Collin County</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0'}}>✓ Frisco</li>
                <li style={{padding: '0.5rem 0'}}>✓ McKinney</li>
                <li style={{padding: '0.5rem 0'}}>✓ Allen</li>
                <li style={{padding: '0.5rem 0'}}>✓ Wylie</li>
                <li style={{padding: '0.5rem 0'}}>✓ The Colony</li>
                <li style={{padding: '0.5rem 0'}}>✓ Prosper</li>
              </ul>
            </div>
            <div className="area-column">
              <h4 style={{color: '#ff6b35', marginBottom: '1rem'}}>Denton County</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0'}}>✓ Lewisville</li>
                <li style={{padding: '0.5rem 0'}}>✓ Carrollton</li>
                <li style={{padding: '0.5rem 0'}}>✓ Flower Mound</li>
                <li style={{padding: '0.5rem 0'}}>✓ Denton</li>
                <li style={{padding: '0.5rem 0'}}>✓ Little Elm</li>
                <li style={{padding: '0.5rem 0'}}>✓ Highland Village</li>
              </ul>
            </div>
            <div className="area-column">
              <h4 style={{color: '#ff6b35', marginBottom: '1rem'}}>More Areas</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0'}}>✓ Fort Worth</li>
                <li style={{padding: '0.5rem 0'}}>✓ Arlington</li>
                <li style={{padding: '0.5rem 0'}}>✓ Grand Prairie</li>
                <li style={{padding: '0.5rem 0'}}>✓ Euless</li>
                <li style={{padding: '0.5rem 0'}}>✓ Bedford</li>
                <li style={{padding: '0.5rem 0'}}>✓ And more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans CTA */}
      <section className="section maintenance-section" style={{backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0'}}>
        <div className="container">
          <div className="maintenance-cta-content text-center">
            <h2 style={{color: 'white', marginBottom: '1rem'}}>Interested in Ongoing Maintenance?</h2>
            <p style={{maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem'}}>
              Keep your electrical and plumbing systems in perfect condition with our comprehensive maintenance service plans. 
              Visit Metroplex Shield to learn about preventive care options that save you money and prevent emergencies.
            </p>
            <a 
              href="https://metroplexshield.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              style={{backgroundColor: '#ff6b35', color: 'white'}}
            >
              Explore Maintenance Plans
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Get Started?</h2>
            <p className="text-muted mb-4">
              Contact us today for a free estimate on your electrical, plumbing, or smart home project. 
              Emergency services available 24/7!
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
