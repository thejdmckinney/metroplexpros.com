import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function LightingInstallation() {
  return (
    <Layout 
      title="Lighting Installation & Repair Dallas-Fort Worth | MetroPlex Pros"
      description="Professional lighting installation, repair, and design in DFW. Home electrical repair for indoor & outdoor lighting, LED upgrades, recessed lighting, chandeliers. Call (682) 466-2130."
      keywords="lighting installation Dallas, home electrical repair, electrical home repair, recessed lighting, LED lighting, outdoor lighting, chandelier installation, landscape lighting, Dallas electrician"
      canonicalUrl="https://metroplexpros.com/services/electrical/lighting"
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Lighting Installation & Repair",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://metroplexpros.com"
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
              PROFESSIONAL LIGHTING SERVICES
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Lighting Installation & Design</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Transform Your Home with Expert Lighting Solutions
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
              Professional Lighting Installation Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Proper lighting transforms your home's ambiance, functionality, and energy efficiency. MetroPlex Pros provides 
              comprehensive lighting installation and repair services throughout Dallas-Fort Worth. From modern recessed 
              lighting to elegant chandeliers and energy-efficient LED upgrades, our licensed electricians handle it all.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Lighting Services
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Recessed Lighting Installation',
                  description: 'Modern, sleek can lights perfect for any room. We handle layout design, ceiling cutting, and professional installation with proper spacing and placement.',
                  icon: '💡'
                },
                {
                  title: 'Chandelier & Fixture Installation',
                  description: 'Expert installation of chandeliers, pendant lights, and decorative fixtures. We ensure proper support and electrical connections for safe, stunning results.',
                  icon: '✨'
                },
                {
                  title: 'LED Lighting Upgrades',
                  description: 'Convert to energy-efficient LED lighting and save up to 75% on lighting costs. We upgrade existing fixtures or install new LED systems throughout your home.',
                  icon: '⚡'
                },
                {
                  title: 'Outdoor & Landscape Lighting',
                  description: 'Enhance curb appeal and security with professional outdoor lighting. Pathway lights, spotlights, deck lighting, and more.',
                  icon: '🏡'
                },
                {
                  title: 'Track & Rail Lighting',
                  description: 'Flexible, adjustable lighting solutions perfect for highlighting art, retail spaces, or creating accent lighting in any room.',
                  icon: '🎨'
                },
                {
                  title: 'Under Cabinet Lighting',
                  description: 'Illuminate countertops and workspaces with professional under-cabinet lighting. LED strips or puck lights installed seamlessly.',
                  icon: '🔆'
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6'}}>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Popular Lighting Solutions
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
                {[
                  {
                    type: 'Kitchen Lighting',
                    features: ['Recessed can lights', 'Pendant over island', 'Under cabinet LED', 'Dimmer controls']
                  },
                  {
                    type: 'Living Room Lighting',
                    features: ['Chandelier or statement fixture', 'Recessed accent lighting', 'Wall sconces', 'Smart lighting controls']
                  },
                  {
                    type: 'Outdoor Lighting',
                    features: ['Landscape spotlights', 'Pathway lighting', 'Security flood lights', 'Patio string lights']
                  }
                ].map((solution, index) => (
                  <div key={index} className="card" style={{padding: '1.5rem'}}>
                    <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff'}}>{solution.type}</h4>
                    <ul style={{listStyle: 'none', padding: 0}}>
                      {solution.features.map((feature, idx) => (
                        <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#c9d1d9'}}>
                          <span style={{color: '#00f0ff'}}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Benefits of Professional Lighting Installation
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '💡', title: 'Energy Efficiency', text: 'LED upgrades reduce energy costs by up to 75%'},
                {icon: '🎭', title: 'Enhanced Ambiance', text: 'Create the perfect mood and atmosphere'},
                {icon: '🔒', title: 'Increased Safety', text: 'Proper lighting prevents accidents and deters crime'},
                {icon: '📈', title: 'Home Value', text: 'Quality lighting increases property value'},
                {icon: '⚡', title: 'Smart Controls', text: 'Add dimming, timers, and voice control'},
                {icon: '🎨', title: 'Custom Design', text: 'Tailored lighting plans for your space'}
              ].map((benefit, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{benefit.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{benefit.title}</h4>
                  <p style={{color: '#8b949e'}}>{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Our Lighting Installation Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: '1', title: 'Consultation & Design', desc: 'We discuss your vision, assess your space, and create a lighting plan that meets your needs and budget.'},
                  {step: '2', title: 'Professional Installation', desc: 'Our licensed electricians install all fixtures with precision, ensuring proper wiring and secure mounting.'},
                  {step: '3', title: 'Testing & Adjustment', desc: 'We test all lights, adjust positioning if needed, and ensure everything works perfectly.'},
                  {step: '4', title: 'Final Walkthrough', desc: 'We review the completed work with you and provide tips on operating your new lighting system.'}
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
              Why Choose MetroPlex Pros for Lighting?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🔧', title: 'Licensed Electricians', text: 'Fully licensed and insured professionals'},
                {icon: '💡', title: 'Design Expertise', text: 'Help choosing the right lighting for your space'},
                {icon: '⚡', title: 'Quality Work', text: 'Precise installation that meets all codes'},
                {icon: '💰', title: 'Fair Pricing', text: 'Competitive rates with transparent quotes'}
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
                Ready to Light Up Your Home?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Contact us today for a free lighting consultation and quote
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
