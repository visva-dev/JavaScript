// // Class

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1990');
// const person2 = new Person('Mary', 'Smith', '12-8-1999');

// console.log(person2.getFullName());
// console.log(person1);

// ---------------------------------------DOM
// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// loop
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Helloooo'
// ul.children[1].innerText = 'Visva';
// ul.lastElementChild.innerHTML = '<h1>Helloooo</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// btn.addEventListener('click', (e) => {
// e.preventDefault();
// document.querySelector('#my-form').style.background = '#ccc';
// document.querySelector('body').classList.add('bg-dark');
// });
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    usersList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}
