import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function SewerRepair() {
  return (
    <Layout 
      title="Sewer Line Repair & Replacement Dallas-Fort Worth | MetroPlex Pros"
      description="Professional sewer line repair, replacement, and cleaning in DFW. Trenchless sewer repair available. Licensed plumbers. Emergency service. Call (682) 466-2130."
      keywords="sewer line repair Dallas, sewer replacement, trenchless sewer repair, sewer line cleaning, Dallas plumber"
      canonicalUrl="https://www.metroplexpros.com/services/plumbing/sewer-repair/"
    

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
              EMERGENCY SEWER SERVICE
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Sewer Line Repair & Replacement</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Trenchless & Traditional Sewer Solutions
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

      <TrustSignals />

      <section className="section">
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Expert Sewer Line Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Sewer line problems require immediate professional attention. MetroPlex Pros offers comprehensive sewer line 
              repair and replacement services using both traditional and modern trenchless methods. Our licensed plumbers 
              use video camera inspections to diagnose issues accurately and recommend the best solution for your situation.
            </p>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                ⚠️ Signs You Need Sewer Line Repair
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Inside Your Home:</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Multiple drain clogs or slow drains</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Toilets bubbling or gurgling</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Sewage backup in toilets or drains</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Foul sewage odors inside</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Water pooling around floor drains</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Outside Your Home:</h4>
                  <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Soggy patches in yard</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Sewage smell near property</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Extra lush/green grass patches</li>
                    <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d'}}>✓ Sinkholes or depressions in yard</li>
                    <li style={{padding: '0.5rem 0'}}>✓ Sewage in cleanout or inspection pipes</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff', marginTop: '3rem'}}>
              Our Sewer Line Services
            </h3>

            <div style={{display: 'grid', gap: '2rem', marginBottom: '3rem'}}>
              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>📹</span> Video Camera Inspection
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  State-of-the-art camera technology allows us to visually inspect your sewer line interior without 
                  digging. We can identify blockages, cracks, root intrusion, pipe corrosion, and collapsed sections 
                  with pinpoint accuracy.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Accurate diagnosis saves time and money</li>
                  <li style={{padding: '0.5rem 0'}}>• Locate exact problem areas</li>
                  <li style={{padding: '0.5rem 0'}}>• No unnecessary digging</li>
                  <li style={{padding: '0.5rem 0'}}>• Video recording for insurance claims</li>
                  <li style={{padding: '0.5rem 0'}}>• Preventive inspection available</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #1a1f2e 0%, #161b22 100%)', border: '2px solid #00f0ff'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🔧</span> Trenchless Sewer Repair
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  <strong style={{color: '#00f0ff'}}>MINIMAL DISRUPTION:</strong> Modern trenchless technology allows 
                  us to repair or replace your sewer line without destroying your landscaping, driveway, or patio. 
                  This innovative method saves time, money, and preserves your property.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem'}}>
                  <div>
                    <h5 style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Pipe Lining:</h5>
                    <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9', fontSize: '0.95rem'}}>
                      <li style={{padding: '0.3rem 0'}}>• Creates new pipe inside old one</li>
                      <li style={{padding: '0.3rem 0'}}>• No excavation required</li>
                      <li style={{padding: '0.3rem 0'}}>• Cures in hours</li>
                      <li style={{padding: '0.3rem 0'}}>• 50+ year lifespan</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Pipe Bursting:</h5>
                    <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9', fontSize: '0.95rem'}}>
                      <li style={{padding: '0.3rem 0'}}>• Breaks old pipe while pulling new</li>
                      <li style={{padding: '0.3rem 0'}}>• Only 2 small access points</li>
                      <li style={{padding: '0.3rem 0'}}>• Same-day completion</li>
                      <li style={{padding: '0.3rem 0'}}>• Can upsize pipe diameter</li>
                    </ul>
                  </div>
                </div>
                <p style={{color: '#c9d1d9', fontSize: '0.95rem', marginTop: '1rem'}}>
                  <strong>Benefits:</strong> Preserve landscaping • Faster completion • Often lower cost • Minimal disruption • Stronger than original pipe
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>⛏️</span> Traditional Sewer Replacement
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  For severely damaged lines or when trenchless isn't feasible, we provide expert traditional excavation 
                  and replacement. Our team minimizes disruption and restores your property to its original condition.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Complete sewer line replacement</li>
                  <li style={{padding: '0.5rem 0'}}>• PVC or cast iron pipe installation</li>
                  <li style={{padding: '0.5rem 0'}}>• Proper grading and slope</li>
                  <li style={{padding: '0.5rem 0'}}>• Full property restoration</li>
                  <li style={{padding: '0.5rem 0'}}>• Permits and inspections handled</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>🌳</span> Root Removal & Prevention
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Tree roots are a leading cause of sewer line damage in Dallas-Fort Worth. Roots seek moisture and can 
                  infiltrate even small cracks, eventually causing major blockages and pipe damage.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Mechanical root cutting</li>
                  <li style={{padding: '0.5rem 0'}}>• Hydro jetting to clear roots</li>
                  <li style={{padding: '0.5rem 0'}}>• Root barrier installation</li>
                  <li style={{padding: '0.5rem 0'}}>• Preventive maintenance plans</li>
                  <li style={{padding: '0.5rem 0'}}>• Chemical root treatment (safe & effective)</li>
                </ul>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h4 style={{fontSize: '1.5rem', marginBottom: '1rem', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '2rem'}}>💧</span> Sewer Line Cleaning & Hydro Jetting
                </h4>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1rem'}}>
                  Regular cleaning prevents major problems. Our high-pressure hydro jetting service removes grease, 
                  scale, roots, and debris, restoring your sewer line to like-new condition.
                </p>
                <ul style={{listStyle: 'none', padding: 0, color: '#c9d1d9'}}>
                  <li style={{padding: '0.5rem 0'}}>• Up to 4000 PSI water pressure</li>
                  <li style={{padding: '0.5rem 0'}}>• Removes all types of blockages</li>
                  <li style={{padding: '0.5rem 0'}}>• Cleans pipe walls thoroughly</li>
                  <li style={{padding: '0.5rem 0'}}>• Environmentally safe</li>
                  <li style={{padding: '0.5rem 0'}}>• Prevents future backups</li>
                </ul>
              </div>
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Common Sewer Line Problems
            </h3>

            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Tree Root Intrusion',
                  description: 'Roots grow into pipes through small cracks or joints seeking water and nutrients. Over time, roots can completely block or collapse the line.',
                  icon: '🌳'
                },
                {
                  title: 'Pipe Corrosion & Age',
                  description: 'Older cast iron and clay pipes deteriorate over time. Dallas homes built before 1980 often have aging sewer lines prone to collapse.',
                  icon: '⏳'
                },
                {
                  title: 'Ground Shifting & Settlement',
                  description: 'Texas clay soil expands and contracts with moisture changes, causing pipes to crack, separate at joints, or sag creating low spots where waste accumulates.',
                  icon: '🏚️'
                },
                {
                  title: 'Grease & Debris Buildup',
                  description: 'Cooking grease, soap scum, hair, and foreign objects accumulate inside pipes, eventually causing complete blockages that can back up into your home.',
                  icon: '🧴'
                },
                {
                  title: 'Bellied or Sagging Pipe',
                  description: 'When ground shifts or pipe supports fail, sections of sewer line sag creating a "belly" where waste collects and frequent backups occur.',
                  icon: '📉'
                },
                {
                  title: 'Collapsed or Broken Pipe',
                  description: 'Extreme age, ground pressure, or root damage can cause sections of sewer line to completely collapse, requiring immediate replacement.',
                  icon: '💔'
                }
              ].map((problem, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'start'}}>
                  <div style={{fontSize: '2rem', flexShrink: 0}}>{problem.icon}</div>
                  <div>
                    <h4 style={{color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>{problem.title}</h4>
                    <p style={{color: '#c9d1d9', margin: 0, lineHeight: '1.6'}}>{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', background: 'linear-gradient(135deg, #161b22 0%, #1a1f2e 100%)', border: '1px solid #00f0ff', marginBottom: '3rem'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
                Why Choose MetroPlex Pros for Sewer Repair?
              </h3>
              <div style={{display: 'grid', gap: '1rem'}}>
                {[
                  { icon: '✓', text: 'Licensed & insured plumbers with 15+ years experience' },
                  { icon: '✓', text: '24/7 emergency sewer service available' },
                  { icon: '✓', text: 'Free video camera inspection with repair' },
                  { icon: '✓', text: 'Trenchless & traditional repair options' },
                  { icon: '✓', text: 'Transparent pricing with detailed quotes' },
                  { icon: '✓', text: 'All permits and inspections handled' },
                  { icon: '✓', text: 'Property restoration included' },
                  { icon: '✓', text: 'Warranty on all labor and materials' }
                ].map((item, index) => (
                  <div key={index} style={{padding: '1rem', background: '#161b22', border: '1px solid #30363d', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <span style={{color: '#00f0ff', fontSize: '1.5rem', fontWeight: 'bold'}}>{item.icon}</span>
                    <span style={{color: '#c9d1d9', fontSize: '1.05rem'}}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Sewer Line Service?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Fast, professional sewer solutions—emergency service available
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

      {/* FAQ Section */}
      <section className="section" style={{background: '#0d1117'}}>
        <div className="container">
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: '#00f0ff', textAlign: 'center'}}>
              Sewer Line FAQ
            </h2>

            <div style={{display: 'grid', gap: '1.5rem'}}>
              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  How much does sewer line repair cost in Dallas?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Sewer repair costs vary based on the problem and method. Basic cleaning/snaking: $150-$500. Camera 
                  inspection: $200-$400. Trenchless repair: $3,000-$12,000. Traditional replacement: $4,000-$20,000+. 
                  We provide free inspections and detailed quotes before any work begins.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Is trenchless sewer repair worth it?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Absolutely! While trenchless may cost slightly more upfront, you save on landscaping restoration, 
                  driveway/patio repair, and project time. Most trenchless jobs complete in 1-2 days vs. weeks for 
                  traditional excavation. The new liner lasts 50+ years and is stronger than original pipes.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Who is responsible for sewer line repair?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Homeowners are responsible for the sewer line from their house to the property line. The city/utility 
                  maintains the main sewer line in the street. If tree roots from a neighbor's tree damage your line, 
                  you're typically still responsible. Check your homeowner's insurance - some policies cover sewer line repairs.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  How long does sewer line replacement take?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Trenchless repair: 1-2 days. Traditional excavation and replacement: 3-7 days depending on line length, 
                  depth, and obstacles. Emergency repairs may be prioritized for same-day completion. We work efficiently 
                  to minimize disruption to your daily life.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  Can I prevent sewer line problems?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  Yes! Regular maintenance helps: Don't flush wipes, feminine products, or grease. Have your line cleaned 
                  every 18-24 months if you have large trees nearby. Consider a video inspection every 3-5 years if your 
                  home is 25+ years old. Root barriers can protect lines from nearby trees.
                </p>
              </div>

              <div className="card" style={{padding: '2rem'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>
                  What is a sewer cleanout and why do I need one?
                </h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>
                  A cleanout is an access point to your sewer line, typically a capped pipe in your yard or basement. It 
                  allows plumbers to quickly access your sewer line for cleaning, inspection, or repairs without entering 
                  your home. Modern code requires cleanouts - we can install one if your home doesn't have easy access.
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
    </Layout>
  )
}
