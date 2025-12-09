import Layout from '../components/Layout'
import Link from 'next/link'

export default function EmergencyPlumberDallas() {
  return (
    <Layout 
      title="24/7 Emergency Plumber Dallas TX | (682) 466-2130 | Same-Day Service"
      description="⚡ EMERGENCY PLUMBER DALLAS - Available 24/7! Burst pipes, sewer backups, water heater failures, gas leaks. Licensed plumber responds fast. Call (682) 466-2130 NOW!"
      keywords="emergency plumber Dallas, 24 hour plumber Dallas, emergency plumbing service Dallas, burst pipe repair, sewer backup, water heater emergency, gas leak plumber, urgent plumbing repair Dallas"
      canonicalUrl="https://metroplexpros.com/emergency-plumber-dallas"
    >
      {/* Emergency Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "serviceType": "Emergency Plumbing Service",
            "provider": {
              "@type": "Plumber",
              "name": "Metroplex Pros",
              "telephone": "(682) 466-2130",
              "availableLanguage": "English",
              "priceRange": "$$$"
            },
            "areaServed": [
              {"@type": "City", "name": "Dallas, TX"},
              {"@type": "City", "name": "Plano, TX"},
              {"@type": "City", "name": "Frisco, TX"},
              {"@type": "City", "name": "McKinney, TX"},
              {"@type": "City", "name": "Allen, TX"},
              {"@type": "City", "name": "Richardson, TX"}
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": {
                "@type": "ContactPoint",
                "telephone": "+1-682-466-2130",
                "contactType": "Emergency",
                "availableLanguage": "English",
                "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
              }
            }
          })
        }}
      />

      {/* URGENT Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #00008B 0%, #1E90FF 50%, #00BFFF 100%)', position: 'relative', overflow: 'hidden', borderBottom: '4px solid #FFD700'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, backgroundImage: 'radial-gradient(circle at 25% 30%, #FFD700 0%, transparent 40%), radial-gradient(circle at 75% 70%, #FFD700 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#FFD700', color: '#000', borderRadius: '30px', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '2px', boxShadow: '0 4px 20px rgba(255, 215, 0, 0.5)', animation: 'pulse 2s infinite'}}>
              🚨 24/7 EMERGENCY PLUMBER AVAILABLE NOW
            </div>
            <h1 className="hero-title" style={{fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              Emergency Plumber Dallas
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.8rem', color: '#FFD700', marginBottom: '1.5rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
              Licensed Plumber Responds Within 60 Minutes
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.2rem', lineHeight: '1.8', color: '#fff'}}>
              Plumbing emergency? We're here to help! Burst pipes, sewer backups, water heater failures, gas leaks, and 
              major water leaks require immediate attention. Our licensed Dallas plumbers are available 24/7 
              to respond to your plumbing emergency.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.4rem', padding: '1.5rem 3rem', backgroundColor: '#FFD700', color: '#000', border: 'none', fontWeight: 'bold', boxShadow: '0 6px 30px rgba(255, 215, 0, 0.6)', animation: 'pulse 2s infinite'}}>
                💧 CALL NOW: (682) 466-2130
              </Link>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', paddingTop: '2rem', borderTop: '2px solid rgba(255, 215, 0, 0.3)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700'}}>24/7</div>
                <div style={{color: '#fff', fontSize: '1rem'}}>Available Day & Night</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700'}}>60 Min</div>
                <div style={{color: '#fff', fontSize: '1rem'}}>Fast Response Time</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700'}}>Licensed</div>
                <div style={{color: '#fff', fontSize: '1rem'}}>& Fully Insured</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700'}}>Same Day</div>
                <div style={{color: '#fff', fontSize: '1rem'}}>Emergency Repairs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Plumbing Emergencies */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#1E90FF'}}>
              Common Plumbing Emergencies We Handle
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e'}}>
              Don't wait for plumbing problems to cause water damage - Call us immediately if you experience any of these issues
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '💥',
                title: 'Burst Pipes',
                desc: 'Water gushing from broken pipes, usually from freezing, corrosion, or high pressure. Can cause thousands in water damage within hours.',
                urgency: 'CRITICAL',
                dangers: ['Severe water damage', 'Structural damage', 'Mold growth', 'Flooded basement']
              },
              {
                icon: '🚽',
                title: 'Sewer Backup',
                desc: 'Raw sewage backing up into toilets, tubs, or drains. Health hazard requiring immediate professional attention.',
                urgency: 'CRITICAL',
                dangers: ['Health hazard', 'Contamination', 'Foul odors', 'Property damage']
              },
              {
                icon: '🔥',
                title: 'Water Heater Failure',
                desc: 'Water heater leaking, making loud noises, or completely failed. No hot water and potential flood risk.',
                urgency: 'URGENT',
                dangers: ['Water damage', 'Scalding risk', 'Gas leak (gas heaters)', 'No hot water']
              },
              {
                icon: '⚠️',
                title: 'Gas Line Leak',
                desc: 'Smell of gas, hissing sound near gas lines. Extremely dangerous - evacuate and call immediately.',
                urgency: 'CRITICAL',
                dangers: ['Explosion risk', 'Carbon monoxide', 'Fire hazard', 'Health emergency']
              },
              {
                icon: '💧',
                title: 'Major Water Leak',
                desc: 'Large water leak from pipes, fixtures, or water line. Water pooling, ceiling stains, or water meter spinning.',
                urgency: 'CRITICAL',
                dangers: ['Water damage', 'High water bills', 'Mold growth', 'Foundation issues']
              },
              {
                icon: '🌊',
                title: 'Slab Leak',
                desc: 'Water leak under concrete slab foundation. Warm spots on floor, high water bill, or water pooling outside.',
                urgency: 'URGENT',
                dangers: ['Foundation damage', 'Structural issues', 'High costs', 'Mold under slab']
              },
              {
                icon: '❌',
                title: 'No Water / Low Pressure',
                desc: 'Sudden loss of water throughout home or extremely low pressure. Could indicate main line break or valve failure.',
                urgency: 'HIGH',
                dangers: ['No water access', 'Hidden leaks', 'Water line break', 'Contamination risk']
              },
              {
                icon: '🚫',
                title: 'Completely Clogged Main Line',
                desc: 'All drains backing up, toilets won\'t flush, water coming up in wrong places. Main sewer line blockage.',
                urgency: 'URGENT',
                dangers: ['Backup flooding', 'Health hazard', 'Multiple fixtures affected', 'Property damage']
              },
              {
                icon: '❄️',
                title: 'Frozen Pipes',
                desc: 'Pipes frozen due to cold weather. No water flow and high risk of burst when thawing begins.',
                urgency: 'HIGH',
                dangers: ['Burst pipe risk', 'No water', 'Water damage when thawing', 'Expensive repairs']
              }
            ].map((emergency, index) => (
              <div key={index} style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: emergency.urgency === 'CRITICAL' ? '2px solid #1E90FF' : '1px solid rgba(30, 144, 255, 0.3)', boxShadow: emergency.urgency === 'CRITICAL' ? '0 4px 20px rgba(30, 144, 255, 0.3)' : '0 4px 20px rgba(30, 144, 255, 0.1)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{fontSize: '3rem'}}>{emergency.icon}</div>
                  <div style={{padding: '0.25rem 0.75rem', backgroundColor: emergency.urgency === 'CRITICAL' ? '#DC143C' : '#FF8C00', color: '#fff', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold'}}>
                    {emergency.urgency}
                  </div>
                </div>
                <h3 style={{color: '#1E90FF', fontSize: '1.5rem', marginBottom: '1rem'}}>{emergency.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1.5rem'}}>{emergency.desc}</p>
                <div style={{borderTop: '1px solid #30363d', paddingTop: '1rem'}}>
                  <div style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>DANGERS:</div>
                  <ul style={{color: '#8b949e', lineHeight: '2', fontSize: '0.9rem', listStyle: 'none', padding: 0, margin: 0}}>
                    {emergency.dangers.map((danger, idx) => (
                      <li key={idx} style={{paddingLeft: '1.2rem', position: 'relative'}}>
                        <span style={{position: 'absolute', left: 0, color: '#1E90FF', fontSize: '0.8rem'}}>▸</span>
                        {danger}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '4rem', padding: '3rem', backgroundColor: '#161b22', borderRadius: '12px', border: '2px solid #1E90FF'}}>
            <h3 style={{color: '#1E90FF', fontSize: '2rem', marginBottom: '1rem'}}>
              ⚠️ If You're Experiencing ANY of These Issues
            </h3>
            <p style={{color: '#c9d1d9', fontSize: '1.2rem', marginBottom: '2rem'}}>
              Shut off water at main valve if possible, then call a licensed plumber immediately.
            </p>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem', backgroundColor: '#1E90FF', boxShadow: '0 4px 20px rgba(30, 144, 255, 0.4)'}}>
              CALL EMERGENCY PLUMBER: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergency Plumbing */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Call Metroplex Pros for Emergency Plumbing Service?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '🚨', title: '24/7 Availability', desc: 'We answer the phone day and night, weekends and holidays. No voicemail - you talk to a real person who can dispatch a plumber immediately.' },
              { icon: '💧', title: 'Fast Response Time', desc: 'Emergency plumber dispatched within 60 minutes in Dallas and surrounding areas. We know plumbing emergencies cause damage fast.' },
              { icon: '🏆', title: 'Licensed Master Plumbers', desc: 'All our emergency plumbers are fully licensed, insured, and experienced in handling urgent plumbing situations safely.' },
              { icon: '🔧', title: 'Fully Equipped Trucks', desc: 'Our trucks carry extensive inventory of parts, tools, and equipment to fix most plumbing emergencies on the first visit.' },
              { icon: '💡', title: 'Expert Problem Solving', desc: 'We quickly identify the root cause of plumbing problems and provide permanent solutions, preventing future emergencies.' },
              { icon: '💰', title: 'Transparent Emergency Pricing', desc: 'We provide clear pricing before starting work, even for emergencies. No surprise bills or hidden fees.' }
            ].map((benefit, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{benefit.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>{benefit.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              24/7 Emergency Plumber Service Areas
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Fast emergency plumbing service throughout the Dallas-Fort Worth metroplex
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
            {['Dallas', 'Plano', 'Frisco', 'McKinney', 'Allen', 'Richardson', 'Garland', 'Irving', 'Highland Park', 'University Park', 'Lakewood', 'East Dallas'].map((city, index) => (
              <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                <div style={{color: '#1E90FF', fontSize: '1.2rem', fontWeight: 'bold'}}>💧 {city}</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem', marginTop: '0.5rem'}}>Emergency Service Available</div>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center'}}>
            <Link href="/service-areas" style={{color: '#00f0ff', fontSize: '1.1rem', textDecoration: 'none'}}>
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* What to Do in Plumbing Emergency */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              What to Do During a Plumbing Emergency
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Follow these steps to minimize damage while waiting for emergency plumber
            </p>
          </div>

          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {[
              { step: '1', title: 'Call Emergency Plumber FIRST', desc: 'Call (682) 466-2130 immediately. The sooner you call, the sooner we can stop the damage. Do NOT attempt major repairs yourself.' },
              { step: '2', title: 'Shut Off Water Main Valve', desc: 'For burst pipes or major leaks, shut off the main water valve immediately. It\'s usually near the water meter or where the main line enters your home.' },
              { step: '3', title: 'Turn Off Water Heater', desc: 'If the emergency involves your water heater, turn off the gas/electric supply and the water supply to the heater to prevent damage.' },
              { step: '4', title: 'Open Drains & Spigots', desc: 'After shutting off main water, open outdoor spigots and drain faucets to release pressure and drain remaining water from pipes.' },
              { step: '5', title: 'Move Valuables to Safety', desc: 'Move furniture, electronics, and valuables away from water. Place buckets under active leaks. Document damage with photos for insurance.' },
              { step: '6', title: 'DO NOT Use Plumbing', desc: 'For sewer backups or main line clogs, stop using ALL plumbing fixtures immediately. Don\'t flush toilets or run water until plumber arrives.' },
              { step: '7', title: 'Ventilate for Gas Leaks', desc: 'If you smell gas, evacuate immediately, call 911, then call us from outside. Don\'t operate any electrical switches or create sparks.' },
              { step: '8', title: 'Wait for Licensed Plumber', desc: 'Don\'t attempt to fix major plumbing issues yourself. Professional repairs prevent further damage and ensure code compliance.' }
            ].map((item, index) => (
              <div key={index} style={{display: 'flex', gap: '2rem', marginBottom: '2rem', padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(30, 144, 255, 0.3)'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#1E90FF', minWidth: '60px'}}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{color: '#1E90FF', fontSize: '1.4rem', marginBottom: '0.5rem'}}>{item.title}</h3>
                  <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{backgroundColor: '#0d1117', textAlign: 'center', borderTop: '3px solid #1E90FF'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#1E90FF', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Need an Emergency Plumber Right Now?
            </h2>
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Don't let plumbing problems cause expensive water damage. Our licensed emergency plumbers are standing by 
              24/7 to respond to your plumbing emergency anywhere in Dallas.
            </p>
            
            <div style={{marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.5rem', padding: '1.5rem 4rem', backgroundColor: '#1E90FF', boxShadow: '0 6px 30px rgba(30, 144, 255, 0.5)', animation: 'pulse 2s infinite'}}>
                💧 CALL NOW: (682) 466-2130
              </Link>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(30, 144, 255, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>📞</div>
                <div style={{color: '#1E90FF', fontWeight: 'bold', marginBottom: '0.5rem'}}>Call 24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Always Available</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(30, 144, 255, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>💧</div>
                <div style={{color: '#1E90FF', fontWeight: 'bold', marginBottom: '0.5rem'}}>Fast Response</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>60 Minute Arrival</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(30, 144, 255, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🏆</div>
                <div style={{color: '#1E90FF', fontWeight: 'bold', marginBottom: '0.5rem'}}>Licensed Pros</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Fully Insured</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(30, 144, 255, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>💰</div>
                <div style={{color: '#1E90FF', fontWeight: 'bold', marginBottom: '0.5rem'}}>Fair Pricing</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Upfront Quotes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section" style={{backgroundColor: '#161b22', borderTop: '1px solid #30363d'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title" style={{fontSize: '2rem'}}>
              Other Services
            </h2>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <Link href="/services/plumbing" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔧</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>Plumbing Services</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  Water heaters, drain cleaning, fixture installation, and more.
                </p>
                <span style={{color: '#00f0ff', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
            
            <Link href="/emergency-electrician-dallas" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(220, 20, 60, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚡</div>
                <h3 style={{color: '#DC143C', fontSize: '1.3rem', marginBottom: '1rem'}}>Emergency Electrician</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  24/7 emergency electrical service for urgent repairs.
                </p>
                <span style={{color: '#DC143C', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
            
            <Link href="/services/smart-home-installations" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🏠</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>Smart Home Installation</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  Smart thermostats, lighting, security, and automation.
                </p>
                <span style={{color: '#00f0ff', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
