const mongoose = require('mongoose')


const qnaSchema = new mongoose.Schema({
    question : {
        type: String,
        required: true,
    },
    answer : {
        type: String,
        required: true,
    },
}, {timestamps: true})

const qnaModel = mongoose.model("Qna",qnaSchema)


module.exports = qnaModel