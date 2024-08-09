import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from '../components/Notifications'; // Adjust the import path if needed

class App extends Component {
  render() {
    const { displayDrawer } = this.props;
    return (
      <div>
        {/* Content that uses displayDrawer */}
        <Notifications />
      </div>
    );
  }
}

App.propTypes = {
  displayDrawer: PropTypes.bool, // Assuming displayDrawer is a boolean
};

const mapStateToProps = (state) => ({
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

export default connect(mapStateToProps)(App);