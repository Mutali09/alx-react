import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import uiReducer from './uiReducer'; // Adjust the path according to your project structure

// Create the Redux store
const store = createStore(uiReducer);

// Render the application and wrap it with the Provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);