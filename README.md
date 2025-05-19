# Notification Service

A simple notification system that allows sending and retrieving user notifications via API. This project was developed as part of an intern assignment.

## Features

- **Send Notifications** via POST endpoint
- **Retrieve Notifications** for a user via GET endpoint
- **Notification Types Supported**: Email, SMS, and In-App

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


