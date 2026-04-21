import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title : String,
    content : String,
    tags: String
})

const postModel = mongoose.model("Notes", postSchema)

export default postModel