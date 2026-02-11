import Head from 'next/head'
import Layout from '../../components/Layout'
import SmartHomeROICalculator from '../../components/SmartHomeROICalculator'

export default function SmartHomeROICalculatorPage() {
  return (
    <Layout>
      <Head>
        <title>Smart Home ROI Calculator | Calculate Your Return on Investment | Metroplex Pros</title>
        <meta 
          name="description" 
          content="Calculate the ROI of smart home upgrades in Dallas. See energy savings, home value increase, and payback period for smart thermostats, lighting, security, and more." 
        />
        <meta property="og:title" content="Smart Home ROI Calculator | Metroplex Pros" />
        <meta property="og:description" content="Calculate your return on investment for smart home upgrades with energy savings and home value analysis." />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0d1117',
        paddingTop: '100px',
        paddingBottom: '4rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              color: '#00f0ff',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Smart Home ROI Calculator
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#8b949e', 
              maxWidth: '800px', 
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Discover how much you can save and increase your home's value with smart home upgrades. 
              Get detailed projections for energy savings, home value increase, and payback period.
            </p>
            
            {/* Quick Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {[
                { number: '3-5%', label: 'Home Value Increase' },
                { number: '$200+', label: 'Annual Energy Savings' },
                { number: '2-4 yrs', label: 'Typical Payback' },
                { number: '200%+', label: '10-Year ROI' }
              ].map((stat, index) => (
                <div key={index} style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px'
                }}>
                  <div style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    color: '#00f0ff',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.95rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Component */}
          <SmartHomeROICalculator />

          {/* Benefits Section */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Why Invest in Smart Home Technology?
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                {
                  icon: '💰',
                  title: 'Lower Energy Bills',
                  description: 'Smart thermostats, lighting, and outlets can reduce your energy consumption by 10-30%, saving hundreds per year'
                },
                {
                  icon: '🏡',
                  title: 'Increase Home Value',
                  description: 'Homes with smart technology sell for 3-5% more and attract tech-savvy buyers in competitive markets'
                },
                {
                  icon: '🔒',
                  title: 'Enhanced Security',
                  description: 'Smart locks, cameras, and doorbells provide 24/7 monitoring and remote access for peace of mind'
                },
                {
                  icon: '📱',
                  title: 'Remote Control',
                  description: 'Control lights, temperature, locks, and more from anywhere using your smartphone'
                },
                {
                  icon: '⏱️',
                  title: 'Save Time',
                  description: 'Automation and scheduling handle routine tasks, freeing up your time for what matters'
                },
                {
                  icon: '🌱',
                  title: 'Environmental Impact',
                  description: 'Reduce your carbon footprint by optimizing energy use and eliminating waste'
                }
              ].map((benefit, index) => (
                <div key={index} style={{
                  padding: '2rem',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#c9d1d9',
                    marginBottom: '0.75rem'
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

          {/* Device Categories */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Popular Smart Home Upgrades
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem'
            }}>
              {[
                {
                  icon: '🌡️',
                  title: 'Climate Control',
                  items: ['Smart Thermostats', 'Smart Ceiling Fans', 'Smart Window Blinds'],
                  savings: '$180-$360/year'
                },
                {
                  icon: '💡',
                  title: 'Lighting',
                  items: ['Smart Light Bulbs', 'Smart Switches', 'Motion Sensors'],
                  savings: '$96-$180/year'
                },
                {
                  icon: '🔐',
                  title: 'Security',
                  items: ['Smart Locks', 'Video Doorbells', 'Security Cameras'],
                  savings: 'Priceless peace of mind'
                },
                {
                  icon: '🎛️',
                  title: 'Control',
                  items: ['Smart Outlets', 'Smart Switches', 'Voice Assistants'],
                  savings: '$96-$180/year'
                },
                {
                  icon: '🚪',
                  title: 'Convenience',
                  items: ['Smart Garage Doors', 'Smart Sprinklers', 'Smart Appliances'],
                  savings: 'Time + water savings'
                },
                {
                  icon: '🏠',
                  title: 'Whole Home',
                  items: ['Smart Hubs', 'Mesh WiFi', 'Integrated Systems'],
                  savings: 'Connects everything'
                }
              ].map((category, index) => (
                <div key={index} style={{
                  padding: '2rem',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {category.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#c9d1d9',
                    marginBottom: '0.75rem'
                  }}>
                    {category.title}
                  </h3>
                  <ul style={{ 
                    color: '#8b949e', 
                    lineHeight: '1.6',
                    paddingLeft: '1.25rem',
                    marginBottom: '1rem'
                  }}>
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div style={{ 
                    color: '#00f0ff', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    {category.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Customer Results */}
          <div style={{ 
            marginTop: '4rem',
            padding: '3rem',
            backgroundColor: '#161b22',
            border: '2px solid #00f0ff',
            borderRadius: '12px'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Real Customer Results
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                {
                  name: 'Highland Park Home',
                  investment: '$3,200',
                  annualSavings: '$480',
                  homeValue: '+$16,000',
                  upgrades: 'Smart thermostat, lighting (4 rooms), security system'
                },
                {
                  name: 'Lakewood Residence',
                  investment: '$1,800',
                  annualSavings: '$320',
                  homeValue: '+$8,000',
                  upgrades: 'Smart thermostat, video doorbell, smart locks (2)'
                },
                {
                  name: 'University Park Estate',
                  investment: '$5,500',
                  annualSavings: '$720',
                  homeValue: '+$22,000',
                  upgrades: 'Whole home system: climate, lighting, security, blinds'
                }
              ].map((result, index) => (
                <div key={index} style={{
                  padding: '2rem',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '8px'
                }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    color: '#00f0ff', 
                    marginBottom: '1rem',
                    fontWeight: '700'
                  }}>
                    {result.name}
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ color: '#c9d1d9' }}>
                      <strong>Investment:</strong> {result.investment}
                    </div>
                    <div style={{ color: '#c9d1d9' }}>
                      <strong>Annual Savings:</strong> <span style={{ color: '#00f0ff' }}>{result.annualSavings}</span>
                    </div>
                    <div style={{ color: '#c9d1d9' }}>
                      <strong>Home Value Increase:</strong> <span style={{ color: '#00f0ff' }}>{result.homeValue}</span>
                    </div>
                  </div>
                  <p style={{ 
                    color: '#8b949e', 
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    lineHeight: '1.5'
                  }}>
                    {result.upgrades}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div style={{ 
            marginTop: '4rem',
            maxWidth: '900px',
            margin: '4rem auto 0'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Frequently Asked Questions
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  q: 'How accurate are these ROI calculations?',
                  a: 'Our calculations use industry-standard data from the National Association of Realtors, Energy Star, and local Dallas utility rates. Actual results vary based on usage patterns, home size, and electricity rates. We provide conservative estimates to give you realistic expectations.'
                },
                {
                  q: 'What smart home upgrades have the best ROI?',
                  a: 'Smart thermostats typically offer the best ROI with 2-3 year payback periods through energy savings alone. Smart lighting and security systems also provide excellent returns, with the added benefit of significantly increasing home value when selling.'
                },
                {
                  q: 'Do smart home upgrades really increase home value?',
                  a: 'Yes! According to NAR research, homes with smart technology sell for 3-5% more on average. In Dallas\'s competitive market, smart home features are increasingly expected by buyers, especially in higher-end neighborhoods like Highland Park and University Park.'
                },
                {
                  q: 'Can I install smart devices myself or should I hire an electrician?',
                  a: 'Some devices (like smart bulbs or plugs) are DIY-friendly. However, devices requiring electrical work (thermostats, switches, hardwired cameras) should be installed by a licensed electrician to ensure safety, code compliance, and warranty protection.'
                },
                {
                  q: 'What if my home doesn\'t have a neutral wire?',
                  a: 'Many older homes lack neutral wires, which some smart switches require. We can add neutral wires, recommend devices that don\'t require them, or suggest alternative solutions like smart bulbs instead of switches.'
                },
                {
                  q: 'How long do smart home devices last?',
                  a: 'Most smart home devices last 7-15 years, similar to traditional devices. Smart thermostats and hubs typically last 8-10 years, while smart bulbs last 15-20 years. Professional installation extends device lifespan and ensures optimal performance.'
                }
              ].map((faq, index) => (
                <div key={index} style={{
                  padding: '2rem',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px'
                }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '700', 
                    color: '#00f0ff',
                    marginBottom: '1rem'
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{ 
                    color: '#8b949e', 
                    lineHeight: '1.8',
                    fontSize: '1.05rem'
                  }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ 
            marginTop: '4rem',
            padding: '3rem',
            backgroundColor: '#0d4754',
            border: '2px solid #00f0ff',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#ffffff',
              marginBottom: '1rem'
            }}>
              Ready to Start Saving?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#c9d1d9',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Let's make your home smarter, more efficient, and more valuable. 
              Get a custom quote for your smart home project.
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="tel:469-993-9740"
                style={{ 
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  backgroundColor: '#00f0ff',
                  color: '#0d1117',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  transition: 'transform 0.2s'
                }}
              >
                Call (469) 993-9740
              </a>
              <a 
                href="/contact"
                style={{ 
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  backgroundColor: '#238636',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  transition: 'transform 0.2s'
                }}
              >
                Get Free Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
