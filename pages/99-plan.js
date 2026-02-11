import Layout from '../components/Layout'
import { useState } from 'react'
import TrustSignals from '../components/TrustSignals'

export default function NinetyNinePlan() {
  const [selectedPlan, setSelectedPlan] = useState('annual')
  const [showModal, setShowModal] = useState(false)

  return (
    <Layout 
      title="The $99 Plan - Monthly Home Maintenance Subscription | Metroplex Pros"
      description="Your home's monthly check-up for just $99/month. Preventative maintenance, priority service, and peace of mind. Catch problems before they become expensive emergencies."
      keywords="home maintenance plan, monthly home inspection, preventative maintenance Dallas, home maintenance subscription, 99 plan, home care plan"
      canonicalUrl="https://www.metroplexpros.com/99-plan/"
    >
      <style jsx>{`
        .container-narrow {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-padding {
          padding: 3.5rem 0;
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 2.5rem 0;
          }
          .container-narrow {
            padding: 0 1.5rem;
          }
        }

        .hero-section {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
          padding: 5rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          background-image: radial-gradient(circle at 20% 50%, #00f0ff 0%, transparent 50%), 
                            radial-gradient(circle at 80% 80%, #00b8d4 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 165, 0, 0.2);
          border: 2px solid #ffa500;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffa500;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #00f0ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #c9d1d9;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .pain-point {
          background: rgba(255, 59, 48, 0.12);
          border: 2px solid rgba(255, 59, 48, 0.3);
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .pain-point p {
          color: #ffb3b3;
          font-size: 1.1rem;
          margin: 0;
          line-height: 1.7;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .cta-primary {
          display: inline-block;
          padding: 1.5rem 3rem;
          font-size: 1.2rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);
          color: #0d1117;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 240, 255, 0.6);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .trust-line {
          font-size: 1rem;
          color: #8b949e;
          text-align: center;
        }

        .pricing-section {
          background: #0d1117;
          padding: 3.5rem 0;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 2rem auto 0;
        }

        .pricing-card {
          background: linear-gradient(135deg, #161b22 0%, #1c2128 100%);
          border: 2px solid #30363d;
          border-radius: 20px;
          padding: 3rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          border-color: #00f0ff;
          box-shadow: 0 15px 40px rgba(0, 240, 255, 0.2);
        }

        .pricing-card.featured {
          border-color: #00f0ff;
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          right: 30px;
          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);
          color: #0d1117;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .plan-name {
          font-size: 1.2rem;
          color: #8b949e;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .plan-price {
          font-size: 4rem;
          font-weight: 900;
          color: #00f0ff;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .plan-price span {
          font-size: 1.5rem;
          font-weight: 400;
          color: #8b949e;
        }

        .plan-savings {
          color: #50c878;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .plan-features li {
          padding: 0.75rem 0;
          color: #c9d1d9;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .plan-features li:before {
          content: '✓';
          color: #50c878;
          font-weight: 900;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .select-plan-btn {
          width: 100%;
          padding: 1.2rem;
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);
          color: #0d1117;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .select-plan-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 240, 255, 0.5);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 2rem auto 0;
        }

        .benefit-card {
          background: linear-gradient(135deg, #161b22 0%, #1c2128 100%);
          border: 1px solid #30363d;
          border-radius: 15px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: #00f0ff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .benefit-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .benefit-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #00f0ff;
          font-weight: 700;
        }

        .benefit-description {
          color: #8b949e;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .social-proof-section {
          background: linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(40, 160, 90, 0.05) 100%);
          padding: 3.5rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem;
          max-width: 1000px;
          margin: 2rem auto 0;
          text-align: center;
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 900;
          color: #50c878;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.1rem;
          color: #c9d1d9;
          font-weight: 600;
        }

        .faq-section {
          background: #161b22;
          padding: 3.5rem 0;
        }

        .faq-container {
          max-width: 800px;
          margin: 2rem auto 0;
        }

        .faq-item {
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #00f0ff;
        }

        .faq-question {
          padding: 1.8rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          padding: 0 1.8rem 1.8rem;
          color: #8b949e;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .final-cta-section {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
          padding: 3.5rem 0;
          text-align: center;
        }

        .final-cta-box {
          background: rgba(0, 240, 255, 0.08);
          border: 2px solid rgba(0, 240, 255, 0.3);
          border-radius: 20px;
          padding: 4rem 3rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .urgency-banner {
          background: rgba(255, 165, 0, 0.15);
          border: 2px solid rgba(255, 165, 0, 0.4);
          border-radius: 15px;
          padding: 2rem;
          margin-top: 2rem;
          text-align: center;
        }

        .urgency-text {
          color: #ffa500;
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1rem;
          text-align: center;
          font-weight: 800;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #8b949e;
          max-width: 700px;
          margin: 0 auto 2rem;
          text-align: center;
          line-height: 1.6;
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="container-narrow">
          <div className="hero-content">
            <div className="badge">
              <span>🔥</span> STOP Wasting Money on Emergency Repairs
            </div>
            
            <h1 className="hero-title">
              One $3,500 Repair Avoided Pays for 3 Years
            </h1>
            
            <p className="hero-subtitle">
              A licensed electrician, plumber, or handyman visits your home <strong style={{color: '#00f0ff'}}>every month</strong> for just $99 to catch problems <em>before</em> they explode into expensive nightmares.
            </p>
            
            <div className="pain-point">
              <p>
                <strong>Reality check:</strong> A burst pipe? $2,000-$5,000. Electrical fire damage? $10,000+. 
                AC failure in Texas summer? $5,000-$8,000. <strong style={{color: '#00f0ff'}}>Why wait for disaster?</strong>
              </p>
            </div>
            
            <div className="cta-group">
              <a href="#pricing" className="cta-primary">
                🚀 Start Protecting Your Home
              </a>
              <a href="tel:4699939740" className="cta-secondary">
                📞 Call (469) 993-9740
              </a>
            </div>
            
            <p className="trust-line">
              ✓ Licensed professionals only • ✓ Cancel anytime • ✓ First visit within 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{background: '#0d1117', padding: '2.5rem 0'}}>
        <div className="container-narrow">
          <TrustSignals />
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="social-proof-section">
        <div className="container-narrow">
          <h2 className="section-title">Real Results From Last Month</h2>
          <p className="section-subtitle">
            Our members sleep better knowing their homes are protected
          </p>
          
          <div className="stats-grid">
            <div>
              <div className="stat-number">37</div>
              <div className="stat-label">Small leaks caught before major damage</div>
            </div>
            <div>
              <div className="stat-number">12</div>
              <div className="stat-label">Electrical fire hazards prevented</div>
            </div>
            <div>
              <div className="stat-number">23</div>
              <div className="stat-label">HVAC issues found early</div>
            </div>
            <div>
              <div className="stat-number">$142K</div>
              <div className="stat-label">Saved in emergency repairs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container-narrow">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No surprises. Just professional home care that pays for itself.
          </p>
          
          <div className="pricing-cards">
            {/* Monthly Plan */}
            <div className="pricing-card">
              <div className="plan-name">Monthly Billing</div>
              <div className="plan-price">
                $99<span>/mo</span>
              </div>
              <div style={{color: '#8b949e', marginBottom: '2rem'}}>Less than $3.30 per day</div>
              
              <ul className="plan-features">
                <li>Monthly 1-hour professional inspection</li>
                <li>Minor repairs included on every visit</li>
                <li>Priority scheduling for emergencies</li>
                <li>10% discount on all additional services</li>
                <li>Photo documentation & reports</li>
                <li>Cancel anytime, no contract</li>
              </ul>
              
              <button className="select-plan-btn" onClick={() => setShowModal(true)}>
                Choose Monthly
              </button>
            </div>

            {/* Annual Plan - Featured */}
            <div className="pricing-card featured">
              <div className="popular-badge">💎 Best Value - Save $200</div>
              <div className="plan-name">Annual Billing (Most Popular)</div>
              <div className="plan-price">
                $988<span>/yr</span>
              </div>
              <div className="plan-savings">Only $82.33/month - 2 months FREE!</div>
              
              <ul className="plan-features">
                <li>Everything in Monthly Plan</li>
                <li>Priority booking year-round</li>
                <li>15% discount on all services (not 10%)</li>
                <li>Free seasonal tune-ups</li>
                <li>Extended warranty on work done</li>
                <li>VIP status - first call response</li>
              </ul>
              
              <button className="select-plan-btn" onClick={() => setShowModal(true)}>
                Choose Annual - Save $200
              </button>
            </div>
          </div>

          <div className="urgency-banner">
            <p className="urgency-text">
              ⚡ LIMITED TIME: First 15 members this month get their initial 90-minute comprehensive inspection FREE (a $199 value)
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding" style={{background: '#0d1117'}}>
        <div className="container-narrow">
          <h2 className="section-title">What's Included Every Single Month</h2>
          <p className="section-subtitle">
            Comprehensive professional home care that actually prevents problems
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🔍</span>
              <h3 className="benefit-title">1-Hour Pro Inspection</h3>
              <p className="benefit-description">
                Licensed technician examines your home's systems with a trained eye, catching issues you'd never notice.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">🔧</span>
              <h3 className="benefit-title">Minor Fixes Done On-Site</h3>
              <p className="benefit-description">
                We handle it while we're there: change filters, tighten outlets, adjust doors, replace worn parts.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">📸</span>
              <h3 className="benefit-title">Photo Documentation</h3>
              <p className="benefit-description">
                Get a visual record of your home's condition with every visit. Perfect for insurance and resale value.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">⚡</span>
              <h3 className="benefit-title">Priority Emergency Service</h3>
              <p className="benefit-description">
                When something breaks, members jump the line. We're there when you need us most.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">💰</span>
              <h3 className="benefit-title">10-15% Off All Services</h3>
              <p className="benefit-description">
                Your membership discount applies to every repair and upgrade. One major job pays for your whole year.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-icon">✅</span>
              <h3 className="benefit-title">Rotating System Checks</h3>
              <p className="benefit-description">
                Every system gets expert attention throughout the year. Nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-narrow">
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about The $99 Plan
          </p>
          
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                What systems do you inspect each month?
              </div>
              <div className="faq-answer">
                We rotate through all major home systems: electrical (outlets, panels, safety), plumbing (leaks, pressure, drains), HVAC (filters, operation, efficiency), appliances, doors/windows, safety devices, and seasonal concerns. Every system gets thorough attention throughout the year.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                What qualifies as "minor repairs included"?
              </div>
              <div className="faq-answer">
                Tasks that take 15 minutes or less: changing air filters, tightening loose outlets or fixtures, adjusting door hinges, replacing smoke detector batteries, cleaning drain traps, and other quick fixes. Major repairs are quoted separately but you get priority scheduling and member discounts.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                Can I cancel anytime?
              </div>
              <div className="faq-answer">
                Yes! Monthly plans have zero commitment - cancel anytime with 30 days notice. Annual plans are prepaid but if you're unhappy in the first 60 days, we'll refund the unused portion. We want happy members, not trapped customers.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                Do you work on weekends?
              </div>
              <div className="faq-answer">
                Absolutely. We schedule around YOUR life. Morning, evening, or weekend appointments available. For emergencies, members get priority 7 days a week.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                What if I need a major repair?
              </div>
              <div className="faq-answer">
                We'll provide a detailed quote with member pricing (10-15% off). You get priority scheduling, and because we've already identified the issue early, repairs are usually simpler and cheaper than waiting for emergency breakdown.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                Is this really worth it for a newer home?
              </div>
              <div className="faq-answer">
                YES! Newer homes have issues too: settling foundations, HVAC tuning, builder shortcuts, warranty-period fixes. We help you catch warranty issues BEFORE they expire. Plus, documented maintenance increases resale value significantly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container-narrow">
          <div className="final-cta-box">
            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>
              Stop Gambling With Your Biggest Investment
            </h2>
            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2.5rem', lineHeight: '1.6'}}>
              Every month without professional eyes on your home is a roll of the dice. 
              Join 300+ DFW homeowners who sleep better knowing their homes are protected.
            </p>
            
            <div className="cta-group">
              <a href="#pricing" className="cta-primary">
                Yes, Protect My Home Now
              </a>
              <a href="tel:4699939740" className="cta-secondary">
                📞 Call (469) 993-9740
              </a>
            </div>
            
            <p style={{fontSize: '0.95rem', color: '#8b949e', marginTop: '1.5rem'}}>
              🕐 Only 8 spots left this month • First visit within 48 hours
            </p>
          </div>
        </div>
      </section>

      {/* Simple Modal for Lead Capture */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '2rem'
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: '#161b22',
            border: '2px solid #00f0ff',
            borderRadius: '20px',
            padding: '3rem',
            maxWidth: '500px',
            width: '100%'
          }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{fontSize: '2rem', marginBottom: '1rem', color: '#00f0ff'}}>
              Let's Get You Protected
            </h3>
            <p style={{color: '#8b949e', marginBottom: '2rem'}}>
              Call us at <a href="tel:4699939740" style={{color: '#00f0ff', textDecoration: 'none', fontWeight: '700'}}>(469) 993-9740</a> to schedule your first visit, or fill out the contact form and we'll call you within 2 hours.
            </p>
            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="tel:4699939740" style={{
                flex: 1,
                padding: '1rem',
                background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',
                color: '#0d1117',
                textAlign: 'center',
                borderRadius: '8px',
                fontWeight: '700',
                textDecoration: 'none'
              }}>
                📞 Call Now
              </a>
              <a href="/contact" style={{
                flex: 1,
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '8px',
                fontWeight: '700',
                textDecoration: 'none',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                Contact Form
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
