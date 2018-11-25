//= require load-font.js
//= require header.js

// lock hero height which is based on the viewport height (vh) unit
// (for mobile browsers with variable viewport height, e. g. Chrome on iOS)
if (Array.from) {
	Array.from(document.querySelectorAll('.hero')).map(hero => (hero.style.height = hero.offsetHeight + 'px'));
}

// hover effects on mobile
document.querySelector('body').addEventListener('touchstart', () => {});
