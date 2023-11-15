import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  RESET_WEATHER_ERROR,
} from '../actions/weatherActions';
import { AnyAction } from 'redux';
import { WeatherData } from '../actions/weatherActions';

export interface WeatherState {
  loading: boolean;
  weatherData: WeatherData | null;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  error: null,
};

const weatherReducer = (
  state = initialState,
  action: AnyAction
): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return { ...state, loading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload };
    case FETCH_WEATHER_FAILURE:
      console.log('Reducer received error:', action.payload);
      return { ...state, loading: false, error: action.payload };
    case RESET_WEATHER_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default weatherReducer;
