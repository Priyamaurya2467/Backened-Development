const jwt = require('jsonwebtoken')

async function authMiddleware(req,res,next){

    try{
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({
                message: "No token"
            })
        }

        
    }
    catch(err){
        console.log(err)
    }

}