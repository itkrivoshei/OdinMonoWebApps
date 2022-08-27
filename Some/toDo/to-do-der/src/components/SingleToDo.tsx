import React, { Key } from 'react';
import { ToDo } from '../model';
import { AiFillDelete, AiFillCheckSquare } from 'react-icons/ai';
import { ClassLikeDeclarationBase } from 'typescript';

interface Props {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleToDo: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  const handleDone = (id: Key) => {
    // console.log(toDo);
  };

  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{toDo.toDo}</span>
      <div>
        <span className='icon'>
          <AiFillCheckSquare size={25} />
        </span>
        <span className='icon' onClick={() => handleDone(toDo.id)}>
          <AiFillDelete size={25} />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
