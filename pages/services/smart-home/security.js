import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'
import ReverseSiloLinks from '../../../components/ReverseSiloLinks'


export default function SecuritySystems() {
  return (
    <Layout 
      title="Smart Security System Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional smart security system installation in DFW. Cameras, sensors, alarms. 24/7 monitoring options. Call (682) 466-2130."
      keywords="security system Dallas, smart security, home security cameras, alarm system installation, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home/security"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-smart-home-security.png',
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
              <span className="text-accent">Smart Security System Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Protect Your Home with Professional Security Solutions
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
              Comprehensive Smart Security Solutions
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Protect your home and family with a professional security system. MetroPlex Pros installs complete smart 
              security solutions throughout Dallas-Fort Worth, including cameras, sensors, alarms, and monitoring systems 
              you can control from your phone.
            </p>

            <div style={{marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d'}}>
              <img 
                src="/security-cameras.png" 
                alt="Smart Security Camera System Installation" 
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Security System Components
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Security Cameras',
                  description: 'Indoor and outdoor cameras with HD video, night vision, and motion detection. View live feeds from your phone.',
                  icon: '📹',
                  features: ['1080p-4K video', 'Night vision', 'Motion alerts', 'Cloud storage']
                },
                {
                  title: 'Door & Window Sensors',
                  description: 'Magnetic sensors alert you when doors or windows are opened. Essential for complete home protection.',
                  icon: '🚪',
                  features: ['Instant alerts', 'Battery powered', 'Easy installation', 'Reliable detection']
                },
                {
                  title: 'Motion Detectors',
                  description: 'Passive infrared sensors detect movement inside your home. Trigger alarms or camera recording.',
                  icon: '👁️',
                  features: ['Wide coverage', 'Pet immune options', 'Wireless', 'Low maintenance']
                },
                {
                  title: 'Smart Alarm System',
                  description: 'Central control panel with keypad and app control. Professional monitoring options available.',
                  icon: '🚨',
                  features: ['24/7 monitoring', 'App control', 'Backup battery', 'Loud siren']
                }
              ].map((component, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{component.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{component.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{component.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {component.features.map((feature, idx) => (
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

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Popular Security System Brands
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                {['Ring Alarm', 'SimpliSafe', 'ADT', 'Vivint', 'Arlo', 'Nest Secure'].map((brand, i) => (
                  <div key={i} style={{padding: '1rem', textAlign: 'center', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px'}}>
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Security Image */}
            <div style={{marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d'}}>
              <img 
                src="/og-smart-home-security.png" 
                alt="Complete Smart Home Security System" 
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Secure Your Home Today
              </h3>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn">Call (682) 466-2130</Link>
                <Link href="/contact" className="btn btn-outline">Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reverse Silo Links - SEO Internal Linking */}
      <ReverseSiloLinks 
        currentPage="/services/smart-home/security"
        currentSilo="smartHome"
        variant="full"
      />

    </Layout>
  )
}
