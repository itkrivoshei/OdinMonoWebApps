import React from 'react';
import { Box } from '@mui/material';

import cosmosImage from '../../assets/WeatherApp/images/cosmos_image.jpg';
import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const WeatherApp = () => {
  return (
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
  );
};

export default WeatherApp;
