import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './actionTypes';
import axios from 'axios'; // or use fetch if preferred

// Action creator for setting the loading state
export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

// Action creator for setting notifications
export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

// Asynchronous action creator to fetch notifications
export const fetchNotifications = () => {
  return async (dispatch) => {
    // Set loading state to true
    dispatch(setLoadingState(true));

    try {
      // Fetch notifications from API
      const response = await axios.get('/notifications.json');
      const notifications = response.data;

      // Set notifications data
      dispatch(setNotifications(notifications));
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
      // Optionally, handle errors here
    } finally {
      // Set loading state to false
      dispatch(setLoadingState(false));
    }
  };
};