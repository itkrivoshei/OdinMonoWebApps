import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions/todoActions';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li>
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
