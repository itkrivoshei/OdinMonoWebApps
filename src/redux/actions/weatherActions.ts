import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';

export type ThunkResult<R> = ThunkAction<
  R,
  RootState,
  undefined,
  WeatherActionTypes
>;

export enum WeatherActionType {
  FETCH_WEATHER_START = 'FETCH_WEATHER_START',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE',
  RESET_WEATHER_ERROR = 'RESET_WEATHER_ERROR',
  SET_UNIT_CELSIUS = 'SET_UNIT_CELSIUS',
  SET_UNIT_FAHRENHEIT = 'SET_UNIT_FAHRENHEIT',
  SET_WIND_SPEED_KPH = 'SET_WIND_SPEED_KPH',
  SET_WIND_SPEED_MPH = 'SET_WIND_SPEED_MPH',
  FETCH_LOCATION_START = 'FETCH_LOCATION_START',
  FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS',
  FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE',
  FETCH_GIF_START = 'FETCH_GIF_START',
  FETCH_GIF_SUCCESS = 'FETCH_GIF_SUCCESS',
  FETCH_GIF_FAILURE = 'FETCH_GIF_FAILURE',
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

interface FetchLocationStartAction {
  type: WeatherActionType.FETCH_LOCATION_START;
}

interface FetchLocationSuccessAction {
  type: WeatherActionType.FETCH_LOCATION_SUCCESS;
  payload: { latitude: number; longitude: number };
}

interface FetchLocationFailureAction {
  type: WeatherActionType.FETCH_LOCATION_FAILURE;
  payload: string;
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

interface FetchGifStartAction {
  type: WeatherActionType.FETCH_GIF_START;
}

interface FetchGifSuccessAction {
  type: WeatherActionType.FETCH_GIF_SUCCESS;
  payload: string; // URL of the fetched GIF
}

interface FetchGifFailureAction {
  type: WeatherActionType.FETCH_GIF_FAILURE;
  payload: string;
}

export type WeatherActionTypes =
  | FetchWeatherStartAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction
  | ResetWeatherErrorAction
  | SetUnitCelsiusAction
  | SetUnitFahrenheitAction
  | SetWindSpeedKPHAction
  | FetchLocationStartAction
  | FetchLocationSuccessAction
  | FetchLocationFailureAction
  | FetchGifFailureAction
  | FetchGifSuccessAction
  | FetchGifStartAction;

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

export const fetchLocationStart = (): FetchLocationStartAction => ({
  type: WeatherActionType.FETCH_LOCATION_START,
});

export const fetchLocationSuccess = (
  latitude: number,
  longitude: number
): FetchLocationSuccessAction => ({
  type: WeatherActionType.FETCH_LOCATION_SUCCESS,
  payload: { latitude, longitude },
});

export const fetchLocationFailure = (
  error: string
): FetchLocationFailureAction => ({
  type: WeatherActionType.FETCH_LOCATION_FAILURE,
  payload: error,
});

export const fetchGifStart = (): FetchGifStartAction => ({
  type: WeatherActionType.FETCH_GIF_START,
});

export const fetchGifSuccess = (gifUrl: string): FetchGifSuccessAction => ({
  type: WeatherActionType.FETCH_GIF_SUCCESS,
  payload: gifUrl,
});

export const fetchGifFailure = (error: string): FetchGifFailureAction => ({
  type: WeatherActionType.FETCH_GIF_FAILURE,
  payload: error,
});

export const fetchGif = (condition: string): ThunkResult<void> => {
  return async (dispatch) => {
    dispatch(fetchGifStart());

    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: process.env.REACT_APP_GIPHY_API_KEY,
          q: condition + ' weather',
          limit: 30,
        },
      });

      if (response.data.data.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * response.data.data.length
        );
        dispatch(
          fetchGifSuccess(
            response.data.data[randomIndex].images.fixed_height.url
          )
        );
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      dispatch(fetchGifFailure(message));
    }
  };
};

export const fetchWeatherByLocation = (): ThunkResult<void> => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, WeatherActionTypes>
  ) => {
    dispatch(fetchLocationStart());

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchLocationSuccess(latitude, longitude));
          dispatch(fetchWeather({ latitude, longitude }));
        },
        (error) => {
          dispatch(fetchLocationFailure(error.message));
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      dispatch(
        fetchLocationFailure('Geolocation is not supported by this browser.')
      );
    }
  };
};

export const fetchWeather = (location: {
  city?: string;
  latitude?: number;
  longitude?: number;
}): ThunkResult<void> => {
  return (dispatch: Dispatch<WeatherActionTypes>) => {
    dispatch(resetWeatherError());
    dispatch(fetchWeatherStart());

    let query;
    if (location.city) {
      query = location.city;
    } else if (location.latitude && location.longitude) {
      query = `${location.latitude},${location.longitude}`;
    } else {
      dispatch(fetchWeatherFailure('Invalid location data'));
      return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${query}&aqi=yes`;

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure(error.message));
      });
  };
};
