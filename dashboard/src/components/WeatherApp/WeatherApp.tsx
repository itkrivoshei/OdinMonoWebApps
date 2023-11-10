import React from 'react';
import MainWeatherDisplay from './MainWeatherDisplay';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import SettingsMenu from './SettingsMenu';

const WeatherApp = () => {
  return (
    <div>
      <MainWeatherDisplay />
      <DailyForecast />
      <HourlyForecast />
      <SettingsMenu />
    </div>
  );
};

export default WeatherApp;
