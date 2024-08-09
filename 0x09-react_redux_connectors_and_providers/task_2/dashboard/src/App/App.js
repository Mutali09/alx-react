import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from './actions'; // Adjust path if needed

function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login, logout }) {
  // Define credentials for login; this is just an example
  const credentials = {
    username: 'user',
    password: 'password',
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Logged In' : 'Not Logged In'}</h1>
      {displayDrawer && <div className="notification-drawer">Drawer Content</div>}
      <button onClick={displayNotificationDrawer}>Show Drawer</button>
      <button onClick={hideNotificationDrawer}>Hide Drawer</button>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login(credentials)}>Login</button>
      )}
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
  login: loginRequest,
  logout,
};

// Connect the App component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);

// Define prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

// Define default props
App.defaultProps = {
  displayDrawer: false,
};