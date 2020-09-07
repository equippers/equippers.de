/**
 * Hook into the forms to process them via fetch requests to prevent the page from reloading.
 *
 * Each form needs to have the following nested elements:
 * - `<button type="submit" />`
 * - `<p class="success message" />`
 * - `<p class="error message" />`
 */
export const setUpFormProcessing = () => {
	if (!window.fetch) {
		return; // just let native form submission deal with it
	}

	const forms = Array.from(document.querySelectorAll('form'));

	for (const form of forms) {
		const submitButton = form.querySelector<HTMLButtonElement>('button[type=submit]');
		const successMessage = form.querySelector<HTMLParagraphElement>('p.success.message');
		const errorMessage = form.querySelector<HTMLParagraphElement>('p.error.message');

		if (!submitButton || !successMessage || !errorMessage) {
			return;
		}

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			errorMessage.classList.add('hidden');
			submitButton.disabled = true;

			fetch(form.action, {
				method: form.method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: getUrlEncodedFormData(form),
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error('The request has failed.');
					}

					successMessage.classList.remove('hidden');
				})
				.catch(() => {
					errorMessage.classList.remove('hidden');
					submitButton.disabled = false;
				});
		});
	}
};

/**
 * Helper to get the data from a form using `FormData`.
 */
const getUrlEncodedFormData = (form: HTMLFormElement) => {
	const data = new FormData(form);

	const replyTo = data.get('_replyto');

	if (replyTo) {
		data.append('email', replyTo);
	}

	return Array.from(data)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
		.join('&');
};
