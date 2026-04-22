import express from 'express'
import postModel from './model/notesSchema.js';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("Server is running")
})

app.post('/create-post',async(req,res)=>{
   
    try {
        console.log("Body:" , req.body)
        const { title, content,tags } = req.body;


        if(!title || !content){
            return res.status(400).json({message: "Missing field"})
        }

        const post = await postModel.create({
            title,
            content,
            tags: Array.isArray(tags) ? tags: [],
        });

        res.status(201).json({
            message : "Post created successfully",
            post
        });
    } catch (error) {
        console.log("Create error:",error)
        res.status(500).json({ message: error.message });
    }
});


app.get('/notes' , async(req,res)=>{
    try{
        const notes = await postModel.find();
        res.status(200).json(notes);
            
        }
    
    catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
})

app.delete('/notes/:id',async(req,res)=>{
    try{
        await postModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Deleted Successfully"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: err.message})
    }
})

export default app