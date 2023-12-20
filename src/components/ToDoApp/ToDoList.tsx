import React from 'react';
import ToDoItem from './ToDoItem';

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

interface ToDoListProps {
  toDos: ToDo[];
  deleteToDo: (id: number) => void;
}

// Component to list out toDos.
function ToDoList({ toDos, deleteToDo }: ToDoListProps) {
  return (
    <ul>
      {toDos.map((toDo: ToDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} deleteToDo={deleteToDo} />
      ))}
    </ul>
  );
}

export default ToDoList;
