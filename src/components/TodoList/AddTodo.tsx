import React, { useState } from 'react';

import { Button, TextField, Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todoSlice';

const AddTodo: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput) {
      dispatch(addTodo(trimmedInput));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 300,
          margin: 'auto',
        }}
      >
        <TextField
          label='Enter Todo'
          variant='outlined'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
        <Button variant='contained' color='primary' type='submit'>
          Add Todo
        </Button>
      </Box>
    </form>
  );
};

export default AddTodo;
