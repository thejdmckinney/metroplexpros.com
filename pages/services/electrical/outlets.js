import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function OutletsSwitchRepair() {
  return (
    <Layout 
      title="Outlet & Switch Repair Dallas-Fort Worth | MetroPlex Pros"
      description="Professional outlet and switch installation, repair, and replacement in DFW. Home electrical repair service for outlets, USB outlets, GFCI, dimmer switches, smart switches. Call (682) 466-2130."
      keywords="outlet repair Dallas, switch replacement, GFCI outlet, USB outlet installation, home electrical repair, electrical home repair, dimmer switch, electrical outlet repair, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/electrical/outlets"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-electrical-metroplex.png',
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
            "serviceType": "Outlet & Switch Repair",
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
              LICENSED ELECTRICIANS
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Outlet & Switch Repair</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Safe, Professional Installation & Repair of All Outlets & Switches
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
              Professional Home Electrical Repair for Outlets & Switches
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Faulty outlets and switches are more than just inconvenient—they're safety hazards. MetroPlex Pros provides 
              expert home electrical repair service including outlet and switch repair, replacement, and installation throughout Dallas-Fort Worth. Whether 
              you need electrical home repair for a simple switch replacement or want to upgrade to modern smart switches and USB outlets, our licensed 
              electricians ensure safe, code-compliant work.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.05))', border: '1px solid rgba(255, 0, 0, 0.3)'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#ff4444'}}>
                ⚠️ Safety Warning Signs
              </h3>
              <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                Call immediately if you notice any of these dangerous signs:
              </p>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  'Sparks when plugging in devices',
                  'Warm or hot outlets/switches',
                  'Burning smell near outlets',
                  'Discolored or melted plastic',
                  'Buzzing or crackling sounds'
                ].map((sign, index) => (
                  <li key={index} style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{color: '#ff4444', fontSize: '1.2rem'}}>⚡</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Common Outlet & Switch Issues We Fix
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                'Outlets not working',
                'Loose outlets that won\'t hold plugs',
                'Switches that don\'t turn lights on/off',
                'Flickering lights when using switches',
                'Two-prong outlets needing upgrade',
                'Missing GFCI protection',
                'Outdated or damaged faceplates',
                'Overloaded circuits'
              ].map((issue, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <span style={{color: '#00f0ff', fontSize: '1.5rem'}}>✓</span>
                    <span style={{fontSize: '1.05rem'}}>{issue}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Outlet & Switch Installation Services
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'GFCI Outlets',
                  description: 'Required in bathrooms, kitchens, garages, and outdoor areas. GFCI outlets prevent electrical shocks by cutting power when ground faults are detected.',
                  icon: '⚡',
                  features: ['Required by code', 'Prevents shocks', 'Built-in test button']
                },
                {
                  title: 'USB Outlets',
                  description: 'Modern convenience outlets with built-in USB charging ports. Charge phones and tablets without bulky adapters.',
                  icon: '🔌',
                  features: ['Fast charging', 'No adapters needed', 'Sleek design']
                },
                {
                  title: 'Smart Switches',
                  description: 'Control lights from your phone, voice commands, or schedules. Compatible with Alexa, Google Home, and HomeKit.',
                  icon: '📱',
                  features: ['Voice control', 'Scheduling', 'Remote access']
                },
                {
                  title: 'Dimmer Switches',
                  description: 'Adjust lighting levels for the perfect ambiance while saving energy. Works with dimmable LED bulbs.',
                  icon: '💡',
                  features: ['Adjustable brightness', 'Energy savings', 'Mood lighting']
                },
                {
                  title: 'AFCI Outlets',
                  description: 'Arc-fault circuit interrupter outlets detect dangerous electrical arcs and prevent fires. Required in bedrooms and living areas.',
                  icon: '🔥',
                  features: ['Fire prevention', 'Code compliant', 'Advanced protection']
                },
                {
                  title: 'Outdoor Weatherproof Outlets',
                  description: 'Weather-resistant outlets for patios, decks, and outdoor areas. Built to withstand the elements.',
                  icon: '🌧️',
                  features: ['Waterproof covers', 'UV resistant', 'Durable construction']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                        {service.features.map((feature, idx) => (
                          <span key={idx} style={{padding: '0.25rem 0.75rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '20px', fontSize: '0.85rem', color: '#00f0ff'}}>
                            {feature}
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
                Outlet & Switch Upgrade Recommendations
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {area: 'Kitchen', upgrades: 'GFCI outlets, USB outlets near coffee station, dedicated appliance circuits'},
                  {area: 'Bathroom', upgrades: 'GFCI outlets required, USB outlets for phone charging, dimmer switches'},
                  {area: 'Bedroom', upgrades: 'USB outlets by bedside, dimmer switches, smart switches for convenience'},
                  {area: 'Living Room', upgrades: 'USB outlets by seating areas, smart switches, dimmer controls'},
                  {area: 'Garage', upgrades: 'GFCI outlets, weatherproof outlets, dedicated circuits for tools'},
                  {area: 'Outdoor', upgrades: 'Weatherproof outlets, GFCI protection, adequate spacing for yard equipment'}
                ].map((item, index) => (
                  <div key={index} style={{padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.area}</h4>
                    <p style={{color: '#8b949e'}}>{item.upgrades}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Professional Installation Matters
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🔒', title: 'Safety First', text: 'Prevent electrical fires and shocks'},
                {icon: '⚡', title: 'Code Compliance', text: 'All work meets local electrical codes'},
                {icon: '🛡️', title: 'Proper Grounding', text: 'Ensure proper ground wire connections'},
                {icon: '✓', title: 'Quality Materials', text: 'Commercial-grade outlets and switches'},
                {icon: '🔧', title: 'Expert Installation', text: 'Proper wire connections and secure mounting'},
                {icon: '📋', title: 'Warranty', text: 'All work backed by our guarantee'}
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
                Need Outlet or Switch Repair?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Contact us today for safe, professional electrical work
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
