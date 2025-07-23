const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./src/routes/productRoute');

dotenv.config();
const app = express();
app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Product Routes
app.use('/api/products', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to the Product API');
});