const fs = require('fs');
const path = require('path');

// Map of page patterns to OG images
const ogImageMapping = {
  // Specific page mappings
  'university-park.js': 'og-image-university-park.png',
  'highland-park.js': 'og-image-university-park.png', // Use same image
  'lakewood.js': 'og-image-university-park.png', // Use same image
  'richardson.js': 'og-image-university-park.png', // Use same image
  'wall-art-hanging.js': 'og-image-wall-art.png',
  'window-treatments.js': 'og-image-window-treatments.png',
  'security.js': 'og-smart-home-security.png',
  'locks.js': 'og-image-smart-locks.png',
  
  // Category defaults
  'plumbing': 'og-image-plumbingx2.png',
  'electrical': 'og-image-electrical-metroplex.png',
  'handyman': 'og-image-handyman.png',
  'smart-home': 'og-image-smart-locks.png',
};

// Function to determine OG image for a file
function getOgImageForFile(filePath) {
  const fileName = path.basename(filePath);
  
  // Check specific mappings first
  if (ogImageMapping[fileName]) {
    return ogImageMapping[fileName];
  }
  
  // Check category based on path
  if (filePath.includes('plumbing')) {
    return ogImageMapping.plumbing;
  }
  if (filePath.includes('electrical')) {
    return ogImageMapping.electrical;
  }
  if (filePath.includes('handyman')) {
    return ogImageMapping.handyman;
  }
  if (filePath.includes('smart-home')) {
    return ogImageMapping['smart-home'];
  }
  
  // Default fallback
  return null;
}

// Function to add openGraph prop to Layout component
function addOpenGraphToFile(filePath, ogImage) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if already has openGraph prop
  if (content.includes('openGraph={{')) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} (already has openGraph)`);
    return false;
  }
  
  // Find the Layout component opening tag
  const layoutRegex = /<Layout\s+[^>]*>/;
  const match = content.match(layoutRegex);
  
  if (!match) {
    console.log(`⚠️  No Layout component found in ${path.basename(filePath)}`);
    return false;
  }
  
  const layoutTag = match[0];
  
  // Check if Layout already closes on same line or spans multiple lines
  const layoutEndRegex = new RegExp(`${layoutTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^>]*>`, 's');
  
  // Find where to insert the openGraph prop
  // Insert before the closing > of the Layout tag
  const insertPosition = content.indexOf(layoutTag) + layoutTag.length - 1;
  
  const openGraphProp = `
      openGraph={{
        images: [
          {
            url: 'https://www.metroplexpros.com/${ogImage}',
            width: 1200,
            height: 630,
            alt: 'Metroplex Pros - Professional Home Services in Dallas',
            type: 'image/png'
          }
        ]
      }}`;
  
  // Insert the prop before the closing >
  const updatedContent = 
    content.slice(0, insertPosition) + 
    '\n' + openGraphProp + '\n    ' +
    content.slice(insertPosition);
  
  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`✅ Updated ${path.basename(filePath)} with ${ogImage}`);
  return true;
}

// Recursively find all .js files in pages directory
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!filePath.includes('api')) { // Skip api directory
        findPageFiles(filePath, fileList);
      }
    } else if (file.endsWith('.js') && !file.startsWith('_')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
const pagesDir = path.join(__dirname, '..', 'pages');
const pageFiles = findPageFiles(pagesDir);

let updatedCount = 0;

pageFiles.forEach(filePath => {
  const ogImage = getOgImageForFile(filePath);
  
  if (ogImage) {
    const updated = addOpenGraphToFile(filePath, ogImage);
    if (updated) updatedCount++;
  }
});

console.log(`\n🎉 Updated ${updatedCount} files with OG images!`);
