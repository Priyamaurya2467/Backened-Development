const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model')
const router = express.Router();

router.post("/create",(req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).send({
            message:"Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "Token us invalid"
        })
    }
    
    

    res.send("Post created successfully")

})


module.exports= router