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

const convertWindSpeed = (speed: number, toUnit: Unit): number => {
  return toUnit === Unit.Celsius ? speed * 1.60934 : speed / 1.60934;
};

const updateWeatherData = (
  state: WeatherState,
  updateFn: (
    currentWeatherData: WeatherData['current']
  ) => WeatherData['current']
): WeatherState => {
  if (!state.weatherData) {
    return state;
  }

  return {
    ...state,
    weatherData: {
      ...state.weatherData,
      current: updateFn(state.weatherData.current),
    },
  };
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
      return updateWeatherData(state, (current) => ({
        ...current,
        wind_kph: convertWindSpeed(current.wind_mph, Unit.Celsius),
      }));

    case WeatherActionType.SET_UNIT_FAHRENHEIT:
      return updateWeatherData(state, (current) => ({
        ...current,
        wind_mph: convertWindSpeed(current.wind_kph, Unit.Fahrenheit),
      }));

    default:
      return state;
  }
};

export default weatherReducer;
