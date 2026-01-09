const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // JSON data padhne ke liye

// Basic Route (Check karne ke liye ki server chal raha hai)
app.get('/', (req, res) => {
    res.send('VirtuTask Server is Running!');
});

// Database Connection (Abhi placeholder hai, next step mein connect karenge)
// mongoose.connect(process.env.MONGO_URI)...

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});