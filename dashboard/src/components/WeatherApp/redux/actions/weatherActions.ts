export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

export const fetchWeatherStart = () => ({
  type: FETCH_WEATHER_START,
});

export const fetchWeatherSuccess = (weatherData: any) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weatherData,
});

export const fetchWeatherFailure = (error: any) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});
