const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const pincodeRoutes = require('./routes/pincode');
const favoriteRoutes = require('./routes/favorites');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/pincode', pincodeRoutes); // Ensure this uses the correct router
app.use('/api/favorites', favoriteRoutes); // Ensure this uses the correct router

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
