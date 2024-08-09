import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Import thunk
import App from './App';
import uiReducer from './uiReducer'; // Adjust the path if needed

// Create the Redux store with redux-thunk middleware
const store = createStore(
  uiReducer,
  applyMiddleware(thunk) // Apply the thunk middleware
);

// Render the application and wrap it with the Provider component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);