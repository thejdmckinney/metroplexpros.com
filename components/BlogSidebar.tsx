'use client'

import Link from 'next/link'
import { useState } from 'react'
import NewsletterSignup from './NewsletterSignup'
import LeadCaptureModal from './LeadCaptureModal'

export default function BlogSidebar() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null)

  const tools = [
    {
      name: 'Electrical Panel Upgrade Calculator',
      href: '/tools/panel-upgrade-calculator',
      description: 'Estimate the cost of upgrading your electrical panel',
      icon: '⚡',
      available: true
    },
    {
      name: 'Outlet & Switch Pricing Calculator',
      href: '/tools/outlet-switch-pricing',
      description: 'Volume discounts up to 30% on bulk replacements',
      icon: '🔌',
      available: true
    },
    {
      name: 'Electrical Project Cost Estimator',
      href: '/tools/electrical-cost-estimator',
      description: 'Lighting, circuits, appliances, safety & smart home',
      icon: '⚡',
      available: true
    },
    {
      name: 'Smart Home ROI Calculator',
      href: '/tools/smart-home-roi-calculator',
      description: 'Calculate your return on smart home investments',
      icon: '🏠',
      available: false
    }
  ]

  const checklists = [
    {
      id: 'electrical-safety-checklist',
      name: 'DFW Homeowner\'s Electrical Safety Checklist',
      icon: '📋'
    },
    {
      id: 'seasonal-maintenance-calendar',
      name: 'Seasonal Home Maintenance Calendar',
      icon: '📅'
    },
    {
      id: 'storm-prep-checklist',
      name: 'Storm Prep Checklist for DFW Homes',
      icon: '⛈️'
    },
    {
      id: 'contractor-questions',
      name: 'Questions to Ask Before Hiring a Contractor',
      icon: '❓'
    }
  ]

  return (
    <>
      <aside className="blog-sidebar">
        {/* Free Tools Section */}
        <div className="sidebar-section">
          <h3 className="sidebar-heading">
            <span className="sidebar-icon">🔧</span>
            Free Tools
          </h3>
          <ul className="sidebar-list">
            {tools.map((tool) => (
              <li key={tool.href} className="sidebar-list-item">
                {tool.available ? (
                  <Link href={tool.href} className="sidebar-tool-link">
                    <div className="tool-icon">{tool.icon}</div>
                    <div className="tool-content">
                      <div className="tool-name">{tool.name}</div>
                      <div className="tool-description">{tool.description}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="sidebar-tool-link disabled">
                    <div className="tool-icon">{tool.icon}</div>
                    <div className="tool-content">
                      <div className="tool-name">
                        {tool.name}
                        <span className="coming-soon-badge">Coming Soon</span>
                      </div>
                      <div className="tool-description">{tool.description}</div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Free Checklists Section */}
        <div className="sidebar-section">
          <h3 className="sidebar-heading">
            <span className="sidebar-icon">📥</span>
            Free Downloads
          </h3>
          <ul className="sidebar-list">
            {checklists.map((checklist) => (
              <li key={checklist.id} className="sidebar-list-item">
                <button
                  onClick={() => setSelectedResource(checklist.id)}
                  className="sidebar-download-link"
                >
                  <span className="download-icon">{checklist.icon}</span>
                  <span className="download-name">{checklist.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="sidebar-section">
          <h3 className="sidebar-heading">
            <span className="sidebar-icon">📧</span>
            Stay Updated
          </h3>
          <p className="sidebar-text">
            Get monthly home maintenance tips, seasonal guides, and exclusive offers.
          </p>
          <NewsletterSignup source="blog-sidebar" className="sidebar-newsletter" />
        </div>

        {/* Schedule Service CTA */}
        <div className="sidebar-section sidebar-cta">
          <h3 className="cta-heading">Ready for Professional Help?</h3>
          <p className="cta-subtext">
            Licensed & insured. Serving University Park, Highland Park & all of DFW.
          </p>
          <Link href="/contact" className="cta-button">
            Schedule Service
          </Link>
          <a href="tel:682-466-2130" className="cta-phone">
            Or call (682) 466-2130
          </a>
        </div>
      </aside>

      {/* Lead Capture Modal for Downloads */}
      {selectedResource && (
        <LeadCaptureModal
          resourceId={selectedResource}
          resourceName={checklists.find(c => c.id === selectedResource)?.name || ''}
          onClose={() => setSelectedResource(null)}
        />
      )}

      <style jsx>{`
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-section {
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .sidebar-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #c9d1d9;
          margin: 0 0 1rem 0;
        }

        .sidebar-icon {
          font-size: 1.5rem;
        }

        .sidebar-text {
          color: #8b949e;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .sidebar-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sidebar-list-item {
          margin: 0;
        }

        .sidebar-tool-link {
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .sidebar-tool-link:hover:not(.disabled) {
          border-color: #00f0ff;
          transform: translateX(4px);
        }

        .sidebar-tool-link.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .tool-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .tool-content {
          flex: 1;
        }

        .tool-name {
          font-weight: 600;
          color: #c9d1d9;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .coming-soon-badge {
          display: inline-block;
          background: #1f6feb;
          color: white;
          font-size: 0.7rem;
          padding: 0.15rem 0.5rem;
          border-radius: 12px;
          font-weight: 600;
        }

        .tool-description {
          font-size: 0.85rem;
          color: #8b949e;
          line-height: 1.4;
        }

        .sidebar-download-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 8px;
          color: #c9d1d9;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .sidebar-download-link:hover {
          border-color: #00f0ff;
          transform: translateX(4px);
        }

        .download-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .download-name {
          flex: 1;
        }

        .sidebar-cta {
          background: linear-gradient(135deg, #1f6feb 0%, #0969da 100%);
          border: none;
          text-align: center;
        }

        .cta-heading {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
        }

        .cta-subtext {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .cta-button {
          display: block;
          width: 100%;
          padding: 0.875rem;
          background: white;
          color: #0969da;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-bottom: 0.75rem;
        }

        .cta-button:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .cta-phone {
          display: block;
          color: white;
          font-size: 0.95rem;
          text-decoration: underline;
          transition: opacity 0.3s ease;
        }

        .cta-phone:hover {
          opacity: 0.8;
        }

        @media (max-width: 1023px) {
          .blog-sidebar {
            margin-top: 3rem;
          }
        }
      `}</style>
    </>
  )
}
