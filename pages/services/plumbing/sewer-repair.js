import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function SewerRepair() {
  return (
    <Layout 
      title="Sewer Line Repair & Replacement Dallas-Fort Worth | MetroPlex Pros"
      description="Professional sewer line repair, replacement, and cleaning in DFW. Trenchless sewer repair available. Licensed plumbers. Emergency service. Call (682) 466-2130."
      keywords="sewer line repair Dallas, sewer replacement, trenchless sewer repair, sewer line cleaning, Dallas plumber"
      canonicalUrl="https://www.metroplexpros.com/services/plumbing/sewer-repair"
    

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
