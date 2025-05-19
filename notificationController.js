const emailService = require('../services/emailService');
const smsService = require('../services/smsService');
const inAppService = require('../services/inAppService');

exports.sendNotification = async (req, res) => {
  const { userId, type, message, to } = req.body;

  try {
    switch (type) {
      case 'email':
        await emailService.sendEmail(to, message);
        break;
      case 'sms':
        await smsService.sendSMS(to, message);
        break;
      case 'in-app':
        await inAppService.storeNotification(userId, message);
        break;
      default:
        return res.status(400).json({ error: 'Invalid notification type' });
    }

    res.status(200).json({ message: 'Notification sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserNotifications = (req, res) => {
  const userId = req.params.id;
  const notifications = inAppService.getNotifications(userId);
  res.json(notifications);
};
