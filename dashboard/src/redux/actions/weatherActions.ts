import axios from 'axios';
import { Dispatch } from 'redux';

export enum WeatherActionType {
  FETCH_WEATHER_START = 'FETCH_WEATHER_START',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE',
  RESET_WEATHER_ERROR = 'RESET_WEATHER_ERROR',
  SET_UNIT_CELSIUS = 'SET_UNIT_CELSIUS',
  SET_UNIT_FAHRENHEIT = 'SET_UNIT_FAHRENHEIT',
  SET_WIND_SPEED_KPH = 'SET_WIND_SPEED_KPH',
  SET_WIND_SPEED_MPH = 'SET_WIND_SPEED_MPH',
}

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

interface FetchWeatherStartAction {
  type: WeatherActionType.FETCH_WEATHER_START;
}

interface FetchWeatherSuccessAction {
  type: WeatherActionType.FETCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

interface FetchWeatherFailureAction {
  type: WeatherActionType.FETCH_WEATHER_FAILURE;
  payload: string;
}

interface ResetWeatherErrorAction {
  type: WeatherActionType.RESET_WEATHER_ERROR;
}

interface SetUnitCelsiusAction {
  type: WeatherActionType.SET_UNIT_CELSIUS;
}

interface SetUnitFahrenheitAction {
  type: WeatherActionType.SET_UNIT_FAHRENHEIT;
}

interface SetWindSpeedKPHAction {
  type: WeatherActionType.SET_WIND_SPEED_KPH;
}

interface SetWindSpeedMPHAction {
  type: WeatherActionType.SET_WIND_SPEED_MPH;
}

export type WeatherActionTypes =
  | FetchWeatherStartAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction
  | ResetWeatherErrorAction
  | SetUnitCelsiusAction
  | SetUnitFahrenheitAction
  | SetWindSpeedKPHAction
  | SetWindSpeedMPHAction;

export const fetchWeatherStart = (): FetchWeatherStartAction => ({
  type: WeatherActionType.FETCH_WEATHER_START,
});

export const fetchWeatherSuccess = (
  weatherData: WeatherData
): FetchWeatherSuccessAction => ({
  type: WeatherActionType.FETCH_WEATHER_SUCCESS,
  payload: weatherData,
});

export const fetchWeatherFailure = (
  error: string
): FetchWeatherFailureAction => ({
  type: WeatherActionType.FETCH_WEATHER_FAILURE,
  payload: error,
});

export const resetWeatherError = (): ResetWeatherErrorAction => ({
  type: WeatherActionType.RESET_WEATHER_ERROR,
});

export const setUnitCelsius = (): SetUnitCelsiusAction => ({
  type: WeatherActionType.SET_UNIT_CELSIUS,
});

export const setUnitFahrenheit = (): SetUnitFahrenheitAction => ({
  type: WeatherActionType.SET_UNIT_FAHRENHEIT,
});

export const setWindSpeedKPH = (): SetWindSpeedKPHAction => ({
  type: WeatherActionType.SET_WIND_SPEED_KPH,
});

export const setWindSpeedMPH = (): SetWindSpeedMPHAction => ({
  type: WeatherActionType.SET_WIND_SPEED_MPH,
});

export const fetchWeather = (city: string) => {
  return (dispatch: Dispatch<WeatherActionTypes>) => {
    dispatch(resetWeatherError());
    dispatch(fetchWeatherStart());

    axios
      .get(
        `/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=yes`
      )
      .then((response) => {
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
