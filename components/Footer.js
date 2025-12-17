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
            <div className="nextdoor-fave-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 200 200" fill="#00B246">
                <path d="M163.6 49.3c-2.2-2.2-5-3.9-8.3-5.1-3.3-1.2-7-1.7-11.1-1.7H55.8c-4.1 0-7.8.6-11.1 1.7-3.3 1.2-6.1 2.9-8.3 5.1-2.2 2.2-3.9 5-5.1 8.3-1.2 3.3-1.7 7-1.7 11.1v62.6c0 4.1.6 7.8 1.7 11.1 1.2 3.3 2.9 6.1 5.1 8.3 2.2 2.2 5 3.9 8.3 5.1 3.3 1.2 7 1.7 11.1 1.7h39.7V108l-13.9 13.9c-1.1 1.1-2.5 1.7-4.1 1.7s-3-.6-4.1-1.7c-1.1-1.1-1.7-2.5-1.7-4.1s.6-3 1.7-4.1l22.2-22.2c1.1-1.1 2.5-1.7 4.1-1.7 1.6 0 3 .6 4.1 1.7l22.2 22.2c1.1 1.1 1.7 2.5 1.7 4.1s-.6 3-1.7 4.1c-1.1 1.1-2.5 1.7-4.1 1.7s-3-.6-4.1-1.7L108.6 108v44.5h35.6c4.1 0 7.8-.6 11.1-1.7 3.3-1.2 6.1-2.9 8.3-5.1 2.2-2.2 3.9-5 5.1-8.3 1.2-3.3 1.7-7 1.7-11.1V68.7c0-4.1-.6-7.8-1.7-11.1-1.2-3.3-2.9-6.1-5.1-8.3z"/>
              </svg>
              <div className="badge-content">
                <strong>Nextdoor Neighborhood Fave 2025</strong>
                <small>Voted by Nextdoor Community</small>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61583926533730" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jeremy-mckinney-4872aba1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://nextdoor.com/page/creative-constructors-garland-tx/" target="_blank" rel="noopener noreferrer" aria-label="Nextdoor" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#00B246">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">Kitchen Remodeling</Link></li>
              <li><Link href="/services">Bathroom Renovation</Link></li>
              <li><Link href="/services">Flooring Installation</Link></li>
              <li><Link href="/services">Painting Services</Link></li>
              <li><Link href="/services">Electrical Services</Link></li>
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
            <h4 className="footer-title">Maintenance Plans</h4>
            <ul className="footer-links">
              <li><a href="https://metroplexshield.com" target="_blank" rel="noopener noreferrer">Metroplex Shield</a></li>
              <li><a href="https://metroplexshield.com" target="_blank" rel="noopener noreferrer">Home Maintenance Plans</a></li>
              <li><a href="https://metroplexshield.com" target="_blank" rel="noopener noreferrer">Preventive Care</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p>📍 Dallas, Texas</p>
              <p>📞 (682) 466-2130</p>
              <p>✉️ info@metroplexpros.com</p>
              <p>🕒 Mon-Fri: 8AM-6PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Metroplex Pros. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>


    </footer>
  )
}