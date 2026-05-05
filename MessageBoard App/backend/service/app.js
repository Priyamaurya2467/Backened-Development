const express = require('express')
const postModel = require('./Schema/Schema')
const connectDb = require('./db/db')

const app = express()
app.use(express.json())
connectDb()

app.get('/create-post',async(req,res)=>{
    const post = await postModel.create({
        name: req.body.name,
        message: req.body.message
    })

    return res.status(201).json({
        message: "Post created successfully"
    })
})


app.post('/fetch-post',async(req,res)=>{
    const posts = await postModel.find()
    return res.status(202).json({
        message: "post fetched successfully",
        posts: posts
    })

})



module.exports = app