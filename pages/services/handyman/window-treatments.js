import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function WindowTreatments() {
  return (
    <Layout 
      title="Window Treatment Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional window treatment installation in DFW. Blinds, roman shades, smart shades, curtain rods. Expert mounting and precise measurements. Call (682) 466-2130."
      keywords="window treatment installation Dallas, blinds installation, roman shades, smart shades, motorized blinds, Dallas handyman"
      canonicalUrl="https://metroplexpros.com/services/handyman/window-treatments"
    >
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Window Treatment Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Expert Installation of Blinds, Shades & Curtain Hardware
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
              Professional Window Treatment Installation
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              MetroPlex Pros provides expert window treatment installation throughout Dallas-Fort Worth. Whether you've 
              purchased blinds online, from a local store, or need help with custom shades, our experienced technicians 
              ensure perfect mounting, smooth operation, and a polished finished look. We handle all types of window 
              treatments with precision and care.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Window Treatments We Install
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Blinds',
                  description: 'Professional installation of horizontal and vertical blinds in all materials and sizes.',
                  icon: '🪟',
                  types: ['Horizontal blinds', 'Vertical blinds', 'Wood blinds', 'Faux wood blinds', 'Aluminum blinds', 'Mini blinds']
                },
                {
                  title: 'Roman Shades',
                  description: 'Expert mounting of roman shades including cordless, continuous loop, and motorized systems.',
                  icon: '🏛️',
                  types: ['Flat roman shades', 'Hobbled roman shades', 'Relaxed roman shades', 'Cordless operation', 'Chain control', 'Motorized roman shades']
                },
                {
                  title: 'Smart & Motorized Shades',
                  description: 'Installation and setup of motorized window treatments with smart home integration.',
                  icon: '🤖',
                  types: ['Battery powered', 'Hardwired motorized', 'WiFi connected', 'Voice control compatible', 'App controlled', 'Scheduled automation']
                },
                {
                  title: 'Other Window Treatments',
                  description: 'Install curtain rods, roller shades, cellular shades, and custom window solutions.',
                  icon: '🎨',
                  types: ['Curtain rods', 'Roller shades', 'Cellular shades', 'Plantation shutters', 'Sheer shades', 'Blackout shades']
                }
              ].map((treatment, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{treatment.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{treatment.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{treatment.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem'}}>
                        {treatment.types.map((type, idx) => (
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
              Our Installation Process
            </h3>
            <div style={{display: 'grid', gap: '1rem', marginBottom: '3rem'}}>
              {[
                {step: '1. Window Assessment', details: 'Measure windows and verify clearances for proper fit and operation'},
                {step: '2. Mounting Location', details: 'Determine optimal mounting position (inside mount vs outside mount)'},
                {step: '3. Bracket Installation', details: 'Securely mount brackets using appropriate hardware for window frame type'},
                {step: '4. Treatment Installation', details: 'Install blinds, shades, or hardware with precision alignment'},
                {step: '5. Operation Testing', details: 'Test all mechanisms, adjust tension, ensure smooth operation'},
                {step: '6. Final Adjustments', details: 'Make fine adjustments for perfect level and optimal function'}
              ].map((step, i) => (
                <div key={i} className="card" style={{padding: '1rem', display: 'flex', gap: '1rem'}}>
                  <div style={{fontSize: '1.5rem', color: '#00f0ff', fontWeight: 'bold', minWidth: '40px'}}>{step.step}</div>
                  <div style={{flex: 1}}>
                    <h4 style={{fontSize: '1.1rem', marginBottom: '0.25rem'}}>{step.step.split('. ')[1]}</h4>
                    <p style={{color: '#8b949e', fontSize: '0.95rem'}}>{step.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Smart Shade Integration
              </h3>
              <p style={{marginBottom: '1rem', color: '#c9d1d9'}}>
                We specialize in motorized and smart shade installation with integration to popular smart home systems:
              </p>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {feature: 'Amazon Alexa', icon: '🗣️'},
                  {feature: 'Google Home', icon: '🏠'},
                  {feature: 'Apple HomeKit', icon: '🍎'},
                  {feature: 'Smartphone Apps', icon: '📱'},
                  {feature: 'Remote Controls', icon: '🎮'},
                  {feature: 'Scheduled Automation', icon: '⏰'}
                ].map((item, i) => (
                  <div key={i} style={{padding: '1rem', textAlign: 'center', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px'}}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                    <div style={{fontSize: '0.9rem'}}>{item.feature}</div>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Professional Installation?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '📏', title: 'Precise Mounting', text: 'Level installation for smooth operation'},
                {icon: '🔧', title: 'Proper Hardware', text: 'Right anchors for your window frames'},
                {icon: '⚙️', title: 'Perfect Function', text: 'Adjust mechanisms for optimal performance'},
                {icon: '⏱️', title: 'Save Time', text: 'Installation typically under 1 hour'},
                {icon: '🛡️', title: 'Avoid Damage', text: 'Prevent cracked frames or damaged treatments'},
                {icon: '💡', title: 'Expert Advice', text: 'Tips on operation and maintenance'}
              ].map((benefit, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{benefit.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{benefit.title}</h4>
                  <p style={{color: '#8b949e'}}>{benefit.text}</p>
                </div>
              ))}
            </div>

            <div style={{background: 'rgba(0, 240, 255, 0.05)', border: '1px solid #00f0ff', borderRadius: '8px', padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Bring Your Own Treatments or Need Recommendations?
              </h3>
              <div style={{display: 'grid', gap: '1rem'}}>
                <div style={{padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✓ Install Your Purchased Treatments</h4>
                  <p style={{color: '#8b949e', fontSize: '0.95rem'}}>
                    Bought blinds or shades online or from a store? We'll install them professionally.
                  </p>
                </div>
                <div style={{padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✓ Product Recommendations</h4>
                  <p style={{color: '#8b949e', fontSize: '0.95rem'}}>
                    Need advice on which treatments to buy? We can recommend quality options for your needs.
                  </p>
                </div>
                <div style={{padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                  <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>✓ All Brands Welcome</h4>
                  <p style={{color: '#8b949e', fontSize: '0.95rem'}}>
                    We install treatments from Home Depot, Lowe's, Amazon, Blinds.com, and custom shops.
                  </p>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Window Treatment Installation?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Professional installation for any window treatment type
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
