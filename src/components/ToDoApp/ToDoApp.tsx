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
            backgroundColor: '#9381ff',
            width: '70vh',
            minHeight: '50vh',
            opacity: 0.93,
            padding: 2,
          }}
        >
          <Box
            sx={{
              width: '35%',
              backgroundColor: 'secondary.main',
              padding: 2,
              gap: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                m3: 2,
                color: '#282A36',
              }}
            >
              ToDoApp
            </Typography>
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
              gap: 2,
            }}
          >
            <Typography variant='h3' color={'#282A36'}>
              ToDo&apos;s
            </Typography>
            <AddToDo />
            {activeProject && <ToDoList toDos={activeProject.toDos} />}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default ToDoApp;
