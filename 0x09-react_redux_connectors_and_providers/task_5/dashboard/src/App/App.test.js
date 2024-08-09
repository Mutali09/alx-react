import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Notifications from '../../components/Notifications';

describe('App', () => {
  it('should render Notifications component', () => {
    const wrapper = shallow(<App displayDrawer={false} />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

});