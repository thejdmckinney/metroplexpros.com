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
    <header className="header">
      <nav className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
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
            className="mobile-menu-btn"
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

      <style jsx>{`
        .header {
          background: rgba(13, 17, 23, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--color-border);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-accent);
          text-decoration: none;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-image {
          height: 50px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover .logo-image {
          transform: scale(1.05);
        }

        .logo-text {
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-desktop {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--color-text);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-accent);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent2));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn span {
          width: 2rem;
          height: 0.25rem;
          background: var(--color-accent);
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }

        .nav-mobile {
          display: none;
          flex-direction: column;
          background: var(--color-bg-alt);
          border-top: 1px solid var(--color-border);
          padding: 1rem 0;
          margin-top: 1rem;
          border-radius: 10px;
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .nav-mobile-open {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }

        .nav-mobile-link {
          color: var(--color-text);
          text-decoration: none;
          padding: 1rem 1.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
          min-height: 44px;
          display: flex;
          align-items: center;
          font-size: 1.1rem;
        }

        .nav-mobile-link:hover {
          color: var(--color-accent);
          background: rgba(0, 240, 255, 0.05);
          border-left-color: var(--color-accent);
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .nav-mobile {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}