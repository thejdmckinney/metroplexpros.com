import Link from 'next/link'

/**
 * Reverse Silo Links Component
 * 
 * This component implements reverse silo SEO strategy by:
 * 1. Linking UP from child pages to parent topic pages
 * 2. Linking ACROSS to related sibling pages
 * 3. Passing contextual link equity throughout the site
 * 
 * Usage: Add to the bottom of service pages before footer
 */

const SILO_STRUCTURE = {
  // Main service categories
  electrical: {
    title: 'Electrical Services',
    url: '/services/electrical',
    description: 'Complete electrical solutions',
    children: [
      { title: 'Panel Upgrades', url: '/services/electrical/panel-upgrades', keywords: 'electrical panels, circuit breakers' },
      { title: 'Lighting Installation', url: '/services/electrical/lighting', keywords: 'LED lighting, recessed lights' },
      { title: 'Outlets & Switches', url: '/services/electrical/outlets', keywords: 'GFCI outlets, USB outlets' },
      { title: 'Generators', url: '/services/electrical/generators', keywords: 'backup power, generator installation' },
      { title: 'Code Compliance', url: '/services/electrical/code-compliance', keywords: 'electrical inspection, safety' },
      { title: 'Rewiring', url: '/services/electrical/rewiring', keywords: 'home rewiring, electrical upgrade' },
      { title: 'Basic Inspection', url: '/services/electrical/basic-inspection', keywords: 'electrical safety check' },
      { title: 'Comprehensive Inspection', url: '/services/electrical/comprehensive-inspection', keywords: 'detailed electrical inspection' },
      { title: 'Luxury Inspection', url: '/services/electrical/luxury-inspection', keywords: 'premium electrical inspection' }
    ]
  },
  plumbing: {
    title: 'Plumbing Services',
    url: '/services/plumbing',
    description: 'Expert plumbing solutions',
    children: [
      { title: 'Water Heater Repair', url: '/services/plumbing/water-heater-repair', keywords: 'tankless water heaters, water heater replacement' },
      { title: 'Leak Repair', url: '/services/plumbing/leak-repair', keywords: 'pipe leaks, slab leak detection' },
      { title: 'Drain Cleaning', url: '/services/plumbing/drain-cleaning', keywords: 'clogged drains, sewer cleaning' },
      { title: 'Fixture Installation', url: '/services/plumbing/fixture-installation', keywords: 'faucet installation, toilet replacement' },
      { title: 'Pipe Replacement', url: '/services/plumbing/pipe-replacement', keywords: 'repiping, pipe repair' },
      { title: 'Sewer Repair', url: '/services/plumbing/sewer-repair', keywords: 'sewer line, main line' }
    ]
  },
  handyman: {
    title: 'Handyman Services',
    url: '/services/handyman',
    description: 'Professional handyman work',
    children: [
      { title: 'Drywall Repair', url: '/services/handyman/drywall-repair', keywords: 'drywall holes, wall patching' },
      { title: 'Painting', url: '/services/handyman/painting', keywords: 'interior painting, wall painting' },
      { title: 'Door Repair', url: '/services/handyman/door-repair', keywords: 'door installation, door hanging' },
      { title: 'Window Treatments', url: '/services/handyman/window-treatments', keywords: 'blinds installation, curtain rods' },
      { title: 'General Repairs', url: '/services/handyman/general-repairs', keywords: 'home repairs, maintenance' },
      { title: 'Fixture Installation', url: '/services/handyman/fixture-installation', keywords: 'ceiling fan, light fixtures' },
      { title: 'Wall Art Hanging', url: '/services/handyman/wall-art-hanging', keywords: 'picture hanging, TV mounting' }
    ]
  },
  smartHome: {
    title: 'Smart Home Installation',
    url: '/services/smart-home-installations',
    description: 'Home automation solutions',
    children: [
      { title: 'Smart Thermostats', url: '/services/smart-home/thermostats', keywords: 'Nest thermostat, Ecobee' },
      { title: 'Smart Lighting', url: '/services/smart-home/lighting', keywords: 'Philips Hue, smart bulbs' },
      { title: 'Smart Locks', url: '/services/smart-home/locks', keywords: 'keyless entry, smart deadbolts' },
      { title: 'Video Doorbells', url: '/services/smart-home/doorbells', keywords: 'Ring doorbell, Nest Hello' },
      { title: 'Security Systems', url: '/services/smart-home/security', keywords: 'cameras, home security' },
      { title: 'Home Automation', url: '/services/smart-home/automation', keywords: 'whole home automation, hub' }
    ]
  }
}

// Related services (cross-silo linking)
const RELATED_SERVICES = {
  electrical: ['smartHome', 'plumbing'],
  plumbing: ['electrical', 'handyman'],
  handyman: ['electrical', 'plumbing'],
  smartHome: ['electrical', 'handyman']
}

export default function ReverseSiloLinks({ currentPage, currentSilo, variant = 'full' }) {
  const silo = SILO_STRUCTURE[currentSilo]
  
  if (!silo) return null

  // Get related siblings (other pages in same silo, excluding current page)
  const siblings = silo.children.filter(child => child.url !== currentPage)
  
  // Get related silos
  const relatedSilos = RELATED_SERVICES[currentSilo]?.map(key => SILO_STRUCTURE[key]) || []

  if (variant === 'compact') {
    return (
      <section style={{
        backgroundColor: '#161b22',
        padding: '2rem 0',
        borderTop: '1px solid #30363d'
      }}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
            <Link href={silo.url} style={{
              color: '#00f0ff',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ← Back to {silo.title}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section style={{
      backgroundColor: '#161b22',
      padding: '4rem 0',
      borderTop: '1px solid #30363d'
    }}>
      <div className="container">
        {/* Link UP to parent topic */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <Link href={silo.url} style={{
            color: '#00f0ff',
            fontSize: '1.2rem',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '8px',
            transition: 'all 0.3s'
          }}
          className="hover-lift">
            ← View All {silo.title}
          </Link>
        </div>

        {/* Link ACROSS to siblings (related pages in same category) */}
        {siblings.length > 0 && (
          <div style={{marginBottom: '3rem'}}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#c9d1d9',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Related {silo.title.replace(' Services', '')} Services
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {siblings.slice(0, 6).map((sibling) => (
                <Link 
                  key={sibling.url} 
                  href={sibling.url}
                  style={{
                    padding: '1.25rem',
                    backgroundColor: '#0d1117',
                    border: '1px solid #30363d',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    display: 'block'
                  }}
                  className="hover-lift"
                >
                  <div style={{
                    color: '#00f0ff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {sibling.title}
                  </div>
                  <div style={{
                    color: '#8b949e',
                    fontSize: '0.85rem'
                  }}>
                    {sibling.keywords}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Link to other service categories */}
        {relatedSilos.length > 0 && (
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#c9d1d9',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Other Services You Might Need
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {relatedSilos.map((relatedSilo) => (
                <Link 
                  key={relatedSilo.url}
                  href={relatedSilo.url}
                  style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #0d1117, #161b22)',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    display: 'block'
                  }}
                  className="hover-lift"
                >
                  <div style={{
                    color: '#00f0ff',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem'
                  }}>
                    {relatedSilo.title}
                  </div>
                  <div style={{
                    color: '#8b949e',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {relatedSilo.description}
                  </div>
                  <div style={{
                    color: '#00f0ff',
                    fontSize: '0.9rem',
                    marginTop: '1rem'
                  }}>
                    View Services →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Contextual CTA */}
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 128, 255, 0.05))',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{color: '#ffffff', fontSize: '1.5rem', marginBottom: '1rem'}}>
            Need Help with Your {silo.title.replace(' Services', '')} Project?
          </h3>
          <p style={{color: '#8b949e', marginBottom: '1.5rem'}}>
            Get a free estimate from our licensed professionals. Available 24/7 for emergencies!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/contact" className="btn">
              Get Free Estimate
            </Link>
            <Link href="tel:682-466-2130" className="btn btn-outline">
              Call (682) 466-2130
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Export the silo structure for use in other components
export { SILO_STRUCTURE, RELATED_SERVICES }
