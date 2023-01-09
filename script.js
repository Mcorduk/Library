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
    
  });
}

