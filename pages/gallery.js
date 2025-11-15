import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchen Remodels' },
    { id: 'bathroom', name: 'Bathroom Renovations' },
    { id: 'smart-home', name: 'Smart Home' }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      description: "Contemporary kitchen design featuring premium finishes, custom cabinetry, and modern appliances for optimal functionality and style.",
      image: "/Gemini_Generated_Image_dctlysdctlysdctl.png",
      location: "Dallas, TX",
      year: "2024"
    },
    {
      id: 2,
      title: "Luxury Bathroom Renovation",
      category: "bathroom", 
      description: "Sophisticated bathroom renovation with high-end fixtures, elegant tilework, and spa-inspired design elements.",
      image: "/Gemini_Generated_Image_ndau9pndau9pndau.png",
      location: "Plano, TX",
      year: "2024"
    },
    {
      id: 3,
      title: "EV Charging Station Installation",
      category: "smart-home",
      description: "Professional electric vehicle charging station installation with proper electrical upgrades and safety compliance.",
      image: "/Image of ev charger.png",
      location: "Frisco, TX",
      year: "2024"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout 
      title="Project Gallery - Dallas Home Improvement Photos | Metroplex Pros"
      description="View our Dallas home improvement project gallery featuring real kitchen remodels, bathroom renovations, and smart home installations throughout DFW metroplex."
      keywords="Dallas home improvement gallery, kitchen remodel photos, bathroom renovation gallery, smart home installation, EV charger installation, DFW construction projects"
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
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-photo"
                  />
                  <div className="project-badge">
                    {project.category.replace('-', ' ')}
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span>📍 {project.location}</span>
                    <span>📅 {project.year}</span>
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
              <img 
                src="/metroplexprostruck.png" 
                alt="Metroplex Pros service truck - professional home improvement services in Dallas"
                className="truck-image"
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
          height: 250px;
          overflow: hidden;
        }

        .project-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
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

        .project-info {
          padding: 1.5rem;
        }

        .project-info h3 {
          margin: 0 0 0.5rem 0;
          color: var(--dark);
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 1rem;
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

          .project-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .showcase-stats {
            justify-content: center;
          }
        }
      `}</style>

    </Layout>
  )
}