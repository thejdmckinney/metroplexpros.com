import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'
import ReverseSiloLinks from '../../../components/ReverseSiloLinks'


export default function DrywallRepair() {
  return (
    <Layout 
      title="Drywall Repair Dallas-Fort Worth | MetroPlex Pros"
      description="Professional drywall repair in DFW. Fix holes, cracks, water damage, texture matching. Same-day service available. Call (682) 466-2130."
      keywords="drywall repair Dallas, hole repair, wall repair, ceiling repair, texture matching, Dallas handyman"
      canonicalUrl="https://www.metroplexpros.com/services/handyman/drywall-repair/"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-handyman.png',
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
              <span className="text-accent">Drywall Repair</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Expert Wall & Ceiling Repair Services
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
              Professional Drywall Repair Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              From small nail holes to large damaged areas, MetroPlex Pros provides expert drywall repair throughout 
              Dallas-Fort Worth. Our skilled technicians match textures perfectly and ensure seamless repairs that blend 
              with your existing walls and ceilings.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Drywall Repair Services
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Hole Repair',
                  description: 'Fix holes from doorknobs, accidents, or removed fixtures. Sizes from small nail holes to large damaged areas.',
                  icon: '🕳️',
                  sizes: ['Nail/screw holes', 'Small holes (< 2")', 'Medium holes (2-6")', 'Large holes (6"+)']
                },
                {
                  title: 'Crack Repair',
                  description: 'Repair cracks in walls and ceilings caused by settling, temperature changes, or structural movement.',
                  icon: '⚡',
                  sizes: ['Hairline cracks', 'Corner cracks', 'Ceiling cracks', 'Settlement cracks']
                },
                {
                  title: 'Water Damage',
                  description: 'Remove and replace water-damaged drywall. Address source of leak and restore walls to perfect condition.',
                  icon: '💧',
                  sizes: ['Stained areas', 'Soft spots', 'Mold removal', 'Full section replacement']
                },
                {
                  title: 'Texture Matching',
                  description: 'Match existing wall textures perfectly including knockdown, orange peel, skip trowel, and smooth finishes.',
                  icon: '🎨',
                  sizes: ['Knockdown', 'Orange peel', 'Skip trowel', 'Smooth finish']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {service.sizes.map((size, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{size}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Repair Process
            </h3>
            <div style={{display: 'grid', gap: '1rem', marginBottom: '3rem'}}>
              {[
                {step: '1. Assessment', details: 'Inspect damage and determine best repair method'},
                {step: '2. Preparation', details: 'Clean area, cut away damaged material, install backing if needed'},
                {step: '3. Patching', details: 'Apply new drywall patch or compound, ensuring proper fit'},
                {step: '4. Finishing', details: 'Apply multiple coats of compound, sanding smooth between coats'},
                {step: '5. Texture Matching', details: 'Match existing texture pattern perfectly'},
                {step: '6. Priming & Painting', details: 'Prime and paint to blend seamlessly (optional)'}
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
                Why Choose MetroPlex Pros for Drywall Repair?
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                {[
                  '✓ Perfect texture matching',
                  '✓ Same-day service available',
                  '✓ Clean, professional work',
                  '✓ All sizes of repairs',
                  '✓ Licensed & insured',
                  '✓ Competitive pricing'
                ].map((benefit, i) => (
                  <div key={i} style={{padding: '0.75rem', fontSize: '1rem'}}>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Drywall Repair?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Get a free estimate for your drywall repair project
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
        currentPage="/services/handyman/drywall-repair"
        currentSilo="handyman"
        variant="full"
      />

    </Layout>
  )
}
