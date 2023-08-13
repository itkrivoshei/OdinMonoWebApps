import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/actions/todoActions';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.text);

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

  return (
    <li>
      {isEditing ? (
        <>
          <input type='text' value={newName} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
