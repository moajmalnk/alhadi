const fs = require('fs');
const path = require('path');

const inputDir = 'c:\\\\work_codo\\\\alhadi-2\\\\Studiova-1.0.0\\\\html';
const outputDir = 'c:\\\\work_codo\\\\alhadi-2\\\\al-hadi\\\\app';

function convertHtmlToJsx(htmlContent) {
  let fixedContent = htmlContent.replace(
    'interacting with our platform.\r\n        <p class="fs-5 text-dark fw-medium mb-0">As noted',
    'interacting with our platform.\r\n        </p>\r\n        <p class="fs-5 text-dark fw-medium mb-0">As noted'
  );
  fixedContent = fixedContent.replace(
    'interacting with our platform.\n        <p class="fs-5 text-dark fw-medium mb-0">As noted',
    'interacting with our platform.\n        </p>\n        <p class="fs-5 text-dark fw-medium mb-0">As noted'
  );
  fixedContent = fixedContent.replace(/target="_blank"\s+target="_blank"/g, 'target="_blank"');

  const bodyMatch = fixedContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return '';
  let body = bodyMatch[1];

  body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  body = body.replace(/\.\.\/assets\//g, '/assets/');
  body = body.replace(/\.\/assets\//g, '/assets/');
  
  body = body.replace(/href="([^"]+)\.html"/g, (match, p1) => {
    if (p1 === 'index' || p1 === './index') return 'href="/"';
    if (p1.startsWith('./')) return `href="/${p1.substring(2)}"`;
    return `href="/${p1}"`;
  });

  body = body.replace(/class="/g, 'className="');
  body = body.replace(/for="/g, 'htmlFor="');

  body = body.replace(/style="background-image:\s*url\([^)]+\);?"/g, (match) => {
    const urlMatch = match.match(/url\(([^)]+)\)/);
    if (urlMatch) {
      let url = urlMatch[1];
      url = url.replace(/['"]/g, '');
      return `style={{ backgroundImage: 'url(${url})' }}`;
    }
    return match;
  });
  
  body = body.replace(/style="([^"]*)"/g, (match, styleString) => {
    if (styleString.includes('background-image')) return match;
    return match;
  });

  body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  body = body.replace(/<(img|input|br|hr|source|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  body = body.replace(/(checked|disabled|readonly|required)="[^"]*"/g, '$1');
  
  // Fix textarea rows="3" -> rows={3}
  body = body.replace(/rows="([0-9]+)"/g, 'rows={$1}');
  
  // Fix svg stroke-width
  body = body.replace(/stroke-width="/g, 'strokeWidth="');
  
  // Fix svg stroke-linecap
  body = body.replace(/stroke-linecap="/g, 'strokeLinecap="');

  // Fix svg stroke-linejoin
  body = body.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
  
  // Fix video autoplay
  body = body.replace(/\bautoplay\b/g, 'autoPlay');
  
  // Fix video playsinline
  body = body.replace(/\bplaysinline\b/g, 'playsInline');
  
  // Fix tabindex string to number
  body = body.replace(/tabindex="(-?[0-9]+)"/gi, 'tabIndex={$1}');

  return body;
}

function processFiles() {
  const files = fs.readdirSync(inputDir);
  
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const filePath = path.join(inputDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      const jsxContent = convertHtmlToJsx(content);
      
      const basename = path.basename(file, '.html');
      let folderPath = outputDir;
      
      if (basename !== 'index') {
        folderPath = path.join(outputDir, basename);
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath, { recursive: true });
        }
      }
      
      const componentName = basename.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
      let finalComponentName = basename === 'index' ? 'Home' : componentName;
      if (finalComponentName === '404') finalComponentName = 'Custom404';

      const fileOutput = `
export default function ${finalComponentName}() {
  return (
    <>
${jsxContent}
    </>
  );
}
`;

      fs.writeFileSync(path.join(folderPath, 'page.tsx'), fileOutput, 'utf-8');
      console.log(`Converted ${file} to ${folderPath}/page.tsx`);
    }
  });
}

processFiles();
