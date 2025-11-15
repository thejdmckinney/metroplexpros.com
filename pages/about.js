import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout 
      title="About Metroplex Pros - Dallas Home Improvement Contractors Since 2010"
      description="Learn about Metroplex Pros, Dallas's trusted home improvement contractors since 2010. Licensed, insured, and committed to quality craftsmanship in DFW. Meet our experienced team."
      keywords="Dallas contractors about, Metroplex Pros history, licensed Dallas contractors, DFW home improvement company, experienced contractors Texas"
      canonicalUrl="https://metroplexpros.com/about"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              About <span className="text-accent">Metroplex Pros</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              Your Trusted Home Improvement Partners in Dallas
            </p>
            <p className="hero-description">
              For over 15 years, we've been transforming homes throughout the Dallas-Fort Worth metroplex 
              with quality craftsmanship, innovative solutions, and unwavering commitment to excellence.
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
                Founded in 2010, Metroplex Pros began as a small family-owned business with a simple mission: 
                to provide Dallas homeowners with exceptional home improvement services at fair prices. 
                What started as a two-person operation has grown into a trusted team of skilled professionals, 
                but our core values remain unchanged.
              </p>
              <p>
                We believe that your home is more than just a building—it's where life happens. Every project 
                we undertake is an opportunity to enhance your daily life, increase your property value, and 
                create spaces where memories are made.
              </p>
              <p>
                Our commitment to quality, transparency, and customer satisfaction has earned us hundreds of 
                five-star reviews and a reputation as one of Dallas's most reliable home improvement contractors.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <p className="text-center text-muted">Company Photo / Team Image</p>
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
                We stay current with the latest techniques, materials, and technologies to provide you 
                with cutting-edge solutions for your home.
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
                <div className="image-placeholder">👨‍�</div>
              </div>
              <h3>Jeremy McKinney</h3>
              <p className="member-title text-accent">Founder & Lead Contractor</p>
              <p>
                With over 20 years of experience in construction and home improvement, Jeremy founded Metroplex Pros 
                to bring exceptional quality and craftsmanship to Dallas-Fort Worth area homeowners. His extensive 
                background in residential construction, combined with a passion for transforming homes, ensures every 
                project meets the highest standards of excellence. Jeremy personally oversees each project to guarantee 
                customer satisfaction and superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Awards</h2>
          <div className="grid grid-4">
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h4>Better Business Bureau A+</h4>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✅</div>
              <h4>Licensed & Insured</h4>
            </div>
            <div className="cert-card">
              <div className="cert-icon">⭐</div>
              <h4>Angie's List Super Service Award</h4>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🛡️</div>
              <h4>HomeAdvisor Screened & Approved</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Work with Dallas's Best?</h2>
            <p className="text-muted mb-4">
              Experience the Metroplex Pros difference. Contact us today to discuss your next home improvement project.
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