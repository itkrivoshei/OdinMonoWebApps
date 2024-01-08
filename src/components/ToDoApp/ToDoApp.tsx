import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Paper,
} from '@mui/material';

import { RootState } from '../../redux/store';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import lofiImage from '../../assets/ToDoApp/images/lofi_image.jpg';

const ToDoApp: React.FC = () => {
  const activeProject = useSelector((state: RootState) =>
    state.toDo.projects.find(
      (project) => project.id === state.toDo.activeProject
    )
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7161ef',
      },
      secondary: {
        main: '#cdb4dbff',
      },
    },
    typography: {
      fontFamily: '"Space Mono", monospace',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: -1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${lofiImage})`,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: '#9381ff',
            width: '70vh',
            height: '50vh',
            opacity: 0.9,
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: '35%',
              backgroundColor: 'secondary.main',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <Typography variant='h4' sx={{ m3: 2 }}>
              ToDoApp
            </Typography>
            <Typography variant='h6'>Projects</Typography>
            <AddProject />
            <ProjectList />
          </Box>
          <Box
            sx={{
              width: '65%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 2,
            }}
          >
            <AddToDo />
            {activeProject && <ToDoList toDos={activeProject.toDos} />}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default ToDoApp;
