import express from 'express'
import postModel from './model/notesSchema.js';

const app = express();

app.use(express.json())

app.get('/',async(req,res)=>{
    await res.send("Server is running")
})

app.post('/create-post',async(req,res)=>{
   
    try {
        const { title, content,tags } = req.body;

        const post = await postModel.create({
            title,
            content,
            tags
        });

        res.status(201).json({
            "message" : "Post created successfully",
            post
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get('/notes' , async(req,res)=>{
    try{
        const post = await postModel.find();
        return res.status(200).json({
            message: "task fetched successfully",
            post
        })
    }
    catch(err){
        console.log(err)
    }
})

export default app