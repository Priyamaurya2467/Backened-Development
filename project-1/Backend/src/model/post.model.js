const mongoose = require('mongoose');

// ✅ Create Schema
const postSchema = new mongoose.Schema({
    image: String,
    caption: String
});

// ✅ Create Model
const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;



