import React, { useRef, useState, useEffect } from 'react';
import { ToDo } from '../model';
import { AiFillDelete, AiFillCheckSquare } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  index: number;
}

const SingleToDo: React.FC<Props> = ({ index, toDo, toDos, setToDos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [toDoEdit, setToDoEdit] = useState<string>(toDo.toDo);
  const toDoInput = useRef<HTMLInputElement | null>(null);

  const handleDone = (e: React.MouseEvent, id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    setToDos((toDos) => (toDos = toDos.sort((a) => (a.isDone ? 1 : -1))));
    e.stopPropagation();
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const editOn = () => {
    setEdit(true);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, toDo: toDoEdit } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    if (edit && toDoInput.current) {
      toDoInput.current.focus();
    }
  }, [edit]);

  return (
    <Draggable
      key={toDo.id.toString()}
      draggableId={toDo.id.toString()}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <IconContext.Provider value={{ className: 'global-class-name' }}>
            <form
              className='todos__single'
              style={{ backgroundColor: toDo.isDone ? 'black' : 'white' }}
              onSubmit={(e) => handleEdit(e, toDo.id)}
              onClick={editOn}
            >
              {edit ? (
                <input
                  value={toDoEdit}
                  ref={toDoInput}
                  onBlur={(e) => handleEdit(e, toDo.id)}
                  className='todo__input'
                  style={{
                    textDecoration: toDo.isDone ? 'line-through' : 'none',
                  }}
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
              <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <span
                  className='icon'
                  style={{ color: toDo.isDone ? 'white' : 'black' }}
                  onClick={(e) => handleDone(e, toDo.id)}
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
        </div>
      )}
    </Draggable>
  );
};

export default SingleToDo;
