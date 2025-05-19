// services/inAppService.js
const inAppNotifications = {};

function storeNotification(userId, message) {
  if (!inAppNotifications[userId]) {
    inAppNotifications[userId] = [];
  }
  inAppNotifications[userId].push({
    message,
    timestamp: new Date().toISOString(),
  });
}

function getNotifications(userId) {
  return inAppNotifications[userId] || [];
}

module.exports = { storeNotification, getNotifications };
