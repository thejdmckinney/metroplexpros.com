import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function SmartLocks() {
  return (
    <Layout 
      title="Smart Lock Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional smart lock installation in DFW. Keyless entry, remote access, auto-lock features. August, Yale, Schlage locks. Call (682) 466-2130."
      keywords="smart lock installation Dallas, keyless entry, August lock, Yale lock, Schlage Encode, Dallas locksmith electrician"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home/locks"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-smart-locks.png',
            width: 1200,
            height: 630,
            alt: 'Metroplex Pros - Professional Home Services in Dallas',
            type: 'image/png'
          }
        ]
      }}
    >
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Smart Lock Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Keyless Entry & Remote Access for Your Home
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
              Professional Smart Lock Installation
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Upgrade to keyless convenience and enhanced security. MetroPlex Pros installs smart locks throughout 
              Dallas-Fort Worth, giving you the ability to lock/unlock your door from anywhere, grant temporary access 
              to guests, and never worry about lost keys again.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Popular Smart Locks We Install
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  brand: 'August Smart Lock',
                  description: 'Retrofits to existing deadbolt. Keep your existing keys while adding smart features.',
                  icon: '🔒',
                  features: ['Works with existing keys', 'Auto-lock/unlock', 'Door sense', 'Easy installation']
                },
                {
                  brand: 'Yale Assure Lock',
                  description: 'Sleek touchscreen keypad. Multiple user codes. Works with major smart home platforms.',
                  icon: '🔐',
                  features: ['Touchscreen keypad', 'Up to 250 codes', 'Weatherproof', 'Voice control']
                },
                {
                  brand: 'Schlage Encode',
                  description: 'Built-in WiFi, no hub required. Touchscreen and smartphone access.',
                  icon: '🗝️',
                  features: ['Built-in WiFi', 'No hub needed', 'Backup key option', 'Alexa compatible']
                }
              ].map((lock, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{lock.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{lock.brand}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{lock.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {lock.features.map((feature, idx) => (
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

            {/* Hero Image */}
            <div style={{marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d'}}>
              <img 
                src="/og-image-smart-locks.png" 
                alt="Smart Lock Installation Services" 
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Smart Lock Benefits
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '📱', title: 'Remote Access', text: 'Lock/unlock from anywhere via app'},
                {icon: '🚪', title: 'Auto-Lock', text: 'Automatically locks behind you'},
                {icon: '👥', title: 'Guest Access', text: 'Grant temporary access codes'},
                {icon: '🔔', title: 'Activity Log', text: 'See who comes and goes'},
                {icon: '🗣️', title: 'Voice Control', text: 'Lock doors with voice commands'},
                {icon: '🔋', title: 'Battery Backup', text: 'Works even during power outages'}
              ].map((benefit, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{benefit.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{benefit.title}</h4>
                  <p style={{color: '#8b949e'}}>{benefit.text}</p>
                </div>
              ))}
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready for Keyless Entry?
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
