const express = require('express');
const postModel = require('./model/post.model');

const app = express();
app.use(express.json())

app.post('/books' , async(req,res) => {
    const result = await postModel.create({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        publishedYear: req.body.publishedYear,
        createdAt: req.body.createdAt
    })

    return res.status(202).json({
        message: "Books fetched Successfully",
        result
    })
})


module.exports = app