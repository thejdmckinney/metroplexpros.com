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
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid grid-3">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">👨‍💼</div>
              </div>
              <h3>John Smith</h3>
              <p className="member-title text-accent">Founder & Lead Contractor</p>
              <p>
                With over 20 years of experience in construction and remodeling, John founded Metroplex Pros 
                to bring quality craftsmanship to Dallas homeowners.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">👨‍🔧</div>
              </div>
              <h3>Mike Johnson</h3>
              <p className="member-title text-accent">Project Manager</p>
              <p>
                Mike ensures every project runs smoothly from start to finish. His attention to detail and 
                project management expertise keep us on track and on budget.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">👩‍💼</div>
              </div>
              <h3>Sarah Davis</h3>
              <p className="member-title text-accent">Design Consultant</p>
              <p>
                Sarah helps clients visualize their dream spaces and makes design recommendations that 
                maximize both function and aesthetic appeal.
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

      <style jsx>{`
        .hero {
          padding: 4rem 0 6rem;
          background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .our-story {
          background: var(--color-bg-alt);
        }

        .story-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          width: 100%;
          height: 300px;
          background: var(--color-bg);
          border: 2px dashed var(--color-border);
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 4rem;
        }

        .value-card {
          background: var(--color-bg);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--color-border);
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          color: var(--color-accent);
          margin-bottom: 1rem;
        }

        .team-section {
          background: var(--color-bg-alt);
        }

        .team-member {
          text-align: center;
          background: var(--color-bg);
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
        }

        .member-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--color-bg-alt);
          border: 3px solid var(--color-accent);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto 1rem;
          font-size: 3rem;
        }

        .member-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cert-card {
          background: var(--color-bg);
          padding: 2rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--color-border);
          text-align: center;
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-accent);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
        }

        .cert-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-accent);
        }

        .cert-card h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .cta {
          background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-bg) 100%);
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 2rem 0 4rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </Layout>
  )
}