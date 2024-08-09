import { Map, fromJS } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './actionTypes';

// Initial state with loading attribute and notifications as an empty Map
const initialState = Map({
  loading: false,
  notifications: Map({}),
});

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      // Update the loading state
      return state.set('loading', action.payload);

    case FETCH_NOTIFICATIONS_SUCCESS:
      // Use mergeDeep to integrate new notifications with existing state
      return state.mergeDeep({
        notifications: fromJS(action.payload),
      });

    default:
      return state;
  }
};
