import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from './redux/actions/todoActions';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo }: TodoItemProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  // Handle the toggle of the todo's completion state
  const handleToggleCompletion = () => {
    dispatch(toggleTodo(todo.id));
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
              checked={!!todo.completed}
              onChange={handleToggleCompletion}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
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

export default TodoItem;
