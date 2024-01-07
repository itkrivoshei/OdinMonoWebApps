import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Divider, Paper } from '@mui/material';

import { RootState, AppDispatch } from '../../redux/store';
import { fetchWeather } from '../../redux/slices/weatherSlice';
import WeatherMeme from './WeatherMeme';

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
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
      >
        <Typography color='error'>Error loading weather: {error}</Typography>
      </Box>
    );
  }

  if (!weatherData) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
      >
        <Typography>Enter City in Settings</Typography>
      </Box>
    );
  }

  const displayTemperature = (temp: number) =>
    `${temp}°${region === 'EU' ? 'C' : 'F'}`;
  const displayWindSpeed = (speed: number) =>
    `${speed} ${region === 'EU' ? 'kph' : 'mph'}`;

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mt: 2,
          minWidth: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3'>
          {weatherData.location.name}, {weatherData.location.country}
        </Typography>
        <Typography variant='body1'>
          {new Date(weatherData.location.localtime).toLocaleString()}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h3'>
              {displayTemperature(
                region === 'EU'
                  ? weatherData.current.temp_c
                  : weatherData.current.temp_f
              )}
            </Typography>
            <Typography variant='body2' sx={{ fontWeight: 'light' }}>
              Feels: {displayTemperature(weatherData.current.feelslike_c)}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant='body1'>
              Wind: {displayWindSpeed(weatherData.current.wind_kph)}
            </Typography>
            <Typography variant='body1'>
              Humidity: {weatherData.current.humidity}%
            </Typography>
            <Typography variant='body1'>
              Air Quality (US EPA):{' '}
              {weatherData.current.air_quality['us-epa-index'] || 'N/A'}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <WeatherMeme />
          <Typography variant='body2'>
            Condition: {weatherData.current.condition.text}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MainWeatherDisplay;
