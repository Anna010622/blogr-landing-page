const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
	const activeItem = e.target.closest('.accordion-item');

	if (checkIfOpen(activeItem)) {
		return;
	}

	toggleAccordion(activeItem);
});

function toggleAccordion(itemToActivate) {
	const buttons = itemToActivate.parentElement.querySelectorAll('button');

	const contents =
		itemToActivate.parentElement.querySelectorAll('.accordion-content');

	buttons.forEach(button => {
		button.setAttribute('aria-expanded', false);
	});

	contents.forEach(content => {
		content.setAttribute('hidden', true);
	});

	itemToActivate.querySelector('button').setAttribute('aria-expanded', true);

	itemToActivate.querySelector('.accordion-content').toggleAttribute('hidden');
}

function checkIfOpen(activeItem) {
	const activeButton = activeItem.querySelector('button');
	let open = activeButton.getAttribute('aria-expanded') === 'true';

	if (open) {
		activeButton.setAttribute('aria-expanded', !open);
		activeItem.querySelector('.accordion-content').toggleAttribute('hidden');
		return true;
	}
	return false;
}
