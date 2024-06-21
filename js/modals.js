
const btn = document.querySelector('.form-calculation__btn');

const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

const calculationInput = document.querySelectorAll('.calculation-input');

function openModal() {
	btn.addEventListener('click', () => {
		const areBothInputsNotEmpty = Array.from(calculationInput).every(input => input.value !== '');

		if (areBothInputsNotEmpty) {
			let path = btn.getAttribute('data-path');
			console.log(path);
			modal.classList.add('modal__visible');
			modalOverlay.classList.add('modal-overlay__visible');
		}
	});
}
openModal();

function closeModal() {
	modalOverlay.addEventListener('click', (e) => {
		if (e.target == modalOverlay || e.target == modalClose) {
			modalOverlay.classList.remove('modal-overlay__visible');
			modal.classList.remove('modal__visible');

		}
	});
}

closeModal();



