import React, { useState } from 'react';

interface AddToDoProps {
  addToDo: (input: string) => void;
}

function AddToDo({ addToDo }: AddToDoProps) {
  // State to manage the input value
  const [input, setInput] = useState('');

  // Handler for form submission
  const handleAddToDo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedInput = input.trim(); // Trim the input

    // Only add the toDo if the trimmed input isn't empty
    if (trimmedInput) {
      addToDo(trimmedInput);
      setInput(''); // Reset input field
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
