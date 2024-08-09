import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayNotificationDrawer, hideNotificationDrawer } from './actions'; // Adjust the path to your action creators

function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) {
  return (
    <div>
      <h1>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</h1>
      {displayDrawer && <div className="notification-drawer">Drawer Content</div>}
      <button onClick={displayNotificationDrawer}>Show Drawer</button>
      <button onClick={hideNotificationDrawer}>Hide Drawer</button>
      {/* Your other component code */}
    </div>
  );
}

// mapStateToProps function
export const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
  displayDrawer: state.uiReducer.get('isNotificationDrawerVisible'),
});

// mapDispatchToProps function
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// Connect the App component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);

// Define prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

// Define default props
App.defaultProps = {
  displayDrawer: false,
};