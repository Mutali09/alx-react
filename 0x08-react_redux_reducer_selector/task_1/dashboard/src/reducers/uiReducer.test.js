import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT 
} from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    });
  });

  // Add similar tests for other actions
  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER }).toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS }).toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(uiReducer(initialState, { type: LOGIN_FAILURE }).toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false
    });
  });

  it('should handle LOGOUT', () => {
    expect(uiReducer(initialState, { type: LOGOUT }).toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false
    });
  });
});
