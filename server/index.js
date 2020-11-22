const express = require('express');
const env = require('dotenv');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();

// Routes
const authRoutes = require('./src/routes/auth');
const adminRoutes = require('./src/routes/admin/auth');

// Environment Variables
env.config();

const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@chatapp.4qkeh.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

// MongoDB Connection
const connect = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello!'
    });
});

app.use('/api', authRoutes);
app.use('/api', adminRoutes);

PORT = process.env.PORT || 2058;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});