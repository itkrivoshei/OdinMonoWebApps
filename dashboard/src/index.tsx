import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './components/ToDoApp/redux/store';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Could not find root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
