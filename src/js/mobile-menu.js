const modal = document.querySelector('#mobile-menu');
const toggleModalBtn = document.querySelector('#mobile-menu + button');

toggleModalBtn.addEventListener('click', () => {
	modal.toggleAttribute('hidden');
});
