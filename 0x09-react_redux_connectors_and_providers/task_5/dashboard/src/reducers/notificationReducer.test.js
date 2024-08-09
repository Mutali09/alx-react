mport { fromJS } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      notifications: [],
      loading: false,
    });
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: SET_LOADING_STATE,
      isLoading: true,
    };
    const expectedState = fromJS({
      notifications: [],
      loading: true,
    });
    expect(notificationReducer(fromJS({ notifications: [], loading: false }), action)).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, type: 'default', value: 'Notification 1' }],
    };
    const initialState = fromJS({
      notifications: [],
      loading: false,
    });
    const expectedState = fromJS({
      notifications: [{ id: 1, type: 'default', value: 'Notification 1' }],
      loading: false,
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});