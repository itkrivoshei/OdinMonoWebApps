import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [input, setInput] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
