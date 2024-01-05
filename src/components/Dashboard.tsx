import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';

interface Project {
  path: string;
  name: string;
}

const projects: Project[] = [
  { path: '/ToDoApp', name: 'To Do' },
  { path: '/TicTacToe', name: 'Tic Tac Toe' },
  { path: '/BookLibrary', name: 'Book Library' },
  { path: '/SignUpForm', name: 'Sign Up Form' },
  { path: '/Calculator', name: 'Calculator' },
  { path: '/EtchASketch', name: 'Etch a Sketch' },
  { path: '/DrumKit', name: 'Drum Kit' },
  { path: '/RockPaperScissors', name: 'Rock Paper Scissors' },
  { path: '/DashLanding', name: 'Simple Dashboard Landing' },
  { path: '/Restaurant', name: 'Restaurant Landing Pages' },
  { path: '/OdinRecipes', name: 'Recipes Pages' },
  { path: '/Landing', name: 'First Odin Landing' },
  { path: '/WeatherApp', name: 'Weather App' },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Dashboard: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography variant='h5'>Odin Projects</Typography>
        <List>
          {projects.map((project) => (
            <ListItem
              key={project.path}
              component={RouterLink}
              to={project.path}
            >
              <ListItemText primary={project.name} />
            </ListItem>
          ))}
        </List>
      </Container>
    </ThemeProvider>
  );
};

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
