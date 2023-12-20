import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteToDo,
  editToDo,
  toggleToDo,
} from '../../redux/actions/toDoActions';

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

interface ToDoItemProps {
  toDo: ToDo;
  deleteToDo: (id: number) => void;
}

function ToDoItem({ toDo }: ToDoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(toDo.text || '');

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteToDo(toDo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newName.trim()) {
      dispatch(editToDo(toDo.id, newName));
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  // Handle the toggle of the toDo's completion state
  const handleToggleCompletion = () => {
    dispatch(toggleToDo(toDo.id));
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
          <div>
            <input
              type='checkbox'
              checked={!!toDo.completed}
              onChange={handleToggleCompletion}
            />
            <span
              style={{
                textDecoration: toDo.completed ? 'line-through' : 'none',
              }}
            >
              {toDo.text}
            </span>
          </div>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
