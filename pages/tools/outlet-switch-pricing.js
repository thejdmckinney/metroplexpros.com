import Layout from '../../components/Layout'
import OutletSwitchPricing from '../../components/OutletSwitchPricing'

export default function OutletSwitchPricingPage() {
  return (
    <Layout
      title="Outlet & Switch Replacement Pricing Calculator | Metroplex Pros"
      description="Get instant pricing for outlet and switch replacements in Dallas. Volume discounts up to 30% off for bulk orders. Standard, GFCI, USB, dimmer, and smart device installations."
      keywords="outlet replacement cost, switch replacement pricing, GFCI outlet installation, USB outlet cost, dimmer switch installation, Dallas electrician pricing"
    >
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
              Outlet & Switch Replacement Pricing
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#8b949e', 
              maxWidth: '800px', 
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Transparent pricing with volume discounts for bulk replacements. 
              Save up to 30% when replacing multiple outlets or switches.
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
                { number: '$45+', label: 'Starting Price' },
                { number: '30%', label: 'Max Discount' },
                { number: '8', label: 'Device Types' },
                { number: '24/7', label: 'Emergency Service' }
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
          <OutletSwitchPricing />

          {/* Device Types Section */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              What We Can Replace or Install
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem'
            }}>
              {[
                {
                  icon: '🔌',
                  title: 'Standard Outlets',
                  price: '$45',
                  description: 'Replace worn or outdated 15/20 amp outlets with new, code-compliant receptacles'
                },
                {
                  icon: '💡',
                  title: 'Standard Switches',
                  price: '$55',
                  description: 'Single-pole, 3-way, or 4-way switches for lights and fans throughout your home'
                },
                {
                  icon: '⚡',
                  title: 'GFCI Outlets',
                  price: '$85',
                  description: 'Required for bathrooms, kitchens, and outdoor areas for safety and code compliance'
                },
                {
                  icon: '📱',
                  title: 'USB Outlets',
                  price: '$95',
                  description: 'Convenient charging ports built right into your outlets - no adapters needed'
                },
                {
                  icon: '🌧️',
                  title: 'Weatherproof Outlets',
                  price: '$110',
                  description: 'Outdoor-rated outlets with protective covers for patios, decks, and exterior walls'
                },
                {
                  icon: '🎚️',
                  title: 'Dimmer Switches',
                  price: '$85',
                  description: 'Control your lighting ambiance and save energy with modern dimmer controls'
                },
                {
                  icon: '🤖',
                  title: 'Smart Switches',
                  price: '$135',
                  description: 'Voice control, scheduling, and remote access with smart home integration'
                },
                {
                  icon: '📲',
                  title: 'Smart Outlets',
                  price: '$125',
                  description: 'Control appliances remotely and monitor energy usage from your phone'
                }
              ].map((device, index) => (
                <div key={index} style={{
                  padding: '2rem',
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '12px',
                  transition: 'transform 0.2s, border-color 0.2s'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {device.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#c9d1d9',
                    marginBottom: '0.5rem'
                  }}>
                    {device.title}
                  </h3>
                  <div style={{ 
                    fontSize: '1.25rem', 
                    color: '#00f0ff', 
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    Starting at {device.price}
                  </div>
                  <p style={{ 
                    color: '#8b949e', 
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {device.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Volume Discount Explanation */}
          <div style={{ 
            marginTop: '4rem',
            padding: '3rem',
            backgroundColor: '#161b22',
            border: '2px solid #00f0ff',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              marginBottom: '1.5rem'
            }}>
              Save More with Volume Discounts
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#8b949e',
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              The more outlets or switches you need replaced, the more you save. 
              Discounts apply automatically to your entire order.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              {[
                { qty: '1-2', discount: '0%', label: 'Standard Rate' },
                { qty: '3-5', discount: '10%', label: 'Small Bundle' },
                { qty: '6-10', discount: '18%', label: 'Medium Bundle' },
                { qty: '11-25', discount: '25%', label: 'Large Bundle' },
                { qty: '26+', discount: '30%', label: 'Whole Home' }
              ].map((tier, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  backgroundColor: index === 4 ? '#0d4754' : '#21262d',
                  border: index === 4 ? '2px solid #00f0ff' : '1px solid #30363d',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    fontSize: '1.75rem', 
                    fontWeight: '700', 
                    color: '#00f0ff',
                    marginBottom: '0.5rem'
                  }}>
                    {tier.discount}
                  </div>
                  <div style={{ 
                    color: '#c9d1d9', 
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}>
                    {tier.qty} items
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                    {tier.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Why Choose Metroplex Pros
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                {
                  icon: '✅',
                  title: 'Licensed & Insured',
                  description: 'All work performed by licensed electricians with full liability insurance'
                },
                {
                  icon: '⚡',
                  title: 'Fast Service',
                  description: 'Same-day and next-day appointments available. Emergency service 24/7'
                },
                {
                  icon: '💯',
                  title: 'Quality Guaranteed',
                  description: 'Premium materials and craftsmanship backed by our satisfaction guarantee'
                },
                {
                  icon: '🛡️',
                  title: 'Warranty Protected',
                  description: '1-year warranty on all parts and labor for complete peace of mind'
                },
                {
                  icon: '💰',
                  title: 'Transparent Pricing',
                  description: 'No hidden fees. You see the full price before we start any work'
                },
                {
                  icon: '🏆',
                  title: 'Local Experts',
                  description: 'Family-owned and operated in Dallas since 2019. We know local codes'
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
                  q: 'How do volume discounts work?',
                  a: 'Volume discounts automatically apply to your entire order based on total quantity. For example, if you order 10 outlets, you get 18% off the per-item price for all 10 units. The discount applies to all items in your order combined.'
                },
                {
                  q: 'Can I mix different types of devices?',
                  a: 'Yes! You can combine standard outlets, GFCI outlets, switches, dimmers, and smart devices in one order. The volume discount applies to the total quantity across all device types.'
                },
                {
                  q: 'What if I have aluminum wiring or safety concerns?',
                  a: 'If you select any safety flags in the calculator (sparking, warm outlets, aluminum wiring), we\'ll schedule a diagnostic visit to properly assess the situation. Some issues require on-site evaluation for accurate and safe pricing.'
                },
                {
                  q: 'What\'s included in the price?',
                  a: 'Our pricing includes the service call, removal of old devices, installation of new devices, testing, and cleanup. We use quality materials and all work is code-compliant with a 1-year warranty.'
                },
                {
                  q: 'Do you offer same-day service?',
                  a: 'Yes! We offer same-day service for standard hours appointments when available. Emergency service is available 24/7 with a 35% premium on the service call fee.'
                },
                {
                  q: 'What areas do you serve?',
                  a: 'We serve all of Dallas and surrounding areas including Highland Park, University Park, Lakewood, Garland, Irving, and Richardson. Some areas may have slight pricing adjustments based on location.'
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
              Ready to Upgrade Your Outlets & Switches?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#c9d1d9',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Get your estimate above and schedule service today. 
              Same-day appointments available!
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
                Schedule Online
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
