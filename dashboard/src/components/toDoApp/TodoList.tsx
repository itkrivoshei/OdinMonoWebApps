import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
};

interface TodoListProps {
  todos: Todo[];
}

// Component to list out todos.
function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
