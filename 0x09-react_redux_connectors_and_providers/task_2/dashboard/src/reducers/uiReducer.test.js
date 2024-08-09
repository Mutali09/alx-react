import { fromJS } from 'immutable';
import uiReducer from './uiReducer'; // Adjust the path if needed
import { LOGIN, LOGOUT } from './actionTypes'; // Adjust the path if needed

describe('uiReducer', () => {
  it('handles LOGIN action', () => {
    const initialState = fromJS({
      user: null,
      isNotificationDrawerVisible: false,
    });

    const action = {
      type: LOGIN,
      payload: { name: 'John Doe' }, // Example user object
    };

    const newState = uiReducer(initialState, action);
    expect(newState.get('user')).toEqual(action.payload);
  });

  it('handles LOGOUT action', () => {
    const initialState = fromJS({
      user: { name: 'John Doe' }, // Example user object
      isNotificationDrawerVisible: false,
    });

    const action = {
      type: LOGOUT,
    };

    const newState = uiReducer(initialState, action);
    expect(newState.get('user')).toBeNull();
  });

  // Add other relevant tests
});