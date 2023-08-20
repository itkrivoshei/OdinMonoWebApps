let myLibrary: Book[] = [];

class Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;

  constructor(title: string, author: string, pages: number, read: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead(): void {
    this.read = !this.read;
  }
}

function addBookToLibrary(title: string, author: string, pages: number, read: boolean): void {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const newBookButton = document.getElementById('newBook')!;
const bookForm = document.getElementById('bookForm') as HTMLFormElement;

newBookButton.addEventListener('click', () => {
  bookForm.classList.remove('hidden');
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = (document.getElementById('title') as HTMLInputElement).value;
  const author = (document.getElementById('author') as HTMLInputElement).value;
  const pages = parseInt((document.getElementById('pages') as HTMLInputElement).value, 10);
  const read = (document.getElementById('read') as HTMLInputElement).checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  bookForm.reset();
  bookForm.classList.add('hidden');
});

function displayBooks(): void {
  const libraryDiv = document.getElementById('library')!;
  libraryDiv.textContent = ''; // clear the div

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.dataset.index = index.toString();
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
    if (readCheckbox) {
        readCheckbox.addEventListener('change', () => {
            book.toggleRead();
        });
    }

    const removeButton = bookDiv.querySelector('button');
    if (removeButton) {
        removeButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
    }

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
