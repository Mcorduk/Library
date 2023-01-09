//NEW BOOK
const newBookButton = document.getElementById('new-book-button');
const newBookForm = document.getElementById('new-book-form');
newBookButton.addEventListener('click', () => {
  newBookForm.style.display = 'block';
});

// Example Book
let illyad = {
  author: "Homer",
  title: "Illyad",
  pages: 300,
  read: false
}

// Example Book
let dragonsSpear = {
  author: "Weis & Hickman",
  title: "Dragon's Spear",
  pages: "315",
  read: true
}

//Array for Book Objects
let myLibrary = [illyad, dragonsSpear];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// add the toggleRead method to the prototype
Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const book = new Book(author, title, pages, read);

  myLibrary.push(book);
}

// VIEW LIBRARY 
const displayLibrary = () => {
  const table = document.getElementById('library-table');
    // clear the table
  table.innerHTML = '';
    // display a message if the array is empty
  if (myLibrary.length === 0) {
    const row = table.insertRow();
    row.insertCell().innerHTML = 'No books have been found';
  } else {
 // create the header row
  const headerRow = table.insertRow();
  headerRow.insertCell().innerHTML = 'Title';
  headerRow.insertCell().innerHTML = 'Author';
  headerRow.insertCell().innerHTML = 'Number of Pages';
  headerRow.insertCell().innerHTML = 'Read';
  headerRow.insertCell().innerHTML = 'Actions';

    myLibrary.forEach(book => {
      const row = table.insertRow();
      row.insertCell().innerHTML = book.title;
      row.insertCell().innerHTML = book.author;
      row.insertCell().innerHTML = book.pages;
      if (book.read) {
        row.insertCell().innerHTML = 'Yes';
      } else {
        row.insertCell().innerHTML = 'No';
      }
      const toggleCell = row.insertCell();
      const toggleButton = document.createElement('button');
      toggleButton.innerHTML = 'Toggle';
      toggleButton.addEventListener('click', () => {
        // toggle the read status of the book
        book.toggleRead();

        // refresh the table
        displayLibrary();
      });
      toggleCell.appendChild(toggleButton);
      const deleteCell = row.insertCell();
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () => {
        // remove the book from the array
        myLibrary = myLibrary.filter(b => b !== book);
        
        // refresh the table
        displayLibrary();
      });
      deleteCell.appendChild(deleteButton);
    });
  }
}

//NEW BOOK SUBMIT
newBookForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from being submitted
  addBookToLibrary();
  displayLibrary();
});
