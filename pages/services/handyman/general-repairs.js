import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'


export default function GeneralRepairs() {
  return (
    <Layout 
      title="General Handyman Repairs Dallas-Fort Worth | MetroPlex Pros"
      description="General home repair services in DFW. Fix anything in your home. Carpentry, assembly, maintenance. Your trusted handyman. Call (682) 466-2130."
      keywords="handyman Dallas, home repairs, general repairs, furniture assembly, carpentry, Dallas handyman services"
      canonicalUrl="https://www.metroplexpros.com/services/handyman/general-repairs/"
    

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
              <span className="text-accent">General Handyman Repairs</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Your Go-To Handyman for Any Home Repair
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
              Complete Handyman Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              From minor repairs to larger projects, MetroPlex Pros is your trusted handyman throughout Dallas-Fort Worth. 
              We handle all those odd jobs and repairs around your home so you don't have to. No job is too small, and 
              we're equipped to handle most repairs on the spot.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Handyman Services We Provide
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Carpentry & Woodwork',
                  description: 'Custom shelving, trim work, deck repair, fence repair, and general carpentry projects.',
                  icon: '🪚',
                  services: ['Custom shelving', 'Trim & molding', 'Deck repair', 'Fence repair', 'Cabinet repair', 'Wood rot repair']
                },
                {
                  title: 'Assembly Services',
                  description: 'Furniture assembly, TV mounting, shed assembly, and more. We assemble it all.',
                  icon: '🔧',
                  services: ['Furniture assembly', 'TV mounting', 'Shelving units', 'Shed assembly', 'Playground equipment', 'Exercise equipment']
                },
                {
                  title: 'General Maintenance',
                  description: 'Preventive maintenance, seasonal tasks, and routine repairs to keep your home in top shape.',
                  icon: '⚙️',
                  services: ['Gutter cleaning', 'Caulking', 'Window repair', 'Screen replacement', 'Power washing', 'Minor plumbing']
                },
                {
                  title: 'Miscellaneous Repairs',
                  description: 'All those odd jobs that need attention. If it needs fixing, we can probably handle it.',
                  icon: '🛠️',
                  services: ['Window treatments', 'Grab bars', 'Mailbox repair', 'Minor electrical', 'Tile repair', 'Floor repair']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem'}}>
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
              Why Choose MetroPlex Pros?
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '👨‍🔧', title: 'Skilled Technicians', text: 'Experienced in all types of repairs'},
                {icon: '🧰', title: 'Fully Equipped', text: 'We bring all necessary tools'},
                {icon: '⏱️', title: 'Same-Day Service', text: 'Most jobs completed in one visit'},
                {icon: '💰', title: 'Fair Pricing', text: 'Transparent quotes, no hidden fees'},
                {icon: '🏆', title: 'Quality Work', text: 'Guaranteed satisfaction on every job'},
                {icon: '📞', title: 'Easy Scheduling', text: 'Book online or call today'}
              ].map((benefit, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{benefit.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{benefit.title}</h4>
                  <p style={{color: '#8b949e'}}>{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Popular "Honey-Do" List Items
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginTop: '1.5rem'}}>
                {[
                  '✓ Hang pictures and mirrors',
                  '✓ Replace light bulbs in high places',
                  '✓ Fix squeaky floors',
                  '✓ Adjust cabinet doors',
                  '✓ Replace toilet seats',
                  '✓ Install closet organizers',
                  '✓ Repair loose tile',
                  '✓ Patch nail holes',
                  '✓ Install baby gates',
                  '✓ Replace door stops',
                  '✓ Fix running toilets',
                  '✓ Install smoke detectors'
                ].map((item, i) => (
                  <div key={i} style={{padding: '0.5rem', fontSize: '0.95rem'}}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Have a Project or Repair?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Call us for any repair, big or small. We're here to help!
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
