import Layout from '../components/Layout'
import Link from 'next/link'
import TrustSignals, { InlineTrustBadges } from '../components/TrustSignals'
import NewsletterSignup from '../components/NewsletterSignup'

export default function Home() {
  return (
    <Layout 
      title="Dallas Electrician, Plumber & Handyman | Smart Home Installation | Metroplex Pros"
      description="Dallas Electrician, Plumber & Handyman Near Me | 24/7 Emergency Service | Same-Day Appointments | FREE Estimates | Electrical, plumbing & handyman repairs you can trust. Call (682) 466-2130 now!"
      keywords="Dallas electrician, electrician near me Dallas, Dallas plumber, plumber near me Dallas, Dallas handyman, handyman near me Dallas, home electrical repair service, electrical home repair, home electrical repair near me, smart home installation Dallas, emergency electrician near me, emergency plumber near me"
      canonicalUrl="https://www.metroplexpros.com"
    >
      {/* Hero Section */}
      <section className="hero" style={{background: 'linear-gradient(135deg, #0a1628 0%, #132642 50%, #1e3a5f 100%)', position: 'relative', overflow: 'hidden', padding: '4rem 0'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 25% 30%, #FF6600 0%, transparent 40%), radial-gradient(circle at 75% 70%, #FF6600 0%, transparent 40%)'}}>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center'}}>
            <div>
              <div style={{display: 'inline-block', padding: '0.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.15), rgba(255, 102, 0, 0.05))', border: '1px solid #FF6600', borderRadius: '30px', marginBottom: '1.5rem', fontSize: '0.85rem', letterSpacing: '2px', color: '#FF6600', boxShadow: '0 4px 20px rgba(255, 102, 0, 0.3)', animation: 'pulse 2s infinite'}}>
                ⚡ 24/7 EMERGENCY SERVICE • SAME-DAY APPOINTMENTS
              </div>
              <h1 style={{fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '700'}}>
                <span style={{color: '#ffffff'}}>Dallas's Most Trusted</span><br/>
                <span style={{background: 'linear-gradient(135deg, #FF6600, #FF8833)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  Handyman
                </span>
              </h1>
              <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '1.5rem', lineHeight: '1.7'}}>
                <strong style={{color: '#FF6600'}}>Expert professionals</strong> fixing electrical & plumbing problems right the first time. From <strong>leaky faucets</strong> to <strong>smart home automation</strong> - we handle it all.
              </p>
              
              <div style={{background: 'rgba(255, 102, 0, 0.08)', border: '1px solid rgba(255, 102, 0, 0.3)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'center'}}>
                  <div>
                    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.25rem'}}>4.9★</div>
                    <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Google Rating</div>
                  </div>
                  <div>
                    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.25rem'}}>1,200+</div>
                    <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Happy Customers</div>
                  </div>
                  <div>
                    <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.25rem'}}>Same Day</div>
                    <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Service Available</div>
                  </div>
                </div>
              </div>

              <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap'}}>
                <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.2rem', padding: '1.25rem 2.5rem', boxShadow: '0 4px 20px rgba(255, 102, 0, 0.3)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  📞 Call (682) 466-2130
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.2rem', padding: '1.25rem 2.5rem'}}>
                  Get Free Quote
                </Link>
              </div>

              <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255, 102, 0, 0.3)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '1.5rem'}}>✅</span>
                  <span style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Fully Insured</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '1.5rem'}}>⚡</span>
                  <span style={{color: '#c9d1d9', fontSize: '0.95rem'}}>15+ Years Experience</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{fontSize: '1.5rem'}}>🛡️</span>
                  <span style={{color: '#c9d1d9', fontSize: '0.95rem'}}>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>

            <div style={{position: 'relative'}}>
              <div style={{borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(255, 102, 0, 0.3)', boxShadow: '0 10px 40px rgba(255, 102, 0, 0.2)', background: '#132642', padding: '3rem', textAlign: 'center'}}>
                <img src="/logo.svg" alt="Metroplex Pros - Dallas Home Services" style={{width: '100%', height: 'auto', maxWidth: '300px', margin: '0 auto', display: 'block', filter: 'drop-shadow(0 0 20px rgba(255, 102, 0, 0.3))'}} />
                <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(255, 102, 0, 0.1)', borderRadius: '12px'}}>
                  <div style={{color: '#FF6600', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem'}}>🏆 Nextdoor Neighborhood Fave 2025</div>
                  <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Voted Best in Dallas</div>
                </div>
              </div>
              <div style={{position: 'absolute', top: '-20px', right: '-20px', background: '#FF6600', color: '#0a1628', padding: '1rem 1.5rem', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', boxShadow: '0 8px 24px rgba(255, 102, 0, 0.4)', transform: 'rotate(5deg)'}}>
                💰 $50 OFF<br/>First Service
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

      {/* Emergency Response Section */}
      <section className="section" style={{backgroundColor: '#132642', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #FF6600, #FF8833)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Common Problems We Fix Daily
              </span>
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Don't let these issues stress you out - we've seen and fixed them all
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem'}}>
            {[
              {
                icon: '⚡',
                problem: 'Circuit Breaker Keeps Tripping',
                solution: 'We diagnose overloads, faulty wiring, or bad breakers and fix them permanently',
                emergency: true
              },
              {
                icon: '💧',
                problem: 'Leaking Pipe or Faucet',
                solution: 'Fast leak detection and repair before water damage costs you thousands',
                emergency: true
              },
              {
                icon: '🚫',
                problem: 'No Power to Outlets',
                solution: 'Expert troubleshooting to find the fault and restore power safely',
                emergency: false
              },
              {
                icon: '🚽',
                problem: 'Toilet Running Constantly',
                solution: 'Quick fixes that stop wasted water and lower your bill',
                emergency: false
              },
              {
                icon: '💡',
                problem: 'Lights Flickering or Dimming',
                solution: 'Find and fix the electrical issue before it becomes dangerous',
                emergency: false
              },
              {
                icon: '🔥',
                problem: 'No Hot Water',
                solution: 'Water heater repair or replacement - same day service available',
                emergency: true
              }
            ].map((item, i) => (
              <div key={i} style={{background: '#0d1117', border: item.emergency ? '2px solid #ff4444' : '1px solid rgba(255, 102, 0, 0.2)', borderRadius: '12px', padding: '2rem', position: 'relative'}}>
                {item.emergency && (
                  <div style={{position: 'absolute', top: '-12px', right: '12px', background: '#ff4444', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold'}}>
                    🚨 EMERGENCY
                  </div>
                )}
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{item.icon}</div>
                <h3 style={{color: '#ffffff', fontSize: '1.3rem', marginBottom: '1rem'}}>{item.problem}</h3>
                <p style={{color: '#8b949e', lineHeight: '1.6'}}>{item.solution}</p>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center'}}>
            <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.25rem 3rem', boxShadow: '0 4px 20px rgba(255, 102, 0, 0.3)'}}>
              🚨 Need Help Now? Call (682) 466-2130
            </Link>
            <p style={{color: '#8b949e', marginTop: '1rem', fontSize: '0.95rem'}}>
              24/7 Emergency Service • Same-Day Appointments • No Overtime Charges
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview" style={{backgroundColor: '#0d1117', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #FF6600, #FF8833)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Complete Home Services Under One Roof
              </span>
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '800px', margin: '0 auto'}}>
              From emergency repairs to smart home upgrades - we're your one-stop shop for everything electrical, plumbing, and home automation
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '4rem'}}>
            {[
              {
                icon: '⚡',
                title: 'Electrical Services',
                desc: 'Expert electricians for all your electrical needs',
                services: ['Circuit breaker panel upgrades', 'Outlet & switch installation', 'LED lighting & ceiling fans', 'EV charger installation', 'Emergency repairs 24/7'],
                link: '/services',
                popular: true
              },
              {
                icon: '🔧',
                title: 'Plumbing Services',
                desc: 'Expert plumbers solving problems fast',
                services: ['Leak detection & repair', 'Water heater installation', 'Drain cleaning & unclogging', 'Fixture replacement', 'Emergency plumbing 24/7'],
                link: '/services',
                popular: true
              },
              {
                icon: '🏠',
                title: 'Smart Home Installation',
                desc: 'Transform your home with automation',
                services: ['Smart thermostats (Nest, Ecobee)', 'Security cameras & doorbells', 'Smart locks & lighting', 'Voice control setup (Alexa, Google)', 'Whole-home integration'],
                link: '/services/smart-home-installations',
                popular: false
              },
              {
                icon: '🔨',
                title: 'Handyman Services',
                desc: 'Professional repairs & installations',
                services: ['Drywall repair & painting', 'Door & window installation', 'Fixture mounting', 'Carpentry & trim work', 'General maintenance'],
                link: '/services/handyman',
                popular: false
              }
            ].map((service, i) => (
              <div key={i} style={{background: 'linear-gradient(135deg, #132642, #1e3a5f)', border: service.popular ? '2px solid #FF6600' : '1px solid #1e3a5f', borderRadius: '16px', padding: '2.5rem', position: 'relative', boxShadow: service.popular ? '0 8px 32px rgba(255, 102, 0, 0.2)' : 'none'}}>
                {service.popular && (
                  <div style={{position: 'absolute', top: '-12px', right: '20px', background: 'rgba(255, 102, 0, 0.9)', color: '#0a1628', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px', backdropFilter: 'blur(10px)'}}>
                    🔥 MOST REQUESTED
                  </div>
                )}
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>{service.icon}</div>
                <h3 style={{fontSize: '2rem', marginBottom: '0.5rem', color: '#ffffff'}}>{service.title}</h3>
                <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '2rem'}}>{service.desc}</p>
                <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0'}}>
                  {service.services.map((item, j) => (
                    <li key={j} style={{padding: '0.75rem 0', color: '#c9d1d9', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', borderBottom: j < service.services.length - 1 ? '1px solid rgba(255, 102, 0, 0.1)' : 'none'}}>
                      <span style={{color: '#FF6600', fontSize: '1.2rem', flexShrink: 0}}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="btn" style={{width: '100%', textAlign: 'center', display: 'block'}}>
                  Learn More & Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', padding: '3rem', background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.1), rgba(0, 128, 255, 0.1))', border: '1px solid rgba(255, 102, 0, 0.3)', borderRadius: '16px'}}>
            <h3 style={{fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem'}}>Not sure what you need?</h3>
            <p style={{fontSize: '1.1rem', color: '#c9d1d9', marginBottom: '2rem'}}>
              Tell us your problem and we'll recommend the best solution. Free consultations available.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/contact" className="btn" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
                Describe Your Problem
              </Link>
              <Link href="tel:682-466-2130" className="btn btn-outline" style={{fontSize: '1.1rem', padding: '1rem 2rem'}}>
                Call for Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Testimonials & Results */}
      <section className="section why-choose-us" style={{background: 'linear-gradient(180deg, #0a1628, #132642)', padding: '6rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 style={{fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #FF6600, #FF8833)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Why Dallas Homeowners Choose Us
              </span>
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Over 1,200 happy customers across Dallas-Fort Worth trust us with their homes
            </p>
          </div>

          {/* Stats Bar */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', marginBottom: '5rem', padding: '3rem', background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.05), rgba(0, 128, 255, 0.05))', border: '1px solid rgba(255, 102, 0, 0.2)', borderRadius: '16px'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.5rem'}}>4.9★</div>
              <div style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Average Rating</div>
              <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Google Reviews</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.5rem'}}>1,200+</div>
              <div style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Happy Customers</div>
              <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Since 2009</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.5rem'}}>⭐</div>
              <div style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Nextdoor Fave</div>
              <div style={{color: '#8b949e', fontSize: '0.85rem'}}>2025 Winner</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.5rem'}}>&lt;2hr</div>
              <div style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Response Time</div>
              <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Emergency Calls</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#FF6600', marginBottom: '0.5rem'}}>15+</div>
              <div style={{color: '#c9d1d9', fontSize: '0.95rem'}}>Years Experience</div>
              <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Fully Insured</div>
            </div>
          </div>

          {/* Real Customer Results */}
          <div style={{marginBottom: '5rem'}}>
            <h3 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#ffffff'}}>
              Real Results From Dallas Homeowners
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
              {[
                {
                  name: 'Sarah M.',
                  location: 'Highland Park',
                  service: 'Electrical Panel Upgrade',
                  review: 'Our home kept tripping breakers with all our new appliances. Metroplex Pros upgraded our panel in one day and now everything runs perfectly. Jeremy was professional and explained everything clearly.',
                  result: 'No more power outages',
                  rating: 5
                },
                {
                  name: 'Mike & Jennifer T.',
                  location: 'Lakewood',
                  service: 'Smart Home Installation',
                  review: "Wanted our home automated but didn't know where to start. They installed smart lights, thermostat, and door locks. Love controlling everything from my phone! Saved $145 on our first electric bill.",
                  result: '$145/month savings',
                  rating: 5
                },
                {
                  name: 'Robert C.',
                  location: 'University Park',
                  service: 'Emergency Plumbing',
                  review: 'Had a major leak at 11pm on Saturday night. They answered immediately and had someone here within an hour. Fixed it fast and cleaned up everything. Definitely calling them for all future work.',
                  result: 'Same-night repair',
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div key={i} style={{background: 'linear-gradient(135deg, #132642, #1e3a5f)', border: '1px solid #1e3a5f', borderRadius: '16px', padding: '2rem'}}>
                  <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <span key={j} style={{color: '#ffd700', fontSize: '1.5rem'}}>★</span>
                    ))}
                  </div>
                  <p style={{color: '#c9d1d9', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic'}}>
                    "{testimonial.review}"
                  </p>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255, 102, 0, 0.2)'}}>
                    <div>
                      <div style={{color: '#ffffff', fontWeight: 'bold', marginBottom: '0.25rem'}}>{testimonial.name}</div>
                      <div style={{color: '#8b949e', fontSize: '0.9rem'}}>{testimonial.location}</div>
                      <div style={{color: '#8b949e', fontSize: '0.85rem'}}>{testimonial.service}</div>
                    </div>
                    <div style={{background: 'rgba(255, 102, 0, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255, 102, 0, 0.3)'}}>
                      <div style={{color: '#FF6600', fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center'}}>{testimonial.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Features */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {[
              {icon: '🛡️', title: 'Fully Insured', desc: 'All technicians bonded, insured, and background-checked'},
              {icon: '💰', title: 'Upfront Pricing', desc: 'No hidden fees. You know the cost before we start work'},
              {icon: '⚡', title: '24/7 Emergency Service', desc: 'Same-day service available. We answer calls day or night'},
              {icon: '✅', title: '100% Satisfaction Guarantee', desc: 'Not happy? We make it right or refund your money'},
              {icon: '🧹', title: 'Clean Job Sites', desc: 'We treat your home like our own and clean up completely'},
              {icon: '🎓', title: 'Ongoing Training', desc: 'Certified in latest electrical, plumbing, and smart home tech'}
            ].map((feature, i) => (
              <div key={i} style={{background: '#132642', border: '1px solid #1e3a5f', borderRadius: '12px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{feature.icon}</div>
                <h4 style={{fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.75rem'}}>{feature.title}</h4>
                <p style={{color: '#8b949e', fontSize: '0.95rem', lineHeight: '1.6'}}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{background: 'linear-gradient(135deg, #0a1628, #132642, #1e3a5f)', padding: '6rem 0', position: 'relative', overflow: 'hidden'}}>
        {/* Animated background elements */}
        <div style={{position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 102, 0, 0.1), transparent)', borderRadius: '50%', filter: 'blur(80px)'}}></div>
        <div style={{position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 128, 255, 0.1), transparent)', borderRadius: '50%', filter: 'blur(60px)'}}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{display: 'inline-block', background: 'rgba(255, 102, 0, 0.1)', border: '1px solid rgba(255, 102, 0, 0.3)', borderRadius: '30px', padding: '0.75rem 2rem', marginBottom: '2rem'}}>
              <span style={{color: '#FF6600', fontSize: '0.95rem', fontWeight: 'bold', letterSpacing: '1px'}}>
                🔥 LIMITED TIME OFFER
              </span>
            </div>
            
            <h2 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              <span style={{color: '#ffffff'}}>Get </span>
              <span style={{background: 'linear-gradient(135deg, #FF6600, #FF8833)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>$50 OFF</span>
              <span style={{color: '#ffffff'}}> Your First Service</span>
            </h2>
            
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '1rem', lineHeight: '1.7'}}>
              Whether it's an emergency repair or planned upgrade, we're here to help
            </p>
            
            <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '3rem'}}>
              Same-day service available • No hidden fees • 100% satisfaction guaranteed
            </p>

            <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 8px 32px rgba(255, 102, 0, 0.3)'}}>
                <span style={{fontSize: '1.5rem'}}>📞</span>
                Call Now: (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.3rem', padding: '1.5rem 3rem'}}>
                Schedule Online
              </Link>
            </div>

            {/* Urgency elements */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '4rem'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>⚡</div>
                <div style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Fast Response</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Under 2 hours for emergencies</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>💰</div>
                <div style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Upfront Pricing</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>Know costs before we start</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🛡️</div>
                <div style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Fully Insured</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>15+ years experience</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>✅</div>
                <div style={{color: '#ffffff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>100% Guaranteed</div>
                <div style={{color: '#8b949e', fontSize: '0.9rem'}}>We make it right or refund</div>
              </div>
            </div>

            {/* Trust badges */}
            <div style={{marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255, 102, 0, 0.2)'}}>
              <div style={{color: '#8b949e', marginBottom: '1.5rem', fontSize: '0.9rem'}}>Trusted by over 1,200 Dallas homeowners</div>
              <div style={{display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{color: '#ffd700', fontSize: '1.5rem'}}>★★★★★</span>
                  <span style={{color: '#c9d1d9', fontSize: '0.95rem'}}>4.9 Google Rating</span>
                </div>
                <div style={{padding: '0.5rem 1.5rem', background: 'rgba(255, 102, 0, 0.1)', border: '1px solid rgba(255, 102, 0, 0.3)', borderRadius: '8px', color: '#FF6600', fontSize: '0.9rem', fontWeight: 'bold'}}>
                  ⭐ Nextdoor Fave 2025
                </div>
                <div style={{color: '#c9d1d9', fontSize: '0.95rem'}}>
                  🏅 BBB A+ Rated
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
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#132642', border: '1px solid #1e3a5f', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FF6600'}}>Are your electricians and plumbers insured in Texas?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Yes! All our electricians and plumbers are fully bonded and insured to operate in Texas. We carry comprehensive liability insurance and workers' compensation coverage. Our work comes with warranties on both parts and labor, and we maintain an A+ rating with the BBB.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#132642', border: '1px solid #1e3a5f', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FF6600'}}>Do you offer 24/7 emergency electrical and plumbing services?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>Absolutely! We provide 24/7 emergency services for urgent issues like electrical outages, circuit breaker problems, plumbing leaks, burst pipes, and clogged drains. Call (682) 466-2130 anytime for immediate assistance. Our emergency response team is available nights, weekends, and holidays.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#132642', border: '1px solid #1e3a5f', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FF6600'}}>What smart home systems do you install?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>We install all major smart home brands including Nest and Ecobee thermostats, Philips Hue and Lutron lighting, Ring and Nest video doorbells, smart locks, security cameras, and whole-home automation hubs like Amazon Alexa and Google Home. We'll help you design a system that fits your needs and budget.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#132642', border: '1px solid #1e3a5f', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FF6600'}}>How much does it cost to install an EV charger at my home?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>EV charger installation typically ranges from $800-$2,500 depending on your electrical panel capacity, distance from the panel, and charger type (Level 1 or Level 2). We offer free in-home assessments to provide accurate quotes and can help you take advantage of available rebates and tax credits.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#132642', border: '1px solid #1e3a5f', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FF6600'}}>What areas do you serve in the Dallas-Fort Worth metroplex?</h3>
              <p style={{color: '#c9d1d9', lineHeight: '1.6'}}>We serve Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Irving, Carrollton, and all surrounding DFW areas. We offer free estimates for all electrical, plumbing, and smart home services with same-day availability for emergency repairs.</p>
            </div>
            
            <div className="faq-item" style={{marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#132642', border: '1px solid #1e3a5f', borderRadius: '8px'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FF6600'}}>Do you offer financing for larger electrical or plumbing projects?</h3>
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
                "name": "Are your electricians and plumbers insured in Texas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! All our electricians and plumbers are fully bonded and insured to operate in Texas. We carry comprehensive liability insurance and workers' compensation coverage. Our work comes with warranties on both parts and labor, and we maintain an A+ rating with the BBB."
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

      {/* Newsletter Section */}
      <section style={{
        backgroundColor: '#132642',
        padding: '4rem 0',
        borderTop: '1px solid #1e3a5f',
        borderBottom: '1px solid #1e3a5f'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '650px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #FF6600, #FF8833)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Home Improvement Tips & Exclusive Offers
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#8b949e',
              marginBottom: '2.5rem',
              lineHeight: '1.6'
            }}>
              Join thousands of Dallas homeowners getting expert maintenance tips, seasonal guides, and special discounts delivered monthly.
            </p>
            <NewsletterSignup source="homepage" />
            <p style={{
              fontSize: '0.9rem',
              color: '#6e7681',
              marginTop: '1.5rem'
            }}>
              ✓ Monthly home maintenance guides &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Seasonal checklists &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Exclusive subscriber discounts
            </p>
          </div>
        </div>
      </section>

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

      <style jsx>{`
        @media (max-width: 768px) {
          .service-details-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 0.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .features {
            grid-template-columns: 1fr !important;
          }

          .feature {
            padding: 1rem !important;
          }

          .faq-grid {
            padding: 0 0.5rem;
          }

          .faq-item {
            padding: 1.25rem !important;
          }

          .faq-item h3 {
            font-size: 1.1rem !important;
          }

          .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }

          .stats-container {
            margin-top: 2rem;
          }
        }

        @media (max-width: 480px) {
          .service-details-grid {
            gap: 1rem !important;
            margin-top: 2rem !important;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .hero-buttons .btn {
            width: 100%;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .cta-buttons .btn {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>

    </Layout>
  )
}