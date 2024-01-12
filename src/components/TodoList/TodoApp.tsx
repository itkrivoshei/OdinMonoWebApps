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

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import lofiImage from '../../assets/TodoList/images/lofi_image.jpg';

const TodoApp: React.FC = () => {
  const activeProject = useSelector((state: RootState) =>
    state.todo.projects.find(
      (project) => project.id === state.todo.activeProject
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
              TodoApp
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
              Todo&apos;s
            </Typography>
            <AddTodo />
            {activeProject && <TodoList todos={activeProject.todos} />}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default TodoApp;
