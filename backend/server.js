const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log("MongoDB Connection Error: ", err));

// Routes Import Karein (Yeh line add karein)
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('VirtuTask Server is Running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});