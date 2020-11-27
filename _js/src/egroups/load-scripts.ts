const enableButton = (button: HTMLButtonElement) => (button.disabled = false);

const loadScript = (src: string) => {
	const script = document.createElement('script');
	script.src = src;
	script.async = true;
	script.defer = true;

	document.body.appendChild(script);
};

const loadMapScripts = () => {
	document.querySelector('#gdpr' as 'div')!.style.display = 'none';
	document.querySelector('#gmap-wrapper' as 'div')!.style.display = 'block';
	loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBH1tkp47YpmWonbvUZiTBcUogkBuTjFgk&callback=initMap');
};

export const loadScripts = (removeCaptcha?: boolean) => {
	localStorage.setItem('egroups-gdpr-accepted', 'true');
	if (document.querySelector('#gmap-wrapper' as 'div')) {
		loadMapScripts();
	}
	document.querySelectorAll('.s-group button' as 'button').forEach(enableButton);

	if (removeCaptcha === false || removeCaptcha === undefined) {
		loadScript('https://www.google.com/recaptcha/api.js?onload=renderRecaptchas&render=explicit');
	}
};
