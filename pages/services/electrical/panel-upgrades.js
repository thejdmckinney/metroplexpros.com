import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'
import ReverseSiloLinks from '../../../components/ReverseSiloLinks'


export default function PanelUpgrades() {
  return (
    <Layout 
      title="Electrical Panel Upgrades Dallas-Fort Worth | MetroPlex Pros"
      description="Professional electrical panel upgrades and replacements in DFW. Home electrical repair service to increase your home's power capacity safely. Licensed electricians. Call (682) 466-2130."
      keywords="electrical panel upgrade, home electrical repair service, home electrical repair near me, breaker box replacement, electrical panel installation, 200 amp service upgrade, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/electrical/panel-upgrades"
    

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
            "serviceType": "Electrical Panel Upgrades",
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
              <span className="text-accent">Electrical Panel Upgrades</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Increase Your Home's Power Capacity Safely & Efficiently
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

      <TrustSignals />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Professional Panel Upgrade Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Is your electrical panel struggling to keep up with your home's power demands? MetroPlex Pros specializes in 
              electrical panel upgrades throughout the Dallas-Fort Worth area. Our licensed electricians will assess your 
              current electrical system and safely upgrade your panel to meet modern power requirements.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '2rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Signs You Need a Panel Upgrade
              </h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  'Frequent circuit breaker trips',
                  'Flickering or dimming lights',
                  'Burning smell near the electrical panel',
                  'Outdated fuse box or 100-amp panel',
                  'Adding new appliances or EV charger',
                  'Renovating or adding square footage',
                  'Panel is warm to the touch',
                  'Rust or corrosion on the panel'
                ].map((item, index) => (
                  <li key={index} style={{padding: '0.75rem 0', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#00f0ff', marginRight: '1rem', fontSize: '1.2rem'}}>✓</span>
                    <span style={{fontSize: '1.05rem'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Panel Upgrade Process
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: '1. Inspection & Assessment',
                  description: 'We thoroughly inspect your current electrical panel and assess your home\'s power needs.'
                },
                {
                  title: '2. Permit & Planning',
                  description: 'We handle all necessary permits and create a detailed upgrade plan that meets local codes.'
                },
                {
                  title: '3. Safe Installation',
                  description: 'Our licensed electricians safely install your new panel with minimal disruption to your home.'
                },
                {
                  title: '4. Testing & Inspection',
                  description: 'We test all circuits and arrange for final inspection to ensure everything meets code.'
                }
              ].map((step, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{step.title}</h4>
                  <p style={{color: '#8b949e', lineHeight: '1.6'}}>{step.description}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Common Panel Upgrade Options
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
                <div>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem', color: '#00f0ff'}}>100 to 200 Amp</h4>
                  <p style={{color: '#c9d1d9'}}>Most common upgrade for modern homes with standard electrical needs.</p>
                </div>
                <div>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem', color: '#00f0ff'}}>200 to 400 Amp</h4>
                  <p style={{color: '#c9d1d9'}}>For larger homes, workshops, or homes with heavy electrical loads.</p>
                </div>
                <div>
                  <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem', color: '#00f0ff'}}>Smart Panels</h4>
                  <p style={{color: '#c9d1d9'}}>Advanced panels with monitoring and remote control capabilities.</p>
                </div>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Choose MetroPlex Pros?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '✓', title: 'Licensed & Insured', text: 'Fully licensed master electricians'},
                {icon: '⚡', title: 'Code Compliant', text: 'All work meets or exceeds local codes'},
                {icon: '🛡️', title: 'Warranty Protection', text: 'Comprehensive warranty on all work'},
                {icon: '💰', title: 'Fair Pricing', text: 'Transparent quotes with no hidden fees'}
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
                Ready to Upgrade Your Electrical Panel?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Contact us today for a free inspection and quote
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

      {/* Reverse Silo Links - SEO Internal Linking */}
      <ReverseSiloLinks 
        currentPage="/services/electrical/panel-upgrades"
        currentSilo="electrical"
        variant="full"
      />
    </Layout>
  )
}
