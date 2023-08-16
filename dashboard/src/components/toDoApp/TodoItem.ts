import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  toggleTodo,
} from '../../redux/actions/todoActions';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.text || '');

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newName.trim()) {
      dispatch(editTodo(todo.id, newName));
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  // Handle the toggle of the todo's completion state
  const handleToggleCompletion = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={!!todo.completed}
        onChange={handleToggleCompletion}
      />
      {isEditing ? (
        <>
          <input type='text' value={newName} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo?.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;