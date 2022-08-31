import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo('');
    }

    setToDos((toDos) => (toDos = toDos.sort((a) => (a.isDone ? 1 : -1))));
  };

  const dragHandle = (e: DropResult) => {
    // console.log(e);
    // if (
    //   !e.destination ||
    //   e.destination.droppableId === e.source.droppableId ||
    //   e.destination.index === e.source.index
    // )
    // return;

    // let add,
    //   active = toDos;

    // if (e.destination && e.destination.droppableId === 'ToDoList') {
    //   add = active[e.source.index];
    //   active.splice(e.source.index, 1);
    //   console.log(active);
    // }
    // setToDos(active);
    // console.log(toDos);
  };

  return (
    <DragDropContext
      onDragEnd={(e) => {
        dragHandle(e);
      }}
    >
      <div className='App'>
        <span className='header'>ToDoDer</span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList toDos={toDos} setToDos={setToDos} />
      </div>
    </DragDropContext>
  );
};

export default App;
