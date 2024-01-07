import React from 'react';

import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const WeatherApp = () => {
  return (
    <>
      <SettingsMenu />
      <MainWeatherDisplay />
    </>
  );
};

export default WeatherApp;
