import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const draculaThemeColors = {
  background: '#282a36',
  currentLine: '#44475a',
  foreground: '#f8f8f2',
  comment: '#6272a4',
  cyan: '#8be9fd',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c',
};

const draculaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: draculaThemeColors.purple,
    },
    secondary: {
      main: draculaThemeColors.pink,
    },
    error: {
      main: draculaThemeColors.red,
    },
    warning: {
      main: draculaThemeColors.orange,
    },
    info: {
      main: draculaThemeColors.cyan,
    },
    success: {
      main: draculaThemeColors.green,
    },
    background: {
      default: draculaThemeColors.background,
      paper: draculaThemeColors.currentLine,
    },
    text: {
      primary: draculaThemeColors.foreground,
      secondary: draculaThemeColors.comment,
    },
  },
});

const WeatherApp = () => {
  return (
    <ThemeProvider theme={draculaTheme}>
      <CssBaseline />
      <SettingsMenu />
      <MainWeatherDisplay />
    </ThemeProvider>
  );
};

export default WeatherApp;
