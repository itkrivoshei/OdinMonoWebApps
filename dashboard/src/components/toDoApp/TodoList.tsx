import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

// Component to list out todos.
function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
