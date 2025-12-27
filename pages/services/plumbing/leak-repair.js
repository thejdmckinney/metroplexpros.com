import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function LeakRepair() {
  return (
    <Layout 
      title="Leak Detection & Repair Dallas-Fort Worth | MetroPlex Pros"
      description="Expert leak detection and repair services in DFW. Find hidden water leaks fast with advanced technology. Emergency leak repair available 24/7. Call (682) 466-2130."
      keywords="leak detection Dallas, water leak repair, pipe leak, plumbing leak, leak detection service, emergency plumber Dallas"
      canonicalUrl="https://www.metroplexpros.com/services/plumbing/leak-repair"
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Leak Detection & Repair",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://www.metroplexpros.com"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Texas"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff'}}>
              24/7 EMERGENCY SERVICE
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Leak Detection & Repair</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Find & Fix Hidden Water Leaks Fast with Advanced Technology
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.05))', border: '1px solid rgba(255, 0, 0, 0.3)'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#ff4444'}}>
                🚨 Water Leak Emergency?
              </h3>
              <p style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
                Water leaks can cause thousands of dollars in damage. We offer 24/7 emergency leak detection and repair. 
                If you suspect a leak, call us immediately!
              </p>
              <Link href="tel:682-466-2130" className="btn" style={{background: '#ff4444'}}>
                Call Now for Emergency Service
              </Link>
            </div>

            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Professional Leak Detection & Repair Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Not all water leaks are obvious. Hidden leaks behind walls, under slabs, or underground can waste water, 
              increase bills, and cause serious structural damage. MetroPlex Pros uses advanced leak detection technology 
              to locate leaks quickly without unnecessary demolition, then repairs them right the first time.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Signs You May Have a Water Leak
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {sign: 'Unexplained water bill increase', icon: '💰'},
                {sign: 'Sound of running water', icon: '🔊'},
                {sign: 'Wet spots on walls or ceiling', icon: '💧'},
                {sign: 'Musty odors or mold growth', icon: '🦠'},
                {sign: 'Water meter running when no water is on', icon: '⏱️'},
                {sign: 'Foundation cracks or settlement', icon: '🏚️'},
                {sign: 'Warm spots on floor (hot water leak)', icon: '🔥'},
                {sign: 'Low water pressure', icon: '📉'}
              ].map((item, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                  <p style={{fontSize: '1.05rem'}}>{item.sign}</p>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Advanced Leak Detection Methods
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Electronic Leak Detection',
                  description: 'State-of-the-art electronic listening devices amplify the sound of water escaping from pipes, pinpointing leak locations with precision.',
                  icon: '🎧'
                },
                {
                  title: 'Thermal Imaging',
                  description: 'Infrared cameras detect temperature differences caused by water leaks behind walls, under floors, or in ceilings without any invasive work.',
                  icon: '🌡️'
                },
                {
                  title: 'Video Pipe Inspection',
                  description: 'Waterproof cameras inspect the inside of pipes to locate cracks, blockages, and leak sources in drain and sewer lines.',
                  icon: '📹'
                },
                {
                  title: 'Pressure Testing',
                  description: 'We pressurize your water system to identify leaks and determine the severity of the problem quickly and accurately.',
                  icon: '💪'
                },
                {
                  title: 'Tracer Gas Detection',
                  description: 'Safe, non-toxic gas is introduced into pipes and detected with specialized equipment to find even the smallest leaks.',
                  icon: '🔬'
                }
              ].map((method, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{method.icon}</div>
                    <div>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{method.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6'}}>{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Types of Leaks We Repair
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                'Pipe leaks (supply lines)',
                'Slab leaks (under foundation)',
                'Hidden wall leaks',
                'Ceiling leaks',
                'Faucet & fixture leaks',
                'Toilet leaks',
                'Water heater leaks',
                'Underground pipe leaks',
                'Shower & tub leaks',
                'Washing machine connection leaks',
                'Dishwasher leaks',
                'Outdoor spigot leaks'
              ].map((type, index) => (
                <div key={index} className="card" style={{padding: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{color: '#00f0ff'}}>✓</span>
                    <span>{type}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Our Leak Repair Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: '1', title: 'Initial Inspection', desc: 'We assess the situation, check your water meter, and look for visible signs of leaks.'},
                  {step: '2', title: 'Advanced Detection', desc: 'Using our specialized equipment, we locate the exact source of the leak without unnecessary demolition.'},
                  {step: '3', title: 'Repair Options', desc: 'We explain your repair options with upfront pricing and recommend the best solution for your situation.'},
                  {step: '4', title: 'Professional Repair', desc: 'Our licensed plumbers fix the leak using quality materials and proven techniques.'},
                  {step: '5', title: 'Testing & Verification', desc: 'We test the repair thoroughly and verify the leak is completely resolved.'},
                  {step: '6', title: 'Restoration', desc: 'If any areas were opened for repair, we restore them to their original condition.'}
                ].map((item, index) => (
                  <div key={index} style={{display: 'flex', gap: '1rem', padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                    <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#00f0ff', minWidth: '40px'}}>{item.step}</div>
                    <div>
                      <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6'}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Choose MetroPlex Pros for Leak Detection?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🔬', title: 'Advanced Technology', text: 'Latest leak detection equipment'},
                {icon: '⚡', title: 'Fast Response', text: '24/7 emergency service available'},
                {icon: '🎯', title: 'Accurate Detection', text: 'Find leaks without guesswork'},
                {icon: '💰', title: 'Save Money', text: 'Minimize demolition and restoration costs'},
                {icon: '🔧', title: 'Expert Repairs', text: 'Licensed plumbers with years of experience'},
                {icon: '✓', title: 'Guaranteed Work', text: 'All repairs backed by warranty'}
              ].map((item, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.title}</h4>
                  <p style={{color: '#8b949e'}}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                The Cost of Ignoring Water Leaks
              </h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  'Structural damage to your home\'s foundation',
                  'Mold growth and health hazards',
                  'Damaged drywall, flooring, and personal belongings',
                  'Increased water bills month after month',
                  'Decreased property value',
                  'Potential insurance claims complications'
                ].map((cost, index) => (
                  <li key={index} style={{padding: '0.75rem 0', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#ff4444', marginRight: '1rem', fontSize: '1.2rem'}}>⚠️</span>
                    <span>{cost}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Suspect a Water Leak?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Don't wait—early detection saves money and prevents damage
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Call (682) 466-2130
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Schedule Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Serving Dallas-Fort Worth</h2>
            <p style={{color: '#8b949e', marginBottom: '2rem'}}>
              Dallas • Plano • Frisco • McKinney • Allen • Richardson • Garland • Irving • Highland Park • University Park • Lakewood
            </p>
            <Link href="/service-areas" className="btn btn-outline">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
