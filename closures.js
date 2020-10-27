// function Person(hairColor) {
//   function displayHairColor() {
//     alert(hairColor);
//   }
//   displayHairColor();
// }

// let person = new Person('red')

function Person() {
  let hairColor = 'red';

  function displayHairColor() {
    alert(hairColor);
  }

  function alertMessage() {
    alert("Good day!");
  }

  return {
    displayHairColor,
    customeName : alertMessage
  }
}

let person = new Person();
