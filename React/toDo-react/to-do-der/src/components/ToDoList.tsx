import React from 'react';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <Droppable droppableId="toDosList">
      {(provided) => (
        <div
          className="todos"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {toDos.map((toDo, index) => (
            <SingleToDo
              index={index}
              toDo={toDo}
              key={toDo.id}
              toDos={toDos}
              setToDos={setToDos}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ToDoList;
