const mongoose = require('mongoose')

async function connectDb(){
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("Connected to DB")
}

module.exports = connectDb