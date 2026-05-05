const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    name: String,
    message: String
})

const postModel = mongoose.model('post',postSchema)

module.exports = postModel