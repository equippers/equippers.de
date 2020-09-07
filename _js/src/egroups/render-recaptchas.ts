import { Group } from './index';

export const renderRecaptchas = (groups: Group[]) => () => {
	groups.forEach((group) => {
		grecaptcha.render(`html_element_${group.modalId}`, {
			sitekey: '6LeW2uIUAAAAAEtrsdn7MavR-8HvIhEe44jaUhYd',
		});
	});
};
