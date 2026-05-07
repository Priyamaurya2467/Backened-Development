const authModel = require('../model/auth.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function register(req,res){
    const {fullname,email,phone,password} = req.body

    const isUserAlreadyExist = await authModel.findOne({
        $or : [
            {email}
        ]
    })

    if(isUserAlreadyExist){
        res.status(401).json({
            message: "User already exists !"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const content = await authModel.create({
        fullname,
        email,
        phone,
        password: hash,
        
    })

    const token = await jwt.sign({
        id: content._id
    },process.env.JWT_SECRET)

    res.status(200).json({
        message: "User registered Successfully",
        content,
        token
    })
  

}


async function login(req,res){
    const {fullname,email,password} = req.body

    const user = await authModel.findOne({
        $or : [
        {email}
        ]
    })
    if(!user){
        res.status(401).json({
            message: "User not exists"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        res.status(401).json({
            message: "Invalid credentials"
        })
    }
    const token = await jwt.sign({
         id : user._id
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User logged in successfully",
        fullname,
        email,
        password
    })
}
module.exports = {register,login}