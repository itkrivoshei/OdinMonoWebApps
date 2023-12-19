import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../../redux/actions/todoActions';

function AddProject() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title) {
      dispatch(addProject(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Project Title'
      />
      <button type='submit'>Add Project</button>
    </form>
  );
}

export default AddProject;
