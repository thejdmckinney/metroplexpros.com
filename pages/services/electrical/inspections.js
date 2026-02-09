import Layout from '../../../components/Layout'
import Link from 'next/link'
import TrustSignals from '../../../components/TrustSignals'

export default function ElectricalInspections() {
  const inspectionPackages = [
    {
      id: 'basic',
      name: 'Basic Electrical Inspection',
      price: '$150',
      duration: '45-60 minutes',
      popular: false,
      bookingUrl: 'https://calendly.com/punch-list-handyman/basic-electrical-inspection',
      description: 'Quick, affordable electrical safety check perfect for routine maintenance or budget-conscious homeowners.',
      included: [
        'Visual electrical panel inspection',
        'Test all GFCI outlets (bathrooms, kitchen, outdoor)',
        'Check outdoor outlets and lighting functionality',
        'Identify obvious safety concerns',
        'Basic written summary of findings'
      ],
      bestFor: [
        'Routine annual checkups',
        'Newer homes (under 10 years old)',
        'Recent homebuyers wanting peace of mind',
        'Rental property inspections',
        'Basic safety verification'
      ],
      reportDelivery: 'Same day summary'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Electrical Inspection',
      price: '$200',
      duration: '75-90 minutes',
      popular: true,
      bookingUrl: 'https://calendly.com/punch-list-handyman/comprehensive-electrical-inspection',
      description: 'Our most thorough inspection package - includes thermal imaging to detect problems invisible to the naked eye.',
      included: [
        'Complete electrical panel assessment with thermal imaging',
        'Test all GFCI outlets throughout home',
        'Sample testing of outlets in every room',
        'Outdoor electrical and lighting inspection',
        'Major appliance connection check (range, dryer, water heater)',
        'Ceiling fan safety and performance inspection',
        'Smart home system electrical review (if applicable)',
        'Detailed written report with photos',
        'Priority-ranked recommendations with timeframes'
      ],
      bestFor: [
        'Homes 10+ years old',
        'Preparing for summer heat or winter storms',
        'Homes with recent electrical issues',
        'Pre-purchase inspections',
        'Peace of mind for luxury homes'
      ],
      reportDelivery: 'Within 24 hours',
      highlight: 'Thermal imaging detects hot spots in your panel and circuits before they become failures or fire hazards.'
    },
    {
      id: 'luxury',
      name: 'Luxury Home Electrical Inspection',
      price: '$225',
      duration: '2-2.5 hours',
      popular: false,
      bookingUrl: 'https://calendly.com/punch-list-handyman/comprehensive-electrical-inspection-clone',
      description: 'Premium inspection service designed for larger estates and homes with complex electrical systems.',
      included: [
        'Everything in Comprehensive Inspection, plus:',
        'Extended testing for larger square footage',
        'Pool and spa electrical systems inspection',
        'Outdoor kitchen and entertainment area electrical',
        'Multi-zone HVAC electrical connections',
        'Landscape and security lighting systems',
        'Gate and access control electrical',
        'Whole-home generator systems check',
        'Smart home integration assessment',
        'Wine cellar and specialty appliance circuits',
        'Detailed photo documentation throughout',
        'Premium inspection report with maintenance schedule',
        'Personal consultation on findings and recommendations'
      ],
      bestFor: [
        'Homes over 3,500 sq ft',
        'Properties with pools, outdoor kitchens, or guest houses',
        'Estates with complex electrical systems',
        'Luxury homes in University Park, Highland Park, Preston Hollow',
        'Properties with backup generators and smart home systems',
        'High-value homes requiring detailed documentation'
      ],
      reportDelivery: 'Within 48 hours with detailed photos',
      highlight: 'More comprehensive coverage, extended time on-site, and detailed documentation suitable for insurance, estate planning, or property management needs.'
    }
  ]

  return (
    <Layout
      title="Electrical Inspections Dallas | Thermal Imaging & Safety Checks | Metroplex Pros"
      description="Professional electrical inspections in Dallas-Fort Worth. Basic ($150), Comprehensive with thermal imaging ($200), and Luxury home inspections ($225). Same-day service available."
      keywords="electrical inspection Dallas, thermal imaging inspection, home electrical safety check, electrical panel inspection, GFCI testing, Dallas electrician"
    >
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        padding: '6rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
              <Link href="/" style={{ color: '#00f0ff', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: '#8b949e', margin: '0 0.5rem' }}>/</span>
              <Link href="/services" style={{ color: '#00f0ff', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: '#8b949e', margin: '0 0.5rem' }}>/</span>
              <Link href="/services/electrical" style={{ color: '#00f0ff', textDecoration: 'none' }}>Electrical</Link>
              <span style={{ color: '#8b949e', margin: '0 0.5rem' }}>/</span>
              <span style={{ color: '#c9d1d9' }}>Inspections</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}>
              Professional Electrical Inspections
            </h1>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#c9d1d9',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Comprehensive electrical safety assessments with advanced thermal imaging technology
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <div style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 240, 255, 0.3)'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#8b949e', marginBottom: '0.25rem' }}>Starting at</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#00f0ff' }}>$150</div>
              </div>
              <div style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 240, 255, 0.3)'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#8b949e', marginBottom: '0.25rem' }}>Service Time</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#00f0ff' }}>45min - 2.5hrs</div>
              </div>
              <div style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 240, 255, 0.3)'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#8b949e', marginBottom: '0.25rem' }}>Service Area</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#00f0ff' }}>DFW Metroplex</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }} />
      </section>

      {/* Why Inspection Matters */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#c9d1d9',
              fontWeight: '700'
            }}>
              Why Regular Electrical Inspections Matter
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {[
                {
                  icon: '🔥',
                  title: 'Prevent Fire Hazards',
                  description: 'Detect hot spots and faulty wiring before they become dangerous'
                },
                {
                  icon: '💰',
                  title: 'Save Money',
                  description: 'Catch small issues before they become expensive repairs'
                },
                {
                  icon: '🏠',
                  title: 'Protect Your Investment',
                  description: 'Maintain your home\'s value and ensure buyer confidence'
                },
                {
                  icon: '✅',
                  title: 'Code Compliance',
                  description: 'Ensure your electrical system meets current safety standards'
                }
              ].map((benefit, index) => (
                <div key={index} style={{
                  backgroundColor: '#161b22',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid #30363d',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: '#00f0ff',
                    fontWeight: '600'
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Packages */}
      <section style={{ backgroundColor: '#161b22', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#c9d1d9',
            fontWeight: '700'
          }}>
            Choose Your Inspection Package
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#8b949e',
            fontSize: '1.2rem',
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto 4rem'
          }}>
            From routine safety checks to comprehensive luxury home assessments
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {inspectionPackages.map((pkg) => (
              <div key={pkg.id} style={{
                backgroundColor: '#0d1117',
                borderRadius: '16px',
                border: pkg.popular ? '2px solid #00f0ff' : '1px solid #30363d',
                padding: '2.5rem',
                position: 'relative',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = pkg.popular 
                  ? '0 20px 60px rgba(0, 240, 255, 0.3)'
                  : '0 20px 60px rgba(0, 240, 255, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#00f0ff',
                    color: '#0d1117',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(0, 240, 255, 0.4)'
                  }}>
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div style={{ marginTop: pkg.popular ? '1rem' : '0' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    color: '#00f0ff',
                    fontWeight: '700'
                  }}>
                    {pkg.name}
                  </h3>
                  
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#c9d1d9',
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.price}
                  </div>

                  <div style={{
                    color: '#8b949e',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid #30363d'
                  }}>
                    ⏱️ {pkg.duration} on-site
                  </div>

                  <p style={{
                    color: '#c9d1d9',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontSize: '1.05rem'
                  }}>
                    {pkg.description}
                  </p>

                  {pkg.highlight && (
                    <div style={{
                      backgroundColor: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.3)',
                      borderRadius: '8px',
                      padding: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        color: '#00f0ff',
                        marginBottom: '0.5rem'
                      }}>
                        💡 WHY THIS MATTERS
                      </div>
                      <div style={{
                        color: '#c9d1d9',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>
                        {pkg.highlight}
                      </div>
                    </div>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      color: '#00f0ff',
                      fontSize: '1.1rem',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      What's Included:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {pkg.included.map((item, index) => (
                        <li key={index} style={{
                          color: '#c9d1d9',
                          marginBottom: '0.75rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          fontSize: '0.95rem',
                          lineHeight: '1.5'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#00f0ff'
                          }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      color: '#00f0ff',
                      fontSize: '1.1rem',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      Best For:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {pkg.bestFor.map((item, index) => (
                        <li key={index} style={{
                          color: '#8b949e',
                          marginBottom: '0.5rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          fontSize: '0.9rem'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            color: '#00f0ff'
                          }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#161b22',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    border: '1px solid #30363d'
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#8b949e',
                      marginBottom: '0.25rem'
                    }}>
                      📋 Report Delivery
                    </div>
                    <div style={{
                      color: '#c9d1d9',
                      fontWeight: '600'
                    }}>
                      {pkg.reportDelivery}
                    </div>
                  </div>

                  <a 
                    href={pkg.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    display: 'block',
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: pkg.popular ? '#00f0ff' : '#161b22',
                    color: pkg.popular ? '#0d1117' : '#00f0ff',
                    border: pkg.popular ? 'none' : '2px solid #00f0ff',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    marginTop: 'auto'
                  }}>
                    Schedule {pkg.name.split(' ')[0]} Inspection
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              color: '#c9d1d9',
              fontWeight: '700'
            }}>
              Serving Dallas-Fort Worth
            </h2>
            <p style={{
              color: '#8b949e',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              We provide professional electrical inspections throughout the DFW metroplex, including:
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              {[
                'University Park', 'Highland Park', 'Preston Hollow', 'Dallas',
                'Fort Worth', 'Plano', 'Frisco', 'McKinney', 'Richardson',
                'Garland', 'Irving', 'Lakewood'
              ].map((city, index) => (
                <span key={index} style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  color: '#c9d1d9',
                  fontSize: '0.95rem'
                }}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section style={{ backgroundColor: '#161b22', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#c9d1d9',
            fontWeight: '700'
          }}>
            What to Expect During Your Inspection
          </h2>

          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gap: '2rem'
          }}>
            {[
              {
                step: '1',
                title: 'Schedule Your Inspection',
                description: 'Choose your preferred date and time. We offer flexible scheduling including evenings and weekends.'
              },
              {
                step: '2',
                title: 'Pre-Inspection Preparation',
                description: 'We\'ll send you a checklist of what to prepare. Ensure access to your electrical panel and any locked areas.'
              },
              {
                step: '3',
                title: 'On-Site Assessment',
                description: 'Our certified electrician arrives on time with professional equipment including thermal imaging cameras.'
              },
              {
                step: '4',
                title: 'Thorough Testing',
                description: 'Systematic inspection of your electrical system following our comprehensive checklist and safety protocols.'
              },
              {
                step: '5',
                title: 'Immediate Findings',
                description: 'We\'ll discuss any urgent safety concerns on-site and answer all your questions.'
              },
              {
                step: '6',
                title: 'Detailed Report',
                description: 'Receive your written report with photos, findings, and priority-ranked recommendations with estimated costs.'
              }
            ].map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'flex-start',
                backgroundColor: '#0d1117',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #30363d'
              }}>
                <div style={{
                  minWidth: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: '#0d1117',
                  flexShrink: 0
                }}>
                  {step.step}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.75rem',
                    color: '#00f0ff',
                    fontWeight: '600'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    color: '#c9d1d9',
                    lineHeight: '1.6',
                    fontSize: '1.05rem'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: '#0d1117', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#c9d1d9',
            fontWeight: '700'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                question: 'How often should I get an electrical inspection?',
                answer: 'We recommend annual inspections for homes 10+ years old, every 3-5 years for newer homes, and immediately if you notice any electrical issues, flickering lights, or burning smells.'
              },
              {
                question: 'What is thermal imaging and why do I need it?',
                answer: 'Thermal imaging detects heat signatures invisible to the naked eye. It identifies hot spots in your electrical panel, circuits, and connections that could indicate failing components or fire hazards before they become serious problems.'
              },
              {
                question: 'Do I need to be home during the inspection?',
                answer: 'Yes, we need access to your electrical panel, all areas of the home, and someone available to answer questions about your electrical system\'s history and any concerns you\'ve noticed.'
              },
              {
                question: 'Will you turn off my power during the inspection?',
                answer: 'For most inspections, we test with power on. However, for panel inspections, we may need to briefly shut off power to specific circuits. We\'ll coordinate this with you in advance.'
              },
              {
                question: 'What happens if you find problems?',
                answer: 'We prioritize all findings by urgency and provide estimates for repairs. We can often address urgent safety issues on the spot or schedule immediate follow-up repairs.'
              },
              {
                question: 'Is an inspection required before buying a home?',
                answer: 'While not always required, we highly recommend an electrical inspection before purchasing any home, especially those built before 2000 or with known electrical issues.'
              }
            ].map((faq, index) => (
              <details key={index} style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#00f0ff',
                  marginBottom: '1rem',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {faq.question}
                  <span style={{ color: '#00f0ff', fontSize: '1.5rem' }}>+</span>
                </summary>
                <p style={{
                  color: '#c9d1d9',
                  lineHeight: '1.7',
                  fontSize: '1.05rem',
                  marginTop: '1rem'
                }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ background: '#161b22', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <TrustSignals variant="compact" />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#0d1117',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontWeight: '800',
            color: '#c9d1d9'
          }}>
            Ready to Schedule Your Inspection?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#8b949e',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            Protect your home and family with a professional electrical inspection. Same-day service available.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://calendly.com/punch-list-handyman/comprehensive-electrical-inspection"
              target="_blank"
              rel="noopener noreferrer"
              style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
              color: '#0d1117',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1.2rem',
              textDecoration: 'none',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              Schedule Inspection Now
            </a>
            
            <a 
              href="tel:+12145550100"
              style={{
              display: 'inline-block',
              padding: '1.25rem 3rem',
              backgroundColor: '#161b22',
              color: '#00f0ff',
              border: '2px solid #00f0ff',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1.2rem',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#161b22'
            }}>
              Call (214) 555-0100
            </a>
          </div>

          <p style={{
            color: '#8b949e',
            marginTop: '2rem',
            fontSize: '1rem'
          }}>
            Questions? Call us anytime - we're here to help! ☎️
          </p>
        </div>
      </section>
    </Layout>
  )
}
