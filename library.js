let myLibrary = [];

let book = {
  title: 'dfdfd',
  author: 'eeeee',
  pages: 500,
  read: false
};

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.sayName = function() {
  //   console.log(name)
  // }
}

function addBookToLibrary() {
  // do stuff here
  book = [];
  book.title.push();
}

// Book.prototype = {
//   title(),
//   author(),
//   pages()
// }

// Book1.title()

// calling the function
// addBookToLibrary();

const player1 = new Player('steve', 'X');
player1.sayName(); // logs 'steve'

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 10);
console.log(appleJuice);