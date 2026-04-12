const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    publishedYear : Number,
    createdAt : {
        type: Date,
        default: Date.now
    }

})

const postModel = mongoose.model('Book' , postSchema)

module.exports = postModel