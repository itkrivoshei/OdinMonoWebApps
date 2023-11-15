import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  fetchWeather,
  resetWeatherError,
} from '../../redux/actions/weatherActions';
import { RootState } from '../../redux/reducers';

const mapStateToProps = (state: RootState) => ({
  weatherData: state.weather.weatherData,
  isLoading: state.weather.loading,
  error: state.weather.error,
});

const mapDispatchToProps = {
  fetchWeather,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type MainWeatherDisplayProps = PropsFromRedux & {
  // Additional props here if needed
};

const MainWeatherDisplay: React.FC<MainWeatherDisplayProps> = ({
  fetchWeather,
  weatherData,
  isLoading,
  error,
}) => {
  useEffect(() => {
    fetchWeather('London');
    resetWeatherError();
  }, [fetchWeather, resetWeatherError]);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    console.log('Rendering error:', error);
    console.log('Weather data when error:', weatherData);
    return <p>Error loading weather: {error}</p>;
  }

  return (
    <div>
      {weatherData && (
        <div>
          <h2>
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <p>Local Time: {weatherData.location.localtime}</p>
          <p>
            Temperature: {weatherData.current.temp_c}°C /{' '}
            {weatherData.current.temp_f}°F
          </p>
          <p>
            Feels Like: {weatherData.current.feelslike_c}°C /{' '}
            {weatherData.current.feelslike_f}°F
          </p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>
            Wind: {weatherData.current.wind_kph} kph /{' '}
            {weatherData.current.wind_mph} mph
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
