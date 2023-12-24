import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/slices/toDoSlice';

function AddToDo() {
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
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Enter toDo...'
      />
      <button type='submit'>Add ToDo</button>
    </form>
  );
}

export default AddToDo;
