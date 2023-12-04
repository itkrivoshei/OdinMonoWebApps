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
}

const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  error: null,
  unit: Unit.Celsius,
};

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case WeatherActionType.FETCH_WEATHER_START:
      return { ...state, loading: true };

    case WeatherActionType.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload };

    case WeatherActionType.FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case WeatherActionType.RESET_WEATHER_ERROR:
      return { ...state, error: null };

    case WeatherActionType.SET_UNIT_CELSIUS:
      return {
        ...state,
        unit: Unit.Celsius,
      };

    case WeatherActionType.SET_UNIT_FAHRENHEIT:
      return {
        ...state,
        unit: Unit.Fahrenheit,
      };

    default:
      return state;
  }
};

export default weatherReducer;
