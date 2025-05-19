// services/smsService.js
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

async function sendSMS(to, message) {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE, // your Twilio trial number
    to: to,
  });
}

module.exports = { sendSMS };
