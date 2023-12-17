import {
  WeatherData,
  WeatherActionTypes,
  WeatherActionType,
} from '../actions/weatherActions';

// Enum for unit measurement to ensure type safety and better developer experience
export enum Unit {
  Celsius = 'C',
  Fahrenheit = 'F',
}

// Interface for the state shape of the weather data
export interface WeatherState {
  loading: boolean;
  weatherData: WeatherData | null;
  error: string | null;
  unit: Unit;
}

// Initial state of the weather data
const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  error: null,
  unit: Unit.Celsius, // Default unit set to Celsius
};

// Weather reducer function handling various weather-related actions
const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    // Handles the start of a weather fetch action
    case WeatherActionType.FETCH_WEATHER_START:
      return { ...state, loading: true, error: null }; // Clear any previous errors

    // Handles successful weather data fetching
    case WeatherActionType.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload };

    // Handles weather fetch failure
    case WeatherActionType.FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Resets any stored errors in the weather state
    case WeatherActionType.RESET_WEATHER_ERROR:
      return { ...state, error: null };

    // Sets the unit to Celsius
    case WeatherActionType.SET_UNIT_CELSIUS:
      return { ...state, unit: Unit.Celsius };

    // Sets the unit to Fahrenheit
    case WeatherActionType.SET_UNIT_FAHRENHEIT:
      return { ...state, unit: Unit.Fahrenheit };

    // Default case to return the current state for any non-handled actions
    default:
      return state;
  }
};

// Default export of the weather reducer
export default weatherReducer;
