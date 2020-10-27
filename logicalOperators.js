let myBooleanValue = false;

// if (myBooleanValue == true) {
//   alert('True value');
// } else {
//   alert("It's not true")
// }
// true = boolean
// true = true
// true = truthy
// 1 = true
// "ddff" = true
// 0 = false
// "" = false
// false = false

// because javascript is weird, this is true too:
// let condition = '55'
// if (condition == 55) {
//   alert("this variable is true");
// } else {
//   alert("No it's not true");
// }

// and this is not, fixed
// let condition = '55'
// if (condition === 55) {
//   alert("this variable is true");
// } else {
//   alert("No it's not true");
// }
// !=
// !== not equal

// let condition = 'sfsf';
// if (condition === 'Bear') {
//   alert('roar');
// } else if (condition === 'Fish') {
//   alert('blabla');
// } else {
//   alert("I don't know");
// }

// let condition = 'dgdgd';
// condition === 'Fish' ? alert('gulp') : alert("Something else")

// let condition = 'Bear';
// switch(condition) {
//   case 'Bear':
//     alert('roar');
//     break;
//   case 'Fish':
//     alert('gulp');
//     break;
//     default:
//       alert('something else....')
// }

let fruits = [ 'apple', 'orange', 'banana' ];
// alert(typeof(fruits));
// alert((fruits[0]));
// alert((fruits[1]));
// alert((fruits.length));
// alert((fruits.length -1));
// alert((fruits[fruits.length-1]));

// fruits.pop()
// fruits.push('tomato')
// fruits.shift()
// fruits.unshift('tomato')
// alert(fruits);
// alert(fruits.sort());


// for (let x = 0; fruits.length > x; x++) {
//   alert(fruits[x]);
// }


// for (let x = 0; fruits.length > x; x++) {
//   alert(fruits[x]);
//   if (fruits[x] === 'apple') {
//     alert("I like apples!");
//   }
// }



fruits = fruits.slice(0, 2)
for (let x = 0; fruits.length > x; x++) {
  alert(fruits[x]);
}