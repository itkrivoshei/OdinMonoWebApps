import { combineReducers } from '@reduxjs/toolkit';
import toDoReducer from './slices/toDoSlice';
import weatherReducer from './slices/weatherSlice';

const rootReducer = combineReducers({
  toDo: toDoReducer,
  weather: weatherReducer,
});

export default rootReducer;
