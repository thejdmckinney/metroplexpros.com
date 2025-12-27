import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function FixtureInstallation() {
  return (
    <Layout 
      title="Plumbing Fixture Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional installation of faucets, sinks, toilets, showers, and tubs in DFW. Quality fixtures installed correctly. Licensed plumbers. Call (682) 466-2130."
      keywords="fixture installation Dallas, faucet installation, toilet installation, sink installation, shower installation, bathtub install, plumber Dallas"
      canonicalUrl="https://www.metroplexpros.com/services/plumbing/fixture-installation"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-plumbingx2.png',
            width: 1200,
            height: 630,
            alt: 'Metroplex Pros - Professional Home Services in Dallas',
            type: 'image/png'
          }
        ]
      }}
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Fixture Installation",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://www.metroplexpros.com"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Texas"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff'}}>
              LICENSED PLUMBERS
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Plumbing Fixture Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Expert Installation of Faucets, Sinks, Toilets, Showers & More
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Professional Fixture Installation Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Upgrading your bathroom or kitchen fixtures? MetroPlex Pros provides expert plumbing fixture installation 
              throughout Dallas-Fort Worth. From elegant faucets to modern toilets and luxurious showers, our licensed 
              plumbers ensure proper installation that prevents leaks and lasts for years.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Fixtures We Install
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Faucets & Sinks',
                  description: 'Kitchen and bathroom faucets, vessel sinks, undermount sinks, farmhouse sinks, bar sinks, and prep sinks. We handle all styles from traditional to ultra-modern.',
                  icon: '🚰',
                  types: ['Kitchen faucets', 'Bathroom faucets', 'Bar sinks', 'Vessel sinks']
                },
                {
                  title: 'Toilets',
                  description: 'Standard toilets, comfort-height toilets, dual-flush toilets, wall-mounted toilets, and smart toilets with bidet features.',
                  icon: '🚽',
                  types: ['Standard toilets', 'Comfort height', 'Dual flush', 'Smart toilets']
                },
                {
                  title: 'Showers & Tubs',
                  description: 'Shower heads, rainfall showers, body sprays, tub faucets, freestanding tubs, and complete shower systems with digital controls.',
                  icon: '🚿',
                  types: ['Shower systems', 'Rainfall heads', 'Tub faucets', 'Body sprays']
                },
                {
                  title: 'Garbage Disposals',
                  description: 'High-quality garbage disposal installation with proper electrical connections and drain configurations.',
                  icon: '🗑️',
                  types: ['Standard disposals', 'Continuous feed', 'Batch feed', 'Commercial grade']
                },
                {
                  title: 'Dishwashers',
                  description: 'Professional dishwasher installation with water supply, drain connections, and electrical hookup.',
                  icon: '🍽️',
                  types: ['Built-in dishwashers', 'Portable units', 'Drawer dishwashers']
                },
                {
                  title: 'Water Filtration',
                  description: 'Whole-house water filtration systems, under-sink filters, reverse osmosis systems, and water softeners.',
                  icon: '💧',
                  types: ['RO systems', 'Carbon filters', 'Water softeners', 'Whole-house systems']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                        {service.types.map((type, idx) => (
                          <span key={idx} style={{padding: '0.25rem 0.75rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '20px', fontSize: '0.85rem', color: '#00f0ff'}}>
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Our Installation Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: '1', title: 'Consultation', desc: 'We discuss your fixture choices and confirm compatibility with your existing plumbing.'},
                  {step: '2', title: 'Preparation', desc: 'We shut off water, protect your floors and surfaces, and remove old fixtures safely.'},
                  {step: '3', title: 'Professional Installation', desc: 'Our licensed plumbers install your new fixtures with precise connections and proper sealing.'},
                  {step: '4', title: 'Testing', desc: 'We test for leaks, check water flow, and ensure everything operates perfectly.'},
                  {step: '5', title: 'Cleanup & Walkthrough', desc: 'We clean up thoroughly and show you how to operate and maintain your new fixtures.'}
                ].map((item, index) => (
                  <div key={index} style={{display: 'flex', gap: '1rem', padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                    <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#00f0ff', minWidth: '40px'}}>{item.step}</div>
                    <div>
                      <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6'}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Professional Installation Matters
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🚫', title: 'Prevent Leaks', text: 'Proper sealing and connections prevent costly water damage'},
                {icon: '⚙️', title: 'Proper Function', text: 'Correct installation ensures fixtures work as designed'},
                {icon: '🛡️', title: 'Warranty Protection', text: 'Professional install maintains manufacturer warranties'},
                {icon: '⚡', title: 'Save Time', text: 'Avoid DIY mistakes and multiple trips to the store'},
                {icon: '✓', title: 'Code Compliance', text: 'All work meets local plumbing codes'},
                {icon: '💰', title: 'Long-Term Value', text: 'Quality installation extends fixture lifespan'}
              ].map((item, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.title}</h4>
                  <p style={{color: '#8b949e'}}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Popular Fixture Upgrades
              </h3>
              <div style={{display: 'grid', gap: '1.5rem', marginTop: '1.5rem'}}>
                {[
                  {
                    room: 'Kitchen',
                    upgrades: [
                      'Touchless faucets for hygiene',
                      'Pot filler faucets above stove',
                      'Farmhouse or apron-front sinks',
                      'High-efficiency garbage disposals',
                      'Filtered water taps'
                    ]
                  },
                  {
                    room: 'Master Bathroom',
                    upgrades: [
                      'Rainfall shower heads',
                      'Handheld shower wands',
                      'Freestanding soaking tubs',
                      'Vessel sinks with waterfall faucets',
                      'Smart toilets with bidet features'
                    ]
                  },
                  {
                    room: 'Guest Bathroom',
                    upgrades: [
                      'Comfort-height toilets',
                      'Modern single-handle faucets',
                      'Low-flow fixtures for efficiency',
                      'Stylish vanity sinks',
                      'Upgraded shower fixtures'
                    ]
                  }
                ].map((item, index) => (
                  <div key={index} className="card" style={{padding: '1.5rem'}}>
                    <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>{item.room}</h4>
                    <ul style={{listStyle: 'none', padding: 0}}>
                      {item.upgrades.map((upgrade, idx) => (
                        <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#c9d1d9'}}>
                          <span style={{color: '#00f0ff'}}>✓</span>
                          {upgrade}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              We Work With All Major Brands
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem'}}>
              {[
                'Kohler', 'Moen', 'Delta', 'Pfister', 'American Standard',
                'Grohe', 'Hansgrohe', 'Toto', 'InSinkErator', 'Rohl'
              ].map((brand, index) => (
                <div key={index} className="card" style={{padding: '1rem', textAlign: 'center'}}>
                  <span style={{fontSize: '1.1rem', fontWeight: '600', color: '#00f0ff'}}>{brand}</span>
                </div>
              ))}
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready to Install New Fixtures?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Professional fixture installation you can trust
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Call (682) 466-2130
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Serving Dallas-Fort Worth</h2>
            <p style={{color: '#8b949e', marginBottom: '2rem'}}>
              Dallas • Plano • Frisco • McKinney • Allen • Richardson • Garland • Irving • Highland Park • University Park • Lakewood
            </p>
            <Link href="/service-areas" className="btn btn-outline">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
