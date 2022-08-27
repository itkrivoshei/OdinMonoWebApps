import React from 'react';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';
import './styles.css';

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className='todos'>
      {toDos.map((toDo) => (
        <SingleToDo
          toDo={toDo}
          key={toDo.id}
          toDos={toDos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
};

export default ToDoList;
