import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return the correct props from the state', () => {
    // Define the state with Immutable.js
    const state = fromJS({
      uiReducer: {
        isUserLoggedIn: true,
      },
    });

    // Call mapStateToProps with the state
    const props = mapStateToProps(state);

    // Assert that the props are as expected
    expect(props).toEqual({ isLoggedIn: true });
  });
});