import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function HomeAutomation() {
  return (
    <Layout 
      title="Home Automation Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional home automation installation in DFW. Complete smart home systems, integration, voice control. Turn your home into a smart home. Call (682) 466-2130."
      keywords="home automation Dallas, smart home installation, home integration, Google Home, Amazon Alexa, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home/automation/"
    

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
              <span className="text-accent">Complete Home Automation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Transform Your House into an Intelligent Smart Home
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
              Professional Home Automation Solutions
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Create a fully integrated smart home where all your devices work together seamlessly. MetroPlex Pros designs 
              and installs complete home automation systems throughout Dallas-Fort Worth, from simple voice control setups 
              to sophisticated whole-home automation with custom scenes and routines.
            </p>

            <div style={{marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d'}}>
              <img 
                src="/voice-assistant-hub.png" 
                alt="Voice Assistant and Smart Home Hub" 
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Home Automation Systems
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Voice Control Hubs',
                  description: 'Central control through Amazon Alexa, Google Home, or Apple HomeKit. Voice commands for all devices.',
                  icon: '🗣️',
                  examples: ['Echo devices', 'Google Nest Hub', 'HomePod', 'Voice routines']
                },
                {
                  title: 'Smart Home Hubs',
                  description: 'Advanced hubs like Samsung SmartThings or Hubitat connect and control all devices from one app.',
                  icon: '🏠',
                  examples: ['SmartThings', 'Hubitat', 'Home Assistant', 'Universal control']
                },
                {
                  title: 'Automated Scenes',
                  description: 'Create custom scenes that control multiple devices with one command or automatically.',
                  icon: '🎬',
                  examples: ['Good morning scene', 'Movie time', 'Away mode', 'Bedtime routine']
                },
                {
                  title: 'Whole Home Integration',
                  description: 'Connect lighting, climate, security, entertainment, and more into one unified smart home system.',
                  icon: '🌐',
                  examples: ['Lighting automation', 'Climate control', 'Security integration', 'Energy management']
                }
              ].map((system, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{system.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{system.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{system.description}</p>
                      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                        {system.examples.map((example, idx) => (
                          <span key={idx} style={{padding: '0.25rem 0.75rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '20px', fontSize: '0.85rem'}}>
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Popular Automation Examples
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {scene: 'Good Morning', actions: 'Lights gradually brighten, thermostat adjusts, blinds open, coffee maker starts'},
                  {scene: 'Leaving Home', actions: 'All lights off, thermostat sets to away mode, doors lock, security system arms'},
                  {scene: 'Movie Time', actions: 'Lights dim, TV turns on, sound system activates, blinds close'},
                  {scene: 'Bedtime', actions: 'All lights off except pathway, doors lock, thermostat adjusts, alarm sets'}
                ].map((automation, i) => (
                  <div key={i} style={{padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                    <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{automation.scene}</h4>
                    <p style={{color: '#8b949e'}}>{automation.actions}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Benefits of Home Automation
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '⚡', title: 'Energy Savings', text: 'Reduce utility bills with smart scheduling'},
                {icon: '🏠', title: 'Convenience', text: 'Control everything from one app or voice'},
                {icon: '🔒', title: 'Enhanced Security', text: 'Integrated security and monitoring'},
                {icon: '💎', title: 'Home Value', text: 'Increase property value with smart tech'},
                {icon: '🎯', title: 'Customization', text: 'Personalize for your lifestyle'},
                {icon: '📱', title: 'Remote Control', text: 'Manage your home from anywhere'}
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
                Ready to Automate Your Home?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Let's discuss your smart home vision and create a custom solution
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn">Call (682) 466-2130</Link>
                <Link href="/contact" className="btn btn-outline">Request Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
