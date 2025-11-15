import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="site-header">
      <nav className="container">
        <div className="nav-wrapper">
          <Link href="/" className="site-logo">
            <div className="logo-container">
              <img src="/logo-header.svg" alt="Metroplex Pros" className="logo-image" />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="nav-desktop">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="nav-link">
                  {item.name}
                </Link>
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
            <Link
              key={item.name}
              href={item.href}
              className="nav-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>


    </header>
  )
}