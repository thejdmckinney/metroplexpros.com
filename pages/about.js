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
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              About <span className="text-accent">Metroplex Pros</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              Your Trusted Electrical & Plumbing Experts in Dallas
            </p>
            <p className="hero-description">
              With over 15 years of industry experience, we provide expert electrical services, plumbing solutions, and smart home installations throughout the Dallas-Fort Worth metroplex 
              with quality workmanship, innovative technology, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p>
                Electrical and plumbing expertise run deep in my family. I learned the trades from my father and 
                grandfather, who instilled in me the values of hard work, attention to detail, and taking pride 
                in every project. With over 20 years of experience in the industry, I honed my skills working 
                at my father's construction company in Indianapolis, Indiana, specializing in electrical systems 
                and plumbing installations.
              </p>
              <p>
                After years of experience in Indianapolis, I made the decision to bring my expertise and 
                family's legacy to Texas. I founded Metroplex Pros to serve the Dallas-Fort Worth 
                area with licensed electrical and plumbing services, backed by the same commitment to quality 
                and integrity that was passed down through generations of my family.
              </p>
              <p>
                Every electrical panel we upgrade, every plumbing repair we complete, and every smart home system 
                we install reflects not just my 20+ years of professional experience, but also the generations of 
                technical knowledge that shaped my approach to home services. We believe your home deserves the 
                same level of care and precision that has been the hallmark of my family's work for decades.
              </p>
            </div>
            <div className="story-image">
              <div className="hero-logo-container">
                <img src="/logo.svg" alt="Metroplex Pros - Dallas Home Improvement Specialists" className="hero-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section our-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-2">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. From materials to craftsmanship, every aspect of our work 
                meets the highest standards in the industry.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>
                Honest communication, transparent pricing, and reliable service are the foundations of 
                every relationship we build with our clients.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                We stay current with the latest electrical codes, plumbing techniques, and smart home technologies 
                to provide you with cutting-edge solutions for your home.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>Reliability</h3>
              <p>
                When we commit to a timeline and budget, you can count on us to deliver. Your project 
                will be completed on time and within scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Founder</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/logo.svg" alt="Metroplex Pros" className="founder-logo" />
              </div>
              <h3>Jeremy McKinney</h3>
              <p className="member-title text-accent">Founder & Licensed Professional</p>
              <p>
                With over 20 years of experience in electrical and plumbing services, Jeremy founded Metroplex Pros 
                to bring exceptional quality and expertise to Dallas-Fort Worth area homeowners. His extensive 
                background in residential electrical systems, plumbing installations, and smart home technology, 
                combined with a passion for modernizing homes, ensures every project meets the highest standards 
                of safety and excellence. Jeremy personally oversees each project to guarantee customer satisfaction 
                and superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Awards</h2>
          <div className="grid grid-2">
            <div className="cert-card">
              <div className="cert-icon">✅</div>
              <h4>Licensed & Insured</h4>
            </div>
            <div className="cert-card">
              <div className="cert-icon">⭐</div>
              <h4>Angie's List Super Service Award</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Work with Dallas's Best Electricians & Plumbers?</h2>
            <p className="text-muted mb-4">
              Experience the Metroplex Pros difference. Contact us today to discuss your electrical, plumbing, or smart home project.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Get Started Today
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}