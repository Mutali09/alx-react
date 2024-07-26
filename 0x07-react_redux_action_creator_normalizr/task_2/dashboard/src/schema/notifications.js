import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

export { user, message, notification, normalizedData };

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.result
    .map(id => normalizedData.entities.notifications[id])
    .filter(notification => notification.author === userId);
  return notifications.map(notification => normalizedData.entities.messages[notification.context]);
}
