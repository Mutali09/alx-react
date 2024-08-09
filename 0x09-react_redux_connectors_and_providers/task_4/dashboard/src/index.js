import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App'; // Adjust the import path if needed
import rootReducer from './reducers/rootReducer'; // Import the rootReducer

// Setup Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with Thunk middleware and DevTools extension
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);