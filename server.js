console.log("✅ Server is starting...");
require('dotenv').config();
const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', notificationRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message);
});
