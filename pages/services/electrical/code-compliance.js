import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function CodeCompliance() {
  return (
    <Layout 
      title="Electrical Code Compliance Dallas-Fort Worth | MetroPlex Pros"
      description="Electrical code compliance inspections and upgrades in DFW. Fix violations, pass inspections, ensure safety. Licensed electricians. Call (682) 466-2130."
      keywords="electrical code compliance Dallas, code violations, electrical inspection, NEC code, GFCI requirements, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/electrical/code-compliance/"
    

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
              <span className="text-accent">Electrical Code Compliance</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Bring Your Home Up to Code & Pass Inspections
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
              Professional Code Compliance Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Whether you're buying a home, selling, or dealing with violations, MetroPlex Pros brings your electrical 
              system up to current code standards throughout Dallas-Fort Worth. Our licensed electricians understand 
              NEC (National Electrical Code) requirements and local regulations, ensuring your home passes inspections 
              and meets safety standards.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Common Code Compliance Issues
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'GFCI & AFCI Protection',
                  description: 'Required in bathrooms, kitchens, garages, outdoors, and bedrooms. Prevents shocks and fires.',
                  icon: '🔌',
                  fixes: ['GFCI outlets in wet areas', 'AFCI breakers in bedrooms', 'Kitchen counter outlets', 'Outdoor circuits', 'Garage outlets', 'Basement locations']
                },
                {
                  title: 'Overloaded Circuits',
                  description: 'Too many devices on one circuit violates code and creates fire hazards.',
                  icon: '⚠️',
                  fixes: ['Add new circuits', 'Redistribute loads', 'Upgrade panel capacity', 'Dedicated appliance circuits', 'Split kitchen circuits', 'Separate lighting circuits']
                },
                {
                  title: 'Outdated Wiring',
                  description: 'Knob-and-tube, aluminum, or ungrounded wiring must be updated for safety and code.',
                  icon: '🔧',
                  fixes: ['Replace old wiring', 'Add ground wires', 'Update aluminum connections', 'Rewire problem areas', 'Install proper boxes', 'Ground all outlets']
                },
                {
                  title: 'Panel & Breaker Issues',
                  description: 'Federal Pacific, Zinsco, or undersized panels don\'t meet modern code requirements.',
                  icon: '⚡',
                  fixes: ['Replace unsafe panels', 'Upgrade panel size', 'Add surge protection', 'Proper breaker sizing', 'Label all circuits', 'Arc-fault breakers']
                }
              ].map((issue, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{issue.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{issue.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{issue.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem'}}>
                        {issue.fixes.map((fix, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{fix}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              When Code Compliance is Required
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🏠', title: 'Home Sale', text: 'Inspection reveals code violations that must be fixed'},
                {icon: '🔨', title: 'Renovations', text: 'Any electrical work requires current code compliance'},
                {icon: '🏗️', title: 'Additions', text: 'New construction must meet latest code standards'},
                {icon: '📋', title: 'Failed Inspection', text: 'City inspector found violations requiring correction'},
                {icon: '🔥', title: 'Insurance', text: 'Insurer requires upgrades for coverage'},
                {icon: '⚠️', title: 'Safety Concerns', text: 'Bring outdated system up to safe standards'}
              ].map((scenario, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{scenario.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{scenario.title}</h4>
                  <p style={{color: '#8b949e'}}>{scenario.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Our Code Compliance Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: 'Inspection', details: 'Thorough evaluation of your electrical system against current NEC and local codes'},
                  {step: 'Violation Report', details: 'Detailed list of all code violations and safety concerns found'},
                  {step: 'Quote & Timeline', details: 'Transparent pricing and realistic timeframe for corrections'},
                  {step: 'Corrections', details: 'Licensed electricians make all necessary upgrades to meet code'},
                  {step: 'Documentation', details: 'Provide permits, inspection records, and compliance certificates'},
                  {step: 'Pass Inspection', details: 'Work with city inspector to ensure approval and sign-off'}
                ].map((step, i) => (
                  <div key={i} style={{display: 'flex', gap: '1rem', padding: '0.75rem', borderLeft: '3px solid #00f0ff'}}>
                    <div style={{color: '#00f0ff', fontWeight: 'bold', minWidth: '30px'}}>{i + 1}.</div>
                    <div>
                      <h4 style={{fontSize: '1.1rem', marginBottom: '0.25rem'}}>{step.step}</h4>
                      <p style={{color: '#8b949e', fontSize: '0.95rem'}}>{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{background: 'rgba(255, 68, 68, 0.1)', border: '1px solid #ff4444', borderRadius: '8px', padding: '2rem', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#ff4444', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span>⚠️</span> Dangerous Code Violations
              </h3>
              <p style={{marginBottom: '1rem', color: '#c9d1d9'}}>
                These violations require immediate attention for safety:
              </p>
              <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '0.5rem'}}>
                {[
                  'Federal Pacific or Zinsco electrical panels (fire hazard)',
                  'Aluminum wiring without proper connections',
                  'Missing GFCI protection in wet areas',
                  'Exposed or damaged wiring',
                  'Overloaded circuits or improper wire sizing',
                  'Ungrounded outlets in older homes',
                  'DIY electrical work without permits'
                ].map((violation, i) => (
                  <li key={i} style={{display: 'flex', gap: '0.5rem', padding: '0.5rem'}}>
                    <span style={{color: '#ff4444'}}>⚠️</span>
                    <span>{violation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Code Compliance Help?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Free inspection and detailed quote for bringing your home up to code
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn">Call (682) 466-2130</Link>
                <Link href="/contact" className="btn btn-outline">Request Inspection</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
