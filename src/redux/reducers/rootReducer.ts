import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import toDosReducer from './toDoReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  toDos: toDosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
