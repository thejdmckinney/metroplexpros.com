import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function FixtureInstallation() {
  return (
    <Layout 
      title="Fixture Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional fixture installation in DFW. Light fixtures, ceiling fans, bathroom fixtures, shelving. Expert handyman services. Call (682) 466-2130."
      keywords="fixture installation Dallas, light fixture installation, ceiling fan installation, bathroom fixtures, Dallas handyman"
      canonicalUrl="https://metroplexpros.com/services/handyman/fixture-installation"
    >
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Fixture Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Professional Installation for All Types of Fixtures
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn">Call (682) 466-2130</Link>
              <Link href="/contact" className="btn btn-outline">Get Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Expert Fixture Installation Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              From light fixtures to ceiling fans, bathroom hardware to shelving, MetroPlex Pros installs all types of 
              fixtures throughout Dallas-Fort Worth. Our experienced technicians ensure secure mounting, proper wiring, 
              and perfect alignment for every installation.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Fixtures We Install
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Light Fixtures',
                  description: 'Install or replace any type of light fixture. From simple to ornate chandeliers.',
                  icon: '💡',
                  types: ['Chandeliers', 'Pendant lights', 'Recessed lighting', 'Track lighting', 'Sconces', 'Under-cabinet lights']
                },
                {
                  title: 'Ceiling Fans',
                  description: 'Professional ceiling fan installation with proper support and electrical wiring.',
                  icon: '🌀',
                  types: ['Standard fans', 'Fan with lights', 'Remote control fans', 'Large/heavy fans', 'Outdoor fans', 'Fan replacement']
                },
                {
                  title: 'Bathroom Fixtures',
                  description: 'Install towel bars, toilet paper holders, mirrors, and other bathroom hardware.',
                  icon: '🚿',
                  types: ['Towel bars', 'Toilet paper holders', 'Mirrors', 'Medicine cabinets', 'Shower caddies', 'Robe hooks']
                },
                {
                  title: 'Shelving & Storage',
                  description: 'Securely mount shelves, cabinets, and storage solutions to any wall type.',
                  icon: '📚',
                  types: ['Floating shelves', 'Wall cabinets', 'TV mounts', 'Closet systems', 'Garage storage', 'Built-in units']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem'}}>
                        {service.types.map((type, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Professional Installation Matters
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🔧', title: 'Proper Tools', text: 'Professional-grade tools for every job'},
                {icon: '⚡', title: 'Safe Wiring', text: 'Licensed electrical work when needed'},
                {icon: '🎯', title: 'Perfect Level', text: 'Precise alignment and mounting'},
                {icon: '🏗️', title: 'Secure Mounting', text: 'Find studs and use proper anchors'},
                {icon: '⏱️', title: 'Quick Installation', text: 'Most jobs completed same day'},
                {icon: '✅', title: 'Guaranteed Work', text: 'All installations guaranteed'}
              ].map((benefit, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{benefit.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{benefit.title}</h4>
                  <p style={{color: '#8b949e'}}>{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Installation Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: 'Inspection', details: 'Assess mounting location and electrical requirements'},
                  {step: 'Preparation', details: 'Turn off power, locate studs, prepare mounting surface'},
                  {step: 'Installation', details: 'Secure mounting bracket, connect wiring if needed'},
                  {step: 'Testing', details: 'Verify operation and check for issues'},
                  {step: 'Cleanup', details: 'Remove packaging and clean work area'}
                ].map((step, i) => (
                  <div key={i} style={{display: 'flex', gap: '1rem', padding: '0.75rem'}}>
                    <div style={{color: '#00f0ff', fontWeight: 'bold', minWidth: '30px'}}>{i + 1}.</div>
                    <div>
                      <h4 style={{fontSize: '1.1rem', marginBottom: '0.25rem'}}>{step.step}</h4>
                      <p style={{color: '#8b949e', fontSize: '0.95rem'}}>{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need a Fixture Installed?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Professional installation for any fixture, big or small
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn">Call (682) 466-2130</Link>
                <Link href="/contact" className="btn btn-outline">Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
