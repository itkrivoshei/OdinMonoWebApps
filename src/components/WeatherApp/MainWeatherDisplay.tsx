import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { RootState, AppDispatch } from '../../redux/store';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import WeatherMeme from './WeatherMeme';
import './styles/MainWeatherDisplay.scss';

const MainWeatherDisplay: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { weatherData, error, region } = useSelector(
    (state: RootState) => state.weather
  );

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ latitude, longitude }));
        },
        (error) => {
          console.error('Geolocation error:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [dispatch]);

  if (error) {
    return (
      <div className='main-weather-display'>
        <div className='error'>Error loading weather: {error}</div>
      </div>
    );
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const displayTemperature = (temp: number) => `${temp}°${region}`;
  const displayWindSpeed = (speed: number) =>
    `${speed} ${region === 'EU' ? 'kph' : 'mph'}`;

  return (
    <div className='main-weather-display'>
      <div className='location'>
        {weatherData.location.name}, {weatherData.location.country}
      </div>
      <div className='date'>
        {new Date(weatherData.location.localtime).toLocaleString()}
      </div>

      <div className='main-info-container'>
        <div className='temperature-section'>
          <div className='temperature'>
            {displayTemperature(weatherData.current.temp_c)}
          </div>
          <div className='feels'>
            Feels: {displayTemperature(weatherData.current.feelslike_c)}
          </div>
        </div>

        <div className='divider' />

        <div className='details'>
          <div className='detail'>
            Wind: {displayWindSpeed(weatherData.current.wind_kph)}
          </div>
          <div className='detail'>
            Humidity: {weatherData.current.humidity}%
          </div>
          <div className='detail'>
            Air Quality:{' '}
            {weatherData.current.air_quality['us-epa-index'] || 'N/A'}
          </div>
        </div>

        <div className='divider' />

        <WeatherMeme />
        <div>Condition: {weatherData.current.condition.text}</div>
      </div>
    </div>
  );
};

export default MainWeatherDisplay;
