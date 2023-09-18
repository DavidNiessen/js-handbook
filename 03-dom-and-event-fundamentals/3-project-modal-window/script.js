'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const openModalButtons = document.querySelectorAll('.show-modal');

const showModalWindow = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModalWindow = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


// Open modal on button click
openModalButtons.forEach(button =>
  button.addEventListener('click', showModalWindow));

// Close modal on button click
closeModalButton.addEventListener('click', hideModalWindow);
// Close modal on overlay click
overlay.addEventListener('click', hideModalWindow);

// Close modal on ESC press
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('hidden')) hideModalWindow();
});