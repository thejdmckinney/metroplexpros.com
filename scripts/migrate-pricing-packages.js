const { createClient } = require('@sanity/client');

// Sanity client configuration
const client = createClient({
  projectId: 'h3o584t2',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
});

// Pricing packages to create
const PRICING_PACKAGES = [
  {
    name: 'The $99 Monthly Plan',
    slug: '99-monthly-plan',
    packageType: 'subscription',
    price: {
      amount: 99,
      currency: 'USD',
      frequency: 'monthly',
      displayPrice: '$99/month'
    },
    shortDescription: 'Your home\'s monthly check-up for just $99. Preventative maintenance, priority service, and peace of mind.',
    fullDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The $99 Plan is your home\'s comprehensive monthly maintenance subscription. We perform preventative inspections and maintenance to catch problems before they become expensive emergencies. Think of it as a health check-up for your home - regular visits keep everything running smoothly and save you money in the long run.',
            marks: []
          }
        ]
      }
    ],
    features: [
      {
        _type: 'feature',
        _key: 'feat1',
        feature: 'Monthly Home Inspection',
        included: true,
        details: 'Comprehensive 20+ point inspection of electrical, plumbing, HVAC, and more'
      },
      {
        _type: 'feature',
        _key: 'feat2',
        feature: 'Priority Service',
        included: true,
        details: 'Jump to the front of the line for all service calls'
      },
      {
        _type: 'feature',
        _key: 'feat3',
        feature: '10% Off All Repairs',
        included: true,
        details: 'Members save 10% on all repair and installation work'
      },
      {
        _type: 'feature',
        _key: 'feat4',
        feature: 'No Trip Charges',
        included: true,
        details: 'Free service call visits - save $89 per visit'
      },
      {
        _type: 'feature',
        _key: 'feat5',
        feature: 'Same-Day Service',
        included: true,
        details: 'Priority scheduling for same-day appointments'
      },
      {
        _type: 'feature',
        _key: 'feat6',
        feature: 'Detailed Reports',
        included: true,
        details: 'Monthly inspection reports with photos and recommendations'
      }
    ],
    benefits: [
      'Catch problems early before they become expensive',
      'Save money with 10% discount on all services',
      'Peace of mind knowing your home is being monitored',
      'Priority service when you need it most',
      'No surprise repair bills - budget predictably'
    ],
    isFeatured: true,
    featuredLabel: 'Most Popular',
    buttonText: 'Start Your $99 Plan',
    displayOrder: 1,
    isActive: true
  },
  {
    name: 'Annual $99 Plan (Save $240)',
    slug: '99-annual-plan',
    packageType: 'subscription',
    price: {
      amount: 948,
      currency: 'USD',
      frequency: 'yearly',
      displayPrice: '$948/year (Save $240)'
    },
    shortDescription: 'Pay annually and save $240! All the benefits of the monthly plan with 2 months free.',
    fullDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Get all the benefits of The $99 Plan with our annual subscription. Pay for 10 months, get 12 months of service - that\'s 2 months completely free! Best value for homeowners who want comprehensive year-round protection.',
            marks: []
          }
        ]
      }
    ],
    features: [
      {
        _type: 'feature',
        _key: 'feat1',
        feature: 'All Monthly Plan Benefits',
        included: true,
        details: 'Everything in the monthly plan, paid annually'
      },
      {
        _type: 'feature',
        _key: 'feat2',
        feature: 'Save $240 Per Year',
        included: true,
        details: 'Pay for 10 months, get 12 - save 2 months!'
      },
      {
        _type: 'feature',
        _key: 'feat3',
        feature: '12 Monthly Inspections',
        included: true,
        details: 'Comprehensive inspection every single month'
      },
      {
        _type: 'feature',
        _key: 'feat4',
        feature: 'Priority Service All Year',
        included: true,
        details: 'Front of the line service for 365 days'
      }
    ],
    benefits: [
      'Best value - save $240 compared to monthly',
      'Lock in your rate for the entire year',
      'Never worry about missing a payment',
      'Full year of comprehensive home protection'
    ],
    discounts: {
      hasDiscount: true,
      discountAmount: 240,
      discountType: 'Annual savings'
    },
    isFeatured: false,
    featuredLabel: 'Best Value',
    buttonText: 'Save with Annual Plan',
    displayOrder: 2,
    isActive: true
  },
  {
    name: 'Emergency Service Package',
    slug: 'emergency-service-package',
    packageType: 'emergency',
    price: {
      amount: 150,
      currency: 'USD',
      frequency: 'one-time',
      displayPrice: 'Starting at $150'
    },
    shortDescription: '24/7 emergency service for urgent electrical, plumbing, or home repair issues. Fast response, expert technicians.',
    fullDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'When disaster strikes, we\'re ready 24/7/365. Our emergency service team responds quickly to urgent electrical hazards, plumbing emergencies, and critical home repairs. We arrive fast, diagnose the problem, and get your home back to safe, working condition.',
            marks: []
          }
        ]
      }
    ],
    features: [
      {
        _type: 'feature',
        _key: 'feat1',
        feature: '24/7/365 Availability',
        included: true,
        details: 'We answer the phone and dispatch immediately, any time'
      },
      {
        _type: 'feature',
        _key: 'feat2',
        feature: 'Fast Response Time',
        included: true,
        details: 'Average 30-60 minute arrival for emergencies'
      },
      {
        _type: 'feature',
        _key: 'feat3',
        feature: 'Fully Stocked Trucks',
        included: true,
        details: 'Most repairs completed on first visit'
      },
      {
        _type: 'feature',
        _key: 'feat4',
        feature: 'Licensed Professionals',
        included: true,
        details: 'Master electricians and licensed plumbers on call'
      },
      {
        _type: 'feature',
        _key: 'feat5',
        feature: 'Transparent Pricing',
        included: true,
        details: 'Upfront quotes before we start work'
      }
    ],
    benefits: [
      'Peace of mind knowing help is always available',
      'Prevent further damage with fast response',
      'Expert diagnosis and professional repairs',
      'No waiting days for an appointment'
    ],
    isFeatured: false,
    buttonText: 'Call for Emergency Service',
    displayOrder: 3,
    isActive: true
  },
  {
    name: 'New Homeowner Bundle',
    slug: 'new-homeowner-bundle',
    packageType: 'bundle',
    price: {
      amount: 399,
      currency: 'USD',
      frequency: 'one-time',
      displayPrice: '$399 (Save $200)'
    },
    shortDescription: 'Comprehensive home inspection and essential services for new homeowners. Includes electrical, plumbing, HVAC checks, and more.',
    fullDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Moving into a new home? Our New Homeowner Bundle gives you peace of mind with a comprehensive inspection of all major systems. We check electrical panels, plumbing, HVAC, safety devices, and more - then provide you with a detailed report and recommendations.',
            marks: []
          }
        ]
      }
    ],
    features: [
      {
        _type: 'feature',
        _key: 'feat1',
        feature: 'Full Home Electrical Inspection',
        included: true,
        details: 'Panel, outlets, wiring, GFCI/AFCI compliance'
      },
      {
        _type: 'feature',
        _key: 'feat2',
        feature: 'Complete Plumbing Check',
        included: true,
        details: 'Fixtures, water pressure, leaks, water heater'
      },
      {
        _type: 'feature',
        _key: 'feat3',
        feature: 'HVAC System Inspection',
        included: true,
        details: 'Heating and cooling system performance check'
      },
      {
        _type: 'feature',
        _key: 'feat4',
        feature: 'Safety Device Testing',
        included: true,
        details: 'Smoke detectors, CO detectors, fire extinguishers'
      },
      {
        _type: 'feature',
        _key: 'feat5',
        feature: 'Detailed Report with Photos',
        included: true,
        details: 'Complete documentation of all findings'
      },
      {
        _type: 'feature',
        _key: 'feat6',
        feature: 'Priority Repair Pricing',
        included: true,
        details: '15% off any repairs needed from inspection'
      }
    ],
    benefits: [
      'Know exactly what condition your new home is in',
      'Identify potential problems before they become emergencies',
      'Budget for necessary repairs and upgrades',
      'Start your homeownership journey with confidence'
    ],
    discounts: {
      hasDiscount: true,
      discountAmount: 200,
      discountType: 'Bundle savings vs individual services'
    },
    isFeatured: false,
    featuredLabel: 'New Homeowner Special',
    buttonText: 'Get New Homeowner Bundle',
    displayOrder: 4,
    isActive: true
  },
  {
    name: 'Smart Home Installation Package',
    slug: 'smart-home-package',
    packageType: 'bundle',
    price: {
      amount: 599,
      currency: 'USD',
      frequency: 'one-time',
      displayPrice: 'Starting at $599'
    },
    shortDescription: 'Transform your home with smart devices. Includes smart thermostat, doorbell, locks, and lighting - professionally installed.',
    fullDescription: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Enter the future with our Smart Home Installation Package. We professionally install and configure your choice of smart devices including thermostats, doorbells, locks, lighting, and security systems. Everything integrated and working perfectly before we leave.',
            marks: []
          }
        ]
      }
    ],
    features: [
      {
        _type: 'feature',
        _key: 'feat1',
        feature: 'Professional Installation',
        included: true,
        details: 'Proper wiring and mounting for all devices'
      },
      {
        _type: 'feature',
        _key: 'feat2',
        feature: 'Network Setup & Configuration',
        included: true,
        details: 'All devices connected and working on your Wi-Fi'
      },
      {
        _type: 'feature',
        _key: 'feat3',
        feature: 'App Setup & Training',
        included: true,
        details: 'We show you how to control everything'
      },
      {
        _type: 'feature',
        _key: 'feat4',
        feature: 'Device Options',
        included: true,
        details: 'Choose from Nest, Ring, Ecobee, Philips Hue, and more'
      },
      {
        _type: 'feature',
        _key: 'feat5',
        feature: 'Integration Support',
        included: true,
        details: 'Works with Alexa, Google Home, Apple HomeKit'
      }
    ],
    benefits: [
      'Save energy with smart thermostats',
      'Enhanced security with smart locks and cameras',
      'Convenience of voice and app control',
      'Increase home value with modern technology'
    ],
    limitations: [
      'Device hardware not included in price',
      'Requires stable Wi-Fi network',
      'Some devices require subscription services'
    ],
    isFeatured: false,
    buttonText: 'Get Smart Home Package',
    displayOrder: 5,
    isActive: true
  }
];

// Create SEO Settings for pricing page
async function createPricingSEO() {
  const seoDoc = {
    _type: 'seoSettings',
    pageName: 'Pricing & Packages Page',
    pageType: 'pricing',
    metaTitle: 'Pricing & Service Packages | $99/Month Plan | MetroPlex Pros',
    metaDescription: 'Affordable home maintenance plans starting at $99/month. Monthly inspections, priority service, 10% off repairs. Emergency services available 24/7. FREE estimates!',
    keywords: [
      'home maintenance plan',
      '99 dollar plan',
      'monthly home inspection',
      'home service subscription',
      'preventative maintenance',
      'emergency service pricing',
      'Dallas home services pricing'
    ],
    ogTitle: 'Pricing & Service Packages | $99/Month Plan',
    ogDescription: 'Affordable home maintenance plans starting at $99/month. Preventative maintenance, priority service, and peace of mind.',
    canonicalUrl: 'https://www.metroplexpros.com/pricing/',
    noindex: false,
    nofollow: false
  };
  
  console.log('  Creating SEO Settings for Pricing Page...');
  const result = await client.create(seoDoc);
  return result._id;
}

// Create pricing package document
async function createPricingPackage(packageData) {
  const packageDoc = {
    _type: 'pricingPackage',
    name: packageData.name,
    slug: {
      _type: 'slug',
      current: packageData.slug
    },
    packageType: packageData.packageType,
    price: {
      _type: 'price',
      amount: packageData.price.amount,
      currency: packageData.price.currency,
      frequency: packageData.price.frequency,
      displayPrice: packageData.price.displayPrice
    },
    shortDescription: packageData.shortDescription,
    fullDescription: packageData.fullDescription,
    features: packageData.features,
    benefits: packageData.benefits || [],
    limitations: packageData.limitations || [],
    isFeatured: packageData.isFeatured,
    featuredLabel: packageData.featuredLabel || '',
    buttonText: packageData.buttonText,
    displayOrder: packageData.displayOrder,
    isActive: packageData.isActive
  };
  
  // Add discounts if present
  if (packageData.discounts) {
    packageDoc.discounts = {
      _type: 'discount',
      hasDiscount: packageData.discounts.hasDiscount,
      discountAmount: packageData.discounts.discountAmount,
      discountType: packageData.discounts.discountType
    };
  }
  
  console.log(`  Creating Pricing Package: ${packageData.name}...`);
  const result = await client.create(packageDoc);
  return result._id;
}

// Main migration function
async function migratePricingPackages() {
  console.log('🚀 Starting Pricing Packages Migration to Sanity...\n');
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ ERROR: SANITY_API_TOKEN environment variable is not set!');
    console.log('\nMake sure you run: export SANITY_API_TOKEN="your-token-here"\n');
    process.exit(1);
  }
  
  const results = {
    success: [],
    failed: []
  };
  
  try {
    // Create SEO Settings first
    console.log('📄 Creating SEO Settings...');
    const seoId = await createPricingSEO();
    console.log(`  ✅ SEO Settings created: ${seoId}\n`);
    
    // Create each pricing package
    for (const packageData of PRICING_PACKAGES) {
      console.log(`💰 Processing: ${packageData.name}...`);
      
      try {
        const packageId = await createPricingPackage(packageData);
        
        console.log(`  ✅ Success! Created package: ${packageData.name}`);
        console.log(`     Package ID: ${packageId}\n`);
        
        results.success.push(packageData.name);
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.log(`  ❌ Failed: ${error.message}\n`);
        results.failed.push({ package: packageData.name, reason: error.message });
      }
    }
    
  } catch (error) {
    console.error(`❌ Failed to create SEO Settings: ${error.message}`);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 MIGRATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully migrated: ${results.success.length} pricing packages`);
  console.log(`❌ Failed: ${results.failed.length} pricing packages`);
  console.log('='.repeat(60) + '\n');
  
  if (results.success.length > 0) {
    console.log('✅ Successfully Migrated:');
    results.success.forEach(pkg => console.log(`   - ${pkg}`));
    console.log();
  }
  
  if (results.failed.length > 0) {
    console.log('❌ Failed:');
    results.failed.forEach(({ package: pkg, reason }) => console.log(`   - ${pkg}: ${reason}`));
    console.log();
  }
  
  console.log('\n🎉 Pricing Packages Migration complete!');
  console.log('\n📝 Next Steps:');
  console.log('1. Go to https://metroplexpros.sanity.studio');
  console.log('2. Check "Pricing Packages" - you should see 5 new packages');
  console.log('3. Review and enhance the content');
  console.log('4. Add service area availability (optional)');
  console.log('5. Link to specific services (optional)');
  console.log('6. Publish when ready!\n');
}

// Run migration
migratePricingPackages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
