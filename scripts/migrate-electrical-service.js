// Migration script to create Sanity documents from existing page content
// Run this with: node scripts/migrate-electrical-service.js

const { createClient } = require('@sanity/client')

// Create a client with write permissions
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h3o584t2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need to set this
  useCdn: false
})

async function migrateElectricalService() {
  console.log('🚀 Starting migration of Electrical Services page...\n')

  try {
    // Step 1: Create SEO Settings document
    console.log('📝 Creating SEO Settings...')
    const seoDoc = await client.create({
      _type: 'seoSettings',
      pageName: 'Electrical Services Page',
      metaTitle: 'Dallas Electrician Near Me | 24/7 Emergency Service | Licensed & Insured | MetroPlex Pros',
      metaDescription: 'Dallas Electrician Near Me | Licensed & Insured | 24/7 Emergency Electrical Service | Panel Upgrades, Rewiring, Lighting, Generators | Same-Day Service Available | Call (682) 466-2130 now!',
      keywords: [
        'electrician Dallas',
        'electrician near me Dallas',
        'electrical services DFW',
        'home electrical repair service',
        'electrical home repair',
        'home electrical repair near me',
        'panel upgrade',
        'electrical wiring',
        'lighting installation',
        'generator installation',
        'emergency electrician',
        'emergency electrician near me'
      ],
      canonicalUrl: 'https://www.metroplexpros.com/services/electrical/',
      ogTitle: 'Dallas Electrician Near Me | 24/7 Emergency Service',
      ogDescription: 'Licensed & Insured electricians serving Dallas-Fort Worth. Panel upgrades, rewiring, lighting, generators. Same-day service available!',
      pageType: 'service',
      structuredData: {
        type: 'Service',
        customSchema: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Electrical Services",
          "provider": {
            "@type": "ProfessionalService",
            "name": "MetroPlex Pros",
            "telephone": "(682) 466-2130",
            "url": "https://www.metroplexpros.com"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Texas"
          }
        }, null, 2)
      }
    })
    console.log('✅ SEO Settings created:', seoDoc._id)

    // Step 2: Create Service Page document
    console.log('\n📝 Creating Service Page document...')
    const serviceDoc = await client.create({
      _type: 'servicePage',
      title: 'Electrical Services',
      slug: {
        _type: 'slug',
        current: 'electrical'
      },
      heroHeadline: 'Professional Electrical Services for Dallas-Fort Worth',
      heroSubheadline: 'Panel Upgrades • Wiring • Lighting • Smart Home • Generators',
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [{
            _type: 'span',
            text: 'MetroPlex Pros provides comprehensive home electrical repair service throughout the Dallas-Fort Worth area. Our licensed electricians handle everything from simple outlet installations to complete electrical panel upgrades, ensuring your home\'s electrical system is safe, efficient, and up to code. Whether you need electrical home repair near me or scheduled installations, we\'re here to help 24/7.'
          }]
        }
      ],
      features: [
        {
          _type: 'object',
          _key: 'licensed',
          feature: 'Licensed Master Electricians',
          description: 'All our electricians are licensed, insured, and highly trained professionals.'
        },
        {
          _type: 'object',
          _key: 'emergency',
          feature: '24/7 Emergency Service',
          description: 'Available round the clock for urgent electrical issues and emergencies.'
        },
        {
          _type: 'object',
          _key: 'guaranteed',
          feature: 'Guaranteed Quality Work',
          description: 'We stand behind our work with comprehensive warranties and guarantees.'
        }
      ],
      subservices: [
        {
          _key: 'panel-upgrades',
          name: 'Electrical Panel Upgrades',
          icon: '⚡',
          description: 'Upgrade from 100-150 amp to 200 amp service. Essential for modern homes with increased electrical demands from HVAC, appliances, home offices, and EV charging.',
          slug: 'panel-upgrades'
        },
        {
          _key: 'outlets-switches',
          name: 'Outlets & Switches',
          icon: '🔌',
          description: 'Installation, replacement, and upgrades for outlets and switches throughout your property. GFCI and AFCI protection for safety and code compliance.',
          slug: 'outlets'
        },
        {
          _key: 'lighting',
          name: 'Lighting Installation',
          icon: '💡',
          description: 'Interior and exterior lighting solutions including recessed lighting, chandeliers, landscape lighting, and security lighting.',
          slug: 'lighting'
        },
        {
          _key: 'smart-home',
          name: 'Smart Home Electrical',
          icon: '🏠',
          description: 'Electrical infrastructure for smart home devices. Proper wiring for thermostats, doorbells, security systems, and whole-home automation.',
          slug: 'smart-home-installations'
        },
        {
          _key: 'rewiring',
          name: 'Wiring & Rewiring',
          icon: '🔧',
          description: 'New construction wiring, home rewiring, aluminum wiring remediation, and code compliance upgrades for older homes.',
          slug: 'rewiring'
        },
        {
          _key: 'generators',
          name: 'Generator Installation',
          icon: '⚙️',
          description: 'Whole-home and portable generator installation. Keep your home powered during outages with properly installed backup power systems.',
          slug: 'generators'
        },
        {
          _key: 'ev-charger',
          name: 'EV Charger Installation',
          icon: '🚗',
          description: 'Electric vehicle charging station installation. Level 2 chargers for faster, more efficient home charging of your EV.',
          slug: 'ev-charger'
        },
        {
          _key: 'pool-spa',
          name: 'Pool & Spa Electrical',
          icon: '🏊',
          description: 'Specialized electrical work for pools, hot tubs, and spas. Pumps, heaters, lighting, and automated control systems.',
          slug: 'pool-spa'
        },
        {
          _key: 'outdoor',
          name: 'Outdoor Electrical',
          icon: '🌳',
          description: 'Exterior outlets, landscape lighting, security lighting, and electrical for outdoor living spaces.',
          slug: 'outdoor'
        },
        {
          _key: 'ceiling-fans',
          name: 'Ceiling Fan Installation',
          icon: '🔥',
          description: 'Professional ceiling fan installation and replacement. Proper support and wiring for safe, balanced operation.',
          slug: 'ceiling-fans'
        },
        {
          _key: 'commercial',
          name: 'Commercial Electrical',
          icon: '🏢',
          description: 'Electrical services for offices, retail spaces, and small commercial properties. Code-compliant installations.',
          slug: 'commercial'
        },
        {
          _key: 'emergency',
          name: 'Emergency Electrical',
          icon: '🚨',
          description: '24/7 emergency electrical service for power outages, electrical hazards, sparking outlets, and urgent safety issues.',
          slug: 'emergency'
        }
      ],
      faqs: [
        {
          _key: 'cost',
          question: 'How much does electrical work cost?',
          answer: 'Costs vary based on the specific service. Simple outlet installations start around $125, while panel upgrades range from $1,800-$4,500. Use our free electrical calculators for instant estimates, or call (682) 466-2130 for a detailed quote.'
        },
        {
          _key: 'emergency',
          question: 'Do you offer emergency electrical service?',
          answer: 'Yes! We provide 24/7 emergency electrical service for urgent issues like power outages, sparking outlets, burning smells, or any electrical hazard. Call (682) 466-2130 anytime for immediate assistance.'
        },
        {
          _key: 'licensed',
          question: 'Are your electricians licensed and insured?',
          answer: 'Absolutely. All our electricians are licensed master electricians with extensive training. We\'re fully insured and bonded, and all our work meets or exceeds local electrical codes.'
        },
        {
          _key: 'service-area',
          question: 'What areas do you serve?',
          answer: 'We serve the entire Dallas-Fort Worth metroplex including Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson, and surrounding areas.'
        },
        {
          _key: 'permit',
          question: 'Do I need a permit for electrical work?',
          answer: 'Many electrical projects require permits. We handle all permitting and inspections as part of our service to ensure your work is completely code-compliant and properly documented.'
        }
      ],
      callToAction: {
        headline: 'Need Electrical Service? Call Now!',
        buttonText: 'Call (682) 466-2130',
        phoneNumber: '(682) 466-2130'
      },
      seo: {
        _type: 'reference',
        _ref: seoDoc._id
      },
      displayOrder: 1,
      isActive: true
    })
    
    console.log('✅ Service Page created:', serviceDoc._id)
    console.log('\n🎉 Migration complete! Check your Sanity Studio.\n')

  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    console.error(error)
  }
}

// Run the migration
migrateElectricalService()
