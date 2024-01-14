import React from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import '@fontsource/orbitron';

import cosmosImage from '../../assets/WeatherApp/images/cosmos_image.jpg';
import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const theme = createTheme({
  typography: {
    fontFamily: 'Orbitron, sans-serif',
  },
});

const WeatherApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${cosmosImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <SettingsMenu />
        <MainWeatherDisplay />
      </Box>
    </ThemeProvider>
  );
};

export default WeatherApp;
