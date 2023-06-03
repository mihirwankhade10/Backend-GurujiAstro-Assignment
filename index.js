const express = require('express');
const config = require('./config');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const db = require('./database/db');

const app = express();

// Connect to MongoDB
db.connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
