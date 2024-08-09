import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Define the Footer component
function Footer({ user }) {
  return (
    <footer>
      {user ? (
        <p>Welcome, {user.name}!</p> // Adjust according to your user object structure
      ) : (
        <p>Welcome, Guest!</p>
      )}
      {/* Your other footer content */}
    </footer>
  );
}

// mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.user, // Adjust according to your Redux state structure
});

// Connect the Footer component to Redux store
export default connect(mapStateToProps)(Footer);

// Define prop types
Footer.propTypes = {
  user: PropTypes.object, // Define according to your user object structure
};

// Define default props
Footer.defaultProps = {
  user: null,
};