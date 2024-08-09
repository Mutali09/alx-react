import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Import the stateless component

describe('<Footer />', () => {
  it('renders correctly with user', () => {
    const props = {
      user: { name: 'John Doe' }, // Example user object
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without user', () => {
    const props = {
      user: null,
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  // Add other relevant tests
});