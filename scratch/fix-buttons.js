const fs = require('fs');
const path = 'public/assets/css/styles.css';
let css = fs.readFileSync(path, 'utf8');

// The original template probably hardcoded #000 (black) or #1F2A2E (dark teal) for button text.
// We need to change button text to white #fff.
// We can find `.btn-` classes and replace their color properties, or just globally update `--bs-btn-color` if they are set to black.

// Replace text colors inside button classes
css = css.replace(/--bs-btn-color:\s*#000;/g, '--bs-btn-color: #fff;');
css = css.replace(/--bs-btn-hover-color:\s*#000;/g, '--bs-btn-hover-color: #fff;');
css = css.replace(/--bs-btn-active-color:\s*#000;/g, '--bs-btn-active-color: #fff;');

// Sometimes they use rgb or other vars
css = css.replace(/--bs-btn-color:\s*#1A1A1A;/gi, '--bs-btn-color: #fff;');
css = css.replace(/--bs-btn-hover-color:\s*#1A1A1A;/gi, '--bs-btn-hover-color: #fff;');
css = css.replace(/--bs-btn-active-color:\s*#1A1A1A;/gi, '--bs-btn-active-color: #fff;');

// Replace generic button text color if it exists
css = css.replace(/color:\s*#1A1A1A;/gi, function(match, offset, string) {
    // only if preceded by .btn something, but it's simpler to just inject a strong rule at the end.
    return match;
});

// To be 100% sure "every button" is fixed as requested by the user, we will append a strong override at the very end of styles.css
const override = `
/* GLOBAL BUTTON TEXT COLOR OVERRIDE */
.btn, .btn-primary, .btn-secondary, .btn-dark, .btn-outline-primary {
    color: #ffffff !important;
    --bs-btn-color: #ffffff !important;
    --bs-btn-hover-color: #ffffff !important;
    --bs-btn-active-color: #ffffff !important;
}
.btn * {
    color: #ffffff !important;
}
`;

css += override;

fs.writeFileSync(path, css);
console.log('Button colors updated in styles.css');
