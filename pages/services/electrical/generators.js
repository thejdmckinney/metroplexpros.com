import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'
import ReverseSiloLinks from '../../../components/ReverseSiloLinks'


export default function Generators() {
  return (
    <Layout 
      title="Generator Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional generator installation in DFW. Standby & portable generators, transfer switches, automatic backup power. Licensed electricians. Call (682) 466-2130."
      keywords="generator installation Dallas, standby generator, backup generator, transfer switch, Generac, Kohler, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/electrical/generators"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-electrical-metroplex.png',
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
              <span className="text-accent">Generator Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Never Lose Power Again with Professional Backup Generators
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
              Professional Generator Installation
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Power outages in Dallas-Fort Worth can happen anytime due to severe weather, grid overload, or equipment 
              failure. MetroPlex Pros installs whole-home standby generators and transfer switches to keep your home 
              running smoothly during outages. Our licensed electricians ensure safe, code-compliant installations 
              backed by manufacturer warranties.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Generator Types & Sizes
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Whole-Home Standby Generators',
                  description: 'Permanently installed generators that automatically power your entire home when the grid goes down.',
                  icon: '🏠',
                  specs: ['7-26 kW capacity', 'Natural gas or propane', 'Automatic transfer switch', 'Powers entire home'],
                  brands: ['Generac', 'Kohler', 'Briggs & Stratton', 'Cummins']
                },
                {
                  title: 'Partial-Home Generators',
                  description: 'Mid-size generators that power essential circuits like refrigerator, lights, and HVAC.',
                  icon: '⚡',
                  specs: ['7-12 kW capacity', 'Essential circuits', 'Cost-effective', 'Quick installation'],
                  brands: ['Generac Guardian', 'Kohler', 'Champion', 'Briggs & Stratton']
                },
                {
                  title: 'Portable Generator Hookup',
                  description: 'Professional installation of transfer switches and inlet boxes for portable generators.',
                  icon: '🔌',
                  specs: ['Transfer switch', 'Outdoor inlet box', 'Safe connection', 'Use your portable'],
                  brands: ['Any portable generator', 'Honda', 'Predator', 'Westinghouse']
                }
              ].map((type, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{type.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{type.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{type.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem'}}>
                        {type.specs.map((spec, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{fontSize: '0.85rem', color: '#8b949e'}}>
                        <strong>Popular Brands:</strong> {type.brands.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Generator Installation Process
            </h3>
            <div style={{display: 'grid', gap: '1rem', marginBottom: '3rem'}}>
              {[
                {step: '1. Home Assessment', details: 'Calculate your power needs and determine ideal generator size and location'},
                {step: '2. Permits & Approvals', details: 'Obtain necessary permits and schedule inspections'},
                {step: '3. Site Preparation', details: 'Pour concrete pad, run gas line or propane, prepare electrical connections'},
                {step: '4. Generator Installation', details: 'Set generator on pad, connect fuel source, install exhaust'},
                {step: '5. Transfer Switch', details: 'Install automatic transfer switch to safely connect generator to home'},
                {step: '6. Testing & Training', details: 'Test system, ensure proper operation, train you on maintenance'}
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
                Benefits of Standby Generators
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {icon: '⚡', title: 'Automatic Power', text: 'Turns on within seconds of outage'},
                  {icon: '🏠', title: 'Whole-Home Coverage', text: 'Keep all systems running'},
                  {icon: '💰', title: 'Protect Investments', text: 'Prevent food spoilage, frozen pipes'},
                  {icon: '🏥', title: 'Medical Equipment', text: 'Critical for health needs'},
                  {icon: '📈', title: 'Home Value', text: 'Increases resale value'},
                  {icon: '☀️', title: 'Year-Round Peace', text: 'Protection from all outages'}
                ].map((benefit, i) => (
                  <div key={i} style={{display: 'flex', gap: '1rem', padding: '0.75rem'}}>
                    <div style={{fontSize: '2rem'}}>{benefit.icon}</div>
                    <div>
                      <h4 style={{fontSize: '1rem', marginBottom: '0.25rem', color: '#00f0ff'}}>{benefit.title}</h4>
                      <p style={{color: '#8b949e', fontSize: '0.9rem'}}>{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{background: 'rgba(0, 240, 255, 0.05)', border: '1px solid #00f0ff', borderRadius: '8px', padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Generator Size Guide
              </h3>
              <div style={{display: 'grid', gap: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderBottom: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <span style={{fontWeight: 'bold'}}>7-9 kW</span>
                  <span style={{color: '#8b949e'}}>Essential circuits (fridge, lights, furnace)</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderBottom: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <span style={{fontWeight: 'bold'}}>10-12 kW</span>
                  <span style={{color: '#8b949e'}}>Essentials + some comfort (AC or heat pump)</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderBottom: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <span style={{fontWeight: 'bold'}}>13-16 kW</span>
                  <span style={{color: '#8b949e'}}>Most of home (small-medium homes)</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem', borderBottom: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <span style={{fontWeight: 'bold'}}>17-20 kW</span>
                  <span style={{color: '#8b949e'}}>Full home coverage (medium-large homes)</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem'}}>
                  <span style={{fontWeight: 'bold'}}>22-26+ kW</span>
                  <span style={{color: '#8b949e'}}>Large homes, luxury features, high-demand equipment</span>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready for Backup Power?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Free consultation and detailed quote for your home
              </p>
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
        currentPage="/services/electrical/generators"
        currentSilo="electrical"
        variant="full"
      />

    </Layout>
  )
}
