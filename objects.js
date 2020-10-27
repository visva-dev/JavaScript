let car = {
  color: 'red',
  maker: 'Opel',
  model: 'Ascona',
  price: 100 + ' ' + 'euros',
  print: function () {
    alert(this.maker + ' ' + this.model + ' ' + 'SUCKS!');
  }
}

// alert(car.color)
// alert(car['price']);
car.print()