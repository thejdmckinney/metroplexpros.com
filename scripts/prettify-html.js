const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

async function prettifyHTML() {
  const outDir = path.join(__dirname, '..', 'out');
  
  // Find all HTML files recursively
  function findHTMLFiles(dir) {
    let htmlFiles = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        htmlFiles = htmlFiles.concat(findHTMLFiles(filePath));
      } else if (file.endsWith('.html')) {
        htmlFiles.push(filePath);
      }
    }
    
    return htmlFiles;
  }
  
  const htmlFiles = findHTMLFiles(outDir);
  console.log(`Found ${htmlFiles.length} HTML files to prettify...`);
  
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf-8');
    const formatted = await prettier.format(html, { 
      parser: 'html',
      printWidth: 120,
      htmlWhitespaceSensitivity: 'ignore'
    });
    fs.writeFileSync(file, formatted);
    console.log(`✓ Prettified: ${path.relative(outDir, file)}`);
  }
  
  console.log(`\n✅ Successfully prettified ${htmlFiles.length} HTML files!`);
}

prettifyHTML().catch(console.error);
