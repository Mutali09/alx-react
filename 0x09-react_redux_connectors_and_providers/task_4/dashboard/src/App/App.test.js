import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import App, { mapStateToProps } from './App';

describe('App Component', () => {
  it('should map state to props correctly', () => {
    const state = fromJS({
      ui: {
        isLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
      courses: {},
      notifications: {},
    });
    
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };
    
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
  
  // Other tests...
});