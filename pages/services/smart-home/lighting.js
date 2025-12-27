import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function SmartLighting() {
  return (
    <Layout 
      title="Smart Lighting Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional smart lighting installation in DFW. Philips Hue, LIFX, smart switches. Voice and app control. Call (682) 466-2130."
      keywords="smart lighting Dallas, Philips Hue installation, smart light bulbs, smart switches, home automation lighting, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home/lighting"
    >
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Smart Lighting Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Control Your Lights with Voice, App, or Automation
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
              Professional Smart Lighting Solutions
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Transform your home with smart lighting that responds to your voice, schedule, and lifestyle. MetroPlex Pros 
              installs complete smart lighting systems throughout Dallas-Fort Worth, from smart bulbs to intelligent switches 
              and complete home automation.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Smart Lighting Options
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Smart Light Bulbs',
                  description: 'Color-changing LED bulbs controlled by app or voice. Easy installation in existing fixtures.',
                  icon: '💡',
                  brands: ['Philips Hue', 'LIFX', 'Nanoleaf', 'Wyze'],
                  features: ['16 million colors', 'Voice control', 'Scheduling', 'Energy efficient']
                },
                {
                  title: 'Smart Light Switches',
                  description: 'Replace existing switches with smart controls. Works with any bulb and offers more reliability.',
                  icon: '🔘',
                  brands: ['Lutron Caseta', 'TP-Link Kasa', 'Leviton', 'GE'],
                  features: ['No hub needed (some)', 'Dimming capability', 'Schedule on/off', 'Remote access']
                },
                {
                  title: 'Smart Light Strips',
                  description: 'Flexible LED strips for under-cabinet, TV backlighting, or accent lighting with color options.',
                  icon: '🌈',
                  brands: ['Philips Hue Strip', 'LIFX Strip', 'Govee', 'Nanoleaf'],
                  features: ['Flexible placement', 'Music sync', 'Color effects', 'Cut to length']
                }
              ].map((option, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{option.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{option.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{option.description}</p>
                      <div style={{marginBottom: '1rem'}}>
                        <strong style={{color: '#00f0ff'}}>Popular Brands:</strong>{' '}
                        <span style={{color: '#8b949e'}}>{option.brands.join(', ')}</span>
                      </div>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {option.features.map((feature, idx) => (
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
              Smart Lighting Features
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🗣️', title: 'Voice Control', text: '"Alexa, turn on living room lights"'},
                {icon: '🎨', title: 'Color Changing', text: '16 million colors and white tones'},
                {icon: '📅', title: 'Scheduling', text: 'Auto on/off based on time or sunrise/sunset'},
                {icon: '📱', title: 'Remote Access', text: 'Control lights from anywhere'},
                {icon: '👥', title: 'Scenes & Moods', text: 'Pre-set lighting for different activities'},
                {icon: '🏃', title: 'Motion Activation', text: 'Lights turn on when you enter'}
              ].map((feature, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{feature.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{feature.title}</h4>
                  <p style={{color: '#8b949e', fontSize: '0.95rem'}}>{feature.text}</p>
                </div>
              ))}
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready to Install Smart Lighting?
              </h3>
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
