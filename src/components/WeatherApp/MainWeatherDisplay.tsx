import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import WeatherMeme from './WeatherMeme';
import {
  fetchWeatherByLocation,
  resetWeatherError,
} from '../../redux/actions/weatherActions';
import { RootState } from '../../redux/reducers/rootReducer';
import './styles/MainWeatherDisplay.scss';

// Utility function for displaying temperature
const displayTemperature = (temp: number, unit: string) => `${temp} ${unit}`;

// Utility function for displaying wind speed
const displayWindSpeed = (speed: number, unit: string) => `${speed} ${unit}`;

// Main Weather Display Component
export const MainWeatherDisplay: React.FC = () => {
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // useSelector hook to select data from the redux store
  const { weatherData, error, unit } = useSelector(
    (state: RootState) => state.weather
  );

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Fetch weather data by location on component mount
    dispatch(fetchWeatherByLocation() as any);

    // Reset weather error when component unmounts
    return () => {
      dispatch(resetWeatherError());
    };
  }, [dispatch]); // Empty array ensures effect only runs on mount and unmount

  // Handle error state
  if (error) {
    console.error('Rendering error:', error);
    console.error('Weather data when error:', weatherData);
    return (
      <div className='main-weather-display'>
        <div className='error'>Error loading weather: {error}</div>
      </div>
    );
  }

  const formatDateAndTime = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  // Component JSX
  return (
    <div className='main-weather-display'>
      {weatherData && (
        <>
          <div className='location'>
            {weatherData.location.name}, {weatherData.location.country}
          </div>
          <div className='date'>
            {formatDateAndTime(weatherData.location.localtime)}
          </div>

          <div className='main-info-container'>
            <div className='temperature-section'>
              <div className='temperature'>
                {displayTemperature(
                  unit === 'C'
                    ? weatherData.current.feelslike_c
                    : weatherData.current.feelslike_f,
                  unit
                )}
                <span className='degree-symbol'>°{unit}</span>
              </div>
              <div className='feels'>
                Feels:{' '}
                {displayTemperature(
                  unit === 'C'
                    ? weatherData.current.feelslike_c
                    : weatherData.current.feelslike_f,
                  unit
                )}
                <span className='degree-symbol'>°{unit}</span>
              </div>
            </div>

            <div className='divider' />

            <div className='details'>
              <div className='detail'>
                Wind:{' '}
                {displayWindSpeed(
                  unit === 'C'
                    ? weatherData.current.wind_kph
                    : weatherData.current.wind_mph,
                  unit === 'C' ? 'kph' : 'mph'
                )}
              </div>
              <div className='detail'>
                Humidity: {weatherData.current.humidity}%
              </div>
              <div className='detail'>
                Air Quality EPA:{' '}
                {weatherData.current.air_quality?.['us-epa-index'] ||
                  'Not available'}
              </div>
            </div>

            <div className='divider' />

            <WeatherMemeSection
              weatherCondition={weatherData.current.condition.text}
            />
          </div>
        </>
      )}
    </div>
  );
};

// Separate component for the weather meme section
const WeatherMemeSection: React.FC<{ weatherCondition: string }> = ({
  weatherCondition,
}) => (
  <div className='weather-meme-section'>
    <WeatherMeme />
    <div>Weather: {weatherCondition}</div>
  </div>
);

// Connect the component to the redux store
const mapStateToProps = (state: RootState) => ({
  weatherData: state.weather.weatherData,
  isLoading: state.weather.loading,
  error: state.weather.error,
  unit: state.weather.unit,
});

// Use named export for better import clarity
export const ConnectedMainWeatherDisplay =
  connect(mapStateToProps)(MainWeatherDisplay);
