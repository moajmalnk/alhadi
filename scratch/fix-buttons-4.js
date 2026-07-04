const fs = require('fs');
const path = 'public/assets/css/styles.css';
let css = fs.readFileSync(path, 'utf8');

// I will just add `.btn` to the specific override I created before.
// First let's find the specific override block I added and add .btn to it.
const specificOverride = `
/* ADDITIONAL GLOBAL BUTTON OVERRIDE */
.btn {
    --bs-btn-color: #ffffff !important;
    color: #ffffff !important;
}

.btn:hover {
    color: #ffffff !important;
}

/* Ensure that icons inside buttons that are MEANT to be dark on a white background stay dark */
.btn-icon, .btn-icon * {
    /* usually btn-icon has text-dark or text-white classes that we shouldn't overwrite with !important */
}
`;

// But wait! If I do .btn { color: #ffffff !important; }, does it override text-dark on child elements?
// Yes, if those child elements inherit the color, they will get #ffffff. If they have their own class like .text-dark, .text-dark has `color: #1A1A1A !important;` in Bootstrap.
// So `.btn { color: #ffffff !important; }` WILL NOT break `.text-dark` on the child icon! Because `.text-dark` has its own !important!

// So it's safe to just do:
css += `
.btn {
    color: #ffffff !important;
    --bs-btn-color: #ffffff !important;
    --bs-btn-hover-color: #ffffff !important;
}
`;

fs.writeFileSync(path, css);
console.log('Appended global .btn override safely.');
