import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout 
      title="About Us - Licensed Dallas Electricians, Plumbers & Handymen | Metroplex Pros"
      description="⭐ Trusted by 500+ DFW homeowners! Licensed electricians, plumbers & handymen with 15+ years experience in electrical repairs, plumbing services, handyman work & smart home installations. 24/7 emergency service. Call (682) 466-2130!"
      keywords="Dallas electrician about, Dallas plumber about, Dallas handyman about, licensed electrician Dallas, licensed plumber DFW, licensed handyman Dallas, smart home installer Dallas, electrical contractor Dallas, plumbing contractor Dallas"
      canonicalUrl="https://www.metroplexpros.com/about/"
    >
      {/* Hero Section */}
      <section style={{background: 'linear-gradient(135deg, #0a0e14, #161b22, #1a1f2e)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden'}}>
        {/* Animated background */}
        <div style={{position: 'absolute', top: '10%', right: '15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08), transparent)', borderRadius: '50%', filter: 'blur(100px)'}}></div>
        <div style={{position: 'absolute', bottom: '20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 128, 255, 0.06), transparent)', borderRadius: '50%', filter: 'blur(80px)'}}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-content text-center">
            {/* Badge */}
            <div style={{display: 'inline-block', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '30px', padding: '0.75rem 2rem', marginBottom: '2rem'}}>
              <span style={{color: '#00f0ff', fontSize: '0.95rem', fontWeight: 'bold', letterSpacing: '1px'}}>
                ⭐ NEXTDOOR NEIGHBORHOOD FAVE 2025
              </span>
            </div>

            <h1 style={{fontSize: '4rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.1'}}>
              <span style={{color: '#ffffff'}}>Built on </span>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Three Generations
              </span>
              <br />
              <span style={{color: '#ffffff'}}>of Excellence</span>
            </h1>
            
            <p style={{fontSize: '1.4rem', color: '#c9d1d9', maxWidth: '900px', margin: '0 auto 3rem', lineHeight: '1.7'}}>
              Family-owned electrical and plumbing expertise serving Dallas-Fort Worth with 
              <span style={{color: '#00f0ff', fontWeight: 'bold'}}> 20+ years of experience</span> and a 
              commitment to quality that spans generations
            </p>

            {/* Stats Grid */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto'}}>
              <div style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.05))', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>20+</div>
                <div style={{color: '#c9d1d9', fontSize: '1rem'}}>Years Experience</div>
              </div>
              <div style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.05))', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>1,200+</div>
                <div style={{color: '#c9d1d9', fontSize: '1rem'}}>Happy Customers</div>
              </div>
              <div style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.05))', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>4.9★</div>
                <div style={{color: '#c9d1d9', fontSize: '1rem'}}>Google Rating</div>
              </div>
              <div style={{padding: '2rem', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.05))', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px'}}>
                <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem'}}>24/7</div>
                <div style={{color: '#c9d1d9', fontSize: '1rem'}}>Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story" style={{background: 'linear-gradient(180deg, #0a0e14, #161b22)', padding: '6rem 0'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center'}}>
            <div>
              <div style={{display: 'inline-block', background: 'rgba(0, 240, 255, 0.1)', padding: '0.5rem 1.5rem', borderRadius: '20px', marginBottom: '1.5rem'}}>
                <span style={{color: '#00f0ff', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px'}}>OUR STORY</span>
              </div>
              
              <h2 style={{fontSize: '3rem', marginBottom: '2rem', fontWeight: '700', lineHeight: '1.2'}}>
                <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  Three Generations
                </span>
                <br />
                <span style={{color: '#ffffff'}}>of Craftsmanship</span>
              </h2>

              <div style={{marginBottom: '2rem', padding: '2rem', background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '1px solid #30363d', borderRadius: '12px', borderLeft: '4px solid #00f0ff'}}>
                <p style={{color: '#c9d1d9', fontSize: '1.15rem', lineHeight: '1.8', margin: 0}}>
                  Electrical and plumbing expertise run deep in my family. I learned the trades from my father and 
                  grandfather, who instilled in me the values of <span style={{color: '#00f0ff', fontWeight: 'bold'}}>hard work, attention to detail, and taking pride 
                  in every project</span>.
                </p>
              </div>

              <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                With over <span style={{color: '#00f0ff', fontWeight: 'bold'}}>20 years of experience</span> in the industry, I honed my skills working 
                at my father's construction company in Indianapolis, Indiana, specializing in electrical systems 
                and plumbing installations.
              </p>
              
              <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                After years of experience in Indianapolis, I made the decision to bring my expertise and 
                family's legacy to Texas. I founded <span style={{color: '#00f0ff', fontWeight: 'bold'}}>Metroplex Pros</span> to serve the Dallas-Fort Worth 
                area with licensed electrical and plumbing services, backed by the same commitment to quality 
                and integrity that was passed down through generations of my family.
              </p>
              
              <p style={{color: '#c9d1d9', fontSize: '1.1rem', lineHeight: '1.8'}}>
                Every electrical panel we upgrade, every plumbing repair we complete, and every smart home system 
                we install reflects not just my 20+ years of professional experience, but also the <span style={{color: '#00f0ff', fontWeight: 'bold'}}>generations of 
                technical knowledge</span> that shaped my approach to home services. We believe your home deserves the 
                same level of care and precision that has been the hallmark of my family's work for decades.
              </p>
            </div>
            
            <div>
              <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '20px', padding: '3rem', textAlign: 'center', boxShadow: '0 20px 60px rgba(0, 240, 255, 0.15)'}}>
                <img src="/logo.svg" alt="Metroplex Pros - Dallas Home Improvement Specialists" style={{width: '100%', maxWidth: '300px', marginBottom: '2rem'}} />
                
                <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <div style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '1rem'}}>Family Legacy Since</div>
                  <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#00f0ff', marginBottom: '1rem'}}>1980s</div>
                  <div style={{fontSize: '1rem', color: '#c9d1d9'}}>Grandfather → Father → Jeremy</div>
                </div>

                <div style={{marginTop: '2rem', padding: '1.5rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <div style={{fontSize: '0.9rem', color: '#8b949e', marginBottom: '0.5rem'}}>Now Serving</div>
                  <div style={{fontSize: '1.3rem', fontWeight: 'bold', color: '#ffffff'}}>Dallas-Fort Worth</div>
                  <div style={{fontSize: '0.95rem', color: '#00f0ff', marginTop: '0.5rem'}}>With the same family values</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section our-values" style={{backgroundColor: '#0d1117', padding: '6rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <div style={{display: 'inline-block', background: 'rgba(0, 240, 255, 0.1)', padding: '0.5rem 1.5rem', borderRadius: '20px', marginBottom: '1.5rem'}}>
              <span style={{color: '#00f0ff', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px'}}>WHAT DRIVES US</span>
            </div>
            <h2 style={{fontSize: '3rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Our Core Values
              </span>
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              The principles that guide every project and every customer interaction
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '1px solid #30363d', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s ease'}}>
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00f0ff, #0080ff)'}}></div>
              <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🎯</div>
              <h3 style={{fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem', fontWeight: '600'}}>Quality First</h3>
              <p style={{color: '#8b949e', fontSize: '1.05rem', lineHeight: '1.7'}}>
                We never compromise on quality. From materials to craftsmanship, every aspect of our work 
                meets the highest standards in the industry.
              </p>
              <div style={{marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <span style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>✓ Premium materials only</span><br />
                <span style={{color: '#8b949e', fontSize: '0.85rem'}}>No shortcuts, ever</span>
              </div>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '1px solid #30363d', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00f0ff, #0080ff)'}}></div>
              <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🤝</div>
              <h3 style={{fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem', fontWeight: '600'}}>Integrity</h3>
              <p style={{color: '#8b949e', fontSize: '1.05rem', lineHeight: '1.7'}}>
                Honest communication, transparent pricing, and reliable service are the foundations of 
                every relationship we build with our clients.
              </p>
              <div style={{marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <span style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>✓ Upfront pricing</span><br />
                <span style={{color: '#8b949e', fontSize: '0.85rem'}}>No hidden fees</span>
              </div>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '1px solid #30363d', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00f0ff, #0080ff)'}}></div>
              <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>💡</div>
              <h3 style={{fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem', fontWeight: '600'}}>Innovation</h3>
              <p style={{color: '#8b949e', fontSize: '1.05rem', lineHeight: '1.7'}}>
                We stay current with the latest electrical codes, plumbing techniques, and smart home technologies 
                to provide you with cutting-edge solutions for your home.
              </p>
              <div style={{marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <span style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>✓ Latest technology</span><br />
                <span style={{color: '#8b949e', fontSize: '0.85rem'}}>Ongoing training</span>
              </div>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '1px solid #30363d', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #00f0ff, #0080ff)'}}></div>
              <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>⏰</div>
              <h3 style={{fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem', fontWeight: '600'}}>Reliability</h3>
              <p style={{color: '#8b949e', fontSize: '1.05rem', lineHeight: '1.7'}}>
                When we commit to a timeline and budget, you can count on us to deliver. Your project 
                will be completed on time and within scope.
              </p>
              <div style={{marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
                <span style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>✓ On-time completion</span><br />
                <span style={{color: '#8b949e', fontSize: '0.85rem'}}>24/7 emergency service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section" style={{background: 'linear-gradient(180deg, #161b22, #0a0e14)', padding: '6rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <div style={{display: 'inline-block', background: 'rgba(0, 240, 255, 0.1)', padding: '0.5rem 1.5rem', borderRadius: '20px', marginBottom: '1.5rem'}}>
              <span style={{color: '#00f0ff', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px'}}>LEADERSHIP</span>
            </div>
            <h2 style={{fontSize: '3rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Meet Our Founder
              </span>
            </h2>
          </div>

          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '0.6fr 1.4fr', gap: '3rem', alignItems: 'center', background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '1px solid #30363d', borderRadius: '20px', padding: '3rem', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.05))', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '20px', padding: '2rem', marginBottom: '1.5rem'}}>
                  <img src="/logo.svg" alt="Metroplex Pros" style={{width: '100%', maxWidth: '200px'}} />
                </div>
                <div style={{background: 'rgba(0, 240, 255, 0.05)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)'}}>
                  <div style={{fontSize: '0.85rem', color: '#8b949e', marginBottom: '0.25rem'}}>Experience</div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#00f0ff'}}>20+ Years</div>
                </div>
              </div>

              <div>
                <h3 style={{fontSize: '2.5rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: '700'}}>Jeremy McKinney</h3>
                <p style={{fontSize: '1.2rem', color: '#00f0ff', marginBottom: '2rem', fontWeight: '600'}}>Founder & Licensed Professional</p>
                
                <div style={{marginBottom: '2rem', padding: '1.5rem', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '12px', borderLeft: '4px solid #00f0ff'}}>
                  <p style={{color: '#c9d1d9', fontSize: '1.05rem', lineHeight: '1.8', fontStyle: 'italic', margin: 0}}>
                    "I founded Metroplex Pros to bring the same level of excellence and integrity my grandfather and father 
                    taught me to every Dallas-Fort Worth home we serve."
                  </p>
                </div>

                <p style={{color: '#c9d1d9', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                  With over <span style={{color: '#00f0ff', fontWeight: 'bold'}}>20 years of experience</span> in electrical and plumbing services, Jeremy founded Metroplex Pros 
                  to bring exceptional quality and expertise to Dallas-Fort Worth area homeowners.
                </p>

                <p style={{color: '#c9d1d9', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem'}}>
                  His extensive background in residential electrical systems, plumbing installations, and smart home technology, 
                  combined with a passion for modernizing homes, ensures every project meets the highest standards 
                  of safety and excellence. <span style={{color: '#00f0ff', fontWeight: 'bold'}}>Jeremy personally oversees each project</span> to guarantee customer satisfaction 
                  and superior results.
                </p>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem'}}>
                  <div style={{padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.25rem'}}>✅</div>
                    <div style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>Licensed & Insured</div>
                  </div>
                  <div style={{padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.25rem'}}>🎓</div>
                    <div style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>Master Electrician</div>
                  </div>
                  <div style={{padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.25rem'}}>🔧</div>
                    <div style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>Master Plumber</div>
                  </div>
                  <div style={{padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '1.5rem', marginBottom: '0.25rem'}}>🏠</div>
                    <div style={{color: '#00f0ff', fontSize: '0.9rem', fontWeight: 'bold'}}>Smart Home Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section certifications" style={{backgroundColor: '#0d1117', padding: '5rem 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <div style={{display: 'inline-block', background: 'rgba(0, 240, 255, 0.1)', padding: '0.5rem 1.5rem', borderRadius: '20px', marginBottom: '1.5rem'}}>
              <span style={{color: '#00f0ff', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px'}}>RECOGNITION</span>
            </div>
            <h2 style={{fontSize: '3rem', marginBottom: '1rem', fontWeight: '700'}}>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Certifications & Awards
              </span>
            </h2>
            <p style={{fontSize: '1.2rem', color: '#8b949e', maxWidth: '700px', margin: '0 auto'}}>
              Trusted by homeowners and recognized for excellence
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '5rem', marginBottom: '1rem'}}>✅</div>
              <h4 style={{fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: '600'}}>Licensed & Insured</h4>
              <p style={{color: '#8b949e', fontSize: '1rem'}}>Fully licensed electrical and plumbing contractor in Texas</p>
            </div>
            
            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '5rem', marginBottom: '1rem'}}>⭐</div>
              <h4 style={{fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: '600'}}>Nextdoor Neighborhood Fave</h4>
              <p style={{color: '#8b949e', fontSize: '1rem'}}>2025 Winner - Recognized by the community</p>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🏅</div>
              <h4 style={{fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: '600'}}>Angie's List Super Service</h4>
              <p style={{color: '#8b949e', fontSize: '1rem'}}>Awarded for exceptional service quality</p>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '5rem', marginBottom: '1rem'}}>⭐</div>
              <h4 style={{fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: '600'}}>4.9 Google Rating</h4>
              <p style={{color: '#8b949e', fontSize: '1rem'}}>Based on 200+ verified customer reviews</p>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🔐</div>
              <h4 style={{fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: '600'}}>Background Checked</h4>
              <p style={{color: '#8b949e', fontSize: '1rem'}}>All technicians thoroughly vetted for your safety</p>
            </div>

            <div style={{background: 'linear-gradient(135deg, #161b22, #1a1f2e)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '16px', padding: '3rem', textAlign: 'center', boxShadow: '0 10px 40px rgba(0, 240, 255, 0.1)'}}>
              <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🛡️</div>
              <h4 style={{fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem', fontWeight: '600'}}>100% Satisfaction Guarantee</h4>
              <p style={{color: '#8b949e', fontSize: '1rem'}}>We make it right or refund your money</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{background: 'linear-gradient(135deg, #0a0e14, #161b22, #1a1f2e)', padding: '6rem 0', position: 'relative', overflow: 'hidden'}}>
        {/* Animated background elements */}
        <div style={{position: 'absolute', top: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1), transparent)', borderRadius: '50%', filter: 'blur(80px)'}}></div>
        <div style={{position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 128, 255, 0.1), transparent)', borderRadius: '50%', filter: 'blur(60px)'}}></div>
        
        <div className="container" style={{position: 'relative', zIndex: 1}}>
          <div className="cta-content text-center">
            <div style={{display: 'inline-block', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '30px', padding: '0.75rem 2rem', marginBottom: '2rem'}}>
              <span style={{color: '#00f0ff', fontSize: '0.95rem', fontWeight: 'bold', letterSpacing: '1px'}}>
                🔥 SPECIAL OFFER FOR NEW CUSTOMERS
              </span>
            </div>

            <h2 style={{fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2', maxWidth: '900px', margin: '0 auto 1.5rem'}}>
              <span style={{color: '#ffffff'}}>Ready to Work with </span>
              <span style={{background: 'linear-gradient(135deg, #00f0ff, #0080ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Dallas's Best
              </span>
              <span style={{color: '#ffffff'}}> Electricians & Plumbers?</span>
            </h2>
            
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 1rem'}}>
              Experience the Metroplex Pros difference - three generations of excellence, now serving your home
            </p>
            
            <p style={{fontSize: '1.1rem', color: '#8b949e', marginBottom: '3rem'}}>
              Get <span style={{color: '#00f0ff', fontWeight: 'bold'}}>$50 OFF</span> your first service • Same-day appointments available
            </p>

            <div className="cta-buttons" style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap'}}>
              <Link href="tel:682-466-2130" className="btn" style={{fontSize: '1.3rem', padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 8px 32px rgba(0, 240, 255, 0.3)'}}>
                <span style={{fontSize: '1.5rem'}}>📞</span>
                Call: (682) 466-2130
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{fontSize: '1.3rem', padding: '1.5rem 3rem'}}>
                Schedule Online
              </Link>
              <Link href="/services" className="btn btn-outline" style={{fontSize: '1.3rem', padding: '1.5rem 3rem'}}>
                View Our Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto', paddingTop: '3rem', borderTop: '1px solid rgba(0, 240, 255, 0.2)'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⚡</div>
                <div style={{color: '#ffffff', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Fast Response</div>
                <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Under 2 hours</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🛡️</div>
                <div style={{color: '#ffffff', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>Licensed & Insured</div>
                <div style={{color: '#8b949e', fontSize: '0.85rem'}}>20+ years</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✅</div>
                <div style={{color: '#ffffff', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>100% Guaranteed</div>
                <div style={{color: '#8b949e', fontSize: '0.85rem'}}>Your satisfaction</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⭐</div>
                <div style={{color: '#ffffff', fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>4.9★ Rating</div>
                <div style={{color: '#8b949e', fontSize: '0.85rem'}}>1,200+ customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}