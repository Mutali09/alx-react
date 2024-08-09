import { setLoadingState, setNotifications, fetchNotifications } from '../actions/notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationActionCreators', () => {
  it('should create an action to set loading state', () => {
    const isLoading = true;
    const expectedAction = {
      type: SET_LOADING_STATE,
      isLoading,
    };
    expect(setLoadingState(isLoading)).toEqual(expectedAction);
  });

  it('should create an action to set notifications', () => {
    const notifications = [{ id: 1, type: 'default', value: 'Notification 1' }];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });

  it('should dispatch fetchNotifications action correctly', async () => {
    const dispatch = jest.fn();
    const notifications = [{ id: 1, type: 'default', value: 'Notification 1' }];
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(notifications),
    });
    await fetchNotifications()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setLoadingState(true));
    expect(dispatch).toHaveBeenCalledWith(setNotifications(notifications));
    expect(dispatch).toHaveBeenCalledWith(setLoadingState(false));
  });
});