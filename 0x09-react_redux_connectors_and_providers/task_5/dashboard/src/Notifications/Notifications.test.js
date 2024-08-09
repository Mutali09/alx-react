import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../Notifications';
import { fetchNotifications } from '../../actions/notificationActionCreators';
import NotificationItem from '../NotificationItem';

jest.mock('../../actions/notificationActionCreators', () => ({
  fetchNotifications: jest.fn(),
}));

describe('Notifications', () => {
  it('should call fetchNotifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<Notifications fetchNotifications={fetchNotificationsMock} listNotifications={[]} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });

  it('should render NotificationItem components', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} fetchNotifications={() => {}} />);
    expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
  });
});