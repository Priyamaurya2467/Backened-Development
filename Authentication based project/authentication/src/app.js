

const express = require('express')
const authRoutes = require('./routes/authRoutes');
const connectDb = require('./db/db');
const app = express();
connectDb()
app.use(express.json())
app.use('/api/auth',authRoutes)


module.exports = app
