import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const WeatherApp = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <SettingsMenu />
      <MainWeatherDisplay />
    </ThemeProvider>
  );
};

export default WeatherApp;
