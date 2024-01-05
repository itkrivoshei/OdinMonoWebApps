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

const DashboardComponent: React.FC = React.memo(() => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container
          component='main'
          maxWidth='sm'
          style={{
            paddingTop: '2rem',
            background: 'linear-gradient(45deg, #333, #111)',
            borderRadius: '8px',
            padding: '2rem',
          }}
        >
          <Typography variant='h4' align='center' gutterBottom>
            Odin Projects
          </Typography>
          <List>
            {projects.map((project, idx) => (
              <ListItem
                key={idx}
                button
                component={RouterLink}
                to={project.path}
              >
                <ListItemText primary={project.name} />
              </ListItem>
            ))}
          </List>
        </Container>
      </div>
    </ThemeProvider>
  );
});

DashboardComponent.displayName = 'Dashboard';

export default React.memo(DashboardComponent);
