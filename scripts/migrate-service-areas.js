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

// Service Area page mappings
const AREA_PAGES = {
  'garland': {
    filePath: 'pages/garland.js',
    name: 'Garland',
    slug: 'garland',
    displayOrder: 1,
    neighborhoods: [
      'Firewheel Town Center',
      'Lake Ray Hubbard',
      'Downtown Garland',
      'Sachse (nearby)',
      'Rowlett (nearby)'
    ],
    zipCodes: ['75040', '75041', '75042', '75043', '75044', '75046'],
    localStats: {
      population: '242,000',
      medianHomeValue: '$245,000',
      medianHomeAge: '35 years',
      customStats: [
        { label: 'Homes Built Before 1980', value: '45%' },
        { label: 'Average Electrical Panel Age', value: '30+ years' }
      ]
    }
  },
  'irving': {
    filePath: 'pages/irving.js',
    name: 'Irving',
    slug: 'irving',
    displayOrder: 2,
    neighborhoods: [
      'Las Colinas',
      'Valley Ranch',
      'Downtown Irving',
      'Hackberry Creek',
      'Northgate'
    ],
    zipCodes: ['75038', '75039', '75060', '75061', '75062', '75063'],
    localStats: {
      population: '240,000',
      medianHomeValue: '$235,000',
      medianHomeAge: '32 years',
      customStats: [
        { label: 'Commercial Properties', value: '12,000+' },
        { label: 'Mixed-Use Developments', value: 'Growing' }
      ]
    }
  },
  'richardson': {
    filePath: 'pages/richardson.js',
    name: 'Richardson',
    slug: 'richardson',
    displayOrder: 3,
    neighborhoods: [
      'Canyon Creek',
      'Arapaho Heights',
      'Richland Park',
      'Cottonwood Heights',
      'Duck Creek'
    ],
    zipCodes: ['75080', '75081', '75082', '75083'],
    localStats: {
      population: '120,000',
      medianHomeValue: '$295,000',
      medianHomeAge: '38 years',
      customStats: [
        { label: 'Tech Corridor Location', value: 'Prime' },
        { label: 'Smart Home Adoption', value: 'High' }
      ]
    }
  },
  'highland-park': {
    filePath: 'pages/highland-park.js',
    name: 'Highland Park',
    slug: 'highland-park',
    displayOrder: 4,
    neighborhoods: [
      'Armstrong Parkway',
      'Turtle Creek',
      'Lakeside',
      'Hackberry',
      'Beverly Drive'
    ],
    zipCodes: ['75205', '75219'],
    localStats: {
      population: '9,000',
      medianHomeValue: '$2,100,000',
      medianHomeAge: '65 years',
      customStats: [
        { label: 'Historic Homes', value: 'Many' },
        { label: 'Luxury Renovations', value: 'Common' }
      ]
    }
  },
  'university-park': {
    filePath: 'pages/university-park.js',
    name: 'University Park',
    slug: 'university-park',
    displayOrder: 5,
    neighborhoods: [
      'SMU Campus Area',
      'Snider Plaza',
      'Preston Hollow (nearby)',
      'Mockingbird Station (nearby)'
    ],
    zipCodes: ['75205', '75225'],
    localStats: {
      population: '25,000',
      medianHomeValue: '$1,850,000',
      medianHomeAge: '60 years',
      customStats: [
        { label: 'Historic Properties', value: '70%' },
        { label: 'Electrical Updates Needed', value: 'Frequent' }
      ]
    }
  },
  'lakewood': {
    filePath: 'pages/lakewood.js',
    name: 'Lakewood',
    slug: 'lakewood',
    displayOrder: 6,
    neighborhoods: [
      'Lakewood Heights',
      'Junius Heights',
      'Hollywood Heights',
      'White Rock Lake Area',
      'Casa View'
    ],
    zipCodes: ['75214', '75218', '75219'],
    localStats: {
      population: '60,000',
      medianHomeValue: '$550,000',
      medianHomeAge: '75 years',
      customStats: [
        { label: 'Historic District Homes', value: '1920s-1940s' },
        { label: 'Renovation Projects', value: 'Very Common' }
      ]
    }
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
async function createSEOSettings(areaData, seoData) {
  const pageName = `${areaData.name} Service Area Page`;
  
  const seoDoc = {
    _type: 'seoSettings',
    pageName: pageName,
    pageType: 'area',
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

// Create Service Area document
async function createServiceArea(areaData, heroData, description, seoId) {
  const areaDoc = {
    _type: 'serviceArea',
    name: areaData.name,
    slug: {
      _type: 'slug',
      current: areaData.slug
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
    neighborhoods: areaData.neighborhoods.map((neighborhood, index) => ({
      _type: 'neighborhood',
      _key: `neighborhood-${index}`,
      name: neighborhood
    })),
    localStats: {
      _type: 'localStats',
      population: areaData.localStats.population,
      medianHomeValue: areaData.localStats.medianHomeValue,
      medianHomeAge: areaData.localStats.medianHomeAge,
      customStats: areaData.localStats.customStats.map((stat, index) => ({
        _type: 'customStat',
        _key: `stat-${index}`,
        label: stat.label,
        value: stat.value
      }))
    },
    responseTime: '30-60 minutes',
    emergencyServices: true,
    customCTA: {
      _type: 'cta',
      headline: `Need Service in ${areaData.name}? Call Now!`,
      buttonText: 'Call (682) 466-2130',
      phoneNumber: '(682) 466-2130'
    },
    seo: {
      _type: 'reference',
      _ref: seoId
    },
    displayOrder: areaData.displayOrder,
    isActive: true
  };
  
  console.log(`  Creating Service Area: ${areaData.name}...`);
  const result = await client.create(areaDoc);
  return result._id;
}

// Main migration function
async function migrateServiceAreas() {
  console.log('🚀 Starting Service Areas Migration to Sanity...\n');
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ ERROR: SANITY_API_TOKEN environment variable is not set!');
    console.log('\nMake sure you run: export SANITY_API_TOKEN="your-token-here"\n');
    process.exit(1);
  }
  
  const results = {
    success: [],
    failed: []
  };
  
  const workspaceRoot = path.join(__dirname, '..');
  
  for (const [areaKey, areaData] of Object.entries(AREA_PAGES)) {
    console.log(`📍 Processing: ${areaData.name}...`);
    
    try {
      const filePath = path.join(workspaceRoot, areaData.filePath);
      
      if (!fs.existsSync(filePath)) {
        console.log(`  ⚠️  File not found: ${areaData.filePath}`);
        results.failed.push({ area: areaData.name, reason: 'File not found' });
        continue;
      }
      
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Extract content
      const seoData = extractSEO(fileContent);
      const heroData = extractHero(fileContent);
      const description = extractDescription(fileContent);
      
      // Create documents
      const seoId = await createSEOSettings(areaData, seoData);
      const areaId = await createServiceArea(areaData, heroData, description, seoId);
      
      console.log(`  ✅ Success! Created documents for ${areaData.name}`);
      console.log(`     SEO ID: ${seoId}`);
      console.log(`     Area ID: ${areaId}\n`);
      
      results.success.push(areaData.name);
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.log(`  ❌ Failed: ${error.message}\n`);
      results.failed.push({ area: areaData.name, reason: error.message });
    }
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 MIGRATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully migrated: ${results.success.length} service areas`);
  console.log(`❌ Failed: ${results.failed.length} service areas`);
  console.log('='.repeat(60) + '\n');
  
  if (results.success.length > 0) {
    console.log('✅ Successfully Migrated:');
    results.success.forEach(area => console.log(`   - ${area}`));
    console.log();
  }
  
  if (results.failed.length > 0) {
    console.log('❌ Failed:');
    results.failed.forEach(({ area, reason }) => console.log(`   - ${area}: ${reason}`));
    console.log();
  }
  
  console.log('\n🎉 Service Areas Migration complete!');
  console.log('\n📝 Next Steps:');
  console.log('1. Go to https://metroplexpros.sanity.studio');
  console.log('2. Check "Service Areas" - you should see 6 new areas');
  console.log('3. Review and enhance the content');
  console.log('4. Add testimonials specific to each area (optional)');
  console.log('5. Link services offered to each area (optional)');
  console.log('6. Publish when ready!\n');
}

// Run migration
migrateServiceAreas().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
