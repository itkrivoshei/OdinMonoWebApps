import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Function to save state to local storage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('myState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
}

// Function to load state from local storage
function loadState() {
  try {
    const serializedState = localStorage.getItem('myState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
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
