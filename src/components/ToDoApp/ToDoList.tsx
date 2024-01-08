import React from 'react';
import { List } from '@mui/material';
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
    <List>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </List>
  );
};

export default ToDoList;
