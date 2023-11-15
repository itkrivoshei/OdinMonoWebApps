import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const RESET_WEATHER_ERROR = 'RESET_WEATHER_ERROR';

export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    air_quality: {
      'us-epa-index': number;
    };
    temp_c: number;
    temp_f: number;
    humidity: number;
    wind_kph: number;
    wind_mph: number;
    feelslike_c: number;
    feelslike_f: number;
    condition: {
      text: string;
    };
  };
}

export const resetWeatherError = () => ({
  type: RESET_WEATHER_ERROR,
});

const fetchWeatherStart = () => ({
  type: FETCH_WEATHER_START,
});

const fetchWeatherSuccess = (weatherData: WeatherData) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weatherData,
});

const fetchWeatherFailure = (error: string) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchWeather = (city: string) => {
  return (dispatch: Dispatch) => {
    dispatch(resetWeatherError());
    dispatch(fetchWeatherStart());

    axios
      .get(
        `/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=yes`
      )
      .then((response) => {
        console.log(response);
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
