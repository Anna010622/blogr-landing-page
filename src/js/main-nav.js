const navItems = [...document.querySelectorAll('.main-nav .list-item')];
const nav = document.querySelector('#header-nav');

let timer;

for (let navItem of navItems) {
	navItem.addEventListener('click', e => {
		e.stopPropagation();

		if (navItem.querySelector('.sub-menu-content.open')) {
			hideSubMenuContent(navItem);
		} else {
			navItems.forEach(navItem => hideSubMenuContent(navItem));
			showSubMenuContent(navItem);
		}
	});

	if (window.matchMedia('(width >= 1280px)').matches) {
		navItem.addEventListener('mouseover', () => {
			for (let navItem of navItems) hideSubMenuContent(navItem);
			showSubMenuContent(navItem);
		});
		navItem.addEventListener('mouseout', () =>
			hideSubMenuContent(navItem, 500)
		);
	}
}

document.addEventListener('keydown', event => {
	if (event.key === 'Escape') {
		navItems.forEach(navItem => hideSubMenuContent(navItem));
	}
});

nav.addEventListener('focusout', () => {
	setTimeout(() => {
		if (!nav.contains(document.activeElement)) {
			navItems.forEach(navItem => hideSubMenuContent(navItem));
		}
	}, 0);
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
