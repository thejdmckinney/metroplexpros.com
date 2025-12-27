import Layout from '../components/Layout'
import Link from 'next/link'
import TrustSignals, { InlineTrustBadges } from '../components/TrustSignals'

export default function Home() {
  return (
    <Layout 
      title="Dallas Electrician & Plumber | Smart Home Installation | Metroplex Pros"
      description="Licensed Dallas Electrician & Plumber Near Me | 24/7 Emergency Service | Same-Day Appointments | FREE Estimates | Electrical & plumbing repairs you can trust. Call (682) 466-2130 now!"
      keywords="Dallas electrician, electrician near me Dallas, Dallas plumber, plumber near me Dallas, home electrical repair service, electrical home repair, home electrical repair near me, smart home installation Dallas, emergency electrician near me, emergency plumber near me"
      canonicalUrl="https://www.metroplexpros.com"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Expert Electrical & Plumbing Services
                <span className="text-accent"> + Smart Home Solutions</span>
              </h1>
              <p className="hero-subtitle text-tagline">
                Dallas's Trusted Licensed Electricians & Plumbers
              </p>
              <p className="hero-description">
                Professional home electrical repair, plumbing services, and smart home installations throughout the 
                Dallas-Fort Worth metroplex. Licensed, insured, and available 24/7 for emergencies. From fixing a 
                leaky faucet to complete electrical home repair - we do it all with expert craftsmanship.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn">
                  Get Free Estimate
                </Link>
                <Link href="tel:682-466-2130" className="btn btn-outline">
                  Call (682) 466-2130
                </Link>
              </div>
              <InlineTrustBadges />
            </div>
            <div className="hero-image">
              <div className="hero-logo-container">
                <img src="/logo.svg" alt="Metroplex Pros - Dallas Home Improvement Specialists" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section" style={{background: '#0d1117', paddingTop: '3rem', paddingBottom: '3rem'}}>
        <div className="container">
          <TrustSignals variant="compact" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Our Expert Services</h2>
          <p className="text-center text-muted mb-4" style={{maxWidth: '700px', margin: '0 auto 3rem'}}>
            Specializing in electrical, plumbing, and smart home technology for residential properties across Dallas-Fort Worth
          </p>
          <div className="grid services-grid">
            <div className="card">
              <div className="service-icon">⚡</div>
              <h3>Electrical Services</h3>
              <p>Licensed electricians for home electrical repair service, installations, panel upgrades, outlets, lighting, ceiling fans, troubleshooting, and 24/7 emergency electrical repair near me.</p>
              <Link href="/services" className="btn-link">Learn More →</Link>
            </div>
            <div className="card">
              <div className="service-icon">🔧</div>
              <h3>Plumbing Services</h3>
              <p>Expert plumbers for leak repairs, drain cleaning, water heater installation, fixture replacement, pipe repairs, and emergency plumbing available 24/7.</p>
              <Link href="/services" className="btn-link">Learn More →</Link>
            </div>
            <div className="card">
              <div className="service-icon">🏠</div>
              <h3>Smart Home Installations</h3>
              <p>Transform your home with smart thermostats, automated lighting, security systems, door locks, cameras, voice control, and whole-home automation.</p>
              <Link href="/services/smart-home-installations" className="btn-link">Learn More →</Link>
            </div>
          </div>
          
          {/* Detailed Service Lists */}
          <div className="service-details-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem'}}>
            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h4 style={{color: '#00f0ff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1.5rem'}}>⚡</span> Electrical Services Include:
              </h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Home electrical repair & troubleshooting</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Circuit breaker panel upgrades</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Outlet & switch installation/repair</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ LED & recessed lighting</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Ceiling fan installation</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Whole-house surge protection</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Electric vehicle (EV) charger installation</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Generator installation & hookup</li>
                <li style={{padding: '0.5rem 0', color: '#c9d1d9'}}>✓ 24/7 emergency electrical repairs</li>
              </ul>
            </div>
            
            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h4 style={{color: '#00f0ff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1.5rem'}}>🔧</span> Plumbing Services Include:
              </h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Leak detection & repair</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Drain cleaning & unclogging</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Water heater installation & repair</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Faucet & fixture replacement</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Toilet repair & installation</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Garbage disposal installation</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Pipe repair & repiping</li>
                <li style={{padding: '0.5rem 0', color: '#c9d1d9'}}>✓ 24/7 emergency plumbing service</li>
              </ul>
            </div>
            
            <div style={{padding: '2rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h4 style={{color: '#00f0ff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1.5rem'}}>🏡</span> Smart Home Services Include:
              </h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Smart thermostat installation (Nest, Ecobee)</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Smart lighting systems (Philips Hue, Lutron)</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Video doorbell & security cameras</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Smart door locks & access control</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Home automation hubs (Alexa, Google Home)</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Smart switches & dimmers</li>
                <li style={{padding: '0.5rem 0', borderBottom: '1px solid #30363d', color: '#c9d1d9'}}>✓ Whole-home integration</li>
                <li style={{padding: '0.5rem 0', color: '#c9d1d9'}}>✓ Consultation & planning</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link href="/services" className="btn">
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="section-title">Why Choose Metroplex Pros?</h2>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">✅</div>
                  <div>
                    <h3>Licensed Electricians & Plumbers</h3>
                    <p>All our technicians are fully licensed, bonded, and insured to work on your electrical and plumbing systems safely and legally.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">⭐</div>
                  <div>
                    <h3>5-Star Service</h3>
                    <p>Consistently rated 5 stars for our professional service, expert workmanship, and clean job sites throughout the Dallas metroplex.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🛡️</div>
                  <div>
                    <h3>Guaranteed Workmanship</h3>
                    <p>We stand behind every electrical, plumbing, and smart home installation with comprehensive warranties on parts and labor.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">💰</div>
                  <div>
                    <h3>Transparent Pricing</h3>
                    <p>Upfront estimates with no hidden fees. You'll know the cost before we start any electrical, plumbing, or smart home work.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div>
                    <h3>24/7 Emergency Service</h3>
                    <p>Electrical and plumbing emergencies don't wait. We're available around the clock for urgent repairs with same-day service.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🎓</div>
                  <div>
                    <h3>Expert Smart Home Integration</h3>
                    <p>Certified in the latest smart home technologies. We'll design and install systems that work seamlessly together.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats-container">
              <div className="stats">
                <div className="stat">
                  <div className="stat-number text-accent">⭐</div>
                  <div className="stat-label">Nextdoor Neighborhood Fave 2025</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">Licensed</div>
                  <div className="stat-label">& Insured</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">100%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number text-accent">24/7</div>
                  <div className="stat-label">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="section faq-section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="text-center text-muted mb-5">Common questions about our Dallas electrical, plumbing, and smart home services</p>
          
          <div className="faq-grid" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#00f0ff'}}>Are your electricians and plumbers licensed in Texas?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Yes! All our electricians and plumbers are fully licensed, bonded, and insured to operate in Texas. We carry comprehensive liability insurance and workers' compensation coverage. Our work comes with warranties on both parts and labor, and we maintain an A+ rating with the BBB.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#00f0ff'}}>Do you offer 24/7 emergency electrical and plumbing services?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Absolutely! We provide 24/7 emergency services for urgent issues like electrical outages, circuit breaker problems, plumbing leaks, burst pipes, and clogged drains. Call (682) 466-2130 anytime for immediate assistance. Our emergency response team is available nights, weekends, and holidays.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#00f0ff'}}>What smart home systems do you install?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>We install all major smart home brands including Nest and Ecobee thermostats, Philips Hue and Lutron lighting, Ring and Nest video doorbells, smart locks, security cameras, and whole-home automation hubs like Amazon Alexa and Google Home. We'll help you design a system that fits your needs and budget.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#00f0ff'}}>How much does it cost to install an EV charger at my home?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>EV charger installation typically ranges from $800-$2,500 depending on your electrical panel capacity, distance from the panel, and charger type (Level 1 or Level 2). We offer free in-home assessments to provide accurate quotes and can help you take advantage of available rebates and tax credits.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#00f0ff'}}>What areas do you serve in the Dallas-Fort Worth metroplex?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>We serve Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Irving, Carrollton, and all surrounding DFW areas. We offer free estimates for all electrical, plumbing, and smart home services with same-day availability for emergency repairs.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#00f0ff'}}>Do you offer financing for larger electrical or plumbing projects?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Yes! We offer flexible financing options with approved credit, including 0% interest plans for 12-18 months on qualifying projects. We also accept all major credit cards and can work with your home equity line of credit. Payment plans can be customized to fit your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are your electricians and plumbers licensed in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All our electricians and plumbers are fully licensed, bonded, and insured to operate in Texas. We carry comprehensive liability insurance and workers' compensation coverage. Our work comes with warranties on both parts and labor, and we maintain an A+ rating with the BBB."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer 24/7 emergency electrical and plumbing services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We provide 24/7 emergency services for urgent issues like electrical outages, circuit breaker problems, plumbing leaks, burst pipes, and clogged drains. Call (682) 466-2130 anytime for immediate assistance."
                }
              },
              {
                "@type": "Question",
                "name": "What smart home systems do you install?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We install all major smart home brands including Nest and Ecobee thermostats, Philips Hue and Lutron lighting, Ring and Nest video doorbells, smart locks, security cameras, and whole-home automation hubs like Amazon Alexa and Google Home."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to install an EV charger at my home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EV charger installation typically ranges from $800-$2,500 depending on your electrical panel capacity, distance from the panel, and charger type. We offer free in-home assessments to provide accurate quotes and can help you take advantage of available rebates and tax credits."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you serve in the Dallas-Fort Worth metroplex?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Irving, Carrollton, and all surrounding DFW areas. We offer free estimates for all electrical, plumbing, and smart home services with same-day availability for emergency repairs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer financing for larger electrical or plumbing projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer flexible financing options with approved credit, including 0% interest plans for 12-18 months on qualifying projects. We also accept all major credit cards and can work with your home equity line of credit."
                }
              }
            ]
          })
        }}
      />

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Need an Electrician or Plumber in Dallas?</h2>
            <p className="text-muted mb-4">
              Contact us today for a free estimate on electrical, plumbing, or smart home services. Available 24/7 for emergencies!
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Get Free Estimate
              </Link>
              <Link href="tel:682-466-2130" className="btn btn-outline">
                Call (682) 466-2130
              </Link>
            </div>
            <p className="mt-3 text-sm">
              <em>Real estate professionals: Check out our <Link href="/for-realtors" className="text-accent">specialized services for realtors & property managers</Link></em>
            </p>
          </div>
        </div>
      </section>


    </Layout>
  )
}