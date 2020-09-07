/**
 * Stop modals from hiding if modal content is clicked.
 */
export const stopModalContentPropagation = () => {
	Array.from(document.querySelectorAll('.modal-content' as 'div')).forEach((modalContent) => {
		modalContent.addEventListener('click', (e) => e.stopPropagation());
	});
};

/**
 * Helper function to get form data in the supported format.
 */
export const getFormDataString = (formEl: HTMLFormElement) => {
	const formData = new FormData(formEl);
	const data = [];

	for (const [key, value] of formData) {
		data.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
	}

	return data.join('&');
};
