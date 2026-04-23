const express = require('express')
const app  =express();
const cors = require('cors')
app.use(cors())
const qnaModel = require('./model/qnamodel')
app.use(express.json())


app.post('/addqna' , async(req,res)=>{
    try{
        const {question,answer} = req.body;
        const data = await qnaModel.create({question,answer});
        res.status(201).json(data);
    }
    catch(error){
        console.log(error)
    }
})


app.get('/getqna',async(req,res)=>{
    try{
        const data = await qnaModel.find().sort({createdAt: -1});
        res.json(data);
    }catch(err){
        res.status(500).json({err})
    }
})
app.delete('/deleteqna/:id' , async(req,res)=>{
    try{
    const {id} = req.params;
    const deleted = await qnaModel.findByIdAndDelete(id);

    if(!deleted){
        return res.status(404).json({message: "Item not found"})
    }
    res.json({message: "Deleted successfully"});
    }catch(err){
        res.status(500).json({message: "Delete failed"})
    }
})

module.exports = app