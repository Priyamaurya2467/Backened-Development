const mongoose = require('mongoose')
const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//registration
async function register(req,res){
    const {name,email,password,role} = req.body

    const isUserAlreadyExist = await userModel.findOne({
        email
    })

    if(isUserAlreadyExist){
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        name,
        email,
        password:hash,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role:user.role
    },process.env.JWT_SECRET) 


    res.status(201).json({
        message: "User registered Successfully",
        token,
        user: {
            id: user.id,
            name: user.name,
            email:user.email,
            role:user.role
        }
    })
}


//login
async function login(req,res){
    const {name,email,password,role}=req.body

    const User = await userModel.findOne({
        $or:[
            {name},{email}
        ]
    })

    if(!User){
        return res.status(401).json({
            mesage: "User not Available"
        })
    }


    const isPasswordAvail = await bcrypt.compare(password,User.password)

    if(!isPasswordAvail){
        res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const token = await jwt.sign({
        id: User._id,
        role: User.role
    },process.env.JWT_SECRET)

    res.status(201).json({
        message: "User logged in successfully",
        token,
        User:{
            name: User.name,
            email: User.email,
            role: User.role
        }

    })
}

module.exports = {register,login}