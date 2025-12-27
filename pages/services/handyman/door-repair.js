import Layout from '../../../components/Layout'
import Link from 'next/link'

export default function DoorRepair() {
  return (
    <Layout 
      title="Door Repair & Installation Dallas-Fort Worth | MetroPlex Pros"
      description="Professional door repair in DFW. Fix sticking doors, broken hinges, locksets, weather stripping. Door installation and replacement. Call (682) 466-2130."
      keywords="door repair Dallas, door installation, hinge repair, lockset installation, weather stripping, Dallas handyman"
      canonicalUrl="https://www.metroplexpros.com/services/handyman/door-repair"
    

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
              <span className="text-accent">Door Repair & Installation</span><br />
              in Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Fix Sticking, Squeaking, or Damaged Doors
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
              Professional Door Repair Services
            </h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#c9d1d9'}}>
              From sticking doors to broken hinges, MetroPlex Pros repairs and installs all types of doors throughout 
              Dallas-Fort Worth. Our skilled technicians fix common door problems quickly and efficiently, restoring 
              smooth operation and proper sealing.
            </p>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Common Door Repairs
            </h3>
            <div style={{display: 'grid', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {
                  title: 'Sticking or Binding Doors',
                  description: 'Fix doors that stick, drag, or won\'t close properly due to swelling, settling, or misalignment.',
                  icon: '🚪',
                  fixes: ['Plane/trim door', 'Adjust hinges', 'Fix frame', 'Realign strike plate']
                },
                {
                  title: 'Hinge Repair & Replacement',
                  description: 'Replace squeaky, loose, or broken hinges. Fix sagging doors and ensure smooth operation.',
                  icon: '🔧',
                  fixes: ['Replace hinges', 'Tighten screws', 'Fix stripped holes', 'Oil squeaky hinges']
                },
                {
                  title: 'Lockset & Hardware',
                  description: 'Install or replace door knobs, deadbolts, and locksets. Repair or upgrade door hardware.',
                  icon: '🔐',
                  fixes: ['Replace locksets', 'Install deadbolts', 'Rekey locks', 'Upgrade hardware']
                },
                {
                  title: 'Weather Stripping & Seals',
                  description: 'Replace worn weather stripping and door sweeps to stop drafts and improve energy efficiency.',
                  icon: '🌬️',
                  fixes: ['New weather stripping', 'Door sweeps', 'Threshold repair', 'Seal gaps']
                }
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                    <div style={{fontSize: '3rem'}}>{service.icon}</div>
                    <div style={{flex: 1}}>
                      <h4 style={{fontSize: '1.5rem', marginBottom: '0.75rem', color: '#00f0ff'}}>{service.title}</h4>
                      <p style={{color: '#8b949e', lineHeight: '1.6', marginBottom: '1rem'}}>{service.description}</p>
                      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem'}}>
                        {service.fixes.map((fix, idx) => (
                          <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem'}}>
                            <span style={{color: '#00f0ff'}}>✓</span>
                            <span>{fix}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize: '2rem', marginBottom: '1.5rem', color: '#00f0ff'}}>
              Door Installation Services
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
              {[
                {icon: '🏠', title: 'Interior Doors', text: 'Install or replace bedroom, bathroom, closet doors'},
                {icon: '🔒', title: 'Entry Doors', text: 'Install new front or back doors with weatherproofing'},
                {icon: '🌳', title: 'Patio Doors', text: 'Sliding glass and French door installation'},
                {icon: '🚗', title: 'Garage Doors', text: 'Service and repair garage door mechanisms'},
                {icon: '📏', title: 'Custom Sizes', text: 'Cut and fit doors for non-standard openings'},
                {icon: '🔨', title: 'Pre-hung Doors', text: 'Complete door and frame installation'}
              ].map((service, index) => (
                <div key={index} className="card" style={{padding: '1.5rem', textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{service.icon}</div>
                  <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#00f0ff'}}>{service.title}</h4>
                  <p style={{color: '#8b949e'}}>{service.text}</p>
                </div>
              ))}
            </div>

            <div className="card" style={{padding: '2rem', marginBottom: '3rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff'}}>
              <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#00f0ff'}}>
                Signs You Need Door Repair
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem'}}>
                {[
                  '🚪 Door sticks or drags when opening/closing',
                  '🔊 Squeaking or noisy hinges',
                  '🌬️ Drafts coming through door edges',
                  '🔐 Lockset loose or not working properly',
                  '📐 Door doesn\'t align with frame',
                  '💨 Door won\'t stay closed',
                  '🪛 Visible gaps around door edges',
                  '🔧 Stripped screw holes in frame'
                ].map((sign, i) => (
                  <div key={i} style={{padding: '0.75rem', fontSize: '0.95rem', borderLeft: '3px solid #00f0ff'}}>
                    {sign}
                  </div>
                ))}
              </div>
            </div>

            <div style={{textAlign: 'center', padding: '3rem 0'}}>
              <h3 style={{fontSize: '2rem', marginBottom: '1.5rem'}}>
                Need Door Repair or Installation?
              </h3>
              <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>
                Fast, professional door services throughout DFW
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
