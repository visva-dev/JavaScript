'use strict';

// Selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Selects all items
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

// Select each item

// for (let i = 0; i < btnOpenModal.length; i++)
//   console.log(btnOpenModal[i].textContent);

const openModal = function () {
  // console.log('Button clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closedModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);
