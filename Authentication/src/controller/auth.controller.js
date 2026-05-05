const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")

async function registerUser(req,res){

    if(!req.body){
        return res.status(400).json({message: "Request body is missing"})
    }


    const {username , email, password} = req.body;

    

    const isUserAlreadyExists = await userModel.findOne({
        email

    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User already exists"
            
        })
    }
    const user = await userModel.create({
        username,email,password
    })

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie("something", token)

    
    res.status(201).json({
        message: "User registered successfully",
        user,
        

    })

    



}

module.exports = {registerUser}