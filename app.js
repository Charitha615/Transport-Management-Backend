const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');
const keys = require('./config/keys');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error(error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
