import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function WaterHeaterRepair() {
  return (
    <Layout 
      title="Water Heater Repair & Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Expert water heater repair and installation in DFW. Tank and tankless water heaters. Same-day service available. Licensed plumbers. Call (682) 466-2130."
      keywords="water heater repair, water heater installation, tankless water heater, water heater replacement, Dallas plumber"
      canonicalUrl="https://www.metroplexpros.com/services/plumbing/water-heater-repair/"
    

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
            "serviceType": "Water Heater Repair & Installation",
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
              <span className="text-accent">Water Heater Repair & Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Tank & Tankless Water Heater Experts • Same-Day Service Available
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
              Professional Water Heater Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              No hot water? MetroPlex Pros provides fast, reliable water heater repair and installation services throughout 
              the Dallas-Fort Worth area. Our licensed plumbers work on all types of water heaters, from traditional tank 
              models to modern tankless systems.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.05))', border: '1px solid rgba(255, 0, 0, 0.3)'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#ff4444'}}>
                🚨 Water Heater Emergency?
              </h3>
              <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                We offer 24/7 emergency water heater repair services. If you're experiencing a water heater leak or complete 
                failure, call us immediately for rapid response.
              </p>
              <Link href="tel:682-466-2130" className="btn" style={{background: '#ff4444'}}>
                Call Now for Emergency Service
              </Link>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Signs You Need Water Heater Service
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                'No hot water',
                'Not enough hot water',
                'Rusty or discolored water',
                'Strange noises (rumbling, popping)',
                'Water pooling around heater',
                'Fluctuating water temperature',
                'Foul-smelling hot water',
                'High energy bills'
              ].map((sign, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{color: '#00f0ff', fontSize: '2rem', marginBottom: '0.5rem'}}>⚠️</div>
                  <p style={{fontSize: '1.05rem'}}>{sign}</p>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Water Heater Types We Service
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Tank Water Heaters',
                  description: 'Traditional storage tank water heaters (30-80 gallons). We repair and install all major brands including Rheem, Bradford White, AO Smith, and more.',
                  icon: '🔥'
                },
                {
                  title: 'Tankless Water Heaters',
                  description: 'On-demand hot water systems that heat water as you need it. More energy-efficient with unlimited hot water supply.',
                  icon: '⚡'
                },
                {
                  title: 'Heat Pump Water Heaters',
                  description: 'Energy-efficient hybrid systems that use electricity to move heat from air or ground to heat water.',
                  icon: '♻️'
                },
                {
                  title: 'Solar Water Heaters',
                  description: 'Eco-friendly systems that use solar panels to heat water, reducing energy costs significantly.',
                  icon: '☀️'
                }
              ].map((type, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{type.icon}</div>
                    <div>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{type.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6'}}>{type.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Our Water Heater Services Include
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  'Water heater repair',
                  'New water heater installation',
                  'Water heater replacement',
                  'Tankless conversion',
                  'Anode rod replacement',
                  'Thermostat replacement',
                  'Heating element replacement',
                  'Pressure relief valve service',
                  'Sediment flushing',
                  'Gas line connection',
                  'Expansion tank installation',
                  'Annual maintenance'
                ].map((service, index) => (
                  <div key={index} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{color: '#00f0ff'}}>✓</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Choose MetroPlex Pros?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🔧', title: 'Expert Plumbers', text: 'Licensed and experienced technicians'},
                {icon: '⏱️', title: 'Same-Day Service', text: 'Fast response for urgent needs'},
                {icon: '💯', title: 'Quality Guarantee', text: 'Satisfaction guaranteed on all work'},
                {icon: '💰', title: 'Fair Pricing', text: 'Upfront quotes with no surprises'}
              ].map((item, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.title}</h4>
                  <p style={{color: '#8b949e'}}>{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Water Heater Service Today?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Call now for fast, professional water heater repair or installation
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
