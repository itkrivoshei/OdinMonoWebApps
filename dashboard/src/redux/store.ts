import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { initialState } from './reducers/todoReducer';

type StateType = {
  todos?: {
    projects?: any[];
  };
};

// Check if the loaded state is valid
function isValidState(state: StateType): boolean {
  return Boolean(state && state.todos && Array.isArray(state.todos.projects));
}

// Save the state to local storage
function saveState(state: StateType): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('myState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
}

// Load the state from local storage
function loadState() {
  try {
    const serializedState = localStorage.getItem('myState');
    if (serializedState === null) return { todos: initialState };

    const parsedState = JSON.parse(serializedState);

    return isValidState(parsedState) ? parsedState : { todos: initialState }; // Validate the loaded state
  } catch (err) {
    console.error('Could not load state', err);
    return { todos: initialState };
  }
}

// Load the persisted state
const persistedState = loadState();

// Create the Redux store
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// Subscribe to store changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;