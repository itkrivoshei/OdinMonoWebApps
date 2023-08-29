import React, { useState, useEffect } from 'react';

type Book = {
  title: string;
  author: string;
  pages: number;
  read: boolean;
};

const initialBooks: Book[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    pages: 223,
    read: true,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    read: false,
  },
];

const Library: React.FC = () => {
  const [myLibrary, setMyLibrary] = useState<Book[]>(initialBooks);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: 0,
    read: false,
  });

  const addBookToLibrary = (book: Book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBookToLibrary(formData);
    setShowForm(false);
    setFormData({ title: '', author: '', pages: 0, read: false });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else if (e.target instanceof HTMLTextAreaElement) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleRead = (index: number) => {
    const updatedBooks = [...myLibrary];
    updatedBooks[index].read = !updatedBooks[index].read;
    setMyLibrary(updatedBooks);
  };

  const removeBook = (index: number) => {
    const updatedBooks = myLibrary.filter((_, idx) => idx !== index);
    setMyLibrary(updatedBooks);
  };

  return (
    <div className="max-w-screen-lg flex flex-col p-10 text-white w-full bg-gray-800 mt-10">
      <h1 className="text-3xl mb-4">My Library</h1>
      <div className="grid grid-cols-1 gap-4">
        {myLibrary.map((book, index) => (
          <div key={index}>
            <h2 className="text-xl">{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.pages} pages</p>
            <div className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={book.read}
                onChange={() => toggleRead(index)}
              />
              <label className="ml-2">Read</label>
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1"
              onClick={() => removeBook(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={() => setShowForm(!showForm)}
      >
        ADD BOOK
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="mt-4 space-y-2">
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-2 py-1 bg-gray-700 text-white"
          />
          <input
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleInputChange}
            className="w-full px-2 py-1 bg-gray-700 text-white"
          />
          <input
            name="pages"
            placeholder="Pages"
            type="number"
            value={formData.pages}
            onChange={handleInputChange}
            className="w-full px-2 py-1 bg-gray-700 text-white"
          />
          <div className="flex items-center">
            <input
              name="read"
              type="checkbox"
              checked={formData.read}
              onChange={handleInputChange}
            />
            <label className="ml-2">Read</label>
          </div>
          <button type="submit" className="bg-green-100 text-black px-4 py-2">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Library;
