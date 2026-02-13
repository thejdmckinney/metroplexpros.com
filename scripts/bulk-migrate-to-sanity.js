const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Sanity client configuration
const client = createClient({
  projectId: 'h3o584t2',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
});

// Pages that have already been migrated manually (skip these)
const MIGRATED_PAGES = [
  'electrical',
  'basic-inspection',
  'comprehensive-inspection',
  'luxury-inspection',
  'panel-upgrades'
];

// Service page mappings
const SERVICE_PAGES = {
  // Main service pages
  'plumbing': {
    filePath: 'pages/services/plumbing.js',
    title: 'Plumbing Services',
    slug: 'plumbing',
    parentService: null,
    displayOrder: 2
  },
  'handyman': {
    filePath: 'pages/services/handyman.js',
    title: 'Handyman Services',
    slug: 'handyman',
    parentService: null,
    displayOrder: 3
  },
  'smart-home': {
    filePath: 'pages/services/smart-home-installations.js',
    title: 'Smart Home Installation',
    slug: 'smart-home-installations',
    parentService: null,
    displayOrder: 4
  },
  'kitchen-remodeling': {
    filePath: 'pages/services/kitchen-remodeling.js',
    title: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    parentService: null,
    displayOrder: 5
  },
  'bathroom-renovation': {
    filePath: 'pages/services/bathroom-renovation.js',
    title: 'Bathroom Renovation',
    slug: 'bathroom-renovation',
    parentService: null,
    displayOrder: 6
  },
  
  // Electrical sub-pages (not yet migrated)
  'code-compliance': {
    filePath: 'pages/services/electrical/code-compliance.js',
    title: 'Electrical Code Compliance',
    slug: 'code-compliance',
    parentService: 'electrical',
    displayOrder: 107
  },
  'generators': {
    filePath: 'pages/services/electrical/generators.js',
    title: 'Generator Installation',
    slug: 'generators',
    parentService: 'electrical',
    displayOrder: 108
  },
  'lighting': {
    filePath: 'pages/services/electrical/lighting.js',
    title: 'Lighting Installation',
    slug: 'lighting',
    parentService: 'electrical',
    displayOrder: 109
  },
  'outlets': {
    filePath: 'pages/services/electrical/outlets.js',
    title: 'Outlets & Switches',
    slug: 'outlets',
    parentService: 'electrical',
    displayOrder: 110
  },
  'rewiring': {
    filePath: 'pages/services/electrical/rewiring.js',
    title: 'Home Rewiring',
    slug: 'rewiring',
    parentService: 'electrical',
    displayOrder: 111
  },
  
  // Plumbing sub-pages
  'drain-cleaning': {
    filePath: 'pages/services/plumbing/drain-cleaning.js',
    title: 'Drain Cleaning',
    slug: 'drain-cleaning',
    parentService: 'plumbing',
    displayOrder: 201
  },
  'fixture-installation-plumbing': {
    filePath: 'pages/services/plumbing/fixture-installation.js',
    title: 'Plumbing Fixture Installation',
    slug: 'fixture-installation',
    parentService: 'plumbing',
    displayOrder: 202
  },
  'leak-repair': {
    filePath: 'pages/services/plumbing/leak-repair.js',
    title: 'Leak Repair',
    slug: 'leak-repair',
    parentService: 'plumbing',
    displayOrder: 203
  },
  'pipe-replacement': {
    filePath: 'pages/services/plumbing/pipe-replacement.js',
    title: 'Pipe Replacement',
    slug: 'pipe-replacement',
    parentService: 'plumbing',
    displayOrder: 204
  },
  'sewer-repair': {
    filePath: 'pages/services/plumbing/sewer-repair.js',
    title: 'Sewer Repair',
    slug: 'sewer-repair',
    parentService: 'plumbing',
    displayOrder: 205
  },
  'water-heater-repair': {
    filePath: 'pages/services/plumbing/water-heater-repair.js',
    title: 'Water Heater Repair',
    slug: 'water-heater-repair',
    parentService: 'plumbing',
    displayOrder: 206
  },
  
  // Handyman sub-pages
  'door-repair': {
    filePath: 'pages/services/handyman/door-repair.js',
    title: 'Door Repair',
    slug: 'door-repair',
    parentService: 'handyman',
    displayOrder: 301
  },
  'drywall-repair': {
    filePath: 'pages/services/handyman/drywall-repair.js',
    title: 'Drywall Repair',
    slug: 'drywall-repair',
    parentService: 'handyman',
    displayOrder: 302
  },
  'fixture-installation-handyman': {
    filePath: 'pages/services/handyman/fixture-installation.js',
    title: 'Fixture Installation',
    slug: 'fixture-installation',
    parentService: 'handyman',
    displayOrder: 303
  },
  'general-repairs': {
    filePath: 'pages/services/handyman/general-repairs.js',
    title: 'General Repairs',
    slug: 'general-repairs',
    parentService: 'handyman',
    displayOrder: 304
  },
  'painting': {
    filePath: 'pages/services/handyman/painting.js',
    title: 'Interior Painting',
    slug: 'painting',
    parentService: 'handyman',
    displayOrder: 305
  },
  'wall-art-hanging': {
    filePath: 'pages/services/handyman/wall-art-hanging.js',
    title: 'Wall Art Hanging',
    slug: 'wall-art-hanging',
    parentService: 'handyman',
    displayOrder: 306
  },
  'window-treatments': {
    filePath: 'pages/services/handyman/window-treatments.js',
    title: 'Window Treatments',
    slug: 'window-treatments',
    parentService: 'handyman',
    displayOrder: 307
  },
  
  // Smart Home sub-pages
  'automation': {
    filePath: 'pages/services/smart-home/automation.js',
    title: 'Home Automation',
    slug: 'automation',
    parentService: 'smart-home',
    displayOrder: 401
  },
  'doorbells': {
    filePath: 'pages/services/smart-home/doorbells.js',
    title: 'Smart Doorbells',
    slug: 'doorbells',
    parentService: 'smart-home',
    displayOrder: 402
  },
  'lighting-smart': {
    filePath: 'pages/services/smart-home/lighting.js',
    title: 'Smart Lighting',
    slug: 'lighting',
    parentService: 'smart-home',
    displayOrder: 403
  },
  'locks': {
    filePath: 'pages/services/smart-home/locks.js',
    title: 'Smart Locks',
    slug: 'locks',
    parentService: 'smart-home',
    displayOrder: 404
  },
  'security': {
    filePath: 'pages/services/smart-home/security.js',
    title: 'Smart Security Systems',
    slug: 'security',
    parentService: 'smart-home',
    displayOrder: 405
  },
  'thermostats': {
    filePath: 'pages/services/smart-home/thermostats.js',
    title: 'Smart Thermostats',
    slug: 'thermostats',
    parentService: 'smart-home',
    displayOrder: 406
  }
};

// Extract SEO data from Layout component
function extractSEO(fileContent) {
  const titleMatch = fileContent.match(/title="([^"]*)"/);
  const descMatch = fileContent.match(/description="([^"]*)"/);
  const keywordsMatch = fileContent.match(/keywords="([^"]*)"/);
  const canonicalMatch = fileContent.match(/canonicalUrl="([^"]*)"/);
  
  return {
    metaTitle: titleMatch ? titleMatch[1] : '',
    metaDescription: descMatch ? descMatch[1] : '',
    keywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim()) : [],
    canonicalUrl: canonicalMatch ? canonicalMatch[1] : ''
  };
}

// Extract hero section content
function extractHero(fileContent) {
  const heroTitleMatch = fileContent.match(/<h1[^>]*hero-title[^>]*>([\s\S]*?)<\/h1>/);
  const heroSubtitleMatch = fileContent.match(/<p[^>]*hero-subtitle[^>]*>([\s\S]*?)<\/p>/);
  
  let heroHeadline = '';
  let heroSubheadline = '';
  
  if (heroTitleMatch) {
    heroHeadline = heroTitleMatch[1]
      .replace(/<span[^>]*>/g, '')
      .replace(/<\/span>/g, '')
      .replace(/<br\s*\/?>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  
  if (heroSubtitleMatch) {
    heroSubheadline = heroSubtitleMatch[1]
      .replace(/<[^>]*>/g, '')
      .replace(/•/g, '•')
      .trim();
  }
  
  return { heroHeadline, heroSubheadline };
}

// Extract first paragraph for description
function extractDescription(fileContent) {
  const descMatch = fileContent.match(/<p[^>]*hero-description[^>]*>([\s\S]*?)<\/p>/);
  if (descMatch) {
    return descMatch[1]
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return '';
}

// Create SEO Settings document
async function createSEOSettings(pageData, seoData) {
  const pageName = `${pageData.title} Page`;
  const pageType = pageData.parentService ? 'service' : 'service';
  
  const seoDoc = {
    _type: 'seoSettings',
    pageName: pageName,
    pageType: pageType,
    metaTitle: seoData.metaTitle,
    metaDescription: seoData.metaDescription,
    keywords: seoData.keywords,
    ogTitle: seoData.metaTitle.split('|')[0].trim(),
    ogDescription: seoData.metaDescription.substring(0, 160),
    canonicalUrl: seoData.canonicalUrl,
    noindex: false,
    nofollow: false
  };
  
  console.log(`  Creating SEO Settings: ${pageName}...`);
  const result = await client.create(seoDoc);
  return result._id;
}

// Create Service Page document
async function createServicePage(pageData, heroData, description, seoId) {
  const serviceDoc = {
    _type: 'servicePage',
    title: pageData.title,
    slug: {
      _type: 'slug',
      current: pageData.slug
    },
    heroHeadline: heroData.heroHeadline,
    heroSubheadline: heroData.heroSubheadline,
    description: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: description,
            marks: []
          }
        ]
      }
    ],
    features: [
      {
        _type: 'feature',
        _key: 'feat1',
        feature: 'Licensed Professionals',
        description: 'All our technicians are licensed, insured, and highly trained professionals.'
      },
      {
        _type: 'feature',
        _key: 'feat2',
        feature: '24/7 Service Available',
        description: 'Available round the clock for urgent service needs and emergencies.'
      },
      {
        _type: 'feature',
        _key: 'feat3',
        feature: 'Quality Guaranteed',
        description: 'We stand behind our work with comprehensive warranties and guarantees.'
      }
    ],
    faqs: [
      {
        _type: 'faq',
        _key: 'faq1',
        question: `How much does ${pageData.title.toLowerCase()} cost?`,
        answer: 'Costs vary based on the scope of work. Contact us at (682) 466-2130 for a detailed quote tailored to your specific needs.'
      },
      {
        _type: 'faq',
        _key: 'faq2',
        question: 'Do you offer emergency service?',
        answer: 'Yes! We provide 24/7 emergency service for urgent issues. Call (682) 466-2130 anytime for immediate assistance.'
      },
      {
        _type: 'faq',
        _key: 'faq3',
        question: 'Are you licensed and insured?',
        answer: 'Absolutely. We are fully licensed, insured, and bonded. All our work meets or exceeds local building codes.'
      }
    ],
    callToAction: {
      _type: 'cta',
      headline: `Need ${pageData.title}? Call Now!`,
      buttonText: 'Call (682) 466-2130',
      phoneNumber: '(682) 466-2130'
    },
    seo: {
      _type: 'reference',
      _ref: seoId
    },
    displayOrder: pageData.displayOrder,
    isActive: true
  };
  
  console.log(`  Creating Service Page: ${pageData.title}...`);
  const result = await client.create(serviceDoc);
  return result._id;
}

// Main migration function
async function migratePages() {
  console.log('🚀 Starting Bulk Migration to Sanity...\n');
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ ERROR: SANITY_API_TOKEN environment variable is not set!');
    console.log('\nTo set it:');
    console.log('1. Go to https://www.sanity.io/manage');
    console.log('2. Select your project: metroplexpros.com');
    console.log('3. Go to API > Tokens');
    console.log('4. Create a token with "Editor" permissions');
    console.log('5. Run: export SANITY_API_TOKEN="your-token-here"');
    console.log('6. Then run this script again\n');
    process.exit(1);
  }
  
  const results = {
    success: [],
    failed: [],
    skipped: []
  };
  
  const workspaceRoot = path.join(__dirname, '..');
  
  for (const [pageKey, pageData] of Object.entries(SERVICE_PAGES)) {
    // Skip already migrated pages
    if (MIGRATED_PAGES.includes(pageData.slug)) {
      console.log(`⏭️  Skipping ${pageData.title} (already migrated manually)\n`);
      results.skipped.push(pageData.title);
      continue;
    }
    
    console.log(`📄 Processing: ${pageData.title}...`);
    
    try {
      const filePath = path.join(workspaceRoot, pageData.filePath);
      
      if (!fs.existsSync(filePath)) {
        console.log(`  ⚠️  File not found: ${pageData.filePath}`);
        results.failed.push({ page: pageData.title, reason: 'File not found' });
        continue;
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Extract content
      const seoData = extractSEO(fileContent);
      const heroData = extractHero(fileContent);
      const description = extractDescription(fileContent);
      
      // Create documents
      const seoId = await createSEOSettings(pageData, seoData);
      const serviceId = await createServicePage(pageData, heroData, description, seoId);
      
      console.log(`  ✅ Success! Created documents for ${pageData.title}`);
      console.log(`     SEO ID: ${seoId}`);
      console.log(`     Service ID: ${serviceId}\n`);
      
      results.success.push(pageData.title);
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.log(`  ❌ Failed: ${error.message}\n`);
      results.failed.push({ page: pageData.title, reason: error.message });
    }
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 MIGRATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully migrated: ${results.success.length} pages`);
  console.log(`⏭️  Skipped (already done): ${results.skipped.length} pages`);
  console.log(`❌ Failed: ${results.failed.length} pages`);
  console.log('='.repeat(60) + '\n');
  
  if (results.success.length > 0) {
    console.log('✅ Successfully Migrated:');
    results.success.forEach(page => console.log(`   - ${page}`));
    console.log();
  }
  
  if (results.skipped.length > 0) {
    console.log('⏭️  Skipped (Already Migrated):');
    results.skipped.forEach(page => console.log(`   - ${page}`));
    console.log();
  }
  
  if (results.failed.length > 0) {
    console.log('❌ Failed:');
    results.failed.forEach(({ page, reason }) => console.log(`   - ${page}: ${reason}`));
    console.log();
  }
  
  console.log('\n🎉 Migration complete!');
  console.log('\n📝 Next Steps:');
  console.log('1. Go to https://metroplexpros.sanity.studio');
  console.log('2. Review the created documents');
  console.log('3. Publish the documents you want to go live');
  console.log('4. Update your Next.js pages to fetch from Sanity (like electrical.js)\n');
}

// Run migration
migratePages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
