const enableButton = (button: HTMLButtonElement) => (button.disabled = false);

export const loadScripts = () => {
	localStorage.setItem('egroups-gdpr-accepted', 'true');

	document.querySelector('#gdpr' as 'div')!.style.display = 'none';
	document.querySelector('#gmap-wrapper' as 'div')!.style.display = 'block';
	document.querySelectorAll('.s-group button' as 'button').forEach(enableButton);

	const scripts = [
		'https://maps.googleapis.com/maps/api/js?key=AIzaSyBH1tkp47YpmWonbvUZiTBcUogkBuTjFgk&callback=initMap',
		'https://www.google.com/recaptcha/api.js?onload=renderRecaptchas&render=explicit',
	];

	scripts.forEach((src) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.defer = true;

		document.body.appendChild(script);
	});
};
