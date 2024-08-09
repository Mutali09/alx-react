import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './actions'; // Adjust the path if needed

// Define the Header component
function Header({ user, logout }) {
  return (
    <header>
      <h1>My Application</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p> {/* Adjust according to your user object structure */}
          <a href="#" onClick={(e) => { 
            e.preventDefault(); // Prevent default anchor behavior
            logout(); // Dispatch logout action
          }}>
            Logout
          </a>
        </div>
      ) : (
        <p>Welcome, Guest!</p>
      )}
      {/* Your other header content */}
    </header>
  );
}

// mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.user, // Adjust according to your Redux state structure
});

// mapDispatchToProps function
const mapDispatchToProps = {
  logout,
};

// Connect the Header component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// Define prop types
Header.propTypes = {
  user: PropTypes.object, // Define according to your user object structure
  logout: PropTypes.func.isRequired,
};

// Define default props
Header.defaultProps = {
  user: null,
};