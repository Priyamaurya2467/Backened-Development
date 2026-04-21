import mongoose from 'mongoose'

async function connectDb(){
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to DB")
}

export default connectDb