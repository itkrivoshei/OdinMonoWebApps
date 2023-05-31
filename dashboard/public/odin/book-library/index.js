let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const newBookButton = document.getElementById('newBook');
const bookForm = document.getElementById('bookForm');

newBookButton.addEventListener('click', () => {
  bookForm.classList.remove('hidden');
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  bookForm.reset();
  bookForm.classList.add('hidden');
});

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.textContent = ''; // clear the div

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.dataset.index = index;
    // bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h2 class="text-xl">${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <div class="flex items-center mb-1">
        <input type="checkbox" id="read${index}" ${book.read ? 'checked' : ''}>
        <label for="read${index}" class="ml-2">Read</label>
      </div>
      <button class="bg-red-500 text-white px-2 py-1">Remove</button>
    `;

    const readCheckbox = bookDiv.querySelector('input[type="checkbox"]');
    readCheckbox.addEventListener('change', () => {
      book.toggleRead();
    });

    const removeButton = bookDiv.querySelector('button');
    removeButton.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    libraryDiv.appendChild(bookDiv);
  });
}

// Add some books initially
addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  'J.K. Rowling',
  223,
  true
);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);

// Display the books initially
displayBooks();
