import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasMegaMenu: true },
    { name: 'Shop', href: '/shop' },
    { name: 'Gallery', href: '/gallery' },
    { 
      name: 'Locations', 
      href: '/service-areas',
      dropdown: [
        { name: 'All Service Areas', href: '/service-areas' },
        { name: 'Highland Park', href: '/highland-park' },
        { name: 'University Park', href: '/university-park' },
        { name: 'Lakewood', href: '/lakewood' },
        { name: 'Richardson', href: '/richardson' },
      ]
    },
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
                <li key={item.name} className={item.dropdown || item.hasMegaMenu ? 'nav-dropdown' : ''}>
                  {item.hasMegaMenu ? (
                    /* Mega Menu for Services */
                    <div 
                      className="nav-dropdown-wrapper"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <Link href={item.href} className="nav-link">
                        {item.name} ▼
                      </Link>
                      {isMegaMenuOpen && (
                        <div className="mega-menu">
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
                  ) : item.dropdown ? (
                    /* Regular Dropdown for Locations */
                    <div 
                      className="nav-dropdown-wrapper"
                      onMouseEnter={() => setIsLocationsOpen(true)}
                      onMouseLeave={() => setIsLocationsOpen(false)}
                    >
                      <Link href={item.href} className="nav-link">
                        {item.name} ▼
                      </Link>
                      {isLocationsOpen && (
                        <div className="nav-dropdown-menu">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="nav-dropdown-link"
                            >
                              {subItem.name}
                            </Link>
                          ))}
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
              item.hasMegaMenu || item.dropdown ? (
                <div key={item.name}>
                  <div 
                    className="nav-mobile-link nav-mobile-dropdown"
                    onClick={() => item.hasMegaMenu ? setIsServicesOpen(!isServicesOpen) : setIsLocationsOpen(!isLocationsOpen)}
                  >
                    {item.name} {(item.hasMegaMenu ? isServicesOpen : isLocationsOpen) ? '▲' : '▼'}
                  </div>
                  {((item.hasMegaMenu && isServicesOpen) || (item.dropdown && isLocationsOpen)) && (
                    <div className="nav-mobile-dropdown-menu">
                      {item.hasMegaMenu ? (
                        /* Mobile Mega Menu Content */
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
                        /* Regular Dropdown */
                        item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="nav-mobile-dropdown-link"
                            onClick={() => {
                              setIsMenuOpen(false)
                              setIsLocationsOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))
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