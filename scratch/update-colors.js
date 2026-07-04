const fs = require('fs');

const path = 'public/assets/css/styles.css';
let css = fs.readFileSync(path, 'utf8');

// The original neon green is #C1FF72 (and rgb 193, 255, 114)
// The original dark teal is #1F2A2E (and rgb 31, 42, 46)

// We want Primary -> Charcoal (#111111)
css = css.replace(/#C1FF72/gi, '#111111');
css = css.replace(/193,\s*255,\s*114/g, '17, 17, 17');
css = css.replace(/#daffaa/gi, '#333333'); // light primary -> lighter charcoal
css = css.replace(/218,\s*255,\s*170/g, '51, 51, 51');
css = css.replace(/#e1ffbb/gi, '#444444'); // hover primary -> hover charcoal
css = css.replace(/225,\s*255,\s*187/g, '68, 68, 68');

// We want Dark Teal -> Black (#000000) or Charcoal
css = css.replace(/#1F2A2E/gi, '#1A1A1A');
css = css.replace(/31,\s*42,\s*46/g, '26, 26, 26');

// We want secondary dark colors to be true grays rather than teal-grays
css = css.replace(/#1f2a2e/gi, '#1A1A1A'); // lowercase
css = css.replace(/#F4F8FA/gi, '#F5F5F5'); // light gray background
css = css.replace(/244,\s*248,\s*250/g, '245, 245, 245');

// Update link hover color to Gold Accent (#FFAB00)
css = css.replace(/--bs-link-hover-color:\s*#111111;/gi, '--bs-link-hover-color: #FFAB00;');
css = css.replace(/--bs-link-hover-color-rgb:\s*17,\s*17,\s*17;/gi, '--bs-link-hover-color-rgb: 255, 171, 0;');

// Update warning to Gold
css = css.replace(/--bs-warning:\s*#ffc107;/gi, '--bs-warning: #FFAB00;');
css = css.replace(/--bs-warning-rgb:\s*255,\s*193,\s*7;/gi, '--bs-warning-rgb: 255, 171, 0;');

fs.writeFileSync(path, css);
console.log('CSS colors updated successfully.');
