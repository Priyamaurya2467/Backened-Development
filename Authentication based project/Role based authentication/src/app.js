const express = require('express')
const connectDb = require('./db/db')
const authRoutes = require('./Routes/auth.route')

const app = express()
connectDb()
app.use(express.json())
app.use('/api/auth',authRoutes)

module.exports = app