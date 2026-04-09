const express = require('express')

const postModel = require('./models/post.model')
const app = express()
const multer = require('multer')
const cors = require('cors')
const uploadFile = require('./services/storage.services')
app.use(express.json())

app.use(cors())

const upload = multer({storage:multer.memoryStorage()})
app.post('/posts' ,upload.single('image'), async  (req,res)=>{
  
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        title: req.body.title,
        author: req.body.author,
        caption: req.body.caption

    })
       
    
   

   return res.status(200).json({
        message: "post created successfully",
        post
   })
})

app.get('/posts', async (req, res) => {
  try {
    const posts = await postModel.find()

    return res.status(200).json({
      message: "Posts fetched successfully",
      posts
    })

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})


app.post('/posts/:id/comment', async (req, res) => {
  const { text } = req.body

  const post = await postModel.findById(req.params.id)
  post.comments.push({ text })
  await post.save()

  res.json(post)
})

app.delete('/posts/:id' , async(req,res)=>{
  try{
    const id = req.params.id
    const deletedPost = await postModel.findByIdAndDelete(id)

    if(!deletedPost){
      return res.status(404).json({
        message: "Post not found"
      })
    }
    res.status(200).json({
      message: "Post deleted successfully",
      post: deletedPost
    })
  }catch{
    res.status(500).json({
      error:err.message
    })
  }
  
})

module.exports = app