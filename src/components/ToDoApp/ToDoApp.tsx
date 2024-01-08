import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { RootState } from '../../redux/store';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

const ToDoApp: React.FC = () => {
  const activeProject = useSelector((state: RootState) =>
    state.toDo.projects.find(
      (project) => project.id === state.toDo.activeProject
    )
  );

  return (
    <Box className='toDoApp' sx={{ padding: 2 }}>
      <Typography variant='h1'>ToDo App</Typography>
      <Typography variant='h2'>Projects</Typography>
      <AddProject />
      <ProjectList />
      <Typography variant='h2'>ToDo&apos;s</Typography>
      <AddToDo />
      {activeProject && <ToDoList toDos={activeProject.toDos} />}
    </Box>
  );
};

export default ToDoApp;
