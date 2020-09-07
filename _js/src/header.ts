/**
 * Enable the navigation toggle in the header.
 */
export const enableNavToggle = () => {
	const header = document.querySelector('header');
	const navToggle = document.querySelector('header button');

	const toggleMenu = () => header && header.classList.toggle('nav-visible');

	if (navToggle) {
		navToggle.addEventListener('click', toggleMenu);
	}
};
