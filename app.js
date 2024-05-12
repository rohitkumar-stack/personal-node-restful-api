const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Suppress Mongoose deprecation warning
mongoose.set('strictQuery', false);

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes users
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//Routes employee
const employeeRoutes = require('./routes/EmployeeRoutes');
app.use('/api/employee', employeeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
