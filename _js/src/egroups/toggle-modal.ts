/**
 * Toggle the modal with the given id either on or off.
 */
export const toggleModal = (id: string, status: 'on' | 'off') => {
	const modalBackdrop = document.getElementById('modal-bg');

	if (modalBackdrop) {
		modalBackdrop.style.display = status == 'on' ? 'block' : 'none';
	}

	const groupModal = document.getElementById(`group-modal-${id}`);

	if (!groupModal) {
		return;
	}

	groupModal.style.display = status == 'on' ? 'block' : 'none';

	const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	const clientHeight = document.documentElement.clientHeight;
	const modalHeight = groupModal.clientHeight;

	const offset = modalHeight > clientHeight ? scrollTop + 10 : scrollTop + Math.round((clientHeight - modalHeight) / 2);

	groupModal.style.top = offset + 'px';

	// enable the button
	var sendButton = document.getElementById(`group-modal-send-${id}`) as HTMLButtonElement;
	sendButton.disabled = false;
};
