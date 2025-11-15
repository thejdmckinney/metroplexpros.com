import Layout from '../components/Layout'

export default function PrivacyPolicy() {
  return (
    <Layout 
      title="Privacy Policy - Metroplex Pros"
      description="Privacy Policy for Metroplex Pros home improvement services. Learn how we collect, use, and protect your personal information."
      keywords="privacy policy, Metroplex Pros privacy, data protection, personal information"
      canonicalUrl="https://metroplexpros.com/privacy-policy"
    >
      <div className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: November 15, 2025</p>

            <section className="legal-section">
              <h2>Information We Collect</h2>
              <p>
                At Metroplex Pros, we collect information you provide directly to us, such as when you:
              </p>
              <ul>
                <li>Fill out our contact forms or request estimates</li>
                <li>Apply for our realtor partnership program</li>
                <li>Call or email us directly</li>
                <li>Subscribe to our communications</li>
              </ul>
              
              <h3>Types of Information</h3>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Project Information:</strong> Details about your home improvement needs, property address, project timeline</li>
                <li><strong>Business Information:</strong> Company name, role, property volume (for realtor partners)</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide estimates and respond to your service requests</li>
                <li>Communicate about your projects and schedule appointments</li>
                <li>Process partnership applications and manage business relationships</li>
                <li>Send service updates and project communications</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described below:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> We may share information with trusted service providers who help us operate our business (email services, scheduling tools, etc.)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, sale, or other business transaction</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet is 100% secure.
              </p>
            </section>

            <section className="legal-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we have about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>Cookies and Website Analytics</h2>
              <p>
                Our website may use cookies and similar technologies to improve your browsing experience and analyze 
                website traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="legal-section">
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. Please review their privacy policies before providing any information.
              </p>
            </section>

            <section className="legal-section">
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information 
                from children under 13. If we become aware of such collection, we will take steps to delete the information.
              </p>
            </section>

            <section className="legal-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by 
                posting the new policy on our website and updating the "Last updated" date.
              </p>
            </section>

            <section className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              <div className="contact-info">
                <p><strong>Metroplex Pros</strong></p>
                <p>Phone: (682) 466-2130</p>
                <p>Email: info@metroplexpros.com</p>
                <p>Serving the Dallas-Fort Worth Metroplex</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}