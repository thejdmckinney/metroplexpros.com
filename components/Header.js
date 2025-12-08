import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
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
                <li key={item.name} className={item.dropdown ? 'nav-dropdown' : ''}>
                  {item.dropdown ? (
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
              item.dropdown ? (
                <div key={item.name}>
                  <div 
                    className="nav-mobile-link nav-mobile-dropdown"
                    onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                  >
                    {item.name} {isLocationsOpen ? '▲' : '▼'}
                  </div>
                  {isLocationsOpen && (
                    <div className="nav-mobile-dropdown-menu">
                      {item.dropdown.map((subItem) => (
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
                      ))}
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