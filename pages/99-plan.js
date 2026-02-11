import Layout from '../components/Layout'
import { useState } from 'react'
import TrustSignals from '../components/TrustSignals'

export default function NinetyNinePlan() {  const [showModal, setShowModal] = useState(false)  const [selectedPlan, setSelectedPlan] = useState('annual')

  const [showModal, setShowModal] = useState(false)

  return (

    <Layout   return (

      title="The $99 Plan - Monthly Home Maintenance | Metroplex Pros"    <Layout 

      description="Your home's monthly check-up for just $99/month. Preventative maintenance, priority service, and peace of mind. Catch problems before they become expensive emergencies."      title="The $99 Plan - Monthly Home Maintenance Subscription | Metroplex Pros"

      keywords="home maintenance plan, monthly home inspection, preventative maintenance Dallas, home maintenance subscription, 99 plan"      description="Your home's monthly check-up for just $99/month. Preventative maintenance, priority service, and peace of mind. Catch problems before they become expensive emergencies."

      canonicalUrl="https://www.metroplexpros.com/99-plan/"      keywords="home maintenance plan, monthly home inspection, preventative maintenance Dallas, home maintenance subscription, 99 plan, home care plan"

    >      canonicalUrl="https://www.metroplexpros.com/99-plan/"

      <style jsx>{`    >

        .container {      <style jsx>{`

          max-width: 1200px;        .container-narrow {

          margin: 0 auto;          max-width: 1200px;

          padding: 0 2rem;          margin: 0 auto;

        }          padding: 0 2rem;

        }

        @media (max-width: 768px) {

          .container {        .section-padding {

            padding: 0 1.5rem;          padding: 3.5rem 0;

          }        }

        }

        @media (max-width: 768px) {

        /* Hero Section - Compact */          .section-padding {

        .hero-section {            padding: 2.5rem 0;

          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);          }

          padding: 3rem 0;          .container-narrow {

          position: relative;            padding: 0 1.5rem;

          overflow: hidden;          }

        }        }



        .hero-bg {        .hero-section {

          position: absolute;          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);

          top: 0;          padding: 5rem 0 4rem;

          left: 0;          position: relative;

          right: 0;          overflow: hidden;

          bottom: 0;        }

          opacity: 0.1;

          background-image: radial-gradient(circle at 20% 50%, #00f0ff 0%, transparent 50%);        .hero-bg {

        }          position: absolute;

          top: 0;

        .hero-content {          left: 0;

          position: relative;          right: 0;

          z-index: 1;          bottom: 0;

          text-align: center;          opacity: 0.1;

          max-width: 800px;          background-image: radial-gradient(circle at 20% 50%, #00f0ff 0%, transparent 50%), 

          margin: 0 auto;                            radial-gradient(circle at 80% 80%, #00b8d4 0%, transparent 50%);

        }        }



        .hero-badge {        .hero-content {

          display: inline-flex;          position: relative;

          align-items: center;          z-index: 1;

          gap: 0.5rem;          text-align: center;

          background: rgba(255, 165, 0, 0.2);          max-width: 900px;

          border: 2px solid #ffa500;          margin: 0 auto;

          padding: 0.5rem 1.25rem;        }

          border-radius: 50px;

          margin-bottom: 1rem;        .badge {

          font-size: 0.85rem;          display: inline-flex;

          font-weight: 700;          align-items: center;

          color: #ffa500;          gap: 0.5rem;

        }          background: rgba(255, 165, 0, 0.2);

          border: 2px solid #ffa500;

        .hero-title {          padding: 0.75rem 1.5rem;

          font-size: clamp(2rem, 5vw, 3.5rem);          border-radius: 50px;

          font-weight: 900;          margin-bottom: 2rem;

          margin-bottom: 0.75rem;          font-size: 0.95rem;

          line-height: 1.1;          font-weight: 700;

          background: linear-gradient(135deg, #ffffff 0%, #00f0ff 100%);          color: #ffa500;

          -webkit-background-clip: text;          animation: pulse 2s ease-in-out infinite;

          -webkit-text-fill-color: transparent;        }

          background-clip: text;

        }        @keyframes pulse {

          0%, 100% { transform: scale(1); }

        .hero-subtitle {          50% { transform: scale(1.05); }

          font-size: 1.15rem;        }

          color: #c9d1d9;

          margin-bottom: 1.5rem;        .hero-title {

          line-height: 1.5;          font-size: clamp(2.5rem, 6vw, 4.5rem);

        }          font-weight: 900;

          margin-bottom: 1.5rem;

        .cta-group {          line-height: 1.1;

          display: flex;          background: linear-gradient(135deg, #ffffff 0%, #00f0ff 100%);

          gap: 1rem;          -webkit-background-clip: text;

          justify-content: center;          -webkit-text-fill-color: transparent;

          flex-wrap: wrap;          background-clip: text;

          margin-top: 1.5rem;        }

        }

        .hero-subtitle {

        .cta-primary {          font-size: 1.4rem;

          display: inline-block;          color: #c9d1d9;

          padding: 1rem 2rem;          margin-bottom: 2.5rem;

          font-size: 1.05rem;          line-height: 1.6;

          font-weight: 800;          max-width: 700px;

          text-transform: uppercase;          margin-left: auto;

          letter-spacing: 0.5px;          margin-right: auto;

          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);        }

          color: #0d1117;

          border-radius: 8px;        .pain-point {

          text-decoration: none;          background: rgba(255, 59, 48, 0.12);

          transition: all 0.3s ease;          border: 2px solid rgba(255, 59, 48, 0.3);

          box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);          border-radius: 15px;

        }          padding: 1.5rem;

          margin-bottom: 3rem;

        .cta-primary:hover {          max-width: 700px;

          transform: translateY(-2px);          margin-left: auto;

          box-shadow: 0 6px 20px rgba(0, 240, 255, 0.5);          margin-right: auto;

        }        }



        .cta-secondary {        .pain-point p {

          display: inline-flex;          color: #ffb3b3;

          align-items: center;          font-size: 1.1rem;

          gap: 0.5rem;          margin: 0;

          padding: 1rem 1.75rem;          line-height: 1.7;

          font-size: 1rem;        }

          font-weight: 700;

          background: rgba(255, 255, 255, 0.08);        .cta-group {

          border: 2px solid rgba(255, 255, 255, 0.3);          display: flex;

          color: #fff;          gap: 1.5rem;

          border-radius: 8px;          justify-content: center;

          text-decoration: none;          flex-wrap: wrap;

          transition: all 0.3s ease;          margin-bottom: 2rem;

        }        }



        .cta-secondary:hover {        .cta-primary {

          background: rgba(255, 255, 255, 0.15);          display: inline-block;

        }          padding: 1.5rem 3rem;

          font-size: 1.2rem;

        /* Pricing Section - Right After Hero */          font-weight: 800;

        .pricing-section {          text-transform: uppercase;

          background: #0d1117;          letter-spacing: 0.5px;

          padding: 3rem 0;          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);

        }          color: #0d1117;

          border-radius: 12px;

        .section-title {          text-decoration: none;

          font-size: clamp(1.75rem, 4vw, 2.5rem);          transition: all 0.3s ease;

          margin-bottom: 0.75rem;          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.4);

          text-align: center;        }

          font-weight: 800;

        }        .cta-primary:hover {

          transform: translateY(-3px);

        .section-subtitle {          box-shadow: 0 12px 35px rgba(0, 240, 255, 0.6);

          font-size: 1.1rem;        }

          color: #8b949e;

          max-width: 600px;        .cta-secondary {

          margin: 0 auto 2rem;          display: inline-flex;

          text-align: center;          align-items: center;

          line-height: 1.5;          gap: 0.75rem;

        }          padding: 1.5rem 2.5rem;

          font-size: 1.1rem;

        .pricing-grid {          font-weight: 700;

          display: grid;          background: rgba(255, 255, 255, 0.08);

          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));          border: 2px solid rgba(255, 255, 255, 0.3);

          gap: 2rem;          color: #fff;

          max-width: 900px;          border-radius: 12px;

          margin: 0 auto;          text-decoration: none;

        }          transition: all 0.3s ease;

        }

        .pricing-card {

          background: linear-gradient(135deg, #161b22 0%, #1c2128 100%);        .cta-secondary:hover {

          border: 2px solid #30363d;          background: rgba(255, 255, 255, 0.15);

          border-radius: 16px;          border-color: rgba(255, 255, 255, 0.5);

          padding: 2rem;        }

          transition: all 0.3s ease;

          position: relative;        .trust-line {

        }          font-size: 1rem;

          color: #8b949e;

        .pricing-card:hover {          text-align: center;

          transform: translateY(-3px);        }

          border-color: #00f0ff;

          box-shadow: 0 10px 25px rgba(0, 240, 255, 0.15);        .pricing-section {

        }          background: #0d1117;

          padding: 3.5rem 0;

        .pricing-card.featured {        }

          border-color: #00f0ff;

          box-shadow: 0 5px 20px rgba(0, 240, 255, 0.2);        .pricing-cards {

        }          display: grid;

          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

        .popular-badge {          gap: 2rem;

          position: absolute;          max-width: 900px;

          top: -12px;          margin: 2rem auto 0;

          right: 20px;        }

          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);

          color: #0d1117;        .pricing-card {

          padding: 0.4rem 1rem;          background: linear-gradient(135deg, #161b22 0%, #1c2128 100%);

          border-radius: 15px;          border: 2px solid #30363d;

          font-size: 0.75rem;          border-radius: 20px;

          font-weight: 800;          padding: 3rem;

          text-transform: uppercase;          transition: all 0.3s ease;

        }          position: relative;

        }

        .plan-name {

          font-size: 1rem;        .pricing-card:hover {

          color: #8b949e;          transform: translateY(-5px);

          margin-bottom: 0.75rem;          border-color: #00f0ff;

          font-weight: 600;          box-shadow: 0 15px 40px rgba(0, 240, 255, 0.2);

        }        }



        .plan-price {        .pricing-card.featured {

          font-size: 3rem;          border-color: #00f0ff;

          font-weight: 900;          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);

          color: #00f0ff;        }

          line-height: 1;

          margin-bottom: 0.5rem;        .popular-badge {

        }          position: absolute;

          top: -15px;

        .plan-price span {          right: 30px;

          font-size: 1.25rem;          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);

          font-weight: 400;          color: #0d1117;

          color: #8b949e;          padding: 0.5rem 1.5rem;

        }          border-radius: 20px;

          font-size: 0.85rem;

        .plan-savings {          font-weight: 800;

          color: #50c878;          text-transform: uppercase;

          font-size: 1rem;        }

          font-weight: 700;

          margin-bottom: 1.5rem;        .plan-name {

        }          font-size: 1.2rem;

          color: #8b949e;

        .plan-features {          margin-bottom: 1rem;

          list-style: none;          font-weight: 600;

          padding: 0;        }

          margin: 1.5rem 0;

        }        .plan-price {

          font-size: 4rem;

        .plan-features li {          font-weight: 900;

          padding: 0.6rem 0;          color: #00f0ff;

          color: #c9d1d9;          line-height: 1;

          display: flex;          margin-bottom: 0.5rem;

          align-items: flex-start;        }

          gap: 0.65rem;

          font-size: 0.95rem;        .plan-price span {

        }          font-size: 1.5rem;

          font-weight: 400;

        .plan-features li:before {          color: #8b949e;

          content: '✓';        }

          color: #50c878;

          font-weight: 900;        .plan-savings {

          font-size: 1.1rem;          color: #50c878;

          flex-shrink: 0;          font-size: 1.1rem;

        }          font-weight: 700;

          margin-bottom: 2rem;

        .select-btn {        }

          width: 100%;

          padding: 1rem;        .plan-features {

          font-size: 1rem;          list-style: none;

          font-weight: 800;          padding: 0;

          text-transform: uppercase;          margin: 2rem 0;

          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);        }

          color: #0d1117;

          border: none;        .plan-features li {

          border-radius: 8px;          padding: 0.75rem 0;

          cursor: pointer;          color: #c9d1d9;

          transition: all 0.3s ease;          display: flex;

        }          align-items: flex-start;

          gap: 0.75rem;

        .select-btn:hover {        }

          transform: translateY(-2px);

          box-shadow: 0 6px 15px rgba(0, 240, 255, 0.4);        .plan-features li:before {

        }          content: '✓';

          color: #50c878;

        /* Stats Section */          font-weight: 900;

        .stats-section {          font-size: 1.2rem;

          background: linear-gradient(135deg, rgba(80, 200, 120, 0.08) 0%, rgba(40, 160, 90, 0.05) 100%);          flex-shrink: 0;

          padding: 2.5rem 0;        }

        }

        .select-plan-btn {

        .stats-grid {          width: 100%;

          display: grid;          padding: 1.2rem;

          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));          font-size: 1.1rem;

          gap: 2rem;          font-weight: 800;

          max-width: 1000px;          text-transform: uppercase;

          margin: 0 auto;          background: linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%);

          text-align: center;          color: #0d1117;

        }          border: none;

          border-radius: 12px;

        .stat-number {          cursor: pointer;

          font-size: 3rem;          transition: all 0.3s ease;

          font-weight: 900;        }

          color: #50c878;

          line-height: 1;        .select-plan-btn:hover {

          margin-bottom: 0.5rem;          transform: translateY(-2px);

        }          box-shadow: 0 8px 20px rgba(0, 240, 255, 0.5);

        }

        .stat-label {

          font-size: 1rem;        .benefits-grid {

          color: #c9d1d9;          display: grid;

          font-weight: 600;          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

        }          gap: 2rem;

          max-width: 1200px;

        /* Benefits Section */          margin: 2rem auto 0;

        .benefits-section {        }

          background: #161b22;

          padding: 3rem 0;        .benefit-card {

        }          background: linear-gradient(135deg, #161b22 0%, #1c2128 100%);

          border: 1px solid #30363d;

        .benefits-grid {          border-radius: 15px;

          display: grid;          padding: 2.5rem;

          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));          transition: all 0.3s ease;

          gap: 1.5rem;        }

          max-width: 1200px;

          margin: 2rem auto 0;        .benefit-card:hover {

        }          transform: translateY(-5px);

          border-color: #00f0ff;

        .benefit-card {          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

          background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);        }

          border: 1px solid #30363d;

          border-radius: 12px;        .benefit-icon {

          padding: 1.75rem;          font-size: 3.5rem;

          transition: all 0.3s ease;          margin-bottom: 1.5rem;

        }          display: block;

        }

        .benefit-card:hover {

          transform: translateY(-3px);        .benefit-title {

          border-color: #00f0ff;          font-size: 1.5rem;

          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);          margin-bottom: 1rem;

        }          color: #00f0ff;

          font-weight: 700;

        .benefit-icon {        }

          font-size: 2.5rem;

          margin-bottom: 1rem;        .benefit-description {

          display: block;          color: #8b949e;

        }          line-height: 1.7;

          font-size: 1.05rem;

        .benefit-title {        }

          font-size: 1.25rem;

          margin-bottom: 0.75rem;        .social-proof-section {

          color: #00f0ff;          background: linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(40, 160, 90, 0.05) 100%);

          font-weight: 700;          padding: 3.5rem 0;

        }        }



        .benefit-description {        .stats-grid {

          color: #8b949e;          display: grid;

          line-height: 1.6;          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

          font-size: 0.95rem;          gap: 2.5rem;

        }          max-width: 1000px;

          margin: 2rem auto 0;

        /* FAQ Section */          text-align: center;

        .faq-section {        }

          background: #0d1117;

          padding: 3rem 0;        .stat-number {

        }          font-size: 4rem;

          font-weight: 900;

        .faq-grid {          color: #50c878;

          display: grid;          line-height: 1;

          gap: 1rem;          margin-bottom: 0.5rem;

          max-width: 800px;        }

          margin: 2rem auto 0;

        }        .stat-label {

          font-size: 1.1rem;

        .faq-item {          color: #c9d1d9;

          background: #161b22;          font-weight: 600;

          border: 1px solid #30363d;        }

          border-radius: 10px;

          padding: 1.5rem;        .faq-section {

          transition: all 0.3s ease;          background: #161b22;

        }          padding: 3.5rem 0;

        }

        .faq-item:hover {

          border-color: #00f0ff;        .faq-container {

        }          max-width: 800px;

          margin: 2rem auto 0;

        .faq-question {        }

          font-size: 1.1rem;

          font-weight: 700;        .faq-item {

          color: #fff;          background: #0d1117;

          margin-bottom: 0.75rem;          border: 1px solid #30363d;

        }          border-radius: 12px;

          margin-bottom: 1.5rem;

        .faq-answer {          overflow: hidden;

          color: #8b949e;          transition: all 0.3s ease;

          line-height: 1.6;        }

          font-size: 0.95rem;

        }        .faq-item:hover {

          border-color: #00f0ff;

        /* Final CTA */        }

        .final-cta {

          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);        .faq-question {

          padding: 3rem 0;          padding: 1.8rem;

          text-align: center;          font-size: 1.2rem;

        }          font-weight: 700;

          color: #fff;

        .final-cta-box {          cursor: pointer;

          background: rgba(0, 240, 255, 0.08);          display: flex;

          border: 2px solid rgba(0, 240, 255, 0.3);          justify-content: space-between;

          border-radius: 16px;          align-items: center;

          padding: 2.5rem;        }

          max-width: 700px;

          margin: 0 auto;        .faq-answer {

        }          padding: 0 1.8rem 1.8rem;

          color: #8b949e;

        .urgency-badge {          line-height: 1.7;

          background: rgba(255, 165, 0, 0.15);          font-size: 1.05rem;

          border: 2px solid rgba(255, 165, 0, 0.4);        }

          border-radius: 10px;

          padding: 1rem;        .final-cta-section {

          margin-top: 1.5rem;          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);

          text-align: center;          padding: 3.5rem 0;

        }          text-align: center;

        }

        .urgency-text {

          color: #ffa500;        .final-cta-box {

          font-size: 1rem;          background: rgba(0, 240, 255, 0.08);

          font-weight: 700;          border: 2px solid rgba(0, 240, 255, 0.3);

          margin: 0;          border-radius: 20px;

        }          padding: 4rem 3rem;

      `}</style>          max-width: 700px;

          margin: 0 auto;

      {/* Hero Section */}        }

      <section className="hero-section">

        <div className="hero-bg"></div>        .urgency-banner {

        <div className="container">          background: rgba(255, 165, 0, 0.15);

          <div className="hero-content">          border: 2px solid rgba(255, 165, 0, 0.4);

            <div className="hero-badge">          border-radius: 15px;

              🔥 STOP Wasting Money on Emergency Repairs          padding: 2rem;

            </div>          margin-top: 2rem;

                      text-align: center;

            <h1 className="hero-title">        }

              One $3,500 Repair Avoided Pays for 3 Years

            </h1>        .urgency-text {

                      color: #ffa500;

            <p className="hero-subtitle">          font-size: 1.2rem;

              A licensed pro visits your home <strong style={{color: '#00f0ff'}}>every month</strong> for just $99 to catch problems before they become expensive disasters.          font-weight: 700;

            </p>          margin: 0;

                    }

            <div className="cta-group">

              <a href="#pricing" className="cta-primary">        .section-title {

                See Pricing          font-size: clamp(2rem, 4vw, 3rem);

              </a>          margin-bottom: 1rem;

              <a href="tel:4699939740" className="cta-secondary">          text-align: center;

                📞 (469) 993-9740          font-weight: 800;

              </a>        }

            </div>

          </div>        .section-subtitle {

        </div>          font-size: 1.2rem;

      </section>          color: #8b949e;

          max-width: 700px;

      {/* Pricing Section - Right After Hero */}          margin: 0 auto 2rem;

      <section id="pricing" className="pricing-section">          text-align: center;

        <div className="container">          line-height: 1.6;

          <h2 className="section-title">Simple, Transparent Pricing</h2>        }

          <p className="section-subtitle">      `}</style>

            No hidden fees. Cancel anytime. Professional care that pays for itself.

          </p>      {/* Hero Section */}

                <section className="hero-section">

          <div className="pricing-grid">        <div className="hero-bg"></div>

            {/* Monthly Plan */}        <div className="container-narrow">

            <div className="pricing-card">          <div className="hero-content">

              <div className="plan-name">Monthly Billing</div>            <div className="badge">

              <div className="plan-price">              <span>🔥</span> STOP Wasting Money on Emergency Repairs

                $99<span>/mo</span>            </div>

              </div>            

              <div style={{color: '#8b949e', marginBottom: '1.5rem', fontSize: '0.9rem'}}>            <h1 className="hero-title">

                Just $3.30 per day              One $3,500 Repair Avoided Pays for 3 Years

              </div>            </h1>

                          

              <ul className="plan-features">            <p className="hero-subtitle">

                <li>Monthly 1-hour pro inspection</li>              A licensed electrician, plumber, or handyman visits your home <strong style={{color: '#00f0ff'}}>every month</strong> for just $99 to catch problems <em>before</em> they explode into expensive nightmares.

                <li>Minor repairs included</li>            </p>

                <li>Priority emergency service</li>            

                <li>10% off all additional work</li>            <div className="pain-point">

                <li>Photo reports after every visit</li>              <p>

                <li>Cancel anytime</li>                <strong>Reality check:</strong> A burst pipe? $2,000-$5,000. Electrical fire damage? $10,000+. 

              </ul>                AC failure in Texas summer? $5,000-$8,000. <strong style={{color: '#00f0ff'}}>Why wait for disaster?</strong>

                            </p>

              <button className="select-btn" onClick={() => setShowModal(true)}>            </div>

                Choose Monthly            

              </button>            <div className="cta-group">

            </div>              <a href="#pricing" className="cta-primary">

                🚀 Start Protecting Your Home

            {/* Annual Plan - Featured */}              </a>

            <div className="pricing-card featured">              <a href="tel:4699939740" className="cta-secondary">

              <div className="popular-badge">Save $200</div>                📞 Call (469) 993-9740

              <div className="plan-name">Annual Billing (Best Value)</div>              </a>

              <div className="plan-price">            </div>

                $988<span>/yr</span>            

              </div>            <p className="trust-line">

              <div className="plan-savings">Only $82.33/month - 2 months FREE!</div>              ✓ Licensed professionals only • ✓ Cancel anytime • ✓ First visit within 48 hours

                          </p>

              <ul className="plan-features">          </div>

                <li>Everything in Monthly Plan</li>        </div>

                <li>15% off services (not 10%)</li>      </section>

                <li>VIP priority response</li>

                <li>Free seasonal tune-ups</li>      {/* Trust Signals */}

                <li>Extended warranty on work</li>      <section style={{background: '#0d1117', padding: '2.5rem 0'}}>

                <li>First-call status</li>        <div className="container-narrow">

              </ul>          <TrustSignals />

                      </div>

              <button className="select-btn" onClick={() => setShowModal(true)}>      </section>

                Choose Annual - Save $200

              </button>      {/* Social Proof Stats */}

            </div>      <section className="social-proof-section">

          </div>        <div className="container-narrow">

          <h2 className="section-title">Real Results From Last Month</h2>

          <div className="urgency-badge" style={{maxWidth: '700px', margin: '2rem auto 0'}}>          <p className="section-subtitle">

            <p className="urgency-text">            Our members sleep better knowing their homes are protected

              ⚡ First 15 members this month get FREE 90-minute comprehensive inspection ($199 value)          </p>

            </p>          

          </div>          <div className="stats-grid">

        </div>            <div>

      </section>              <div className="stat-number">37</div>

              <div className="stat-label">Small leaks caught before major damage</div>

      {/* Stats Section */}            </div>

      <section className="stats-section">            <div>

        <div className="container">              <div className="stat-number">12</div>

          <h2 className="section-title">Real Results From Last Month</h2>              <div className="stat-label">Electrical fire hazards prevented</div>

                      </div>

          <div className="stats-grid">            <div>

            <div>              <div className="stat-number">23</div>

              <div className="stat-number">37</div>              <div className="stat-label">HVAC issues found early</div>

              <div className="stat-label">Leaks caught early</div>            </div>

            </div>            <div>

            <div>              <div className="stat-number">$142K</div>

              <div className="stat-number">12</div>              <div className="stat-label">Saved in emergency repairs</div>

              <div className="stat-label">Fire hazards prevented</div>            </div>

            </div>          </div>

            <div>        </div>

              <div className="stat-number">23</div>      </section>

              <div className="stat-label">HVAC issues found</div>

            </div>      {/* Pricing Section */}

            <div>      <section id="pricing" className="pricing-section">

              <div className="stat-number">$142K</div>        <div className="container-narrow">

              <div className="stat-label">Saved in emergencies</div>          <h2 className="section-title">Simple, Transparent Pricing</h2>

            </div>          <p className="section-subtitle">

          </div>            No hidden fees. No surprises. Just professional home care that pays for itself.

        </div>          </p>

      </section>          

          <div className="pricing-cards">

      {/* Trust Signals */}            {/* Monthly Plan */}

      <section style={{background: '#0d1117', padding: '2rem 0'}}>            <div className="pricing-card">

        <div className="container">              <div className="plan-name">Monthly Billing</div>

          <TrustSignals />              <div className="plan-price">

        </div>                $99<span>/mo</span>

      </section>              </div>

              <div style={{color: '#8b949e', marginBottom: '2rem'}}>Less than $3.30 per day</div>

      {/* Benefits Section */}              

      <section className="benefits-section">              <ul className="plan-features">

        <div className="container">                <li>Monthly 1-hour professional inspection</li>

          <h2 className="section-title">What's Included Every Month</h2>                <li>Minor repairs included on every visit</li>

          <p className="section-subtitle">                <li>Priority scheduling for emergencies</li>

            Professional home care that actually prevents problems                <li>10% discount on all additional services</li>

          </p>                <li>Photo documentation & reports</li>

                          <li>Cancel anytime, no contract</li>

          <div className="benefits-grid">              </ul>

            <div className="benefit-card">              

              <span className="benefit-icon">🔍</span>              <button className="select-plan-btn" onClick={() => setShowModal(true)}>

              <h3 className="benefit-title">1-Hour Pro Inspection</h3>                Choose Monthly

              <p className="benefit-description">              </button>

                Licensed tech examines your home's systems, catching issues you'd never notice.            </div>

              </p>

            </div>            {/* Annual Plan - Featured */}

            <div className="pricing-card featured">

            <div className="benefit-card">              <div className="popular-badge">💎 Best Value - Save $200</div>

              <span className="benefit-icon">🔧</span>              <div className="plan-name">Annual Billing (Most Popular)</div>

              <h3 className="benefit-title">Minor Fixes On-Site</h3>              <div className="plan-price">

              <p className="benefit-description">                $988<span>/yr</span>

                Change filters, tighten outlets, adjust doors, replace worn parts while we're there.              </div>

              </p>              <div className="plan-savings">Only $82.33/month - 2 months FREE!</div>

            </div>              

              <ul className="plan-features">

            <div className="benefit-card">                <li>Everything in Monthly Plan</li>

              <span className="benefit-icon">📸</span>                <li>Priority booking year-round</li>

              <h3 className="benefit-title">Photo Documentation</h3>                <li>15% discount on all services (not 10%)</li>

              <p className="benefit-description">                <li>Free seasonal tune-ups</li>

                Visual record of your home's condition. Perfect for insurance and resale.                <li>Extended warranty on work done</li>

              </p>                <li>VIP status - first call response</li>

            </div>              </ul>

              

            <div className="benefit-card">              <button className="select-plan-btn" onClick={() => setShowModal(true)}>

              <span className="benefit-icon">⚡</span>                Choose Annual - Save $200

              <h3 className="benefit-title">Priority Service</h3>              </button>

              <p className="benefit-description">            </div>

                When something breaks, members jump the line. We're there when you need us.          </div>

              </p>

            </div>          <div className="urgency-banner">

            <p className="urgency-text">

            <div className="benefit-card">              ⚡ LIMITED TIME: First 15 members this month get their initial 90-minute comprehensive inspection FREE (a $199 value)

              <span className="benefit-icon">💰</span>            </p>

              <h3 className="benefit-title">10-15% Off Services</h3>          </div>

              <p className="benefit-description">        </div>

                Discount on every repair and upgrade. One major job pays for your whole year.      </section>

              </p>

            </div>      {/* What's Included Section */}

      <section className="section-padding" style={{background: '#0d1117'}}>

            <div className="benefit-card">        <div className="container-narrow">

              <span className="benefit-icon">✅</span>          <h2 className="section-title">What's Included Every Single Month</h2>

              <h3 className="benefit-title">Rotating Checks</h3>          <p className="section-subtitle">

              <p className="benefit-description">            Comprehensive professional home care that actually prevents problems

                Every system gets expert attention throughout the year. Nothing gets missed.          </p>

              </p>          

            </div>          <div className="benefits-grid">

          </div>            <div className="benefit-card">

        </div>              <span className="benefit-icon">🔍</span>

      </section>              <h3 className="benefit-title">1-Hour Pro Inspection</h3>

              <p className="benefit-description">

      {/* FAQ Section */}                Licensed technician examines your home's systems with a trained eye, catching issues you'd never notice.

      <section className="faq-section">              </p>

        <div className="container">            </div>

          <h2 className="section-title">Common Questions</h2>

                      <div className="benefit-card">

          <div className="faq-grid">              <span className="benefit-icon">🔧</span>

            <div className="faq-item">              <h3 className="benefit-title">Minor Fixes Done On-Site</h3>

              <div className="faq-question">              <p className="benefit-description">

                What systems do you inspect each month?                We handle it while we're there: change filters, tighten outlets, adjust doors, replace worn parts.

              </div>              </p>

              <div className="faq-answer">            </div>

                We rotate through electrical, plumbing, HVAC, appliances, doors/windows, and safety devices. Every system gets thorough attention throughout the year.

              </div>            <div className="benefit-card">

            </div>              <span className="benefit-icon">📸</span>

              <h3 className="benefit-title">Photo Documentation</h3>

            <div className="faq-item">              <p className="benefit-description">

              <div className="faq-question">                Get a visual record of your home's condition with every visit. Perfect for insurance and resale value.

                What qualifies as "minor repairs included"?              </p>

              </div>            </div>

              <div className="faq-answer">

                Tasks under 15 minutes: changing filters, tightening fixtures, adjusting doors, replacing batteries, cleaning traps. Major repairs quoted separately with member discounts.            <div className="benefit-card">

              </div>              <span className="benefit-icon">⚡</span>

            </div>              <h3 className="benefit-title">Priority Emergency Service</h3>

              <p className="benefit-description">

            <div className="faq-item">                When something breaks, members jump the line. We're there when you need us most.

              <div className="faq-question">              </p>

                Can I cancel anytime?            </div>

              </div>

              <div className="faq-answer">            <div className="benefit-card">

                Yes! Monthly plans have zero commitment - cancel anytime. Annual plans are prepaid but refundable within first 60 days if unhappy.              <span className="benefit-icon">💰</span>

              </div>              <h3 className="benefit-title">10-15% Off All Services</h3>

            </div>              <p className="benefit-description">

                Your membership discount applies to every repair and upgrade. One major job pays for your whole year.

            <div className="faq-item">              </p>

              <div className="faq-question">            </div>

                Do you work on weekends?

              </div>            <div className="benefit-card">

              <div className="faq-answer">              <span className="benefit-icon">✅</span>

                Absolutely. Morning, evening, or weekend appointments available. For emergencies, members get priority 7 days a week.              <h3 className="benefit-title">Rotating System Checks</h3>

              </div>              <p className="benefit-description">

            </div>                Every system gets expert attention throughout the year. Nothing falls through the cracks.

          </div>              </p>

        </div>            </div>

      </section>          </div>

        </div>

      {/* Final CTA */}      </section>

      <section className="final-cta">

        <div className="container">      {/* FAQ Section */}

          <div className="final-cta-box">      <section className="faq-section">

            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>        <div className="container-narrow">

              Stop Gambling With Your Home          <h2 className="section-title">Common Questions</h2>

            </h2>          <p className="section-subtitle">

            <p style={{fontSize: '1.15rem', color: '#c9d1d9', marginBottom: '2rem', lineHeight: '1.5'}}>            Everything you need to know about The $99 Plan

              Join 300+ DFW homeowners who sleep better knowing their homes are protected every month.          </p>

            </p>          

                      <div className="faq-container">

            <div className="cta-group">            <div className="faq-item">

              <a href="#pricing" className="cta-primary">              <div className="faq-question">

                Protect My Home Now                What systems do you inspect each month?

              </a>              </div>

              <a href="tel:4699939740" className="cta-secondary">              <div className="faq-answer">

                📞 Call (469) 993-9740                We rotate through all major home systems: electrical (outlets, panels, safety), plumbing (leaks, pressure, drains), HVAC (filters, operation, efficiency), appliances, doors/windows, safety devices, and seasonal concerns. Every system gets thorough attention throughout the year.

              </a>              </div>

            </div>            </div>

            

            <p style={{fontSize: '0.9rem', color: '#8b949e', marginTop: '1.5rem'}}>            <div className="faq-item">

              🕐 Only 8 spots left this month • First visit within 48 hours              <div className="faq-question">

            </p>                What qualifies as "minor repairs included"?

          </div>              </div>

        </div>              <div className="faq-answer">

      </section>                Tasks that take 15 minutes or less: changing air filters, tightening loose outlets or fixtures, adjusting door hinges, replacing smoke detector batteries, cleaning drain traps, and other quick fixes. Major repairs are quoted separately but you get priority scheduling and member discounts.

              </div>

      {/* Modal */}            </div>

      {showModal && (

        <div style={{            <div className="faq-item">

          position: 'fixed',              <div className="faq-question">

          top: 0,                Can I cancel anytime?

          left: 0,              </div>

          right: 0,              <div className="faq-answer">

          bottom: 0,                Yes! Monthly plans have zero commitment - cancel anytime with 30 days notice. Annual plans are prepaid but if you're unhappy in the first 60 days, we'll refund the unused portion. We want happy members, not trapped customers.

          background: 'rgba(0, 0, 0, 0.9)',              </div>

          display: 'flex',            </div>

          alignItems: 'center',

          justifyContent: 'center',            <div className="faq-item">

          zIndex: 10000,              <div className="faq-question">

          padding: '2rem'                Do you work on weekends?

        }} onClick={() => setShowModal(false)}>              </div>

          <div style={{              <div className="faq-answer">

            background: '#161b22',                Absolutely. We schedule around YOUR life. Morning, evening, or weekend appointments available. For emergencies, members get priority 7 days a week.

            border: '2px solid #00f0ff',              </div>

            borderRadius: 16,            </div>

            padding: '2.5rem',

            maxWidth: '450px',            <div className="faq-item">

            width: '100%'              <div className="faq-question">

          }} onClick={(e) => e.stopPropagation()}>                What if I need a major repair?

            <h3 style={{fontSize: '1.75rem', marginBottom: '1rem', color: '#00f0ff'}}>              </div>

              Let's Get You Protected              <div className="faq-answer">

            </h3>                We'll provide a detailed quote with member pricing (10-15% off). You get priority scheduling, and because we've already identified the issue early, repairs are usually simpler and cheaper than waiting for emergency breakdown.

            <p style={{color: '#8b949e', marginBottom: '2rem'}}>              </div>

              Call us at <a href="tel:4699939740" style={{color: '#00f0ff', textDecoration: 'none', fontWeight: '700'}}>(469) 993-9740</a> to schedule your first visit, or visit our contact page.            </div>

            </p>

            <div style={{display: 'flex', gap: '1rem'}}>            <div className="faq-item">

              <a href="tel:4699939740" style={{              <div className="faq-question">

                flex: 1,                Is this really worth it for a newer home?

                padding: '1rem',              </div>

                background: 'linear-gradient(135deg, #00f0ff 0%, #00b8d4 100%)',              <div className="faq-answer">

                color: '#0d1117',                YES! Newer homes have issues too: settling foundations, HVAC tuning, builder shortcuts, warranty-period fixes. We help you catch warranty issues BEFORE they expire. Plus, documented maintenance increases resale value significantly.

                textAlign: 'center',              </div>

                borderRadius: 8,            </div>

                fontWeight: 700,          </div>

                textDecoration: 'none'        </div>

              }}>      </section>

                📞 Call Now

              </a>      {/* Final CTA Section */}

              <a href="/contact" style={{      <section className="final-cta-section">

                flex: 1,        <div className="container-narrow">

                padding: '1rem',          <div className="final-cta-box">

                background: 'rgba(255, 255, 255, 0.1)',            <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>

                color: '#fff',              Stop Gambling With Your Biggest Investment

                textAlign: 'center',            </h2>

                borderRadius: 8,            <p style={{fontSize: '1.3rem', color: '#c9d1d9', marginBottom: '2.5rem', lineHeight: '1.6'}}>

                fontWeight: 700,              Every month without professional eyes on your home is a roll of the dice. 

                textDecoration: 'none',              Join 300+ DFW homeowners who sleep better knowing their homes are protected.

                border: '2px solid rgba(255, 255, 255, 0.3)'            </p>

              }}>            

                Contact Form            <div className="cta-group">

              </a>              <a href="#pricing" className="cta-primary">

            </div>                Yes, Protect My Home Now

          </div>              </a>

        </div>              <a href="tel:4699939740" className="cta-secondary">

      )}                📞 Call (469) 993-9740

    </Layout>              </a>

  )            </div>

}            

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
