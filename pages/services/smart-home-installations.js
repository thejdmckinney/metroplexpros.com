import Layout from '../../components/Layout'
import Link from 'next/link'

export default function SmartHomeInstallations() {
  return (
    <Layout 
      title="Smart Home Installation Dallas | Home Automation Systems - Metroplex Pros"
      description="Professional smart home installation services in Dallas. Smart thermostats, security systems, lighting automation & WiFi optimization. Modernize your home today!"
      keywords="smart home installation Dallas, home automation DFW, smart thermostat installation Dallas, security camera installation, smart lighting Dallas, WiFi network Dallas"
      canonicalUrl="https://metroplexpros.com/services/smart-home-installations"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Smart Home <span className="text-accent">Installations</span>
              </h1>
              <p className="hero-subtitle text-tagline">
                Bring Your Home Into the Future
              </p>
              <p className="hero-description">
                Transform your house into a modern smart home with our expert installation services. 
                From automated lighting and climate control to advanced security systems, we help you 
                create a more convenient, efficient, and secure living environment.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn">
                  Get Free Consultation
                </Link>
                <Link href="tel:682-466-2130" className="btn btn-outline">
                  Call (682) 466-2130
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-logo-container">
                <img src="/logo.svg" alt="Metroplex Pros Smart Home Installation Dallas" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Categories */}
      <section className="section smart-categories">
        <div className="container">
          <h2 className="section-title">Complete Smart Home Solutions</h2>
          <div className="grid grid-2">
            <div className="smart-category">
              <div className="category-icon">🌡️</div>
              <h3>Climate Control</h3>
              <ul>
                <li>Smart thermostat installation and setup</li>
                <li>Zoned HVAC system integration</li>
                <li>Smart vent and damper controls</li>
                <li>Energy monitoring systems</li>
                <li>Temperature sensor networks</li>
                <li>Programmable scheduling setup</li>
              </ul>
            </div>
            <div className="smart-category">
              <div className="category-icon">💡</div>
              <h3>Lighting Automation</h3>
              <ul>
                <li>Smart switch and dimmer installation</li>
                <li>Automated lighting scenes</li>
                <li>Motion-activated lighting</li>
                <li>Color-changing LED systems</li>
                <li>Outdoor lighting automation</li>
                <li>Voice and app control setup</li>
              </ul>
            </div>
            <div className="smart-category">
              <div className="category-icon">🔒</div>
              <h3>Security & Access</h3>
              <ul>
                <li>Security camera system installation</li>
                <li>Smart doorbell and intercom systems</li>
                <li>Smart lock installation and programming</li>
                <li>Window and door sensors</li>
                <li>Motion detectors and alarms</li>
                <li>Remote monitoring setup</li>
              </ul>
            </div>
            <div className="smart-category">
              <div className="category-icon">📶</div>
              <h3>Network & Connectivity</h3>
              <ul>
                <li>WiFi network optimization</li>
                <li>Mesh network installation</li>
                <li>Ethernet wiring and setup</li>
                <li>Smart hub integration</li>
                <li>Device connectivity troubleshooting</li>
                <li>Network security configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Smart Devices */}
      <section className="section popular-devices">
        <div className="container">
          <h2 className="section-title">Popular Smart Home Devices We Install</h2>
          <div className="grid grid-3">
            <div className="device-card">
              <div className="device-icon">📱</div>
              <h3>Smart Thermostats</h3>
              <p>Nest, Ecobee, Honeywell, and other leading brands for optimal energy efficiency and comfort control.</p>
            </div>
            <div className="device-card">
              <div className="device-icon">🚪</div>
              <h3>Smart Doorbells</h3>
              <p>Ring, Nest Hello, and Arlo doorbells with HD video, two-way audio, and smartphone notifications.</p>
            </div>
            <div className="device-card">
              <div className="device-icon">🔐</div>
              <h3>Smart Locks</h3>
              <p>Keyless entry systems from August, Schlage, Yale with smartphone control and access codes.</p>
            </div>
            <div className="device-card">
              <div className="device-icon">📹</div>
              <h3>Security Cameras</h3>
              <p>Indoor and outdoor camera systems with night vision, motion detection, and cloud storage.</p>
            </div>
            <div className="device-card">
              <div className="device-icon">💡</div>
              <h3>Smart Lighting</h3>
              <p>Philips Hue, LIFX, and Lutron systems for automated, customizable lighting throughout your home.</p>
            </div>
            <div className="device-card">
              <div className="device-icon">🏠</div>
              <h3>Smart Hubs</h3>
              <p>Central control systems like SmartThings, Hubitat, and Apple HomeKit for unified device management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section smart-benefits">
        <div className="container">
          <h2 className="section-title">Benefits of Smart Home Technology</h2>
          <div className="grid grid-2">
            <div className="benefit-group">
              <h3>Convenience & Comfort</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">⏰</div>
                  <div>
                    <h4>Automated Routines</h4>
                    <p>Set up "scenes" that adjust multiple devices with a single command or schedule.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📱</div>
                  <div>
                    <h4>Remote Control</h4>
                    <p>Control your home's systems from anywhere using your smartphone or voice commands.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div>
                    <h4>Personalized Settings</h4>
                    <p>Customize lighting, temperature, and security settings for different times and situations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefit-group">
              <h3>Security & Efficiency</h3>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div>
                    <h4>Energy Savings</h4>
                    <p>Smart thermostats and lighting can reduce energy bills by 10-25% through optimized usage.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div>
                    <h4>Enhanced Security</h4>
                    <p>Real-time monitoring, instant alerts, and remote access provide peace of mind.</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📈</div>
                  <div>
                    <h4>Home Value</h4>
                    <p>Smart home features can increase property value and appeal to modern buyers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section installation-process">
        <div className="container">
          <h2 className="section-title">Our Smart Home Installation Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation & Assessment</h3>
              <p>We evaluate your home's current setup, discuss your goals, and recommend the best smart home solutions for your needs and budget.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Custom Design Plan</h3>
              <p>We create a comprehensive plan showing device placement, network requirements, and integration options tailored to your lifestyle.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Professional Installation</h3>
              <p>Our certified technicians install and configure all devices, ensuring proper connectivity and optimal performance throughout your home.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Setup & Training</h3>
              <p>We set up your apps, create automation routines, and provide comprehensive training so you can maximize your smart home's potential.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Ongoing Support</h3>
              <p>We provide continued support, troubleshooting, and can help add new devices as smart home technology continues to evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Upgrade to a Smart Home?</h2>
            <p className="text-muted mb-4">
              Let's discuss how smart home technology can improve your daily life. Contact us today 
              for a free consultation and personalized smart home plan.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Get Smart Home Consultation
              </Link>
              <Link href="/services" className="btn btn-outline">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}