import React from 'react';
import { ConnectedMainWeatherDisplay } from './MainWeatherDisplay';
import SettingsMenu from './SettingsMenu';

const WeatherApp = () => {
  return (
    <div>
      <SettingsMenu />
      <ConnectedMainWeatherDisplay />
    </div>
  );
};

export default WeatherApp;
