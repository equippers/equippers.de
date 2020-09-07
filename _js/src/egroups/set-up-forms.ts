import { Group } from './index';
import { toggleModal } from './toggle-modal';
import { getFormDataString } from './utils';

/**
 * Set up forms.
 */
export const setUpForms = (groups: Group[]) => {
	for (const { modalId } of groups) {
		const form = document.getElementById(`group-form-${modalId}`) as HTMLFormElement;

		form.addEventListener('submit', function (e) {
			e.preventDefault();

			// Disable the send button to prevent multiple emails
			var sendBtn = document.getElementById(`group-modal-send-${modalId}`) as HTMLButtonElement;
			sendBtn.disabled = true;

			var request = new XMLHttpRequest();

			request.addEventListener('load', function () {
				// Cloudflare returns a 302 Redirect sometimes
				if (request.status === 302 || request.status == 200) {
					alert('Nachricht gesendet.');
				} else {
					alert('Fehler beim Senden der Nachricht. Bitte versuche es später nochmal.');
				}

				toggleModal(modalId, 'off');
			});

			request.open(form.method, form.action);
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			request.send(getFormDataString(form));
		});
	}
};
