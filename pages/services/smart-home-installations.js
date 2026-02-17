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
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden', padding: '4rem 0'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
            <div>
              <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '1.5rem', fontSize: '0.85rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
                ⚡ SAME-DAY INSTALLATION AVAILABLE
              </div>
              <h1 style={{fontSize: '3.2rem', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '700'}}>
                <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Control Your Entire Home</span><br />
                From Your Phone
              </h1>
              <p style={{fontSize: '1.25rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.7'}}>
                Stop fumbling with light switches, thermostats, and keys. Dallas homeowners save <strong style={{color: '#00f0ff'}}>$1,200+ annually</strong> on energy bills while living in total comfort.
              </p>
              
              <div style={{display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)'}}>
                  📞 Call (682) 466-2130
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
                  Get Free Quote
                </Link>
              </div>

              <div style={{background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px', padding: '1.5rem'}}>
                <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap'}}>
                  <div>
                    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.25rem'}}>4.9★</div>
                    <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Google Reviews</div>
                  </div>
                  <div>
                    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.25rem'}}>500+</div>
                    <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Homes Automated</div>
                  </div>
                  <div>
                    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.25rem'}}>100%</div>
                    <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{position: 'relative'}}>
              <div style={{borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.2)'}}>
                <img 
                  src="/voice-assistant-hub.png" 
                  alt="Smart Home Hub Control Center" 
                  style={{width: '100%', height: 'auto', display: 'block'}}
                />
              </div>
              <div style={{position: 'absolute', bottom: '-20px', right: '-20px', background: '#00f0ff', color: '#0a0e14', padding: '1rem 1.5rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 8px 24px rgba(0, 240, 255, 0.4)'}}>
                💰 $250 OFF This Week
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals variant="compact" />

      {/* Problem/Solution Section */}
      <section className="section" style={{backgroundColor: '#0d1117', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Tired of These Daily Frustrations?
              </span>
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Your home should work for you, not against you
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem'}}>
            <div style={{background: 'rgba(255, 0, 0, 0.05)', border: '2px solid rgba(255, 0, 0, 0.2)', borderRadius: '16px', padding: '2.5rem'}}>
              <h3 style={{fontSize: '1.8rem', color: '#ff4444', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                ❌ Without Smart Home
              </h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {[
                  'Walking room to room to turn off lights you forgot',
                  'Coming home to a freezing cold house in winter',
                  'Worrying if you locked the door when you left',
                  'Sky-high energy bills from inefficient systems',
                  'Fumbling for keys with groceries in your hands',
                  'Missing package deliveries with no notification'
                ].map((item, i) => (
                  <li key={i} style={{padding: '1rem 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: '#c9d1d9', fontSize: '1.05rem'}}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{background: 'rgba(0, 240, 255, 0.05)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.1)'}}>
              <h3 style={{fontSize: '1.8rem', color: '#00f0ff', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                ✅ With Smart Home
              </h3>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {[
                  'Lights turn off automatically when you leave',
                  'Home pre-heated/cooled before you arrive',
                  'Check & control locks from anywhere in the world',
                  'Save $100+ monthly on energy costs',
                  'Unlock door with fingerprint or phone tap',
                  'Watch deliveries in real-time, grant access remotely'
                ].map((item, i) => (
                  <li key={i} style={{padding: '1rem 0', borderBottom: '1px solid rgba(0, 240, 255, 0.2)', color: '#ffffff', fontSize: '1.05rem', fontWeight: '500'}}>
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{textAlign: 'center'}}>
            <Link href="/contact" className="btn" style={{fontSize: '1.2rem', padding: '1.25rem 3rem'}}>
              Start Saving Today - Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="section" style={{backgroundColor: '#161b22', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Popular Smart Home Packages
              </span>
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Pre-designed bundles that most Dallas homeowners love
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem'}}>
            {[
              {
                name: 'Starter Package',
                price: '$1,299',
                popular: false,
                features: [
                  '✓ Smart thermostat (Nest/Ecobee)',
                  '✓ 4 smart light switches',
                  '✓ Smart door lock',
                  '✓ Video doorbell',
                  '✓ Basic setup & training',
                  '✓ 1-year warranty'
                ]
              },
              {
                name: 'Complete Home',
                price: '$3,499',
                popular: true,
                features: [
                  '✓ Everything in Starter, plus:',
                  '✓ 12 smart switches & outlets',
                  '✓ 3 security cameras',
                  '✓ Smart garage opener',
                  '✓ Leak & smoke detectors',
                  '✓ Full automation setup',
                  '✓ Lifetime support'
                ]
              },
              {
                name: 'Premium Estate',
                price: '$7,999',
                popular: false,
                features: [
                  '✓ Everything in Complete, plus:',
                  '✓ Whole-home audio system',
                  '✓ Motorized blinds (6 windows)',
                  '✓ Smart irrigation system',
                  '✓ Advanced automations',
                  '✓ White-glove concierge',
                  '✓ Priority 24/7 support'
                ]
              }
            ].map((pkg, i) => (
              <div key={i} style={{background: pkg.popular ? 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.1))' : '#0d1117', border: pkg.popular ? '2px solid #00f0ff' : '1px solid #30363d', borderRadius: '16px', padding: '2rem', position: 'relative', boxShadow: pkg.popular ? '0 8px 32px rgba(0, 240, 255, 0.2)' : 'none'}}>
                {pkg.popular && (
                  <div style={{position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0, 240, 255, 0.9)', color: '#0a0e14', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px', backdropFilter: 'blur(10px)'}}>
                    🔥 MOST POPULAR
                  </div>
                )}
                <h3 style={{fontSize: '1.6rem', marginBottom: '1rem', color: pkg.popular ? '#00f0ff' : '#ffffff'}}>{pkg.name}</h3>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '1.5rem'}}>{pkg.price}</div>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, marginBottom: '2rem'}}>
                  {pkg.features.map((feature, j) => (
                    <li key={j} style={{padding: '0.75rem 0', color: '#c9d1d9', fontSize: '0.95rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.popular ? "btn" : "btn btn-outline"} style={{width: '100%', textAlign: 'center', display: 'block'}}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', padding: '2rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
            <p style={{fontSize: '1.1rem', color: '#c9d1d9', marginBottom: '0.5rem'}}>
              <strong style={{color: '#00f0ff'}}>Need something custom?</strong> We'll design a package specifically for your home.
            </p>
            <Link href="tel:682-466-2130" style={{color: '#00f0ff', fontSize: '1.1rem', textDecoration: 'underline'}}>
              Call us for a free consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Top Smart Home Solutions - Condensed */}
      <section className="section" style={{backgroundColor: '#0d1117', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                What We Install & Automate
              </span>
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Professional installation of all major smart home brands
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem'}}>
            {[
              {
                icon: '🌡️',
                title: 'Climate Control',
                desc: 'Smart thermostats that learn your schedule and save $100+ monthly',
                brands: 'Nest • Ecobee • Honeywell'
              },
              {
                icon: '💡',
                title: 'Smart Lighting',
                desc: 'Automated switches, dimmers, and color-changing LED systems',
                brands: 'Philips Hue • Lutron • LIFX'
              },
              {
                icon: '🔒',
                title: 'Security & Locks',
                desc: 'Cameras, doorbells, smart locks with remote access',
                brands: 'Ring • Nest • August • Yale'
              },
              {
                icon: '🏠',
                title: 'Voice Control',
                desc: 'Unified control through Alexa, Google, or Apple HomeKit',
                brands: 'Alexa • Google • Apple'
              },
              {
                icon: '📶',
                title: 'Network Setup',
                desc: 'Mesh WiFi for whole-home coverage and reliability',
                brands: 'Eero • Google WiFi • Orbi'
              },
              {
                icon: '🚗',
                title: 'Garage & Access',
                desc: 'Smart openers, sensors, and delivery access control',
                brands: 'MyQ • Chamberlain • Tailwind'
              }
            ].map((item, i) => (
              <div key={i} style={{background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '2rem', transition: 'all 0.3s ease', cursor: 'pointer'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#00f0ff'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 240, 255, 0.2)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#30363d'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{item.icon}</div>
                <h3 style={{fontSize: '1.4rem', marginBottom: '1rem', color: '#ffffff'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', marginBottom: '1rem', lineHeight: '1.6'}}>{item.desc}</p>
                <p style={{color: '#8b949e', fontSize: '0.9rem', fontStyle: 'italic'}}>{item.brands}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Results */}
      <section className="section" style={{backgroundColor: '#161b22', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Real Dallas Homeowners, Real Results
              </span>
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              See how smart home automation has transformed daily life
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem'}}>
            {[
              {
                name: 'Sarah & Mike T.',
                location: 'Highland Park',
                savings: '$1,450/year',
                quote: '"We were skeptical about the cost, but our energy bills dropped 35% in the first 3 months. The smart thermostat paid for itself already. Plus, being able to check on our house from vacation is priceless."',
                rating: 5
              },
              {
                name: 'David L.',
                location: 'Richardson',
                savings: '$892/year',
                quote: '"As someone who travels for work, the remote access features are incredible. I can let the dog walker in, watch the security cameras, and adjust the AC before I get home. MetroPlex made it so easy."',
                rating: 5
              },
              {
                name: 'Jennifer R.',
                location: 'Plano',
                savings: '$1,200/year',
                quote: '"Best home upgrade ever. The automated lighting scenes for movie night, bedtime, and morning routines have eliminated so much daily hassle. My kids love controlling everything with voice commands."',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} style={{background: '#0d1117', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '16px', padding: '2rem'}}>
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} style={{color: '#00f0ff', fontSize: '1.3rem'}}>★</span>
                  ))}
                </div>
                <p style={{color: '#c9d1d9', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic'}}>
                  {testimonial.quote}
                </p>
                <div style={{borderTop: '1px solid rgba(0, 240, 255, 0.2)', paddingTop: '1rem'}}>
                  <div style={{fontWeight: 'bold', color: '#ffffff', marginBottom: '0.25rem'}}>{testimonial.name}</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem'}}>{testimonial.location}</div>
                  <div style={{color: '#00f0ff', fontWeight: 'bold', fontSize: '1.1rem'}}>
                    Saving {testimonial.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process - Simplified */}
      <section className="section" style={{backgroundColor: '#0d1117', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Simple 3-Step Process
              </span>
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              From consultation to automation in as little as 1 day
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', maxWidth: '1000px', margin: '0 auto'}}>
            {[
              { 
                step: '1', 
                title: 'Free Consultation', 
                desc: 'We assess your home and goals, recommend the best devices, and provide an upfront quote with no surprises.',
                time: '30-45 mins'
              },
              { 
                step: '2', 
                title: 'Expert Installation', 
                desc: 'Our certified techs install and configure everything. We handle the wiring, network setup, and device pairing.',
                time: '2-8 hours'
              },
              { 
                step: '3', 
                title: 'Training & Support', 
                desc: 'We teach you how to use everything, set up automations, and provide ongoing support as you expand your system.',
                time: '30 mins+'
              }
            ].map((item, index) => (
              <div key={index} style={{textAlign: 'center'}}>
                <div style={{width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #00f0ff, #0080ff)', color: '#0a0e14', fontSize: '2.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 8px 24px rgba(0, 240, 255, 0.3)'}}>
                  {item.step}
                </div>
                <h3 style={{color: '#ffffff', fontSize: '1.5rem', marginBottom: '1rem'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>{item.desc}</p>
                <div style={{color: '#00f0ff', fontSize: '0.95rem', fontWeight: 'bold'}}>
                  ⏱️ {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section" style={{backgroundColor: '#161b22', padding: '5rem 0'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🛡️</div>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Our 100% Satisfaction Guarantee
              </span>
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.7'}}>
              We stand behind our work with a comprehensive guarantee. If you're not completely satisfied with your smart home installation, we'll make it right or refund your money.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem'}}>
              {[
                { icon: '✅', title: '100% Satisfaction', desc: 'Love it or we fix it free' },
                { icon: '🔧', title: 'Lifetime Support', desc: 'Free troubleshooting forever' },
                { icon: '⚡', title: 'Price Match', desc: 'We beat any written quote' }
              ].map((item, i) => (
                <div key={i} style={{background: '#0d1117', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px', padding: '2rem'}}>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{item.icon}</div>
                  <h3 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{item.title}</h3>
                  <p style={{color: '#8b949e', fontSize: '0.95rem'}}>{item.desc}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn" style={{fontSize: '1.2rem', padding: '1.25rem 3rem', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)'}}>
              Get Your Free Quote - Zero Risk
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{backgroundColor: '#0d1117', padding: '5rem 0'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.1))', border: '2px solid #00f0ff', borderRadius: '20px', padding: '4rem', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.2)'}}>
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: '#00f0ff', color: '#0a0e14', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '1px'}}>
              ⚡ LIMITED TIME: $250 OFF + FREE CONSULTATION
            </div>
            <h2 style={{fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: '700', color: '#ffffff'}}>
              Start Living Smarter Today
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '2.5rem', lineHeight: '1.7'}}>
              Join 500+ Dallas homeowners who've upgraded to smart home automation. Book your free consultation now and get $250 off any package over $1,000.
            </p>
            
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.2rem', padding: '1.25rem 2.5rem', background: '#00f0ff', color: '#0a0e14'}}>
                📞 Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn" style={{fontSize: '1.2rem', padding: '1.25rem 2.5rem'}}>
                Request Free Quote
              </Link>
            </div>

            <p style={{color: '#8b949e', fontSize: '0.9rem'}}>
              ⏰ Offer expires soon • 🔒 No obligation • ✅ Same-day appointments available
            </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
