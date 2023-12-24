import React from 'react';

import MainWeatherDisplay from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const WeatherApp = () => {
  return (
    <div>
      <SettingsMenu />
      <MainWeatherDisplay />
    </div>
  );
};

export default WeatherApp;
