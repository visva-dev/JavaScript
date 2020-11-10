'use strict';

// Select element
// console.log(document.querySelector('.message'));

// Select element property
console.log(document.querySelector('.message').textContent);

// Change property value
document.querySelector('.message').textContent = 'That is correct!';
document.querySelector('.number').textContent = 95;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 2;
console.log(document.querySelector('.guess').value);
