const mongoose = require('mongoose')

const markSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'User'
    },
    subject: String,
    marks:Number,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Mark',markSchema)