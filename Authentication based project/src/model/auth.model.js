const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        
        min: [1000000000, "Number must be at least 10 digits"],
        max: [9999999999, "Number cannot exceed 10 digits"]
    },
    password: {
        type: String,
        required: true,
        
    },
   
})

const authModel = mongoose.model('authentication',authSchema)

module.exports = authModel

