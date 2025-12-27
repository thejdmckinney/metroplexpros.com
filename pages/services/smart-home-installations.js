import Layout from '../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../components/TrustSignals'

export default function SmartHomeInstallations() {
  return (
    <Layout 
      title="Dallas Smart Home Installation Near Me | Licensed Electricians | MetroPlex Pros"
      description="Dallas Smart Home Installation Near Me | Licensed Electricians | Smart Locks, Thermostats, Lighting, Security | Same-Day Installation | FREE Consultation | Call (682) 466-2130 now!"
      keywords="smart home installation Dallas, smart home installation near me, home automation DFW, smart thermostat installation Dallas, security camera installation, smart lighting Dallas, smart lock installation, WiFi network Dallas"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home-installations"
    

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
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Smart Home Installation",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://www.metroplexpros.com"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Smart Home Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Thermostat Installation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Security Systems"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Lighting Automation"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Home Network Optimization"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Home Integration"}}
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
              PROFESSIONAL SMART HOME INSTALLATION
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Smart Home Installations</span><br />
              for Modern Living
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Automation • Security • Climate • Lighting • Voice Control
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.9', color: '#8b949e'}}>
              Transform your house into a modern smart home with our expert installation services. From automated lighting 
              and climate control to advanced security systems, we help you create a more convenient, efficient, and secure 
              living environment.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Free Consultation
              </Link>
            </div>
            <div style={{display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Expert</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Certified Installers</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Custom</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Tailored Solutions</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Support</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Ongoing Training</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals variant="compact" />

      {/* Our Electrical Services */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Complete Smart Home Solutions
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Professional installation and integration of smart home technology
            </p>
          </div>

          <div style={{marginBottom: '4rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
            <img 
              src="/smart-home-hub.png" 
              alt="Smart Home Hub and Control Center" 
              style={{width: '100%', height: 'auto', display: 'block'}}
            />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '🌡️',
                title: 'Climate Control Systems',
                desc: 'Smart thermostat installation and setup for optimal comfort and energy efficiency. Control your home temperature from anywhere.',
                features: ['Smart thermostat installation (Nest, Ecobee, Honeywell)', 'C-wire installation if needed', 'Zoned HVAC integration', 'Energy monitoring setup', 'Programmable scheduling', 'Voice control configuration']
              },
              {
                icon: '�',
                title: 'Smart Lighting Automation',
                desc: 'Transform your lighting with smart switches, dimmers, and automated scenes. Create the perfect ambiance for any occasion.',
                features: ['Smart switch & dimmer installation', 'Automated lighting scenes', 'Motion-activated lighting', 'Color-changing LED systems', 'Outdoor lighting automation', 'Voice and app control']
              },
              {
                icon: '�',
                title: 'Security & Access Control',
                desc: 'Complete home security with smart cameras, doorbells, locks, and sensors. Monitor and control access from your smartphone.',
                features: ['Security camera installation', 'Video doorbell systems (Ring, Nest, Arlo)', 'Smart lock installation (August, Schlage, Yale)', 'Window & door sensors', 'Motion detectors', 'Remote monitoring setup']
              },
              {
                icon: '📶',
                title: 'Network & Connectivity',
                desc: 'Optimize your home network for reliable smart device connectivity. Strong WiFi coverage throughout your entire home.',
                features: ['WiFi network optimization', 'Mesh network installation', 'Ethernet wiring', 'Smart hub integration', 'Device connectivity troubleshooting', 'Network security configuration']
              },
              {
                icon: '🏠',
                title: 'Whole Home Integration',
                desc: 'Unified control of all your smart devices through a central hub or app. Seamless integration across multiple brands.',
                features: ['Smart hub setup (SmartThings, HomeKit)', 'Multi-device integration', 'Custom automation routines', 'Voice assistant integration', 'Unified control system', 'Cross-platform compatibility']
              },
              {
                icon: '🔊',
                title: 'Entertainment & Audio',
                desc: 'Smart speakers, whole-home audio, and entertainment system integration for immersive experiences.',
                features: ['Smart speaker installation', 'Whole-home audio wiring', 'Multi-room audio setup', 'TV & streaming integration', 'Voice control for entertainment', 'Sound system optimization']
              },
              {
                icon: '🚗',
                title: 'Smart Garage & Entry',
                desc: 'Automate your garage doors and entry points with smart openers and access control systems.',
                features: ['Smart garage door openers', 'Smartphone control', 'Auto-close scheduling', 'Delivery access codes', 'Integration with security', 'Status notifications']
              },
              {
                icon: '💧',
                title: 'Smart Home Sensors',
                desc: 'Environmental monitoring with leak detectors, smoke alarms, and air quality sensors for peace of mind.',
                features: ['Smart leak detectors', 'Smart smoke & CO detectors', 'Air quality monitors', 'Temperature sensors', 'Humidity monitoring', 'Instant mobile alerts']
              },
              {
                icon: '🪟',
                title: 'Automated Blinds & Shades',
                desc: 'Motorized window treatments with smart controls for privacy, light management, and energy efficiency.',
                features: ['Motorized blind installation', 'Smart shade systems', 'Scheduled automation', 'Voice & app control', 'Integration with lighting', 'Energy efficiency optimization']
              },
              {
                icon: '⚡',
                title: 'Smart Outlets & Switches',
                desc: 'Convert any device into a smart device with intelligent outlets and USB charging stations.',
                features: ['Smart outlet installation', 'USB charging outlets', 'Energy monitoring outlets', 'Scheduled power control', 'Voice assistant compatible', 'Surge protection']
              },
              {
                icon: '�',
                title: 'Outdoor Smart Systems',
                desc: 'Extend your smart home outdoors with irrigation controllers, landscape lighting, and outdoor cameras.',
                features: ['Smart irrigation controllers', 'Landscape lighting automation', 'Outdoor security cameras', 'Weather-based scheduling', 'Water conservation features', 'Remote outdoor control']
              },
              {
                icon: '🎯',
                title: 'Custom Automation',
                desc: 'Create personalized smart home routines that adjust multiple devices based on your schedule and preferences.',
                features: ['Custom scene creation', 'Geofencing automation', 'Presence detection', 'Time-based routines', 'Condition-based triggers', 'Complex automation logic']
              }
            ].map((service, index) => (
              <div key={index} style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{service.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.5rem', marginBottom: '1rem'}}>{service.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1.5rem'}}>{service.desc}</p>
                <ul style={{color: '#8b949e', lineHeight: '2', fontSize: '0.95rem', listStyle: 'none', padding: 0}}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                      <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Electrical Services */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Choose MetroPlex Pros for Electrical Work?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '✅', title: 'Licensed & Insured', desc: 'All work performed by licensed master electricians with comprehensive liability insurance and workmanship guarantees.' },
              { icon: '📜', title: 'Code Compliant', desc: 'Every installation meets or exceeds National Electrical Code (NEC) and local building code requirements.' },
              { icon: '🛡️', title: 'Safety First', desc: 'We prioritize safety in every project. Proper grounding, GFCI/AFCI protection, and hazard identification.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Upfront estimates with no hidden fees. You know the cost before we start work.' },
              { icon: '⚡', title: 'Fast Response', desc: 'Quick scheduling for routine work and 24/7 availability for electrical emergencies.' },
              { icon: '🔧', title: 'Quality Materials', desc: 'We use professional-grade electrical components from trusted manufacturers for lasting reliability.' }
            ].map((item, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{item.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Smart Home */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Benefits of Smart Home Technology
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '⏰', title: 'Automated Routines', desc: 'Set up "scenes" that adjust multiple devices with a single command or schedule. Wake up to gradual lighting and your perfect temperature.' },
              { icon: '📱', title: 'Remote Control', desc: 'Control your home\'s systems from anywhere using your smartphone or voice commands. Check security cameras while traveling.' },
              { icon: '💰', title: 'Energy Savings', desc: 'Smart thermostats and lighting can reduce energy bills by 10-25% through optimized usage and automated scheduling.' },
              { icon: '🛡️', title: 'Enhanced Security', desc: 'Real-time monitoring, instant alerts, and remote access provide peace of mind whether you\'re home or away.' },
              { icon: '🎯', title: 'Personalized Settings', desc: 'Customize lighting, temperature, and security settings for different times, situations, and family members.' },
              { icon: '📈', title: 'Increased Home Value', desc: 'Smart home features can increase property value and appeal to modern buyers looking for connected homes.' }
            ].map((benefit, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{benefit.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>{benefit.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Our Smart Home Installation Process
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
            {[
              { step: '1', title: 'Consultation & Assessment', desc: 'We evaluate your home\'s current setup, discuss your goals, and recommend the best smart home solutions for your needs and budget.' },
              { step: '2', title: 'Custom Design Plan', desc: 'We create a comprehensive plan showing device placement, network requirements, and integration options tailored to your lifestyle.' },
              { step: '3', title: 'Professional Installation', desc: 'Our certified technicians install and configure all devices, ensuring proper connectivity and optimal performance throughout your home.' },
              { step: '4', title: 'Setup & Training', desc: 'We set up your apps, create automation routines, and provide comprehensive training so you can maximize your smart home\'s potential.' },
              { step: '5', title: 'Ongoing Support', desc: 'We provide continued support, troubleshooting, and can help add new devices as smart home technology continues to evolve.' }
            ].map((item, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '2px solid rgba(0, 240, 255, 0.3)', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '1rem'}}>
                  {item.step}
                </div>
                <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: '#0d1117', textAlign: 'center'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#00f0ff', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Ready to Upgrade to a Smart Home?
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Let's discuss how smart home technology can improve your daily life. Contact us today for a free 
              consultation and personalized smart home plan.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📞</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Call or Text</div>
                <Link href="tel:682-466-2130" style={{color: '#c9d1d9', fontSize: '1.3rem', textDecoration: 'none'}}>
                  (682) 466-2130
                </Link>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💻</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Free Consultation</div>
                <Link href="/contact" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  Request Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
