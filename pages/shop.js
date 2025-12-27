import Layout from '../components/Layout'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Shop() {
  useEffect(() => {
    // Shopify Buy Button will be embedded here
    // This script will load after you provide your Shopify store details
  }, []);

  return (
    <Layout 
      title="Shop Smart Home Products | MetroPlex Smart Home Supply"
      description="Browse and buy smart home devices, thermostats, lighting, security cameras, and electrical/plumbing supplies. Professional-grade products with expert installation available."
      keywords="buy smart home devices Dallas, smart thermostat shop, smart lighting online, video doorbell purchase, EV charger buy, plumbing supplies Dallas"
      canonicalUrl="https://www.metroplexpros.com/shop/"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              <span className="text-accent">MetroPlex Smart Home</span> Supply
            </h1>
            <p className="hero-subtitle text-tagline">
              Professional-Grade Smart Home Products & Electrical Supplies
            </p>
            <p className="hero-description">
              Browse our curated selection of smart home devices, electrical components, and plumbing supplies. 
              All products come with optional professional installation by our licensed technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon / Shopify Embed Section */}
      <section className="section shop-section">
        <div className="container">
          
          {/* This is where Shopify products will appear */}
          <div id="shopify-products-container" style={{minHeight: '400px'}}>
            
            {/* Temporary placeholder - will be replaced with Shopify integration */}
            <div style={{
              textAlign: 'center', 
              padding: '4rem 2rem',
              backgroundColor: '#161b22',
              borderRadius: '8px',
              border: '1px solid #30363d'
            }}>
              <h2 style={{color: '#00f0ff', marginBottom: '1rem'}}>🛒 Store Loading...</h2>
              <p style={{color: '#c9d1d9', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
                We're currently stocking our shelves with premium smart home devices and electrical supplies. 
                Products will appear here shortly!
              </p>
              <div style={{marginTop: '2rem'}}>
                <Link href="/contact" className="btn">
                  Need Installation? Contact Us
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="section" style={{backgroundColor: '#0d1117', paddingTop: '3rem'}}>
        <div className="container">
          <h2 className="section-title text-center" style={{marginBottom: '3rem'}}>Product Categories</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            
            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌡️</div>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Smart Thermostats</h3>
              <p style={{color: '#c9d1d9'}}>Nest, Ecobee, Honeywell - save energy and control from anywhere</p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💡</div>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Smart Lighting</h3>
              <p style={{color: '#c9d1d9'}}>Philips Hue, Lutron switches, dimmers, and LED bulbs</p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚪</div>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Video Doorbells</h3>
              <p style={{color: '#c9d1d9'}}>Ring, Nest, Arlo - see and speak to visitors remotely</p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔒</div>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Smart Locks</h3>
              <p style={{color: '#c9d1d9'}}>Keyless entry systems with smartphone control</p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📹</div>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>Security Cameras</h3>
              <p style={{color: '#c9d1d9'}}>Indoor and outdoor cameras with cloud storage</p>
            </div>

            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{color: '#00f0ff', marginBottom: '1rem'}}>EV Chargers</h3>
              <p style={{color: '#c9d1d9'}}>Level 1 & 2 charging stations for all electric vehicles</p>
            </div>

          </div>
        </div>
      </section>

      {/* Installation CTA */}
      <section className="section" style={{backgroundColor: '#161b22', padding: '4rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#ffffff', marginBottom: '1rem'}}>Professional Installation Available</h2>
            <p style={{color: '#c9d1d9', marginBottom: '2rem', fontSize: '1.1rem'}}>
              Purchase any product and add professional installation by our licensed electricians. 
              We'll ensure everything is properly installed, configured, and working perfectly.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/contact" className="btn">
                Request Installation Quote
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <h2 className="section-title text-center" style={{marginBottom: '3rem'}}>Why Buy From Us?</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✅</div>
              <h3 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Expert Selection</h3>
              <p style={{color: '#c9d1d9'}}>Only products we trust and install ourselves</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛠️</div>
              <h3 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Installation Support</h3>
              <p style={{color: '#c9d1d9'}}>Professional installation available for all products</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💬</div>
              <h3 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Tech Support</h3>
              <p style={{color: '#c9d1d9'}}>Get help from licensed electricians who know the products</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚚</div>
              <h3 style={{color: '#00f0ff', marginBottom: '0.5rem'}}>Local Service</h3>
              <p style={{color: '#c9d1d9'}}>Fast shipping or pickup in Dallas-Fort Worth area</p>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  )
}
