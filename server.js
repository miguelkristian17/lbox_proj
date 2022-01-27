const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({extended: false}))

//Define API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/images', require('./routes/api/images'));
app.use('/api/ratings', require('./routes/api/ratings'));

// Listening to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log('Server started on port ' + PORT)});