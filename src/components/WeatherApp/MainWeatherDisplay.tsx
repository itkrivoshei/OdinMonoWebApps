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
        <Paper
          sx={{
            p: 2,
            backgroundColor: 'rgba(26, 26, 46, 0.8)',
          }}
        >
          <Typography variant='h3' color='error'>
            ERROR: {error}
          </Typography>
        </Paper>
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
        <Paper
          sx={{
            p: 2,
            backgroundColor: 'rgba(26, 26, 46, 0.8)',
          }}
        >
          <Typography variant='h3' color='#4cc9f0'>
            Enter City
          </Typography>
        </Paper>
      </Box>
    );
  }

  const displayTemperature = (temp: number) =>
    `${temp}°${region === 'EU' ? 'C' : 'F'}`;

  const displayWindSpeed = (speed: number) =>
    `${speed} ${region === 'EU' ? 'kph' : 'mph'}`;

  function formatLocalTime(localTime: string): string {
    const date = new Date(localTime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${hours}:${minutes} | ${day}/${month}/${year}`;
  }

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
          backgroundColor: 'rgba(26, 26, 46, 0.8)',
        }}
      >
        <Box sx={{ mt: 2 }}>
          <Typography variant='h3' color={'#f72585'}>
            {weatherData.location.name}, {weatherData.location.country}
          </Typography>
          <Typography variant='body1' color={'#4cc9f0'}>
            {formatLocalTime(weatherData.location.localtime)}
          </Typography>

          <Divider
            sx={{
              my: 2,
              backgroundColor: '#7209b7',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h3' color={'#f72585'}>
              {displayTemperature(
                region === 'EU'
                  ? weatherData.current.temp_c
                  : weatherData.current.temp_f
              )}
            </Typography>
            <Typography
              variant='body2'
              color={'#4cc9f0'}
              sx={{ fontWeight: 'light' }}
            >
              Feels:{' '}
              {displayTemperature(
                region === 'EU'
                  ? weatherData.current.feelslike_c
                  : weatherData.current.feelslike_f
              )}
            </Typography>
          </Box>

          <Divider
            sx={{
              my: 2,
              backgroundColor: '#7209b7',
            }}
          />

          <Box color={'#4cc9f0'}>
            <Typography variant='body1'>
              Wind:{' '}
              {displayWindSpeed(
                region === 'EU'
                  ? weatherData.current.wind_kph
                  : weatherData.current.wind_mph
              )}
            </Typography>
            <Typography variant='body1'>
              Humidity: {weatherData.current.humidity}%
            </Typography>
            <Typography variant='body1'>
              Air Quality (US EPA):{' '}
              {weatherData.current.air_quality['us-epa-index'] || 'N/A'}
            </Typography>
          </Box>

          <Divider sx={{ my: 2, backgroundColor: '#7209b7' }} />

          <WeatherMeme />

          <Typography variant='body2' color={'#4cc9f0'}>
            Condition: {weatherData.current.condition.text}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MainWeatherDisplay;
