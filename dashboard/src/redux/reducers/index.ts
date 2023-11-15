import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import todosReducer from './todoReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
