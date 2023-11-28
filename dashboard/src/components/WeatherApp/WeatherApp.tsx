import React from 'react';
import MainWeatherDisplay from './MainWeatherDisplay';
import WeatherMeme from './WeatherMeme';
import SettingsMenu from './SettingsMenu';

const WeatherApp = () => {
  return (
    <div>
      <SettingsMenu />
      <MainWeatherDisplay />
      <WeatherMeme />
    </div>
  );
};

export default WeatherApp;
