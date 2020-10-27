// Use an Array to Store a Collection of Data
let simpleArray = ['one', 2, true];
console.log(simpleArray.length);

// Access an Array's Contents Using Bracket Notation
let ourArray = ["a", "b", "c"]
let ourVariable = ourArray[0]
// ourVariable equals "a"

// In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:
ourArray[1] = 'Something else'
// ourArray now equals ["a", "Something else", "c"];

// the push() method adds elements to the end of an array, and unshift() adds elements to the beginning
let twentyThree = 'XXIII';
let romanNumbers = ['XXI', 'XXII'];

romanNumbers.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumbers.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']Notice that we can also pass variables, 
// which allows us even greater flexibility in dynamically modifying our array's data.
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
// [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]

// pop() removes an element from the end of an array, while shift() removes an element from the beginning. 
// The key difference between pop() and shift() and their cousins push() and unshift(), 
// is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

// Let's take a look:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
// We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
// returns 'hello'
// greetings now equals []

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
// [ 'challenge', 'complete' ]

// splice() allows us to remove any number of consecutive elements from anywhere in an array.
// splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. 
// The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. 
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2)
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice((1, 1), (2,4))
// Only change code above this line
console.log(arr);
// [ 2, 5, 2, 1 ]

// ------------------------------
// you can use the third parameter, comprised of one or more element(s), to add to the array.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
// ---------------------------------------------------
function htmlColorNames(arr) {
  // Only change code below this line
  const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// ----------------------------------------------------------------------------

// Copy Array Items Using slice()

// slice() takes only 2 parameters — the first is the index at which to begin extraction, 
// and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). 
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
// -------------------------------------------------
function forecast(arr) {
  // Only change code below this line
  let sun = arr.slice(2, 4)
  return sun;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// [ 'warm', 'sunny' ]

// Copy an Array with the Spread Operator

// ES6's new spread operator allows us to easily copy all of an array's elements, 
// in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
// In practice, we can use the spread operator to copy an array like so:
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
// [ [ true, false, true ], [ true, false, true ] ]

// Combine Arrays with the Spread Operator
// Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, 
// at any index.
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
// -------------------------------------------------------------
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']
  return sentence;
}

console.log(spreadOut());
// [ 'learning', 'to', 'code', 'is', 'fun' ]

// Check For The Presence of an Element With indexOf()

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists
// ---------------------------------------------------------
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// Iterate Through All an Array's Items Using For Loops
// JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve 
// different results (such as every(), forEach(), map(), etc.), 
// however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
// -----------------------------------------------------
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex multi-dimensional arrays

let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

// we can still very easily access the deepest levels of an array this complex with bracket notation:
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?

// And now that we know where that piece of data is, we can reset it if we need to:
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
// -------------------------------
let myNestedArray = [
  // Only change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
  // Only change code above this line
];
// --------------------------------------------

// Add Key-Value Pairs to JavaScript Objects
// objects are just collections of key-value pairs. In other words, 
// they are pieces of data (values) mapped to unique identifiers called properties (keys). Take a look at an example:
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

// If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:
tekkenCharacter.origin = 'South Korea';

// Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:
tekkenCharacter['hair color'] = 'dyed orange';

// Here's an example with a variable:
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

// After adding all the examples, the object will look like this:
// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };

// -------------------------------------------------------
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// Only change code above this line

console.log(foods);

// Modify an Object Nested Within an Object
// Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, 
// including arrays and even other objects. Consider the following:
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
// To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property:
nestedObject.data.onlineStatus.busy = 10;
// --------------------------------------------------
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
// ---------------------------------------

// Access Property Names with Bracket Notation
// imagine that our foods object is being used in a program for a supermarket cash register. 
// We have some function that sets the selectedFood and we want to check our foods object for the presence of that food. This might look like:
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
// This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods object, 
// or undefined if it is not present. 
// -----------------------------------------------------
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"))

// In earlier challenges, we have both added to and modified an object's key-value pairs. 
// Here we will see how we can remove a key-value pair from an object.
// If we wanted to remove the apples key, we can remove it by using the delete keyword like this:
delete foods.apples;
// ----------------------------------
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges, 
delete foods.plums, 
delete foods.strawberries;
// Only change code above this line

console.log(foods);
// ----------------------------
// Check if an Object has a Property

// what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. 
// One uses the hasOwnProperty() method and the other uses the in keyword.

// If we have an object users with a property of Alan, we could check for its presence in either of the following ways:
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
// ---------------------------------
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}

// Iterate Through the Keys of an Object with a for...in Statement

// Sometimes you may need to iterate through all the keys within an object. 
// This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:
for (let user in users) {
  console.log(user);
}

// logs:
// Alan
// Jeff
// Sarah
// Ryan
// -------------------------------------------
function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

// Generate an Array of All Object Keys with Object.keys()
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));

// Modify an Array Stored in an Object


// Take a look at the object we've provided in the code editor. The user object contains three keys. 
// The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. 
// We've started writing a function addFriend. 
// Finish writing it so that it takes a user object and adds the name of the friend argument to the array  
// stored in user.data.friends and returns that array.
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, "Pete"));