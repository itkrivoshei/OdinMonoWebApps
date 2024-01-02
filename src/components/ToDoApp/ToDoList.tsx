import React from 'react';
import ToDoItem from './ToDoItem';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListProps {
  toDos: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
