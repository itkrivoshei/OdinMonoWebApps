import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import '@fontsource/gideon-roman';

interface Project {
  path: string;
  name: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    path: '/WeatherApp',
    name: 'Weather App',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/WeatherApp.gif?raw=true',
  },
  {
    path: '/TodoApp',
    name: 'Todo App',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/TodoList.gif?raw=true',
  },
  {
    path: '/Calculator',
    name: 'Calculator',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/Calculator.gif?raw=true',
  },
  {
    path: '/TicTacToe',
    name: 'Tic Tac Toe',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/TicTacToe.gif?raw=true',
  },
  {
    path: '/EtchASketch',
    name: 'Etch a Sketch',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/EtchASketch.gif?raw=true',
  },
  {
    path: '/BookLibrary',
    name: 'Book Library',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/Library.gif?raw=true',
  },
  {
    path: '/SignUpForm',
    name: 'Sign-up Form',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/SignUpForm.gif?raw=true',
  },
  {
    path: '/DrumKit',
    name: 'Drum Kit',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/DrumKit.gif?raw=true',
  },
  {
    path: '/RockPaperScissors',
    name: 'Rock Paper Scissors',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/RockPaperScissors.gif?raw=true',
  },
  {
    path: '/DashLanding',
    name: 'Dashboard',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/Dashboard.gif?raw=true',
  },
  {
    path: '/Landing',
    name: 'Landing',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/Landing.gif?raw=true',
  },
  {
    path: '/Restaurant',
    name: 'Restaurant',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/Restaurant.gif?raw=true',
  },
  {
    path: '/OdinRecipes',
    name: 'Recipes',

    imageUrl:
      'https://github.com/itkrivoshei/OdinMonoWebApps/blob/main/media/Recipes.gif?raw=true',
  },
];

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111827',
    },
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Gideon Roman, Arial',
  },
});

const Dashboard: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='lg' sx={{ padding: '48px 0' }}>
        <Typography
          variant='h1'
          gutterBottom
          align='center'
          sx={{
            marginBottom: '42px',
            color: 'primary.main',
          }}
        >
          Odin Projects
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          {projects.map((project) => (
            <Grid item key={project.path} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.15s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardActionArea
                  component={RouterLink}
                  to={project.path}
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='h3'
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: 'primary.main',
                      padding: '8px 0',
                      textAlign: 'center',
                    }}
                  >
                    {project.name}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

Dashboard.displayName = 'Dashboard';

export default React.memo(Dashboard);
