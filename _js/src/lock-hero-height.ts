/**
 * Lock the hero height.
 *
 * The height is based on the viewport height (vh) unit, thus it can change
 * while scrolling on mobile browsers with variable viewport height, e. g.
 * Chrome on iOS.
 *
 * This reads the current height and overwrites the height style so it's locked
 * into that value.
 */
export const lockHeroHeight = () => {
	for (const el of Array.from(document.querySelectorAll<HTMLElement>('.hero, .hero .content'))) {
		el.style.height = `${el.offsetHeight}px`;
	}
};
