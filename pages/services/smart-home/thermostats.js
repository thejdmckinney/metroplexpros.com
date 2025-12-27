import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function SmartThermostats() {
  return (
    <Layout 
      title="Smart Thermostat Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional smart thermostat installation in DFW. Nest, Ecobee, Honeywell. Save energy and control temperature remotely. Call (682) 466-2130."
      keywords="smart thermostat installation Dallas, Nest thermostat, Ecobee, programmable thermostat, WiFi thermostat, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home/thermostats"
    >
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Smart Thermostat Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Save Energy & Control Your Home Temperature From Anywhere
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
              Professional Smart Thermostat Installation
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Upgrade to a smart thermostat and take control of your home's comfort and energy costs. MetroPlex Pros installs 
              all major smart thermostat brands throughout Dallas-Fort Worth, ensuring proper wiring, setup, and integration 
              with your HVAC system.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                💰 Average Energy Savings: 10-23% Annually
              </h3>
              <p style={{fontSize: '1.1rem'}}>
                Smart thermostats learn your schedule, adjust automatically, and can save hundreds on energy bills each year.
              </p>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Popular Smart Thermostats We Install
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  brand: 'Google Nest Learning Thermostat',
                  description: 'Auto-scheduling that learns your preferences. Energy history tracking. Works with Alexa and Google Assistant.',
                  icon: '🔵',
                  features: ['Auto-learning', 'Energy reports', 'Sleek design', 'Remote control']
                },
                {
                  brand: 'Ecobee SmartThermostat',
                  description: 'Built-in Alexa voice control. Room sensors for balanced comfort. Premium features and design.',
                  icon: '⚫',
                  features: ['Voice control', 'Room sensors', 'Touch screen', 'Smart home hub']
                },
                {
                  brand: 'Honeywell Home T9',
                  description: 'Multi-room comfort with smart sensors. Geofencing. Works with major smart home platforms.',
                  icon: '⚪',
                  features: ['Room sensors', 'Geofencing', 'Easy setup', 'Reliable brand']
                }
              ].map((thermostat, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{thermostat.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{thermostat.brand}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{thermostat.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {thermostat.features.map((feature, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Smart Thermostat Features & Benefits
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '📱', title: 'Remote Control', text: 'Adjust temperature from anywhere via smartphone'},
                {icon: '🤖', title: 'Auto-Learning', text: 'Learns your schedule and preferences automatically'},
                {icon: '💰', title: 'Energy Savings', text: 'Save 10-23% on heating and cooling costs'},
                {icon: '🗣️', title: 'Voice Control', text: 'Works with Alexa, Google, and Siri'},
                {icon: '📊', title: 'Energy Reports', text: 'Track usage and get energy-saving tips'},
                {icon: '🏠', title: 'Smart Home Integration', text: 'Connects with other smart devices'}
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
                Our Installation Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: '1', title: 'Compatibility Check', desc: 'We verify your HVAC system works with your chosen smart thermostat.'},
                  {step: '2', title: 'Professional Installation', desc: 'Licensed electricians install and wire the thermostat correctly.'},
                  {step: '3', title: 'WiFi Setup', desc: 'We connect your thermostat to your home network and configure settings.'},
                  {step: '4', title: 'App Training', desc: 'We show you how to use the app and all smart features.'}
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

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready to Upgrade to a Smart Thermostat?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Contact us today for professional installation
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
