import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from '../actions/weatherActions';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_WEATHER_START:
      return { ...state, loading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
