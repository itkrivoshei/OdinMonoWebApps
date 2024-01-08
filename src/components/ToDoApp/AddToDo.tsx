import React, { useState } from 'react';

import { Button, TextField, Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/slices/toDoSlice';

const AddToDo: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput) {
      dispatch(addToDo(trimmedInput));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleAddToDo}>
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
          label='Enter ToDo'
          variant='outlined'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
        <Button variant='contained' color='primary' type='submit'>
          Add ToDo
        </Button>
      </Box>
    </form>
  );
};

export default AddToDo;
