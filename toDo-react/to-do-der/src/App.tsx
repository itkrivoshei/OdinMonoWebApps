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
			setToDos([{ id: Date.now(), toDo, isDone: false }, ...toDos]);
			setToDo('');
		}
	};

	const dragHandle = (e: DropResult) => {
		let add,
			active = toDos;

		if (
			e.source &&
			e.source.droppableId === 'toDosList' &&
			e.destination &&
			e.destination.droppableId === 'toDosList' &&
			!active[e.source.index].isDone
		) {
			add = active[e.source.index];
			active.splice(e.source.index, 1);
			active.splice(e.destination.index, 0, add);
		}

		setToDos(active);
	};

	return (
		<DragDropContext
			onDragEnd={(e) => {
				dragHandle(e);
			}}>
			<div className='App'>
				<span className='header'>ToDoDer</span>
				<InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
				<ToDoList toDos={toDos} setToDos={setToDos} />
			</div>
		</DragDropContext>
	);
};

export default App;
