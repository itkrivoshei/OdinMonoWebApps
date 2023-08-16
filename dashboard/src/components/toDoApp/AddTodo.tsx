import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  // State to manage the input value
  const [input, setInput] = useState('');

  // Handler for form submission
  const handleAddTodo = (event) => {
    event.preventDefault();
    const trimmedInput = input.trim(); // Trim the input

    // Only add the todo if the trimmed input isn't empty
    if (trimmedInput) {
      addTodo(trimmedInput);
      setInput(''); // Reset input field
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Enter todo...'
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
