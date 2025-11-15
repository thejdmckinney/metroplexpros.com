import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo-header.svg" alt="Metroplex Pros" className="footer-logo-image" />
            </div>
            <p className="footer-text">
              Professional home improvement services in Dallas, Texas. 
              Quality craftsmanship and customer satisfaction guaranteed.
            </p>
            <div className="social-links">
              {/* Add social media links here */}
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">Kitchen Remodeling</Link></li>
              <li><Link href="/services">Bathroom Renovation</Link></li>
              <li><Link href="/services">Flooring Installation</Link></li>
              <li><Link href="/services">Painting Services</Link></li>
              <li><Link href="/services">Home Additions</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p>📍 Dallas, Texas</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@metroplexpros.com</p>
              <p>🕒 Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Metroplex Pros. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}