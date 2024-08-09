import { Map } from 'immutable'; // Assuming you're using Immutable.js
import { LOGIN, LOGOUT } from './actionTypes'; // Adjust the path if needed

// Initial state
const initialState = Map({
  user: null, // User state initially set to null
  isNotificationDrawerVisible: false,
  // Add other initial state properties if needed
});

// Reducer function
function uiReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state.set('user', action.payload); // Set user from action payload
    case LOGOUT:
      return state.set('user', null); // Reset user to null
    // Handle other actions
    default:
      return state;
  }
}

export default uiReducer;