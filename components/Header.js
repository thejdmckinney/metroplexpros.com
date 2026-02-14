import Link from 'next/link'
import { useState, useRef } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isLocationsMegaMenuOpen, setIsLocationsMegaMenuOpen] = useState(false)
  
  // Refs for hover delay timers
  const servicesTimerRef = useRef(null)
  const locationsTimerRef = useRef(null)

  // Handle Services mega menu with delay
  const handleServicesMouseEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current)
    setIsMegaMenuOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false)
    }, 200) // 200ms delay before closing
  }

  // Handle Locations mega menu with delay
  const handleLocationsMouseEnter = () => {
    if (locationsTimerRef.current) clearTimeout(locationsTimerRef.current)
    setIsLocationsMegaMenuOpen(true)
  }

  const handleLocationsMouseLeave = () => {
    locationsTimerRef.current = setTimeout(() => {
      setIsLocationsMegaMenuOpen(false)
    }, 200) // 200ms delay before closing
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasMegaMenu: true },
    { name: 'The 99 Plan', href: '/99-plan', highlight: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Locations', href: '/service-areas', hasLocationsMegaMenu: true },
    { name: 'For Realtors', href: '/for-realtors' },
    { name: 'Contact', href: '/contact' },
  ]

  const megaMenuContent = {
    services: [
      {
        title: 'Electrical Services',
        icon: '⚡',
        items: [
          { name: 'Basic Inspection ($150)', href: '/services/electrical/basic-inspection' },
          { name: 'Comprehensive Inspection ($200)', href: '/services/electrical/comprehensive-inspection' },
          { name: 'Luxury Inspection ($225)', href: '/services/electrical/luxury-inspection' },
          { name: 'Panel Upgrades', href: '/services/electrical/panel-upgrades' },
          { name: 'Home Rewiring', href: '/services/electrical/rewiring' },
          { name: 'Lighting Installation', href: '/services/electrical/lighting' },
          { name: 'Outlet & Switch Repair', href: '/services/electrical/outlets' },
          { name: 'Generator Installation', href: '/services/electrical/generators' },
          { name: 'Code Compliance', href: '/services/electrical/code-compliance' },
        ],
        link: { name: 'View All Electrical', href: '/services/electrical' }
      },
      {
        title: 'Plumbing Services',
        icon: '🔧',
        items: [
          { name: 'Water Heater Repair', href: '/services/plumbing/water-heater-repair' },
          { name: 'Leak Detection & Repair', href: '/services/plumbing/leak-repair' },
          { name: 'Drain Cleaning', href: '/services/plumbing/drain-cleaning' },
          { name: 'Fixture Installation', href: '/services/plumbing/fixture-installation' },
          { name: 'Sewer Line Repair', href: '/services/plumbing/sewer-repair' },
          { name: 'Pipe Replacement', href: '/services/plumbing/pipe-replacement' },
        ],
        link: { name: 'View All Plumbing', href: '/services/plumbing' }
      },
      {
        title: 'Smart Home',
        icon: '🏠',
        items: [
          { name: 'Smart Thermostats', href: '/services/smart-home/thermostats' },
          { name: 'Smart Lighting', href: '/services/smart-home/lighting' },
          { name: 'Security Systems', href: '/services/smart-home/security' },
          { name: 'Video Doorbells', href: '/services/smart-home/doorbells' },
          { name: 'Smart Locks', href: '/services/smart-home/locks' },
          { name: 'Home Automation', href: '/services/smart-home/automation' },
        ],
        link: { name: 'View All Smart Home', href: '/services/smart-home-installations' }
      },
      {
        title: 'Handyman Services',
        icon: '🔨',
        items: [
          { name: 'Drywall Repair', href: '/services/handyman/drywall-repair' },
          { name: 'Painting', href: '/services/handyman/painting' },
          { name: 'Fixture Installation', href: '/services/handyman/fixture-installation' },
          { name: 'Door Repair', href: '/services/handyman/door-repair' },
          { name: 'Picture & Art Hanging', href: '/services/handyman/wall-art-hanging' },
          { name: 'Window Treatments', href: '/services/handyman/window-treatments' },
          { name: 'General Repairs', href: '/services/handyman/general-repairs' },
        ],
        link: { name: 'View All Handyman', href: '/services/handyman' }
      }
    ],
    emergency: [
      { 
        title: '24/7 Emergency Electrician',
        icon: '⚡',
        description: '60-minute response time',
        href: '/emergency-electrician-dallas',
        urgent: true
      },
      { 
        title: '24/7 Emergency Plumber',
        icon: '💧',
        description: '60-minute response time',
        href: '/emergency-plumber-dallas',
        urgent: true
      }
    ],
    locations: [
      { name: 'Dallas', href: '/service-areas#dallas' },
      { name: 'Plano', href: '/service-areas#plano' },
      { name: 'Frisco', href: '/service-areas#frisco' },
      { name: 'McKinney', href: '/service-areas#mckinney' },
      { name: 'Allen', href: '/service-areas#allen' },
      { name: 'Richardson', href: '/richardson' },
      { name: 'Garland', href: '/service-areas#garland' },
      { name: 'Irving', href: '/service-areas#irving' },
      { name: 'Highland Park', href: '/highland-park' },
      { name: 'University Park', href: '/university-park' },
      { name: 'Lakewood', href: '/lakewood' },
      { name: 'View All Areas', href: '/service-areas' },
    ]
  }

  const locationsMegaMenuContent = {
    featured: [
      {
        name: 'Highland Park',
        icon: '🏘️',
        description: 'Luxury electrical & plumbing services',
        href: '/highland-park',
        services: ['Electrical', 'Plumbing', 'Smart Home']
      },
      {
        name: 'University Park',
        icon: '🏛️',
        description: 'Trusted home improvement experts',
        href: '/university-park',
        services: ['Electrical', 'Plumbing', 'Smart Home']
      },
      {
        name: 'Lakewood',
        icon: '🌳',
        description: 'Historic home specialists',
        href: '/lakewood',
        services: ['Electrical', 'Plumbing', 'Handyman']
      },
      {
        name: 'Richardson',
        icon: '🏙️',
        description: 'Fast response for all services',
        href: '/richardson',
        services: ['Electrical', 'Plumbing', 'Smart Home']
      }
    ],
    allAreas: [
      { name: 'Dallas', href: '/service-areas#dallas', icon: '📍' },
      { name: 'Plano', href: '/service-areas#plano', icon: '📍' },
      { name: 'Frisco', href: '/service-areas#frisco', icon: '📍' },
      { name: 'McKinney', href: '/service-areas#mckinney', icon: '📍' },
      { name: 'Allen', href: '/service-areas#allen', icon: '📍' },
      { name: 'Garland', href: '/service-areas#garland', icon: '📍' },
      { name: 'Irving', href: '/service-areas#irving', icon: '📍' },
      { name: 'Carrollton', href: '/service-areas#carrollton', icon: '📍' },
      { name: 'Mesquite', href: '/service-areas#mesquite', icon: '📍' },
      { name: 'Grand Prairie', href: '/service-areas#grand-prairie', icon: '📍' },
      { name: 'Lewisville', href: '/service-areas#lewisville', icon: '📍' },
      { name: 'Coppell', href: '/service-areas#coppell', icon: '📍' },
    ]
  }

  return (
    <header className="site-header">
      {/* Logo Section - Full Width */}
      <div className="header-logo-section">
        <div className="container">
          <div className="header-logo-wrapper">
            <div className="header-social-icons">
              <a href="https://www.facebook.com/profile.php?id=61583926533730" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jeremy-mckinney-4872aba1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://nextdoor.com/page/creative-constructors-garland-tx/" target="_blank" rel="noopener noreferrer" aria-label="Nextdoor" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00B246">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </a>
            </div>
            <Link href="/" className="site-logo">
              <img src="/logo-header.svg" alt="Metroplex Pros" className="logo-image" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Section - Centered */}
      <div className="header-nav-section">
        <nav className="container">
          <div className="nav-wrapper">
            {/* Desktop Navigation */}
            <ul className="nav-desktop">
              {navigation.map((item) => (
                <li key={item.name} className={item.hasMegaMenu || item.hasLocationsMegaMenu ? 'nav-dropdown' : ''}>
                  {item.hasMegaMenu ? (
                    /* Mega Menu for Services */
                    <div 
                      className="nav-dropdown-wrapper"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <Link href={item.href} className="nav-link">
                        {item.name} ▼
                      </Link>
                      {isMegaMenuOpen && (
                        <div 
                          className="mega-menu"
                          onMouseEnter={handleServicesMouseEnter}
                          onMouseLeave={handleServicesMouseLeave}
                        >
                          <div className="mega-menu-content">
                            {/* Services Grid */}
                            <div className="mega-menu-section services-grid">
                              {megaMenuContent.services.map((service) => (
                                <div key={service.title} className="mega-menu-column">
                                  <h3 className="mega-menu-title">
                                    <span className="mega-menu-icon">{service.icon}</span>
                                    {service.title}
                                  </h3>
                                  <ul className="mega-menu-list">
                                    {service.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link href={subItem.href} className="mega-menu-link">
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                  <Link href={service.link.href} className="mega-menu-view-all">
                                    {service.link.name} →
                                  </Link>
                                </div>
                              ))}
                            </div>

                            {/* Emergency Services & Locations */}
                            <div className="mega-menu-footer">
                              <div className="mega-menu-section emergency-section">
                                <h3 className="mega-menu-title">🚨 Emergency Services</h3>
                                <div className="emergency-cards">
                                  {megaMenuContent.emergency.map((emergency) => (
                                    <Link 
                                      key={emergency.title}
                                      href={emergency.href} 
                                      className="emergency-card"
                                    >
                                      <span className="emergency-icon">{emergency.icon}</span>
                                      <div>
                                        <div className="emergency-title">{emergency.title}</div>
                                        <div className="emergency-desc">{emergency.description}</div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              <div className="mega-menu-section locations-section">
                                <h3 className="mega-menu-title">📍 Service Areas</h3>
                                <div className="locations-grid">
                                  {megaMenuContent.locations.map((location) => (
                                    <Link 
                                      key={location.name}
                                      href={location.href}
                                      className="location-link"
                                    >
                                      {location.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.hasLocationsMegaMenu ? (
                    /* Mega Menu for Locations */
                    <div 
                      className="nav-dropdown-wrapper"
                      onMouseEnter={handleLocationsMouseEnter}
                      onMouseLeave={handleLocationsMouseLeave}
                    >
                      <Link href={item.href} className="nav-link">
                        {item.name} ▼
                      </Link>
                      {isLocationsMegaMenuOpen && (
                        <div 
                          className="mega-menu locations-mega-menu"
                          onMouseEnter={handleLocationsMouseEnter}
                          onMouseLeave={handleLocationsMouseLeave}
                        >
                          <div className="mega-menu-content">
                            {/* Featured Locations */}
                            <div className="mega-menu-section">
                              <h3 className="mega-menu-title">⭐ Featured Service Areas</h3>
                              <div className="featured-locations-grid">
                                {locationsMegaMenuContent.featured.map((location) => (
                                  <Link 
                                    key={location.name}
                                    href={location.href} 
                                    className="featured-location-card"
                                  >
                                    <span className="location-icon">{location.icon}</span>
                                    <div className="location-info">
                                      <div className="location-name">{location.name}</div>
                                      <div className="location-description">{location.description}</div>
                                      <div className="location-services">
                                        {location.services.map((service, idx) => (
                                          <span key={idx} className="service-badge">{service}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* All Service Areas */}
                            <div className="mega-menu-section" style={{borderTop: '1px solid var(--color-border)', paddingTop: '2rem'}}>
                              <h3 className="mega-menu-title">📍 All DFW Service Areas</h3>
                              <div className="all-locations-grid">
                                {locationsMegaMenuContent.allAreas.map((location) => (
                                  <Link 
                                    key={location.name}
                                    href={location.href}
                                    className="location-link-simple"
                                  >
                                    <span className="location-icon-small">{location.icon}</span>
                                    {location.name}
                                  </Link>
                                ))}
                              </div>
                              <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
                                <Link href="/service-areas/" className="mega-menu-view-all">
                                  View Complete Service Area Map →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className={`nav-link ${item.highlight ? 'nav-link-highlight' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${isMenuOpen ? 'menu-open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
            {navigation.map((item) => (
              item.hasMegaMenu || item.hasLocationsMegaMenu ? (
                <div key={item.name}>
                  <div 
                    className="nav-mobile-link nav-mobile-dropdown"
                    onClick={() => item.hasMegaMenu ? setIsServicesOpen(!isServicesOpen) : setIsLocationsOpen(!isLocationsOpen)}
                  >
                    {item.name} {(item.hasMegaMenu ? isServicesOpen : isLocationsOpen) ? '▲' : '▼'}
                  </div>
                  {((item.hasMegaMenu && isServicesOpen) || (item.hasLocationsMegaMenu && isLocationsOpen)) && (
                    <div className="nav-mobile-dropdown-menu">
                      {item.hasMegaMenu ? (
                        /* Mobile Services Mega Menu Content */
                        <>
                          <Link href="/services/" className="nav-mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>
                            All Services
                          </Link>
                          {megaMenuContent.services.map((service) => (
                            <div key={service.title} className="mobile-service-group">
                              <div className="mobile-service-title">{service.icon} {service.title}</div>
                              {service.items.slice(0, 3).map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="nav-mobile-dropdown-link sub-item"
                                  onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                          <div className="mobile-emergency-section">
                            {megaMenuContent.emergency.map((emergency) => (
                              <Link
                                key={emergency.title}
                                href={emergency.href}
                                className="nav-mobile-dropdown-link emergency"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {emergency.icon} {emergency.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        /* Mobile Locations Mega Menu Content */
                        <>
                          <Link href="/service-areas/" className="nav-mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>
                            All Service Areas
                          </Link>
                          <div className="mobile-service-title">⭐ Featured Areas</div>
                          {locationsMegaMenuContent.featured.map((location) => (
                            <Link
                              key={location.name}
                              href={location.href}
                              className="nav-mobile-dropdown-link sub-item"
                              onClick={() => { setIsMenuOpen(false); setIsLocationsOpen(false); }}
                            >
                              {location.icon} {location.name}
                            </Link>
                          ))}
                          <div className="mobile-service-title" style={{marginTop: '1rem'}}>📍 More Areas</div>
                          {locationsMegaMenuContent.allAreas.slice(0, 6).map((location) => (
                            <Link
                              key={location.name}
                              href={location.href}
                              className="nav-mobile-dropdown-link sub-item"
                              onClick={() => { setIsMenuOpen(false); setIsLocationsOpen(false); }}
                            >
                              {location.icon} {location.name}
                            </Link>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-mobile-link ${item.highlight ? 'nav-mobile-link-highlight' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}