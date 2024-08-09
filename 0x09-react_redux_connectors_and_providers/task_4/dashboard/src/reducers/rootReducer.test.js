import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from './rootReducer'; // Import the rootReducer

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      courses: fromJS({}),
      notifications: fromJS({}),
      ui: fromJS({}),
    };
    
    const initialState = rootReducer(undefined, { type: '@@INIT' });
    
    expect(initialState.toJS()).toEqual(expectedState);
  });
});