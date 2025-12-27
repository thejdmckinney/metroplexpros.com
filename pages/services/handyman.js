import Layout from '../../components/Layout'
import Link from 'next/link'

export default function HandymanServices() {
  return (
    <Layout 
      title="Professional Handyman Services Dallas-Fort Worth | MetroPlex Pros"
      description="Reliable handyman services in DFW. Drywall repair, painting, carpentry, door/window repairs, deck maintenance, home repairs. Call (682) 466-2130."
      keywords="handyman Dallas, handyman services DFW, home repairs, drywall repair, painting, carpentry, door repair, deck maintenance, general handyman"
      canonicalUrl="https://www.metroplexpros.com/services/handyman"
    >
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Handyman Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "MetroPlex Pros",
              "telephone": "(682) 466-2130",
              "url": "https://www.metroplexpros.com"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Handyman Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Drywall Repair"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Interior & Exterior Painting"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Carpentry Services"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Door & Window Repairs"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Deck & Fence Maintenance"}},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Home Repairs & Maintenance"}}
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a0e14 0%, #161b22 50%, #1a1f2e 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #00f0ff 0%, transparent 40%), radial-gradient(circle at 75% 70%, #00f0ff 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))', border: '1px solid #00f0ff', borderRadius: '30px', marginBottom: '2rem', fontSize: '0.9rem', letterSpacing: '2px', color: '#00f0ff', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.2)'}}>
              PROFESSIONAL HANDYMAN SERVICES
            </div>
            <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span className="text-accent">Reliable Handyman Services</span><br />
              for Dallas-Fort Worth
            </h1>
            <p className="hero-subtitle" style={{fontSize: '1.4rem', color: '#c9d1d9', marginBottom: '1.5rem', fontWeight: 300}}>
              Carpentry • Painting • Drywall • Doors • Decks • General Repairs
            </p>
            <p className="hero-description" style={{maxWidth: '900px', margin: '0 auto 2rem', fontSize: '1.1rem', lineHeight: '1.9', color: '#8b949e'}}>
              MetroPlex Pros provides comprehensive handyman services throughout the Dallas-Fort Worth area. From small repairs 
              to larger projects, our skilled handymen handle all types of home maintenance and improvement tasks with quality 
              craftsmanship you can trust.
            </p>
            <div className="hero-buttons" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Call (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2.5rem'}}>
                Request Quote
              </Link>
            </div>
            <div style={{display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Skilled</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Professional Craftsmen</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Fast</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Quick Response</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#00f0ff'}}>Quality</div>
                <div style={{color: '#8b949e', fontSize: '0.95rem'}}>Guaranteed Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Handyman Services */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Our Handyman Services
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Complete home repair and maintenance solutions
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {[
              {
                icon: '🎨',
                title: 'Interior & Exterior Painting',
                desc: 'Professional painting services for walls, ceilings, trim, doors, and exterior surfaces. Color consultation and preparation included.',
                features: ['Interior painting', 'Exterior painting', 'Trim & door painting', 'Cabinet painting', 'Pressure washing prep']
              },
              {
                icon: '🔨',
                title: 'Drywall Repair & Texturing',
                desc: 'Expert drywall repair for holes, cracks, water damage, and nail pops. Texture matching and professional finishing.',
                features: ['Hole repair', 'Crack repair', 'Texture matching', 'Water damage repair', 'Popcorn ceiling repair']
              },
              {
                icon: '🪵',
                title: 'Carpentry Services',
                desc: 'Custom carpentry work including trim installation, crown molding, baseboards, and built-ins. Quality woodworking for your home.',
                features: ['Crown molding', 'Baseboards & trim', 'Built-in shelving', 'Custom carpentry', 'Wood repair']
              },
              {
                icon: '🚪',
                title: 'Door Services',
                desc: 'Door installation, repair, and adjustment. Interior doors, exterior doors, storm doors, and hardware installation.',
                features: ['Door installation', 'Door repair & adjustment', 'Hardware installation', 'Weather stripping', 'Storm doors']
              },
              {
                icon: '🪟',
                title: 'Window Services',
                desc: 'Window repair, caulking, weather stripping, and screen repair. Keep your windows functioning properly and energy efficient.',
                features: ['Window repair', 'Caulking & sealing', 'Weather stripping', 'Screen repair', 'Hardware replacement']
              },
              {
                icon: '🪜',
                title: 'Deck & Patio Maintenance',
                desc: 'Deck and patio repair, staining, sealing, and power washing. Keep your outdoor spaces safe and beautiful.',
                features: ['Deck repair', 'Staining & sealing', 'Power washing', 'Board replacement', 'Railing repair']
              },
              {
                icon: '🪚',
                title: 'Fence & Gate Repairs',
                desc: 'Fence and gate repair, replacement, and staining. Wood fence specialists keeping your property secure and attractive.',
                features: ['Fence repair', 'Gate repair & adjustment', 'Post replacement', 'Fence staining', 'Hardware replacement']
              },
              {
                icon: '📦',
                title: 'Shelving & Storage',
                desc: 'Custom shelving installation, closet organization, garage storage, and built-in cabinets. Maximize your storage space.',
                features: ['Shelving installation', 'Closet organization', 'Garage storage', 'Built-in cabinets', 'Wall-mounted storage']
              },
              {
                icon: '🔧',
                title: 'Cabinet Repairs',
                desc: 'Cabinet door adjustment, hinge replacement, drawer repair, and hardware updates. Fix and update existing cabinets.',
                features: ['Door adjustment', 'Hinge replacement', 'Drawer repair', 'Hardware installation', 'Refinishing']
              },
              {
                icon: '🏡',
                title: 'Home Assembly',
                desc: 'Furniture and product assembly for items from IKEA, Amazon, Wayfair, and other retailers. Professional assembly guaranteed.',
                features: ['Furniture assembly', 'Outdoor furniture', 'Exercise equipment', 'TV mounting', 'Product assembly']
              },
              {
                icon: '🛠️',
                title: 'General Home Repairs',
                desc: 'All types of general home repairs including squeaky floors, loose railings, stuck windows, and minor fixes around the house.',
                features: ['Squeaky floor repair', 'Railing tightening', 'Minor leak fixes', 'Caulking & sealing', 'General maintenance']
              },
              {
                icon: '🏠',
                title: 'Home Maintenance',
                desc: 'Regular home maintenance tasks including gutter cleaning, caulking, touch-up painting, and seasonal maintenance.',
                features: ['Gutter cleaning', 'Seasonal maintenance', 'Touch-up painting', 'Preventive maintenance', 'Home inspections']
              }
            ].map((service, index) => (
              <div key={index} style={{padding: '2.5rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 4px 20px rgba(0, 240, 255, 0.1)'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{service.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.5rem', marginBottom: '1rem'}}>{service.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8', marginBottom: '1.5rem'}}>{service.desc}</p>
                <ul style={{color: '#8b949e', lineHeight: '2', fontSize: '0.95rem', listStyle: 'none', padding: 0}}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{paddingLeft: '1.2rem', position: 'relative', marginBottom: '0.5rem'}}>
                      <span style={{position: 'absolute', left: 0, color: '#00f0ff', fontSize: '0.8rem'}}>▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Handyman Services */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Why Choose MetroPlex Pros for Handyman Work?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { icon: '✅', title: 'Skilled Craftsmen', desc: 'Our handymen have years of experience and take pride in quality workmanship on every project.' },
              { icon: '🔧', title: 'Wide Range of Skills', desc: 'From carpentry to painting to minor plumbing and electrical - we handle diverse home repair tasks.' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent, upfront pricing with no hidden fees. Honest estimates for all handyman services.' },
              { icon: '⚡', title: 'Flexible Scheduling', desc: 'We work around your schedule with convenient appointment times and quick turnaround.' },
              { icon: '🛡️', title: 'Insured & Reliable', desc: 'Fully insured handyman services with guaranteed workmanship. Your satisfaction is our priority.' },
              { icon: '🧹', title: 'Clean & Professional', desc: 'We respect your home, protect surfaces during work, and clean up thoroughly when finished.' }
            ].map((item, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '1px solid #30363d'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{item.icon}</div>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Projects */}
      <section className="section" style={{backgroundColor: '#0d1117'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              Popular Handyman Projects
            </h2>
            <p style={{fontSize: '1.1rem', color: '#8b949e'}}>
              Here are some of the most common handyman services we provide
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              { title: 'Honey-Do Lists', desc: "Tackle your whole to-do list in one visit. We'll handle multiple small tasks efficiently." },
              { title: 'Pre-Sale Home Prep', desc: 'Get your home market-ready with repairs, painting, and improvements before listing.' },
              { title: 'Move-In/Move-Out', desc: 'Repairs and updates when moving into or out of a property. Quick turnaround available.' },
              { title: 'Rental Property Maintenance', desc: 'Regular maintenance and tenant turnover repairs for investment properties.' },
              { title: 'Senior Home Modifications', desc: 'Safety improvements like grab bars, handrails, and accessibility modifications.' },
              { title: 'Home Office Setup', desc: 'Shelving, desk installation, cable management, and office organization.' }
            ].map((project, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <h3 style={{color: '#00f0ff', fontSize: '1.3rem', marginBottom: '1rem'}}>✓ {project.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{backgroundColor: '#161b22'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              How Our Handyman Service Works
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
            {[
              { step: '1', title: 'Contact Us', desc: 'Call, text, or submit an online request with details about your project.' },
              { step: '2', title: 'Get a Quote', desc: "We'll provide an estimate and schedule a convenient time for the work." },
              { step: '3', title: 'We Do the Work', desc: 'Our skilled handyman completes your project with quality craftsmanship.' },
              { step: '4', title: 'Final Inspection', desc: 'We walk through the completed work with you to ensure your satisfaction.' }
            ].map((item, index) => (
              <div key={index} style={{padding: '2rem', backgroundColor: '#0d1117', borderRadius: '12px', border: '2px solid rgba(0, 240, 255, 0.3)', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '1rem'}}>
                  {item.step}
                </div>
                <h3 style={{color: '#00f0ff', fontSize: '1.4rem', marginBottom: '1rem'}}>{item.title}</h3>
                <p style={{color: '#c9d1d9', lineHeight: '1.8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: '#0d1117', textAlign: 'center'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: '#00f0ff', fontSize: '3rem', marginBottom: '1.5rem'}}>
              Ready to Check Off Your To-Do List?
            </h2>
            <p style={{fontSize: '1.2rem', color: '#c9d1d9', marginBottom: '3rem', lineHeight: '1.8'}}>
              Whether you have one small repair or a long list of projects, our professional handymen are ready to help. 
              Contact us today for a free estimate.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📞</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Call or Text</div>
                <Link href="tel:682-466-2130" style={{color: '#c9d1d9', fontSize: '1.3rem', textDecoration: 'none'}}>
                  (682) 466-2130
                </Link>
              </div>
              
              <div style={{padding: '2rem', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.3)'}}>
                <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💻</div>
                <div style={{color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>Online Quote</div>
                <Link href="/contact" style={{color: '#c9d1d9', fontSize: '1.1rem', textDecoration: 'none'}}>
                  Request Service →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
