/**
 * How many milliseconds to wait for the fonts to load.
 */
const TIMEOUT_MS = 750;

/**
 * Id of the typekit web project
 */
const TYPEKIT_ID = 'rzo8uqn';

/**
 * @see https://gist.github.com/simonhaenisch/be44e97f89a4075b0d734cc0240ae6c1
 */
export const loadFonts = () => {
	if ('fetch' in window) {
		(async () => {
			const abortController = new AbortController();
			const { signal } = abortController;

			const styleTag = document.createElement('style');

			setTimeout(() => abortController.abort(), TIMEOUT_MS);

			styleTag.textContent = await (await fetch(`https://use.typekit.net/${TYPEKIT_ID}.css`, { signal })).text();

			document.querySelector('head > *:last-child')?.after(styleTag);

			document.documentElement.classList.add('wf-active');
		})().catch(() => console.warn('Font loading aborted due to slow network.'));
	} else {
		console.log('Web fonts were not loaded due to browser incapabilities.');
	}
};
