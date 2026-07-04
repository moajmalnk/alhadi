const fs = require('fs');
const path = 'public/assets/css/styles.css';
let css = fs.readFileSync(path, 'utf8');

// Remove the global override block
css = css.replace(/\/\* GLOBAL BUTTON TEXT COLOR OVERRIDE \*\/(.|\n)*?\.btn-text \{ color: #ffffff !important; \}/g, '');

// Actually, in Bootstrap 5, the primary button text color is defined by `--bs-btn-color` inside `.btn-primary`.
// Let's explicitly target `.btn-primary` and `.btn-dark` and just `.btn` and set their text color to #fff where appropriate, without !important if possible.
// Wait, my previous regex `css = css.replace(/--bs-btn-color:\s*#000;/g, '--bs-btn-color: #fff;');` might have already worked. Let's see if it did by checking if `.btn-primary` has white color.

// Let's add a more specific override at the end instead of the generic one.
const specificOverride = `
/* SPECIFIC BUTTON COLOR FIXES */
.btn-primary, .bg-primary.btn {
    --bs-btn-color: #ffffff;
    --bs-btn-hover-color: #ffffff;
    color: #ffffff;
}
.btn-primary:hover, .bg-primary.btn:hover {
    color: #ffffff;
}
.btn-dark, .bg-dark.btn {
    --bs-btn-color: #ffffff;
    color: #ffffff;
}
.btn-dark:hover, .bg-dark.btn:hover {
    /* If btn-dark background becomes white on hover, color should be dark */
    color: #1A1A1A;
}

/* For elements explicitly using .btn-text inside dark buttons */
.btn-primary .btn-text, .btn-dark .btn-text {
    color: inherit;
}
`;

css += specificOverride;

fs.writeFileSync(path, css);
console.log('Fixed button text colors more gracefully.');
