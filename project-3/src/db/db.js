const mongoose = require('mongoose')

async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Connected to Db")

    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectDb