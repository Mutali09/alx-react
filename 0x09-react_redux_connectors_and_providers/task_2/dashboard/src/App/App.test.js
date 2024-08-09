import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Import the stateless component
import { mapStateToProps, mapDispatchToProps } from './App'; // Import mapStateToProps and mapDispatchToProps

describe('<App />', () => {
  it('renders correctly when user is logged in', () => {
    const props = {
      isLoggedIn: true,
      displayDrawer: false,
      displayNotificationDrawer: jest.fn(),
      hideNotificationDrawer: jest.fn(),
      login: jest.fn(),
      logout: jest.fn(),
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when user is not logged in', () => {
    const props = {
      isLoggedIn: false,
      displayDrawer: false,
      displayNotificationDrawer: jest.fn(),
      hideNotificationDrawer: jest.fn(),
      login: jest.fn(),
      logout: jest.fn(),
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  // Add other relevant tests
});