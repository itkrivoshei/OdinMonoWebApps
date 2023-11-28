import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  fetchWeather,
  resetWeatherError,
} from '../../redux/actions/weatherActions';
import { RootState } from '../../redux/reducers';

type MainWeatherDisplayProps = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  weatherData: state.weather.weatherData,
  isLoading: state.weather.loading,
  error: state.weather.error,
  unit: state.weather.unit,
});

const mapDispatchToProps = {
  fetchWeather,
  resetWeatherError,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const MainWeatherDisplay: React.FC<MainWeatherDisplayProps> = ({
  fetchWeather,
  resetWeatherError,
  weatherData,
  isLoading,
  error,
  unit,
}) => {
  useEffect(() => {
    fetchWeather('London');
    resetWeatherError();
  }, [fetchWeather, resetWeatherError]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('Rendering error:', error);
    console.error('Weather data when error:', weatherData);
    return <p>Error loading weather: {error}</p>;
  }

  const displayTemperature = (tempC: number, tempF: number) =>
    unit === 'C' ? `${tempC}°C` : `${tempF}°F`;

  const displayWindSpeed = (speedKph: number, speedMph: number) =>
    unit === 'C' ? `${speedKph} kph` : `${speedMph} mph`;

  return (
    <div>
      {weatherData && (
        <div>
          <h2>
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <p>Local Time: {weatherData.location.localtime}</p>
          <p>
            Temperature:{' '}
            {displayTemperature(
              weatherData.current.temp_c,
              weatherData.current.temp_f
            )}
          </p>
          <p>
            Feels Like:{' '}
            {displayTemperature(
              weatherData.current.feelslike_c,
              weatherData.current.feelslike_f
            )}
          </p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>
            Wind:{' '}
            {displayWindSpeed(
              weatherData.current.wind_kph,
              weatherData.current.wind_mph
            )}
          </p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>
            Air Quality (US EPA Index):
            {weatherData.current.air_quality
              ? weatherData.current.air_quality['us-epa-index']
              : 'Not available'}
          </p>
        </div>
      )}
    </div>
  );
};

export default connector(MainWeatherDisplay);
