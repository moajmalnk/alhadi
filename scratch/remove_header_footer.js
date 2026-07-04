const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove header block (starts with {/* Header */} and ends with </header>)
      content = content.replace(/\{\/\*\s*Header\s*\*\/\}\s*<header[\s\S]*?<\/header>/g, '');
      
      // Remove footer block (starts with <footer and ends with </footer>)
      content = content.replace(/<footer[\s\S]*?<\/footer>/g, '');
      
      // Remove get-template block (the scroll to top button)
      content = content.replace(/<div className="get-template hstack gap-2">[\s\S]*?<\/div>/g, '');
      
      // Remove Distributed by text which is outside footer sometimes
      content = content.replace(/<p className="mb-0 text-white text-opacity-70 text-md-center mt-10">Distributed by[\s\S]*?<\/p>/g, '');

      fs.writeFileSync(fullPath, content);
      console.log('Processed ' + fullPath);
    }
  }
}

processDir(path.join(__dirname, '../app'));
