import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'
import ReverseSiloLinks from '../../../components/ReverseSiloLinks'


export default function PipeReplacement() {
  return (
    <Layout 
      title="Pipe Replacement & Repiping Dallas-Fort Worth | MetroPlex Pros"
      description="Professional pipe replacement and whole-home repiping in DFW. Copper, PEX, and PVC pipe installation. Licensed plumbers. Call (682) 466-2130."
      keywords="pipe replacement Dallas, repiping, copper pipe, PEX pipe, water line replacement, plumber Dallas"
      canonicalUrl="https://www.metroplexpros.com/services/plumbing/pipe-replacement"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-plumbingx2.png',
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
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff'}}>
              LICENSED PLUMBERS
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Pipe Replacement & Repiping</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Upgrade Old Pipes • Prevent Future Problems
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Professional Pipe Replacement Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Old, corroded, or leaking pipes can cause extensive water damage and reduce water quality. MetroPlex Pros 
              provides expert pipe replacement and whole-home repiping services throughout Dallas-Fort Worth. Whether you 
              need a single pipe repaired or a complete home repipe, our licensed plumbers use quality materials and proven 
              techniques to ensure reliable, long-lasting results.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                ⚠️ Signs You Need Pipe Replacement
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Water Quality Issues:</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Discolored or rusty water</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Metallic taste or smell</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Visible particles or sediment</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Low water pressure throughout home</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Water temperature fluctuations</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Pipe Condition:</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Frequent pipe leaks</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Visible corrosion or rust</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Home built before 1980</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Galvanized steel pipes</li>
                    <li style={{padding: '0.5rem 0'}}>✓ High water bills (hidden leaks)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff', marginTop: '3rem'}}>
              Our Pipe Replacement Services
            </h3>

            <div style={{display: 'grid', gap: '2rem', marginBottom: '3rem'}}>
              <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #1a1f2e 0%, #161b22 100%)', border: '2px solid #00f0ff'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🏠</span> Whole House Repiping
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Complete replacement of your home's water supply lines. Ideal for homes with old galvanized steel, 
                  corroded copper, or problematic polybutylene pipes. We work efficiently to minimize disruption and 
                  ensure your water is only off for short periods.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Replace all water supply lines</li>
                  <li style={{padding: '0.5rem 0'}}>• PEX or copper pipe installation</li>
                  <li style={{padding: '0.5rem 0'}}>• Increased water pressure</li>
                  <li style={{padding: '0.5rem 0'}}>• Improved water quality</li>
                  <li style={{padding: '0.5rem 0'}}>• Typically completed in 2-5 days</li>
                  <li style={{padding: '0.5rem 0'}}>• Wall access patched and painted</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🔧</span> Partial Repiping
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Targeted replacement of problematic sections or specific areas. Cost-effective solution when only 
                  certain pipes need updating, such as after a leak or for a kitchen/bathroom renovation.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Kitchen & bathroom repiping</li>
                  <li style={{padding: '0.5rem 0'}}>• Replace damaged sections</li>
                  <li style={{padding: '0.5rem 0'}}>• Hot water line replacement</li>
                  <li style={{padding: '0.5rem 0'}}>• Main water line replacement</li>
                  <li style={{padding: '0.5rem 0'}}>• Addition or renovation piping</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🚰</span> Water Line Replacement
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Replace the main water line from the street to your home. Essential when the supply line is leaking, 
                  corroded, or undersized for your water needs.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Main line excavation or trenchless</li>
                  <li style={{padding: '0.5rem 0'}}>• Copper or PEX installation</li>
                  <li style={{padding: '0.5rem 0'}}>• Increase line size if needed</li>
                  <li style={{padding: '0.5rem 0'}}>• City permits handled</li>
                  <li style={{padding: '0.5rem 0'}}>• Inspection and pressure testing</li>
                  <li style={{padding: '0.5rem 0'}}>• Yard restoration included</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🚿</span> Drain Line Replacement
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Replace corroded or damaged drain and waste lines. Prevents sewage backups, foul odors, and water 
                  damage from leaking drain pipes.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• PVC or ABS drain pipe</li>
                  <li style={{padding: '0.5rem 0'}}>• Proper slope for drainage</li>
                  <li style={{padding: '0.5rem 0'}}>• Venting system updates</li>
                  <li style={{padding: '0.5rem 0'}}>• Kitchen & bathroom drains</li>
                  <li style={{padding: '0.5rem 0'}}>• Fixture drain replacement</li>
                </ul>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Pipe Material Options
            </h3>

            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff'}}>
                <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '1.5rem'}}>🔵</span> PEX (Cross-Linked Polyethylene)
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>MOST POPULAR CHOICE:</strong> Flexible, durable plastic tubing 
                  that's become the standard for modern repiping. Offers excellent value and performance.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                  <div>
                    <h5 style={{color: '#00f0ff', fontSize: '1rem', marginBottom: '0.5rem'}}>Advantages:</h5>
                    <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9', fontSize: '0.95rem'}}>
                      <li style={{padding: '0.3rem 0'}}>✓ Lower cost than copper</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Freeze-resistant (expands)</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Corrosion-proof</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Fewer connections (less leaks)</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Faster installation</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Quiet operation</li>
                      <li style={{padding: '0.3rem 0'}}>✓ 25+ year lifespan</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{color: '#00f0ff', fontSize: '1rem', marginBottom: '0.5rem'}}>Best For:</h5>
                    <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9', fontSize: '0.95rem'}}>
                      <li style={{padding: '0.3rem 0'}}>• Whole house repiping</li>
                      <li style={{padding: '0.3rem 0'}}>• Cost-conscious projects</li>
                      <li style={{padding: '0.3rem 0'}}>• Homes in cold climates</li>
                      <li style={{padding: '0.3rem 0'}}>• Quick installations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '1.5rem'}}>🟤</span> Copper Pipe
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Traditional metal piping that's been trusted for decades. Excellent durability and heat tolerance, 
                  though more expensive than PEX.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                  <div>
                    <h5 style={{color: '#00f0ff', fontSize: '1rem', marginBottom: '0.5rem'}}>Advantages:</h5>
                    <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9', fontSize: '0.95rem'}}>
                      <li style={{padding: '0.3rem 0'}}>✓ 50+ year lifespan</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Recyclable material</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Heat-resistant</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Natural antimicrobial</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Can be exposed (visible)</li>
                      <li style={{padding: '0.3rem 0'}}>✓ Maintains value</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{color: '#00f0ff', fontSize: '1rem', marginBottom: '0.5rem'}}>Best For:</h5>
                    <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9', fontSize: '0.95rem'}}>
                      <li style={{padding: '0.3rem 0'}}>• Hot water lines</li>
                      <li style={{padding: '0.3rem 0'}}>• Exposed piping</li>
                      <li style={{padding: '0.3rem 0'}}>• High-end homes</li>
                      <li style={{padding: '0.3rem 0'}}>• Commercial properties</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card" style={{padding: '2rem', background: '#1a1f2e', border: '2px solid #ff6b6b'}}>
                <h4 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#ff6b6b', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '1.5rem'}}>⚠️</span> Pipes We REPLACE (Not Repair)
                </h4>
                <div style={{display: 'grid', gap: '1rem'}}>
                  <div>
                    <h5 style={{color: '#ff6b6b', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Galvanized Steel Pipes</h5>
                    <p style={{color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      Common in homes built before 1960. Corrodes from inside out, causing low pressure, rust-colored 
                      water, and frequent leaks. Cannot be effectively repaired - replacement is the only solution.
                    </p>
                  </div>
                  <div>
                    <h5 style={{color: '#ff6b6b', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Polybutylene (PB) Pipes</h5>
                    <p style={{color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      Gray plastic pipes installed 1978-1995. Known to fail prematurely, react with chlorine in water, 
                      and burst without warning. Subject to class-action lawsuits. Should be replaced immediately.
                    </p>
                  </div>
                  <div>
                    <h5 style={{color: '#ff6b6b', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Lead Pipes</h5>
                    <p style={{color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.6'}}>
                      Found in very old homes. Serious health hazard, especially for children. Must be replaced 
                      completely to ensure safe drinking water. Some cities offer replacement assistance programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Repiping Process
            </h3>

            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  step: '1',
                  title: 'Inspection & Assessment',
                  description: 'We inspect your existing plumbing, test water quality, check pressure, and identify all problem areas. Camera inspection may be used for hidden pipes.'
                },
                {
                  step: '2',
                  title: 'Detailed Quote & Material Selection',
                  description: 'Transparent pricing with breakdown of materials and labor. We discuss pipe material options (PEX vs copper) and answer all your questions.'
                },
                {
                  step: '3',
                  title: 'Preparation & Protection',
                  description: 'We protect your floors, furniture, and belongings. Create access points strategically to minimize wall damage. Plan water shutoff times.'
                },
                {
                  step: '4',
                  title: 'Pipe Installation',
                  description: 'Remove old pipes and install new supply lines. Work room by room to minimize disruption. Most homes have water restored each evening.'
                },
                {
                  step: '5',
                  title: 'Pressure Testing & Inspection',
                  description: 'Test entire system for leaks under pressure. Obtain required permits and inspections. Verify proper water flow to all fixtures.'
                },
                {
                  step: '6',
                  title: 'Wall Repair & Cleanup',
                  description: 'Patch and texture all wall openings. Prime patches for painting. Remove all debris and clean work areas. Walk through completed work with you.'
                }
              ].map((item, index) => (
                <div key={index} style={{padding: '1.5rem', background: '#161b22', border: '1px solid #30363d', borderRadius: '8px', display: 'flex', gap: '1rem'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00f0ff, #0088cc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{item.title}</h4>
                    <p style={{color: '#c9d1d9', margin: 0, lineHeight: '1.6'}}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                💡 Benefits of Repiping Your Home
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>💧 Better Water Quality</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Clear, clean water without rust, sediment, or metallic taste. Healthier for drinking and cooking.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>⚡ Increased Water Pressure</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Restore full pressure to all fixtures. No more weak showers or slow-filling appliances.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>🛡️ Prevent Water Damage</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Stop recurring leaks before they cause costly damage to walls, floors, ceilings, and possessions.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>💰 Lower Water Bills</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Eliminate hidden leaks that waste water and money. New pipes don't leak or sweat.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>🏠 Increase Home Value</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Updated plumbing is a major selling point. Buyers value homes with new pipes and fewer potential problems.</p>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem', fontSize: '1.1rem'}}>😌 Peace of Mind</h4>
                  <p style={{color: '#c9d1d9', fontSize: '0.95rem'}}>No more worrying about pipe failures or emergency leaks. Enjoy reliable plumbing for decades.</p>
                </div>
              </div>
            </div>

            <div className="card" style={{padding: '2rem', background: '#161b22', border: '1px solid #30363d', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                Why Choose MetroPlex Pros for Repiping?
              </h3>
              <div style={{display: 'grid', gap: '1rem'}}>
                {[
                  { icon: '✓', text: 'Licensed & insured plumbers with 15+ years experience' },
                  { icon: '✓', text: 'Transparent pricing - detailed quotes before work begins' },
                  { icon: '✓', text: 'Quality materials - PEX and copper from trusted manufacturers' },
                  { icon: '✓', text: 'Minimal disruption - work efficiently, restore water daily' },
                  { icon: '✓', text: 'Complete wall repair and cleanup included' },
                  { icon: '✓', text: 'All permits and inspections handled' },
                  { icon: '✓', text: 'Warranty on all labor and materials' },
                  { icon: '✓', text: 'Free water quality testing with repiping quote' }
                ].map((item, index) => (
                  <div key={index} style={{padding: '1rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <span style={{color: '#00f0ff', fontSize: '1.5rem', fontWeight: 'bold'}}>{item.icon}</span>
                    <span style={{color: '#c9d1d9', fontSize: '1.05rem'}}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Pipe Replacement?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Upgrade your plumbing with professional pipe replacement
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Call (682) 466-2130
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{background: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#00f0ff', textAlign: 'center'}}>
              Repiping FAQ
            </h2>

            <div style={{display: 'grid', gap: '1.5rem'}}>
              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  How much does whole house repiping cost?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Whole house repiping typically costs $4,000-$15,000 depending on home size, pipe material choice (PEX 
                  vs copper), accessibility, and number of fixtures. Average Dallas home (1,500-2,000 sq ft): $5,000-$8,000 
                  with PEX. We provide free detailed quotes after inspecting your home.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  How long does repiping take?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Most whole house repiping projects take 2-5 days. Single room or partial repiping: 1-2 days. We work 
                  efficiently to minimize disruption. Water is typically restored each evening so you can use your 
                  plumbing overnight. Final inspection and wall patching may add 1-2 days.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  PEX vs Copper - which should I choose?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  PEX is the most popular choice for residential repiping: lower cost, freeze-resistant, corrosion-proof, 
                  and faster installation. Copper costs more but lasts longer (50+ years vs 25-40 for PEX) and can handle 
                  high temperatures better. For most homeowners, PEX offers excellent value and performance. We'll help 
                  you choose based on your budget and needs.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Will repiping damage my walls?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Some wall access is necessary to remove old pipes and install new ones. We create strategic access 
                  points, typically in closets and less visible areas. All openings are patched, textured to match, and 
                  primed for painting. Most homeowners choose to paint themselves, but we can arrange professional painting 
                  if desired. Final result: minimal visible impact.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Can I stay in my home during repiping?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Yes! Most homeowners remain in their homes during repiping. Water is shut off during work hours but 
                  restored each evening. You'll have full access to bathrooms, kitchen, and laundry overnight. We protect 
                  your belongings, work cleanly, and minimize noise and disruption. Plan for limited water access during 
                  work hours (typically 8am-5pm).
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  When should I repipe instead of just fixing leaks?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Consider repiping if: your home was built before 1980, you have galvanized steel or polybutylene pipes, 
                  you're experiencing multiple leaks, water pressure is low throughout the home, water is discolored, or 
                  you're planning a major renovation. Repiping prevents future problems and is more cost-effective than 
                  repeated emergency leak repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      {/* Reverse Silo Links - SEO Internal Linking */}
      <ReverseSiloLinks 
        currentPage="/services/plumbing/pipe-replacement"
        currentSilo="plumbing"
        variant="full"
      />

    </Layout>
  )
}
