const modal = document.querySelector('#mobile-menu');
const toggleModalBtn = document.querySelector('[data-toggle-mob-menu');
const body = document.querySelector('body');
const media = window.matchMedia('(width > 768px)');

toggleModalBtn.addEventListener('click', e => {
	e.stopPropagation();
	if (toggleModalBtn.getAttribute('aria-expanded') === 'false') {
		openMenu();
	} else {
		closeMenu();
	}
});

media.addEventListener('change', e => {
	if (e.matches) {
		closeMenu();
	}
});

function closeMenu() {
	modal.setAttribute('hidden', '');
	toggleModalBtn.setAttribute('aria-expanded', false);

	body.removeEventListener('click', handleClickOutside);
	document.removeEventListener('keydown', handleClickEsc);
	modal.removeEventListener('click', handleClickOnMenu);
}

function openMenu() {
	modal.removeAttribute('hidden');
	toggleModalBtn.setAttribute('aria-expanded', true);

	body.addEventListener('click', handleClickOutside);
	document.addEventListener('keydown', handleClickEsc);
	modal.addEventListener('click', handleClickOnMenu);
}

function handleClickEsc(event) {
	if (event.key === 'Escape') {
		closeMenu();
	}
}

function handleClickOutside() {
	closeMenu();
}

function handleClickOnMenu(event) {
	event.stopPropagation();

	if (event.target.hasAttribute('data-active-el')) {
		closeMenu();
	}
}
