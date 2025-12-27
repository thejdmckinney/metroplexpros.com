import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function VideoDoorbells() {
  return (
    <Layout 
      title="Video Doorbell Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional video doorbell installation in DFW. Ring, Nest, Arlo doorbells. See who's at your door from anywhere. Call (682) 466-2130."
      keywords="video doorbell installation Dallas, Ring doorbell, Nest doorbell, smart doorbell, doorbell camera, Dallas electrician"
      canonicalUrl="https://www.metroplexpros.com/services/smart-home/doorbells"
    

      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/og-image-smart-locks.png',
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
              <span className="text-accent">Video Doorbell Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              See & Speak to Visitors from Anywhere
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
              Professional Video Doorbell Installation
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              Never miss a visitor or package delivery again. MetroPlex Pros provides expert video doorbell installation 
              throughout Dallas-Fort Worth. We ensure proper wiring, optimal camera placement, and full integration with 
              your smartphone and smart home system.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Top Video Doorbells We Install
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  brand: 'Ring Video Doorbell',
                  description: 'Most popular video doorbell. HD video, motion detection, two-way talk, and cloud recording.',
                  icon: '🔔',
                  features: ['1080p HD video', 'Motion alerts', 'Night vision', 'Weather resistant'],
                  price: '$$ - $$$'
                },
                {
                  brand: 'Google Nest Doorbell',
                  description: 'Smart detection distinguishes people, packages, and vehicles. Works with Google Home ecosystem.',
                  icon: '🏠',
                  features: ['Smart alerts', 'Face recognition', '24/7 recording', 'Battery or wired'],
                  price: '$$$'
                },
                {
                  brand: 'Arlo Video Doorbell',
                  description: 'Ultra-wide viewing angle. Direct connection to existing doorbell wiring or mechanical chimes.',
                  icon: '📹',
                  features: ['180° view', 'Smart detection', 'No subscription needed', 'Square design'],
                  price: '$$'
                }
              ].map((doorbell, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{doorbell.icon}</div>
                    <div style={{flex: 1}}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem'}}>
                        <h4 style={{fontSize: '1.5rem', color: '#00f0ff'}}>{doorbell.brand}</h4>
                        <span style={{color: '#00f0ff', fontSize: '0.9rem'}}>{doorbell.price}</span>
                      </div>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{doorbell.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {doorbell.features.map((feature, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Key Features & Benefits
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '📱', title: 'Live View', text: 'See who\'s at your door in real-time'},
                {icon: '🗣️', title: 'Two-Way Talk', text: 'Speak to visitors from anywhere'},
                {icon: '📦', title: 'Package Detection', text: 'Get alerts when packages arrive'},
                {icon: '🌙', title: 'Night Vision', text: 'Clear video even in darkness'},
                {icon: '☁️', title: 'Cloud Recording', text: 'Review footage anytime'},
                {icon: '🔔', title: 'Motion Alerts', text: 'Notifications when motion detected'}
              ].map((feature, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{feature.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{feature.title}</h4>
                  <p style={{color: '#8b949e'}}>{feature.text}</p>
                </div>
              ))}
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Ready to Install a Video Doorbell?
              </h3>
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
