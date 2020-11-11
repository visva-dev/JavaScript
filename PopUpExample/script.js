'use strict';

// Selecting elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Selects all items
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

// Select each item
for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].textContent);
