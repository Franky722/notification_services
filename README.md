# Notification Service

A simple notification system that allows sending and retrieving user notifications via API. This project was developed as part of an intern assignment.

## Features

- **Send Notifications** via POST endpoint
- **Retrieve Notifications** for a user via GET endpoint
- **Notification Types Supported**: Email, SMS, and In-App

---

## API Endpoints

### 1. Send a Notification

**POST** `/notifications`

**Request Body:**
```json
{
  "userId": "user123",
  "type": "in-app",
  "message": "This is a test in-app notification."
}
```
Success Response (200):
```json
{
  "status": "success",
  "message": "Notification sent successfully"
}
```
Error Response (400):
```json
{
  "status": "error",
  "message": "Invalid notification type"
}
```
Example Response(200):
```json
{
  "userId": "user123",
  "notifications": [
    {
      "type": "email",
      "message": "Welcome to the service!"
    },
    {
      "type": "sms",
      "message": "Your OTP is 123456"
    }
  ]
}

```
Clone the repository:
```bash
git clone https://github.com/yourusername/notification-service.git
cd notification-service

```
Install dependencies:
```bash
npm install
# or
pip install -r requirements.txt

```
Run the application:
```bash
npm start
# or
python app.py

```
Technologies Used
Node.js / Express (or replace with your stack: Python, Django, Flask, etc.)

RESTful API

JSON for request/response

In-memory storage (or specify DB used)

Project Structure
notification-service/
├── controllers/
│   └── notificationController.js       # Handles request logic
├── routes/
│   └── notificationRoutes.js           # API route definitions
├── services/
│   ├── emailService.js                 # Handles email notifications
│   ├── smsService.js                   # Handles SMS notifications
│   └── inAppService.js                 # Handles in-app notifications
├── models/
│   └── notification.js                 # Notification model (optional DB or memory)
├── server.js                           # Main server entry point
├── .env                                # Environment variables (API keys, ports, etc.)
└── package.json                        # NPM metadata and dependencies

Sample Notifications
Email
```bash
{
  "userId": "user123",
  "type": "email",
  "message": "Welcome to our service!"
}

```
sms
```bash
{
  "userId": "user456",
  "type": "sms",
  "message": "Your OTP is 654321"
}

```
In-app
```bash
{
  "userId": "user789",
  "type": "in-app",
  "message": "You have a new friend request."
}

```
Limitations
No message queue (e.g., RabbitMQ, Kafka)

No retry logic for failed messages

Notifications are stored in memory only (not persisted)

No authentication or authorization

