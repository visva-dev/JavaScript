// let car = {
//   color: 'red',
//   maker: 'Opel',
//   model: 'Ascona',
//   price: 100 + ' ' + 'euros',
//   print: function () {
//     alert(this.maker + ' ' + this.model + ' ' + 'SUCKS!');
//   }
// }

// let myButton = document.querySelector('#myButton');

// myButton.addEventListener('click', function () {
//   car.print();
// });

// myButton.addEventListener('click', car.print.apply(car));
// myButton.addEventListener('click', car.print.bind(car));
// myButton.addEventListener('mouseover', car.print.bind(car));

function Car(color, maker, model, price) {
  this.color = color;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.print = function () {
    alert(`${this.maker} ${this.model} ${this.color} ${this.price} Sucks!`);
  }
}

let car = new Car('red', 'Opel', 'Ascona', "100 euros ");

let myButton = document.querySelector('#myButton');
myButton.addEventListener('click', car.print.bind(car));