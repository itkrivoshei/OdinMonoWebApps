import {
  WeatherData,
  WeatherActionTypes,
  WeatherActionType,
} from '../actions/weatherActions';

export enum Unit {
  Celsius = 'C',
  Fahrenheit = 'F',
}

export interface WeatherState {
  loading: boolean;
  weatherData: WeatherData | null;
  error: string | null;
  unit: Unit;
  gifUrl: string | null;
  gifLoading: boolean;
}

const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  error: null,
  unit: Unit.Celsius,
  gifUrl: null,
  gifLoading: false,
};

const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case WeatherActionType.FETCH_WEATHER_START:
      return { ...state, loading: true, error: null };

    case WeatherActionType.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload };

    case WeatherActionType.FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case WeatherActionType.RESET_WEATHER_ERROR:
      return { ...state, error: null };

    case WeatherActionType.SET_UNIT_CELSIUS:
      return { ...state, unit: Unit.Celsius };

    case WeatherActionType.SET_UNIT_FAHRENHEIT:
      return { ...state, unit: Unit.Fahrenheit };

    case WeatherActionType.FETCH_GIF_START:
      return { ...state, gifLoading: true };

    case WeatherActionType.FETCH_GIF_SUCCESS:
      return { ...state, gifUrl: action.payload, gifLoading: false };

    case WeatherActionType.FETCH_GIF_FAILURE:
      return { ...state, error: action.payload, gifLoading: false };

    default:
      return state;
  }
};

export default weatherReducer;
