const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// POST /api/notifications
router.post('/notifications', notificationController.sendNotification);

// GET /api/users/:id/notifications
router.get('/users/:id/notifications', notificationController.getUserNotifications);

module.exports = router;
