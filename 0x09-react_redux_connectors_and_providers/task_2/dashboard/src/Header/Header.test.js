import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'; // Import the stateless component

describe('<Header />', () => {
  it('renders correctly with user', () => {
    const props = {
      user: { name: 'Jane Doe' }, // Example user object
      logout: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without user', () => {
    const props = {
      user: null,
      logout: jest.fn(),
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  // Add other relevant tests
});