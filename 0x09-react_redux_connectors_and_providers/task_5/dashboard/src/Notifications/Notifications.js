import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import NotificationItem from './NotificationItem'; // Adjust import if needed

class Notifications extends Component {
  static propTypes = {
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div>
        {listNotifications.map((notification) => (
          <NotificationItem key={notification.id} {...notification} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('notifications').toJS(),
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);