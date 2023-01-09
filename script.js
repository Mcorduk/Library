const newBookButton = document.getElementById('new-book-button');
const newBookForm = document.getElementById('new-book-form');
newBookButton.addEventListener('click', () => {
  newBookForm.style.display = 'block';
});

let illyad = {
  Author: "Homer",
  Title: "Illyad",
  "Number of Pages": "300",
  read: false
}

let dragonsSpear = {
  Author: "Weis & Hickman",
  Title: "Dragon's Spear",
  "Number of Pages": "315",
  read: true
}

let myLibrary = [illyad, dragonsSpear];

function Book() {

}

function addBookToLibrary() {
  // do stuff here
}

const displayLibrary = () => {
  const table = document.getElementById('library-table');
    // clear the table
  table.innerHTML = '';


  if (myLibrary.length === 0) {
    // display a message if the array is empty
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
    row.insertCell().innerHTML = book.Title;
    row.insertCell().innerHTML = book.Author;
    row.insertCell().innerHTML = book['Number of Pages'];
    if (book.read) {
      row.insertCell().innerHTML = 'Yes';
    } else {
      row.insertCell().innerHTML = 'No';
    }
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
}}

