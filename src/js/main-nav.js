const navItems = [...document.querySelectorAll('.main-nav .list-item')];

let timer;

for (let navItem of navItems) {
	navItem.addEventListener('mouseover', () => {
		for (let navItem of navItems) hideSubMenuContent(navItem);
		showSubMenuContent(navItem);
	});
	navItem.addEventListener('mouseout', () => hideSubMenuContent(navItem, 500));

	navItem.addEventListener('click', e => {
		e.stopPropagation();

		if (navItem.querySelector('.sub-menu-content.open')) {
			hideSubMenuContent(navItem);
		} else {
			navItems.forEach(navItem => hideSubMenuContent(navItem));
			showSubMenuContent(navItem);
		}
	});
}

document.addEventListener('click', () => {
	navItems.forEach(navItem => hideSubMenuContent(navItem));
});

document.addEventListener('keydown', event => {
	if (event.key === 'Escape') {
		navItems.forEach(navItem => hideSubMenuContent(navItem));
	}
});

function showSubMenuContent(navItem) {
	const subMenuTrigger = navItem.querySelector('.sub-menu-trigger');
	const subMenuContent = navItem.querySelector('.sub-menu-content');

	subMenuTrigger.setAttribute('aria-expanded', 'true');
	subMenuContent.removeAttribute('hidden');
	subMenuContent.classList.add('open');

	clearTimeout(timer);
}

function hideSubMenuContent(navItem, interval) {
	const subMenuTrigger = navItem.querySelector('.sub-menu-trigger');
	const subMenuContent = navItem.querySelector('.sub-menu-content');

	const hide = () => {
		subMenuTrigger.setAttribute('aria-expanded', 'false');
		subMenuContent.setAttribute('hidden', '');
		subMenuContent.classList.remove('open');
	};

	if (interval) {
		timer = setTimeout(() => {
			hide();
		}, interval);
	} else {
		hide();
	}
}
