// services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Notification',
    text: message,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
