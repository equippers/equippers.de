/**
 * Hack to enable hover effects on mobile.
 */
export const enableMobileHover = () => {
	document.body.addEventListener('touchstart', () => {});
};
