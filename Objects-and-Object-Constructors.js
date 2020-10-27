// There are multiple ways to define objects but in most cases, it is best to use the object literal syntax as follows:
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
 }
}

// There are also 2 ways to get information out of an object: dot notation and bracket notation.
// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]

// Objects as a Design pattern

// One of the simplest ways you can begin to organize your code is by simply grouping things into objects. 
// Take these examples from a ‘tic tac toe’ game:
// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}
// ------------------
function printName(player) {
  console.log(player.name)
}

// This is something that you just could NOT do with the example one setup. 
// Instead, every time you wanted to print a specific player’s name you would have to remember the correct variable name and then manually console.log it:
console.log(playerOneName)
console.log(playerTwoName)

// this isn’t that bad… but what if you don’t know which player’s name you want to print?
function gameOver(winningPlayer){
  console.log("Congratulations!")
  console.log(winningPlayer.name + " is the winner!")
}

// Object Constructors
// When you have a specific type of object that you need to duplicate like our player or inventory items
//  a better way to create them is using an object constructor, which is a function that looks like this:
function Player(name, marker) {
  this.name = name
  this.marker = marker
}

// and which you use by calling the function with the keyword new.
const player = new Player('steve', 'X')
console.log(player.name) // 'steve'

// Just like with objects created using the Object Literal method you can add functions to the object:
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName() // logs 'steve'
player2.sayName() // logs 'also steve'

// Exercise 
// Write a constructor for making “Book” objects.
// We will revisit this in the project at the end of this lesson.
// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book

// Put a function into the constructor that can report the book info like so:
theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

// note: it is almost always best to return things rather than putting console.log() directly into the function. 
// In this case, return the info string and log it after the function has been called:
console.log(theHobbit.info());

// If you’ve understood the concept of the prototype then this next bit about constructors will not be confusing at all!
function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  // eh.. go to prom?
}

// Recommended Method for Prototypal Inheritance
// At this point in history, the recommended way of setting the prototype of an object is 
Object.create
// Object.create very simply returns a new object with the specified prototype and any additional properties you want to add. 
// For our purposes you use it like so:
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8
// A warning… this doesn’t work:
EighthGrader.prototype = Student.prototype

// if you want to edit something in the future. Consider one more example:
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

// don't do this!!!
EighthGrader.prototype = Student.prototype

function NinthGrader(name) {
  this.name = name
  this.grade = 9
}

// noooo! not again!
NinthGrader.prototype = Student.prototype

NinthGrader.prototype.sayName = function() {console.log("HAHAHAHAHAHA")}

const carl = new EighthGrader("carl")
carl.sayName() //uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"