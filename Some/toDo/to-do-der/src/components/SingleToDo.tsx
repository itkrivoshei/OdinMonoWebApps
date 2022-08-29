import React, { useRef, useState, useEffect } from 'react';
import { ToDo } from '../model';
import { AiFillDelete, AiFillCheckSquare } from 'react-icons/ai';
import { IconContext } from 'react-icons';

interface Props {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleToDo: React.FC<Props> = ({ toDo, toDos, setToDos }) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [toDoEdit, setToDoEdit] = useState<string>(toDo.toDo);
  const toDoInput = useRef<any>();
  // const toDoSpan = useRef<any>();

  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const editOn = (e: any) => {
    setEdit(true);
    e.preventDefault();
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, toDo: toDoEdit } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    if (edit) {
      toDoInput.current.focus();
    }
    console.log(document.activeElement);

    // const inputToSpan = (e: any) => {
    //   console.log(e.target, toDoSpan.current);
    //   if (e.target !== toDoSpan.current && edit) {
    //     setEdit(!edit);
    //   }
    // };

    // document.addEventListener('click', inputToSpan);

    // return () => document.removeEventListener('click', inputToSpan);
  }, [edit]);

  return (
    <IconContext.Provider value={{ className: 'global-class-name' }}>
      <form
        className='todos__single'
        style={{ backgroundColor: toDo.isDone ? 'black' : 'white' }}
        onSubmit={(e) => handleEdit(e, toDo.id)}
      >
        {edit ? (
          <input
            value={toDoEdit}
            ref={toDoInput}
            className={toDo.isDone ? 'todo__input' : ''}
            style={{ color: toDo.isDone ? 'white' : 'black' }}
            onChange={(e) => setToDoEdit(e.target.value)}
          />
        ) : toDo.isDone ? (
          <span onClick={editOn} className='todos__single--text--done'>
            {toDo.toDo}
          </span>
        ) : (
          <span onClick={editOn} className='todos__single--text'>
            {toDo.toDo}
          </span>
        )}
        <div>
          <span
            className='icon'
            style={{ color: toDo.isDone ? 'white' : 'black' }}
            onClick={() => handleDone(toDo.id)}
          >
            <AiFillCheckSquare size={25} />
          </span>
          <span
            className='icon'
            style={{ color: toDo.isDone ? 'white' : 'black' }}
            onClick={() => handleDelete(toDo.id)}
          >
            <AiFillDelete size={25} />
          </span>
        </div>
      </form>
    </IconContext.Provider>
  );
};

export default SingleToDo;
