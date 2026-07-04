const fs = require('fs');
const path = 'public/assets/css/styles.css';
let css = fs.readFileSync(path, 'utf8');

// Remove the too-aggressive .btn * rule
css = css.replace(/\.btn\s*\*\s*\{\s*color:\s*#ffffff\s*!important;\s*\}/g, '.btn-text { color: #ffffff !important; }');

fs.writeFileSync(path, css);
console.log('Fixed button text color without breaking icons.');
