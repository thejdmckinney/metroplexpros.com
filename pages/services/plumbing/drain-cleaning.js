import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function DrainCleaning() {
  return (
    <Layout 
      title="Drain Cleaning Services Dallas-Fort Worth | MetroPlex Pros"
      description="Professional drain cleaning and unclogging in DFW. Clear slow drains, clogged sinks, tubs, and main sewer lines. Same-day service. Call (682) 466-2130."
      keywords="drain cleaning Dallas, clogged drain, drain unclogging, sewer line cleaning, hydro jetting, plumber Dallas"
      canonicalUrl="https://metroplexpros.com/services/plumbing/drain-cleaning"
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Drain Cleaning Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://metroplexpros.com"
            },
            "areaServed": {
              "@type": "State",
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
              SAME-DAY SERVICE AVAILABLE
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Professional Drain Cleaning</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Fast, Effective Drain Cleaning & Unclogging Services
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
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Expert Drain Cleaning Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Dealing with a slow or clogged drain? MetroPlex Pros provides professional drain cleaning services throughout 
              Dallas-Fort Worth. From minor clogs to severe blockages, our licensed plumbers use advanced techniques and 
              equipment to get your drains flowing freely again—fast.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Signs You Need Drain Cleaning
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {sign: 'Slow draining sinks or tubs', icon: '🚿'},
                {sign: 'Gurgling sounds from drains', icon: '🔊'},
                {sign: 'Frequent clogs', icon: '🚫'},
                {sign: 'Foul odors from drains', icon: '👃'},
                {sign: 'Water backing up', icon: '💧'},
                {sign: 'Multiple clogged drains', icon: '🏠'},
                {sign: 'Fruit flies around drains', icon: '🪰'},
                {sign: 'Standing water', icon: '🌊'}
              ].map((item, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                  <p style={{fontSize: '1.05rem'}}>{item.sign}</p>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Drain Cleaning Methods
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Hydro Jetting',
                  description: 'High-pressure water jetting (up to 4000 PSI) blasts away grease, scale, tree roots, and stubborn blockages. The most effective method for severe clogs and preventive maintenance.',
                  icon: '💨',
                  best: 'Best for: Grease buildup, tree roots, main line clogs'
                },
                {
                  title: 'Cable/Snake Auger',
                  description: 'Professional-grade motorized drain snakes cut through clogs and remove blockages. Perfect for household drains and common clogs.',
                  icon: '🔧',
                  best: 'Best for: Hair clogs, minor blockages, toilet clogs'
                },
                {
                  title: 'Video Camera Inspection',
                  description: 'Waterproof cameras inspect inside your pipes to identify the cause and location of clogs, cracks, or damage before we start work.',
                  icon: '📹',
                  best: 'Best for: Diagnosing recurring clogs, locating issues'
                },
                {
                  title: 'Bio-Enzyme Treatment',
                  description: 'Eco-friendly bacterial treatments break down organic matter in pipes, helping prevent future clogs naturally.',
                  icon: '🌱',
                  best: 'Best for: Maintenance, preventing organic buildup'
                }
              ].map((method, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{method.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{method.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '0.75rem'}}>{method.description}</p>
                      <div style={{padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00f0ff', borderRadius: '5px', fontSize: '0.9rem'}}>
                        <strong style={{color: '#00f0ff'}}>💡 {method.best}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Drains We Clean
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {type: 'Kitchen Sinks', common: 'Grease, food particles'},
                {type: 'Bathroom Sinks', common: 'Hair, soap scum'},
                {type: 'Shower & Tub Drains', common: 'Hair, soap buildup'},
                {type: 'Toilet Clogs', common: 'Paper, foreign objects'},
                {type: 'Floor Drains', common: 'Debris, sediment'},
                {type: 'Main Sewer Lines', common: 'Tree roots, scale'},
                {type: 'Laundry Drains', common: 'Lint, soap residue'},
                {type: 'Storm Drains', common: 'Leaves, debris'}
              ].map((item, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.type}</h4>
                  <p style={{color: '#8b949e', fontSize: '0.9rem'}}>Common clogs: {item.common}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Common Causes of Drain Clogs
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
                {[
                  {cause: 'Hair', prevention: 'Use drain screens'},
                  {cause: 'Grease & Oil', prevention: 'Dispose in trash, not sink'},
                  {cause: 'Food Waste', prevention: 'Use garbage disposal properly'},
                  {cause: 'Soap Scum', prevention: 'Hot water flushes periodically'},
                  {cause: 'Tree Roots', prevention: 'Professional root barriers'},
                  {cause: 'Foreign Objects', prevention: 'Keep items out of drains'},
                  {cause: 'Mineral Buildup', prevention: 'Water softener, regular cleaning'},
                  {cause: 'Old Pipes', prevention: 'Pipe replacement/relining'}
                ].map((item, index) => (
                  <div key={index} style={{padding: '1rem', borderLeft: '3px solid #00f0ff'}}>
                    <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{item.cause}</h4>
                    <p style={{color: '#8b949e', fontSize: '0.9rem'}}>{item.prevention}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Choose Professional Drain Cleaning?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🚫', title: 'Avoid Pipe Damage', text: 'Chemical cleaners can corrode pipes'},
                {icon: '🎯', title: 'Complete Removal', text: 'Remove entire clog, not just poke holes'},
                {icon: '⚡', title: 'Fast Results', text: 'Professional equipment works faster'},
                {icon: '🔬', title: 'Diagnosis', text: 'Identify underlying issues'},
                {icon: '💪', title: 'Tough Clogs', text: 'Handle what DIY methods can\'t'},
                {icon: '🛡️', title: 'Prevent Damage', text: 'Protect your plumbing investment'}
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
                Preventive Drain Maintenance Tips
              </h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {[
                  'Use drain screens to catch hair and debris',
                  'Never pour grease or oil down drains',
                  'Run hot water after each use to flush residue',
                  'Use garbage disposal properly (run cold water)',
                  'Schedule annual professional drain cleaning',
                  'Don\'t use chemical drain cleaners regularly',
                  'Be careful what you flush (toilets)',
                  'Clean pop-up stoppers monthly'
                ].map((tip, index) => (
                  <li key={index} style={{padding: '0.75rem 0', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#00f0ff', marginRight: '1rem', fontSize: '1.2rem'}}>✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Drain Cleaning Service?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Fast, professional drain cleaning—same-day service available
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Call (682) 466-2130
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Schedule Service
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
