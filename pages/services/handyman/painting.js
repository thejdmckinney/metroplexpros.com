import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function Painting() {
  return (
    <Layout 
      title="Interior & Exterior Painting Dallas-Fort Worth | MetroPlex Pros"
      description="Professional painting services in DFW. Interior & exterior painting, cabinet refinishing, color consultation. Licensed painters. Call (682) 466-2130."
      keywords="painting Dallas, interior painting, exterior painting, house painter, cabinet painting, Dallas painting contractor"
      canonicalUrl="https://www.metroplexpros.com/services/handyman/painting"
    >
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)'}}>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem'}}>
              <span className="text-accent">Professional Painting Services</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Transform Your Home with Expert Interior & Exterior Painting
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
              Expert Painting Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Whether refreshing a single room or painting your entire home, MetroPlex Pros delivers professional painting 
              services throughout Dallas-Fort Worth. Our experienced painters use premium materials and meticulous 
              preparation to ensure beautiful, long-lasting results.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Painting Services We Offer
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Interior Painting',
                  description: 'Transform any room with fresh paint. Walls, ceilings, trim, and accent walls painted to perfection.',
                  icon: '🏠',
                  services: ['Walls & ceilings', 'Trim & baseboards', 'Doors & frames', 'Accent walls']
                },
                {
                  title: 'Exterior Painting',
                  description: 'Protect and beautify your home\'s exterior. Weather-resistant paints that last for years.',
                  icon: '🏡',
                  services: ['Siding', 'Trim & fascia', 'Doors & shutters', 'Fences & decks']
                },
                {
                  title: 'Cabinet Painting & Refinishing',
                  description: 'Update your kitchen or bathroom cabinets without replacing them. Save thousands with cabinet painting.',
                  icon: '🎨',
                  services: ['Kitchen cabinets', 'Bathroom vanities', 'Built-in shelving', 'Hardware replacement']
                },
                {
                  title: 'Specialty Finishes',
                  description: 'Textured walls, faux finishes, and decorative painting to create unique looks.',
                  icon: '✨',
                  services: ['Textured walls', 'Faux finishes', 'Accent colors', 'Feature walls']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {service.services.map((item, idx) => (
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

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Our Painting Process
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {step: 1, title: 'Consultation', text: 'Color selection and project planning'},
                {step: 2, title: 'Preparation', text: 'Thorough cleaning, patching, and masking'},
                {step: 3, title: 'Priming', text: 'Quality primer for optimal adhesion'},
                {step: 4, title: 'Painting', text: 'Multiple coats for even coverage'},
                {step: 5, title: 'Finishing', text: 'Touch-ups and detail work'},
                {step: 6, title: 'Cleanup', text: 'Leave your home spotless'}
              ].map((process, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{width: '50px', height: '50px', borderRadius: '50%', background: '#00f0ff', color: '#0a0e14', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold'}}>
                    {process.step}
                  </div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{process.title}</h4>
                  <p style={{color: '#8b949e'}}>{process.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Premium Paint Brands We Use
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
                {['Sherwin-Williams', 'Benjamin Moore', 'Behr', 'Valspar', 'PPG Paints', 'Dunn-Edwards'].map((brand, i) => (
                  <div key={i} style={{padding: '1rem', textAlign: 'center', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px'}}>
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready for a Fresh Coat of Paint?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Free color consultation and detailed estimates
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
