import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  // State to manage the input value
  const [input, setInput] = useState('');

  // Handler for form submission
  const handleAddTodo = (event) => {
    event.preventDefault();

    // Trim the input to prevent adding whitespace-only todos
    const trimmedInput = input.trim();

    // Only dispatch the addTodo action if the trimmed input isn't empty
    if (trimmedInput) {
      addTodo(trimmedInput);
      setInput(''); // Reset input field after adding
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type='text'
        value={input}
        // Update the input state on every input change
        onChange={(event) => setInput(event.target.value)}
        placeholder='Enter todo...' // Added a placeholder for better user guidance
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
