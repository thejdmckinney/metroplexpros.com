import Layout from '../components/Layout'
import Link from 'next/link'
import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'bathroom', name: 'Bathrooms' },
    { id: 'painting', name: 'Painting' },
    { id: 'flooring', name: 'Flooring' },
    { id: 'additions', name: 'Additions' },
    { id: 'exterior', name: 'Exterior' }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Remodel",
      category: "kitchen",
      description: "Complete kitchen transformation with quartz countertops and custom cabinets",
      location: "Plano, TX",
      year: "2024"
    },
    {
      id: 2,
      title: "Luxury Master Bathroom",
      category: "bathroom",
      description: "Spa-like master bathroom with walk-in shower and freestanding tub",
      location: "Frisco, TX",
      year: "2024"
    },
    {
      id: 3,
      title: "Whole House Interior Paint",
      category: "painting",
      description: "Interior painting throughout 3,500 sq ft home with custom color scheme",
      location: "Dallas, TX",
      year: "2024"
    },
    {
      id: 4,
      title: "Hardwood Floor Installation",
      category: "flooring",
      description: "Premium oak hardwood flooring installation in living areas",
      location: "McKinney, TX",
      year: "2023"
    },
    {
      id: 5,
      title: "Second Story Addition",
      category: "additions",
      description: "1,200 sq ft second story addition with master suite",
      location: "Allen, TX",
      year: "2023"
    },
    {
      id: 6,
      title: "Exterior Home Renovation",
      category: "exterior",
      description: "Complete exterior makeover with new siding, windows, and landscaping",
      location: "Richardson, TX",
      year: "2024"
    },
    {
      id: 7,
      title: "Gourmet Kitchen Design",
      category: "kitchen",
      description: "Chef's kitchen with island, pantry, and high-end appliances",
      location: "Carrollton, TX",
      year: "2023"
    },
    {
      id: 8,
      title: "Guest Bathroom Refresh",
      category: "bathroom",
      description: "Modern guest bathroom with subway tile and vessel sink",
      location: "Garland, TX",
      year: "2024"
    },
    {
      id: 9,
      title: "Luxury Vinyl Plank Flooring",
      category: "flooring",
      description: "Waterproof LVP installation throughout main living areas",
      location: "Irving, TX",
      year: "2024"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Layout 
      title="Project Gallery - Dallas Home Improvement Before & After Photos | Metroplex Pros"
      description="View our Dallas home improvement project gallery featuring kitchen remodels, bathroom renovations, flooring installations & home additions throughout DFW metroplex."
      keywords="Dallas home improvement gallery, before after photos Dallas, kitchen remodel pictures, bathroom renovation gallery, DFW contractor portfolio, Metroplex Pros projects"
      canonicalUrl="https://metroplexpros.com/gallery"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Project <span className="text-accent">Gallery</span>
            </h1>
            <p className="hero-subtitle text-tagline">
              See Our Craftsmanship in Action
            </p>
            <p className="hero-description">
              Browse through our portfolio of completed projects throughout the Dallas metroplex. 
              Each project showcases our commitment to quality, attention to detail, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid">
        <div className="container">
          <div className="grid gallery-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <span className="project-category">{project.category}</span>
                      <span className="project-title">{project.title}</span>
                    </div>
                  </div>
                  <div className="project-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-location">📍 {project.location}</span>
                    <span className="project-year">📅 {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-3">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Metroplex Pros completely transformed our kitchen. The quality of work exceeded our expectations, 
                and they finished ahead of schedule!"
              </p>
              <div className="testimonial-author">
                <strong>Sarah & Mike Johnson</strong>
                <span>Plano, TX</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Professional, reliable, and skilled craftsmen. Our bathroom renovation looks absolutely stunning. 
                We couldn't be happier with the results!"
              </p>
              <div className="testimonial-author">
                <strong>David & Lisa Chen</strong>
                <span>Frisco, TX</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>
                "From initial consultation to final walkthrough, the team was amazing. Great communication, 
                fair pricing, and beautiful work. Highly recommend!"
              </p>
              <div className="testimonial-author">
                <strong>Jennifer Martinez</strong>
                <span>McKinney, TX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number text-accent">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-accent">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-accent">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-number text-accent">100%</div>
              <div className="stat-label">Licensed & Insured</div>
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
              Join hundreds of satisfied customers who have transformed their homes with Metroplex Pros. 
              Contact us today for your free consultation!
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

    </Layout>
  )
}