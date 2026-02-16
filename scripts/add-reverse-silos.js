const fs = require('fs');
const path = require('path');

// Map of all service pages with their silo and URL
const SERVICE_PAGES = {
  // Electrical services
  'pages/services/electrical/lighting.js': {
    silo: 'electrical',
    url: '/services/electrical/lighting'
  },
  'pages/services/electrical/outlets.js': {
    silo: 'electrical',
    url: '/services/electrical/outlets'
  },
  'pages/services/electrical/generators.js': {
    silo: 'electrical',
    url: '/services/electrical/generators'
  },
  'pages/services/electrical/code-compliance.js': {
    silo: 'electrical',
    url: '/services/electrical/code-compliance'
  },
  'pages/services/electrical/rewiring.js': {
    silo: 'electrical',
    url: '/services/electrical/rewiring'
  },
  'pages/services/electrical/basic-inspection.js': {
    silo: 'electrical',
    url: '/services/electrical/basic-inspection'
  },
  'pages/services/electrical/comprehensive-inspection.js': {
    silo: 'electrical',
    url: '/services/electrical/comprehensive-inspection'
  },
  'pages/services/electrical/luxury-inspection.js': {
    silo: 'electrical',
    url: '/services/electrical/luxury-inspection'
  },
  
  // Plumbing services
  'pages/services/plumbing/water-heater-repair.js': {
    silo: 'plumbing',
    url: '/services/plumbing/water-heater-repair'
  },
  'pages/services/plumbing/leak-repair.js': {
    silo: 'plumbing',
    url: '/services/plumbing/leak-repair'
  },
  'pages/services/plumbing/drain-cleaning.js': {
    silo: 'plumbing',
    url: '/services/plumbing/drain-cleaning'
  },
  'pages/services/plumbing/fixture-installation.js': {
    silo: 'plumbing',
    url: '/services/plumbing/fixture-installation'
  },
  'pages/services/plumbing/pipe-replacement.js': {
    silo: 'plumbing',
    url: '/services/plumbing/pipe-replacement'
  },
  'pages/services/plumbing/sewer-repair.js': {
    silo: 'plumbing',
    url: '/services/plumbing/sewer-repair'
  },
  
  // Handyman services
  'pages/services/handyman/drywall-repair.js': {
    silo: 'handyman',
    url: '/services/handyman/drywall-repair'
  },
  'pages/services/handyman/painting.js': {
    silo: 'handyman',
    url: '/services/handyman/painting'
  },
  'pages/services/handyman/door-repair.js': {
    silo: 'handyman',
    url: '/services/handyman/door-repair'
  },
  'pages/services/handyman/window-treatments.js': {
    silo: 'handyman',
    url: '/services/handyman/window-treatments'
  },
  'pages/services/handyman/general-repairs.js': {
    silo: 'handyman',
    url: '/services/handyman/general-repairs'
  },
  'pages/services/handyman/fixture-installation.js': {
    silo: 'handyman',
    url: '/services/handyman/fixture-installation'
  },
  'pages/services/handyman/wall-art-hanging.js': {
    silo: 'handyman',
    url: '/services/handyman/wall-art-hanging'
  },
  
  // Smart home services
  'pages/services/smart-home/thermostats.js': {
    silo: 'smartHome',
    url: '/services/smart-home/thermostats'
  },
  'pages/services/smart-home/lighting.js': {
    silo: 'smartHome',
    url: '/services/smart-home/lighting'
  },
  'pages/services/smart-home/locks.js': {
    silo: 'smartHome',
    url: '/services/smart-home/locks'
  },
  'pages/services/smart-home/doorbells.js': {
    silo: 'smartHome',
    url: '/services/smart-home/doorbells'
  },
  'pages/services/smart-home/security.js': {
    silo: 'smartHome',
    url: '/services/smart-home/security'
  },
  'pages/services/smart-home/automation.js': {
    silo: 'smartHome',
    url: '/services/smart-home/automation'
  }
};

function addReverseSiloToFile(filePath, silo, url) {
  const fullPath = path.join(process.cwd(), filePath);
  
  // Skip if file doesn't exist
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if already has ReverseSiloLinks
  if (content.includes('ReverseSiloLinks')) {
    console.log(`✅ Already has reverse silos: ${filePath}`);
    return false;
  }
  
  // Determine the correct import path based on folder depth
  const depth = filePath.split('/').length - 2; // minus 'pages' and filename
  const importPath = '../'.repeat(depth) + 'components/ReverseSiloLinks';
  
  // Add import at the top
  const importStatement = `import ReverseSiloLinks from '${importPath}'`;
  
  // Find the last import statement
  const importRegex = /import .+ from .+\n/g;
  const imports = content.match(importRegex);
  
  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    content = content.replace(lastImport, lastImport + importStatement + '\n');
  } else {
    // No imports found, add at the top
    content = importStatement + '\n\n' + content;
  }
  
  // Add the component before closing </Layout>
  const reverseSiloComponent = `
      {/* Reverse Silo Links - SEO Internal Linking */}
      <ReverseSiloLinks 
        currentPage="${url}"
        currentSilo="${silo}"
        variant="full"
      />`;
  
  // Find the closing </Layout> tag and add component before it
  content = content.replace(/(\s*)<\/Layout>/, `${reverseSiloComponent}\n$1</Layout>`);
  
  // Write back to file
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Added reverse silos to: ${filePath}`);
  return true;
}

async function main() {
  console.log('🚀 Adding reverse silo links to all service pages...\n');
  
  let successful = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const [filePath, config] of Object.entries(SERVICE_PAGES)) {
    try {
      const result = addReverseSiloToFile(filePath, config.silo, config.url);
      if (result) {
        successful++;
      } else {
        skipped++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      failed++;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 SUMMARY:');
  console.log(`✅ Successfully updated: ${successful} pages`);
  console.log(`⏭️  Skipped (already has): ${skipped} pages`);
  console.log(`❌ Failed: ${failed} pages`);
  console.log(`📝 Total processed: ${Object.keys(SERVICE_PAGES).length} pages`);
  console.log('='.repeat(50));
  
  if (successful > 0) {
    console.log('\n🎉 Reverse silo links added! This will significantly improve your SEO.');
    console.log('💡 Next steps:');
    console.log('   1. Run: npm run build');
    console.log('   2. Test a few pages to verify they look good');
    console.log('   3. Commit and push to deploy');
    console.log('\n📈 Expected SEO improvements:');
    console.log('   - Better internal link structure (immediate)');
    console.log('   - Improved crawlability (1-2 weeks)');
    console.log('   - Higher rankings for long-tail keywords (2-4 weeks)');
    console.log('   - Increased organic traffic (4-8 weeks)');
  }
}

main().catch(console.error);
