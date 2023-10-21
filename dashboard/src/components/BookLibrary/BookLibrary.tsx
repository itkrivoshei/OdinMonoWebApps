import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Grid,
  FormGroup,
} from '@mui/material';

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
    <>
      <Paper elevation={3}>
        <Typography variant='h4' gutterBottom>
          My Library
        </Typography>
        <Grid container spacing={3}>
          {myLibrary.map((book, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant='h6'>{book.title}</Typography>
              <Typography>{book.author}</Typography>
              <Typography>{book.pages} pages</Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={book.read}
                      onChange={() => toggleRead(index)}
                    />
                  }
                  label='Read'
                />
              </FormGroup>
            </Grid>
          ))}
        </Grid>

        <Button variant='contained' onClick={() => setShowForm(!showForm)}>
          ADD BOOK
        </Button>

        {showForm && (
          <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
            <TextField
              name='title'
              placeholder='Title'
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
              margin='normal'
              variant='outlined'
            />
            <TextField
              name='author'
              placeholder='Author'
              value={formData.author}
              onChange={handleInputChange}
              fullWidth
              margin='normal'
              variant='outlined'
            />
            <TextField
              name='pages'
              placeholder='Pages'
              type='number'
              value={formData.pages}
              onChange={handleInputChange}
              fullWidth
              margin='normal'
              variant='outlined'
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name='read'
                    checked={formData.read}
                    onChange={handleInputChange}
                  />
                }
                label='Read'
              />
            </FormGroup>
            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </form>
        )}
      </Paper>
    </>
  );
};

export default Library;
