import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function WallArtHanging() {
  return (
    <Layout 
      title="Professional Picture & Art Hanging Dallas-Fort Worth | MetroPlex Pros"
      description="Expert picture and wall art hanging in DFW. Laser-leveled precision, secure mounting with professional anchors. Hang artwork, mirrors, shelves. Call (682) 466-2130."
      keywords="picture hanging Dallas, art hanging, mirror installation, wall mounting, professional picture hanger, Dallas handyman"
      canonicalUrl="https://www.metroplexpros.com/services/handyman/wall-art-hanging"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-wall-art.png',
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
              <span className="text-accent">Professional Picture & Art Hanging</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Precision Mounting for Your Valuable Artwork & Decor
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
              Expert Picture & Wall Art Installation
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Trust MetroPlex Pros for professional picture and artwork hanging throughout Dallas-Fort Worth. Every piece 
              is laser-leveled for perfect alignment and securely mounted using professional-grade wall anchors matched 
              to your wall type. From family photos to valuable artwork, large mirrors to gallery walls, we ensure your 
              decor is displayed beautifully and safely.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              What We Hang
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Artwork & Paintings',
                  description: 'Professional mounting for canvas art, framed paintings, and valuable artwork of any size.',
                  icon: '🖼️',
                  items: ['Canvas prints', 'Oil paintings', 'Watercolors', 'Framed artwork', 'Gallery walls', 'Large installations']
                },
                {
                  title: 'Mirrors',
                  description: 'Secure installation of decorative mirrors, bathroom mirrors, and oversized statement pieces.',
                  icon: '🪞',
                  items: ['Wall mirrors', 'Bathroom mirrors', 'Full-length mirrors', 'Decorative mirrors', 'Heavy mirrors', 'Frameless mirrors']
                },
                {
                  title: 'Family Photos & Frames',
                  description: 'Create perfect photo displays with precisely leveled frames in arrangements you\'ll love.',
                  icon: '📸',
                  items: ['Photo frames', 'Collage arrangements', 'Shadow boxes', 'Diploma frames', 'Certificate frames', 'Multi-photo displays']
                },
                {
                  title: 'Decorative Items',
                  description: 'Mount shelves, wall decor, clocks, and other decorative pieces with professional precision.',
                  icon: '✨',
                  items: ['Floating shelves', 'Wall clocks', 'Metal art', 'Wall sculptures', 'Tapestries', 'Decorative plates']
                }
              ].map((category, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{category.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{category.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{category.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem'}}>
                        {category.items.map((item, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <div style={{marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d'}}>
              <img 
                src="/og-image-wall-art.png" 
                alt="Professional Wall Art Hanging Services" 
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Our Professional Hanging Process
              </h3>
              <div style={{display: 'grid', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  {step: 'Consultation', details: 'Discuss placement, height, and spacing for optimal visual impact'},
                  {step: 'Wall Assessment', details: 'Identify wall type (drywall, plaster, brick, concrete) and locate studs'},
                  {step: 'Laser Leveling', details: 'Use professional laser level to ensure perfect horizontal and vertical alignment'},
                  {step: 'Secure Mounting', details: 'Install appropriate wall anchors rated for weight and wall type'},
                  {step: 'Final Adjustment', details: 'Fine-tune positioning and ensure artwork hangs straight and secure'},
                  {step: 'Quality Check', details: 'Verify stability and make any necessary adjustments for perfection'}
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

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Why Choose Professional Hanging?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '📏', title: 'Laser-Level Precision', text: 'Perfect alignment every time'},
                {icon: '🔒', title: 'Secure Mounting', text: 'Professional anchors prevent falling'},
                {icon: '🧰', title: 'Right Tools', text: 'Stud finders, levels, proper hardware'},
                {icon: '🏗️', title: 'Wall Expertise', text: 'Know how to hang on any surface'},
                {icon: '⏱️', title: 'Save Time', text: 'No measuring mistakes or do-overs'},
                {icon: '💎', title: 'Protect Valuables', text: 'Handle artwork with care'}
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
                Professional Mounting Hardware
              </h3>
              <p style={{marginBottom: '1rem', color: '#c9d1d9'}}>
                We use the appropriate mounting solution for your wall type and artwork weight:
              </p>
              <div style={{display: 'grid', gap: '0.75rem'}}>
                {[
                  {type: 'Drywall Anchors', use: 'Toggle bolts, molly bolts, and plastic anchors for hollow walls'},
                  {type: 'Stud Mounting', use: 'Direct attachment to wood studs for maximum strength'},
                  {type: 'Masonry Anchors', use: 'Concrete screws and sleeve anchors for brick and concrete'},
                  {type: 'Picture Hanging Wire', use: 'Professional installation with proper wire and D-rings'},
                  {type: 'French Cleats', use: 'Heavy-duty mounting system for large mirrors and artwork'}
                ].map((hardware, i) => (
                  <div key={i} style={{padding: '0.75rem', borderLeft: '3px solid rgba(0, 240, 255, 0.3)'}}>
                    <h4 style={{fontSize: '1rem', marginBottom: '0.25rem', color: '#00f0ff'}}>{hardware.type}</h4>
                    <p style={{color: '#8b949e', fontSize: '0.9rem'}}>{hardware.use}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready to Hang Your Artwork?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Professional picture hanging with laser-level precision
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
