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
          { name: 'Panel Upgrades', href: '/services/electrical#panel-upgrades' },
          { name: 'Home Rewiring', href: '/services/electrical#rewiring' },
          { name: 'Lighting Installation', href: '/services/electrical#lighting' },
          { name: 'Outlet & Switch Repair', href: '/services/electrical#outlets' },
          { name: 'Generator Installation', href: '/services/electrical#generators' },
          { name: 'Code Compliance', href: '/services/electrical#code' },
        ],
        link: { name: 'View All Electrical', href: '/services/electrical' }
      },
      {
        title: 'Plumbing Services',
        icon: '🔧',
        items: [
          { name: 'Water Heater Repair', href: '/services/plumbing#water-heaters' },
          { name: 'Leak Detection & Repair', href: '/services/plumbing#leaks' },
          { name: 'Drain Cleaning', href: '/services/plumbing#drains' },
          { name: 'Fixture Installation', href: '/services/plumbing#fixtures' },
          { name: 'Sewer Line Repair', href: '/services/plumbing#sewer' },
          { name: 'Pipe Replacement', href: '/services/plumbing#pipes' },
        ],
        link: { name: 'View All Plumbing', href: '/services/plumbing' }
      },
      {
        title: 'Smart Home',
        icon: '🏠',
        items: [
          { name: 'Smart Thermostats', href: '/services/smart-home-installations#thermostats' },
          { name: 'Smart Lighting', href: '/services/smart-home-installations#lighting' },
          { name: 'Security Systems', href: '/services/smart-home-installations#security' },
          { name: 'Video Doorbells', href: '/services/smart-home-installations#doorbells' },
          { name: 'Smart Locks', href: '/services/smart-home-installations#locks' },
          { name: 'Home Automation', href: '/services/smart-home-installations#automation' },
        ],
        link: { name: 'View All Smart Home', href: '/services/smart-home-installations' }
      },
      {
        title: 'Handyman Services',
        icon: '🔨',
        items: [
          { name: 'Drywall Repair', href: '/services/handyman#drywall' },
          { name: 'Painting', href: '/services/handyman#painting' },
          { name: 'Fixture Installation', href: '/services/handyman#fixtures' },
          { name: 'Door Repair', href: '/services/handyman#doors' },
          { name: 'General Repairs', href: '/services/handyman#repairs' },
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
          <Link href="/" className="site-logo">
            <img src="/logo-header.svg" alt="Metroplex Pros" className="logo-image" />
          </Link>
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
                                <Link href="/service-areas" className="mega-menu-view-all">
                                  View Complete Service Area Map →
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} className="nav-link">
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
                          <Link href="/services" className="nav-mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>
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
                          <Link href="/service-areas" className="nav-mobile-dropdown-link" onClick={() => setIsMenuOpen(false)}>
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
                  className="nav-mobile-link"
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