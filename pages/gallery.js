import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'electrical', name: 'Electrical Work' },
    { id: 'plumbing', name: 'Plumbing Services' },
    { id: 'smart-home', name: 'Smart Home' }
  ];

  const projects = [
    {
      id: 1,
      title: "Custom LED Lighting Installation",
      category: "electrical",
      description: "Modern LED recessed lighting installation with dimmer controls, creating perfect ambiance while reducing energy costs by 75%.",
      image: "/light_install.png",
      callToAction: "Upgrade Your Lighting",
      subtitle: "Transform your space with energy-efficient lighting"
    },
    {
      id: 2,
      title: "Emergency Leak Repair",
      category: "plumbing", 
      description: "Fast response to water leak emergency with professional pipe repair, preventing further damage and restoring peace of mind.",
      image: "/leak_repair.png",
      callToAction: "Get Emergency Service",
      subtitle: "24/7 emergency plumbing when you need it most"
    },
    {
      id: 3,
      title: "EV Charging Station Installation",
      category: "smart-home",
      description: "Professional electric vehicle charging station installation with proper electrical upgrades and safety compliance.",
      image: "/ev-charger-installation.png",
      callToAction: "Go Electric Today",
      subtitle: "Future-proof your home with smart technology"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout 
      title="Project Gallery - Dallas Electrical & Plumbing Work | Metroplex Pros"
      description="View our Dallas electrical, plumbing, and smart home installation gallery featuring real projects throughout DFW metroplex. Licensed electricians & plumbers."
      keywords="Dallas electrical work photos, plumbing repair gallery, smart home installation, EV charger installation, LED lighting, emergency plumbing, DFW electrician projects"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              Real projects, real results. See the quality craftsmanship that defines Metroplex Pros.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Quality workmanship built on 20+ years of family tradition in construction
            </p>
          </div>

          {/* Category Filter */}
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={800}
                    height={600}
                    className="project-photo"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="project-badge">
                    {project.category.replace('-', ' ')}
                  </div>
                  <div className="project-caption">
                    <h3>{project.title}</h3>
                    <p>{project.callToAction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Showcase */}
      <section className="section company-showcase">
        <div className="container">
          <div className="grid grid-2">
            <div className="showcase-text">
              <h2 className="section-title">Metroplex Pros in Action</h2>
              <p>
                With over 20 years of experience serving the Dallas-Fort Worth metroplex, 
                we bring professional expertise and reliable service to every project. 
                From modern kitchen transformations to cutting-edge smart home installations, 
                our family-owned business is committed to exceptional craftsmanship.
              </p>
              <div className="showcase-stats">
                <div className="stat-item">
                  <strong>Licensed & Insured</strong>
                  <span>Full protection for your project</span>
                </div>
                <div className="stat-item">
                  <strong>20+ Years</strong>
                  <span>Family construction experience</span>
                </div>
              </div>
            </div>
            <div className="showcase-image">
              <Image 
                src="/metroplexprostruck.png" 
                alt="Metroplex Pros service truck - professional home improvement services in Dallas"
                width={800}
                height={600}
                className="truck-image"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Start Your Project?</h2>
            <p className="text-muted mb-4">
              Join our satisfied customers who have transformed their homes with Metroplex Pros. 
              Contact us today for your free consultation and honest pricing!
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">
                Get Your Free Estimate
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-image {
          position: relative;
          height: 400px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .project-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .project-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .project-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem 1.5rem 1.5rem;
          text-align: center;
        }

        .project-caption h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .project-caption p {
          margin: 0;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .company-showcase {
          background: var(--light-bg);
        }

        .showcase-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .stat-item strong {
          color: var(--primary);
          font-size: 1.1rem;
        }

        .stat-item span {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .truck-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-image {
            height: 300px;
          }

          .project-caption h3 {
            font-size: 1.1rem;
          }

          .project-caption p {
            font-size: 0.9rem;
          }

          .showcase-stats {
            justify-content: center;
          }
          
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </Layout>
  )
}