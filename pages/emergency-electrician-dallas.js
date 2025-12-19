import Layout from '../components/Layout'
import Link from 'next/link'

export default function EmergencyElectricianDallas() {
  return (
    <Layout 
      title="24/7 Emergency Electrician Dallas TX | (682) 466-2130 | Same-Day Service"
      description="⚡ EMERGENCY ELECTRICIAN DALLAS - Available 24/7! Power outages, sparking outlets, electrical fires, panel problems. Licensed home electrical repair service responds fast. Call (682) 466-2130 NOW!"
      keywords="emergency electrician Dallas, 24 hour electrician Dallas, emergency electrical service Dallas, home electrical repair service, home electrical repair near me, power outage electrician, sparking outlet repair, electrical emergency Dallas, same day electrician"
      canonicalUrl="https://metroplexpros.com/emergency-electrician-dallas"
    >
      {/* Emergency Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "serviceType": "Emergency Electrical Service",
            "provider": {
              "@type": "Electrician",
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
      <section className="hero" style={{background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF4500 100%)', position: 'relative', overflow: 'hidden', borderBottom: '4px solid #FFD700'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, backgroundImage: 'radial-gradient(circle at 25% 30%, #FFD700 0%, transparent 40%), radial-gradient(circle at 75% 70%, #FFD700 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.75rem 2rem', background: '#FFD700', color: '#000', borderRadius: '30px', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '2px', boxShadow: '0 4px 20px rgba(255, 215, 0, 0.5)', animation: 'pulse 2s infinite'}}>
              🚨 24/7 EMERGENCY SERVICE AVAILABLE NOW
            </div>
            <h1 className="hero-title" style={{fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              Emergency Electrician Dallas
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.8rem', color: '#FFD700', marginBottom: '1.5rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
              Licensed Electrician Responds Within 60 Minutes
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.2rem', lineHeight: '1.8', color: '#fff'}}>
              Electrical emergency? Don't wait! Power outages, sparking outlets, burning smells, tripped breakers, and 
              electrical shocks require immediate home electrical repair. Our licensed Dallas electricians provide 24/7 
              emergency home electrical repair service and are standing by to respond to your emergency within 60 minutes.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.4rem', padding: '1.5rem 3rem', backgroundColor: '#FFD700', color: '#000', border: 'none', fontWeight: 'bold', boxShadow: '0 6px 30px rgba(255, 215, 0, 0.6)', animation: 'pulse 2s infinite'}}>
                ⚡ CALL NOW: (682) 466-2130
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

      {/* Common Electrical Emergencies */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#DC143C'}}>
              Common Electrical Emergencies We Handle
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e'}}>
              Don't wait for electrical problems to get worse - Call us immediately if you experience any of these issues
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '⚡',
                title: 'Complete Power Outage',
                desc: 'Your home has lost all power while neighbors have electricity. Could be main panel failure, service line issue, or meter problems.',
                urgency: 'CRITICAL',
                dangers: ['Food spoilage', 'No HVAC', 'Security system down', 'Medical equipment failure']
              },
              {
                icon: '🔥',
                title: 'Burning Smell / Smoke',
                desc: 'Burning plastic smell from outlets, switches, or electrical panel. This indicates overheating wires or failing connections.',
                urgency: 'CRITICAL',
                dangers: ['Electrical fire risk', 'Wire insulation melting', 'Carbon monoxide', 'Structure damage']
              },
              {
                icon: '⚠️',
                title: 'Sparking Outlets or Switches',
                desc: 'Seeing sparks when plugging in appliances or flipping switches. Indicates loose connections or short circuits.',
                urgency: 'URGENT',
                dangers: ['Fire hazard', 'Equipment damage', 'Electrical shocks', 'Arc flash burns']
              },
              {
                icon: '💥',
                title: 'Repeated Circuit Breaker Trips',
                desc: 'Breakers constantly tripping even after resetting. Circuit overload, ground fault, or short circuit present.',
                urgency: 'URGENT',
                dangers: ['Overheated wiring', 'Fire risk', 'Equipment damage', 'Electrical system failure']
              },
              {
                icon: '⚡',
                title: 'Electrical Shocks from Outlets',
                desc: 'Getting shocked when touching outlets, switches, or appliances. Indicates dangerous wiring faults or grounding issues.',
                urgency: 'CRITICAL',
                dangers: ['Serious injury', 'Heart arrhythmia', 'Burns', 'Electrocution risk']
              },
              {
                icon: '💧',
                title: 'Water in Electrical Panel',
                desc: 'Water leaking into your electrical panel from roof, plumbing, or flooding. Extreme danger of electrocution.',
                urgency: 'CRITICAL',
                dangers: ['Electrocution', 'Panel failure', 'Total power loss', 'Fire hazard']
              },
              {
                icon: '🌩️',
                title: 'Storm Damage',
                desc: 'Lightning strike, tree on power lines, or storm-related electrical damage. Service line or meter damage.',
                urgency: 'URGENT',
                dangers: ['Power surge damage', 'Fire risk', 'Exposed wires', 'Electrocution']
              },
              {
                icon: '🔌',
                title: 'Dead Outlets Throughout Home',
                desc: 'Multiple outlets not working in different rooms. Could indicate main panel issue or major circuit failure.',
                urgency: 'HIGH',
                dangers: ['Hidden wiring damage', 'Progressive failure', 'Fire risk', 'Inconvenience']
              },
              {
                icon: '💡',
                title: 'Flickering Lights Throughout House',
                desc: 'All lights flickering, not just one room. Indicates loose service connection or utility company issue.',
                urgency: 'HIGH',
                dangers: ['Electrical damage', 'Appliance failure', 'Fire hazard', 'Power loss']
              }
            ].map((emergency, index) => (
              <div key={index} style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: emergency.urgency === 'CRITICAL' ? '2px solid #DC143C' : '1px solid rgba(220, 20, 60, 0.3)', boxShadow: emergency.urgency === 'CRITICAL' ? '0 4px 20px rgba(220, 20, 60, 0.3)' : '0 4px 20px rgba(220, 20, 60, 0.1)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{fontSize: '3rem'}}>{emergency.icon}</div>
                  <div style={{padding: '0.25rem 0.75rem', backgroundColor: emergency.urgency === 'CRITICAL' ? '#DC143C' : '#FF8C00', color: '#fff', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold'}}>
                    {emergency.urgency}
                  </div>
                </div>
                <h3 style={{color: '#DC143C', fontSize: '1.5rem', marginBottom: '1rem'}}>{emergency.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1.5rem'}}>{emergency.desc}</p>
                <div style={{borderTop: '1px solid #30363d', paddingTop: '1rem'}}>
                  <div style={{color: '#8b949e', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>DANGERS:</div>
                  <ul style={{color: '#8b949e', lineHeight: '2', fontSize: '0.9rem', listStyle: 'none', padding: 0, margin: 0}}>
                    {emergency.dangers.map((danger, idx) => (
                      <li key={idx} style={{paddingLeft: '1.2rem', position: 'relative'}}>
                        <span style={{position: 'absolute', left: 0, color: '#DC143C', fontSize: '0.8rem'}}>▸</span>
                        {danger}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '4rem', padding: '3rem', backgroundColor: '#161b22', borderRadius: '12px', border: '2px solid #DC143C'}}>
            <h3 style={{color: '#DC143C', fontSize: '2rem', marginBottom: '1rem'}}>
              ⚠️ If You're Experiencing ANY of These Issues
            </h3>
            <p style={{color: '#c9d1d9', fontSize: '1.2rem', marginBottom: '2rem'}}>
              Don't try to fix it yourself. Call a licensed electrician immediately.
            </p>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.2rem 3rem', backgroundColor: '#DC143C', boxShadow: '0 4px 20px rgba(220, 20, 60, 0.4)'}}>
              CALL EMERGENCY ELECTRICIAN: (682) 466-2130
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergency Service */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Call Metroplex Pros for Emergency Electrical Service?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '🚨', title: '24/7 Availability', desc: 'We answer the phone day and night, weekends and holidays. No voicemail - you talk to a real person who can dispatch an electrician immediately.' },
              { icon: '⚡', title: 'Fast Response Time', desc: 'Emergency electrician dispatched within 60 minutes in Dallas and surrounding areas. We know electrical emergencies can\'t wait.' },
              { icon: '🏆', title: 'Licensed Master Electricians', desc: 'All our emergency electricians are fully licensed, insured, and experienced in handling urgent electrical situations safely.' },
              { icon: '🔧', title: 'Fully Stocked Trucks', desc: 'Our trucks carry extensive inventory of parts and equipment to fix most electrical emergencies on the first visit.' },
              { icon: '💡', title: 'Expert Diagnostics', desc: 'We quickly identify the root cause of electrical problems and provide permanent solutions, not just quick Band-Aids.' },
              { icon: '💰', title: 'Upfront Emergency Pricing', desc: 'We provide clear pricing before starting work, even for emergencies. No surprise bills or hidden fees.' }
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
              24/7 Emergency Electrician Service Areas
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Fast emergency electrical service throughout the Dallas-Fort Worth metroplex
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
            {['Dallas', 'Plano', 'Frisco', 'McKinney', 'Allen', 'Richardson', 'Garland', 'Irving', 'Highland Park', 'University Park', 'Lakewood', 'East Dallas'].map((city, index) => (
              <div key={index} style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid #30363d', textAlign: 'center'}}>
                <div style={{color: '#00f0ff', fontSize: '1.2rem', fontWeight: 'bold'}}>⚡ {city}</div>
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

      {/* What to Do in Electrical Emergency */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              What to Do During an Electrical Emergency
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Follow these steps to stay safe while waiting for emergency electrician
            </p>
          </div>

          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {[
              { step: '1', title: 'Call Emergency Electrician FIRST', desc: 'Call (682) 466-2130 immediately. The sooner you call, the sooner we can dispatch help. Do NOT attempt repairs yourself.' },
              { step: '2', title: 'Turn Off Power at Main Panel (if safe)', desc: 'If you can safely access your electrical panel, turn off the main breaker. Do NOT touch it if there\'s water, smoke, or visible damage.' },
              { step: '3', title: 'Evacuate if Necessary', desc: 'If you smell burning, see smoke, or suspect electrical fire - evacuate immediately and call 911. Your safety is more important than property.' },
              { step: '4', title: 'Keep Away from Damaged Areas', desc: 'Stay away from sparking outlets, exposed wires, wet electrical equipment, or damaged panels until electrician arrives.' },
              { step: '5', title: 'Don\'t Use Water', desc: 'Never use water on an electrical fire or near electrical equipment. Water conducts electricity and can cause electrocution.' },
              { step: '6', title: 'Wait for Licensed Electrician', desc: 'Even if power is restored, wait for our electrician to inspect and fix the issue properly. Electrical problems rarely fix themselves.' }
            ].map((item, index) => (
              <div key={index} style={{display: 'flex', gap: '2rem', marginBottom: '2rem', padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(220, 20, 60, 0.3)'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#DC143C', minWidth: '60px'}}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{color: '#DC143C', fontSize: '1.4rem', marginBottom: '0.5rem'}}>{item.title}</h3>
                  <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{backgroundColor: '#0d1117', textAlign: 'center', borderTop: '3px solid #DC143C'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#DC143C', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Need an Emergency Electrician Right Now?
            </h2>
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Don't wait for electrical problems to become disasters. Our licensed emergency electricians are standing by 
              24/7 to respond to your electrical emergency anywhere in Dallas.
            </p>
            
            <div style={{marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.5rem', padding: '1.5rem 4rem', backgroundColor: '#DC143C', boxShadow: '0 6px 30px rgba(220, 20, 60, 0.5)', animation: 'pulse 2s infinite'}}>
                ⚡ CALL NOW: (682) 466-2130
              </Link>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(220, 20, 60, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>📞</div>
                <div style={{color: '#DC143C', fontWeight: 'bold', marginBottom: '0.5rem'}}>Call 24/7</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Always Available</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(220, 20, 60, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>⚡</div>
                <div style={{color: '#DC143C', fontWeight: 'bold', marginBottom: '0.5rem'}}>Fast Response</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>60 Minute Arrival</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(220, 20, 60, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🏆</div>
                <div style={{color: '#DC143C', fontWeight: 'bold', marginBottom: '0.5rem'}}>Licensed Pros</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Fully Insured</div>
              </div>
              <div style={{padding: '1.5rem', backgroundColor: '#161b22', borderRadius: '8px', border: '1px solid rgba(220, 20, 60, 0.3)'}}>
                <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>💰</div>
                <div style={{color: '#DC143C', fontWeight: 'bold', marginBottom: '0.5rem'}}>Fair Pricing</div>
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
            <Link href="/services/electrical" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚡</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>Electrical Services</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  Panel upgrades, wiring, outlets, lighting, and more.
                </p>
                <span style={{color: '#00f0ff', fontSize: '0.95rem'}}>Learn More →</span>
              </div>
            </Link>
            
            <Link href="/emergency-plumber-dallas" style={{textDecoration: 'none'}}>
              <div style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid rgba(220, 20, 60, 0.2)', transition: 'all 0.3s', cursor: 'pointer'}} className="hover-lift">
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔧</div>
                <h3 style={{color: '#DC143C', fontSize: '1.3rem', marginBottom: '1rem'}}>Emergency Plumber</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.7', marginBottom: '1rem'}}>
                  24/7 emergency plumbing service for urgent repairs.
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
