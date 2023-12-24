import React from 'react';
import { useSelector } from 'react-redux';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import { RootState } from '../../redux/store';
import './index.scss';

const ToDoApp: React.FC = () => {
  const activeProject = useSelector((state: RootState) =>
    state.toDo.projects.find(
      (project) => project.id === state.toDo.activeProject
    )
  );

  return (
    <div className='toDoApp'>
      <h1>ToDo App</h1>
      <h2>Projects</h2>
      <AddProject />
      <ProjectList />
      <h2>ToDo&apos;s</h2>
      <AddToDo />
      {activeProject && <ToDoList toDos={activeProject.toDos} />}
    </div>
  );
};

export default ToDoApp;
