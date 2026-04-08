const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.mongoose_URI);
    console.log("conected to db")
}

module.exports = connectDB