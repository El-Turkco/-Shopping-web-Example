const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const jwttoken = require("../middleware/tokenvalue");


// Token validation Middleware 
module.exports = function auth(req,res,next){
    // Get users jwt token value in cookie 
    const JwtToken = cookieParser.JSONCookies(req.headers?.cookie);
   
    // Token value check 
    if(typeof JwtToken == null || typeof JwtToken == "undefined"){
        return res.status(400).send({message:"Do you have a account "})
    }
    //-----------------------------------------
    // Check Token value 
    if(!JwtToken) {
        return res.status(401).send({message:"Unauthorized"});
    }
    //JwtToken validation 
    try{
        req.user = JwtToken;

        if(!req.user._id == JwtToken._id){
            return res.status(404).send({message:"İnvalid token value"})
        }
        next();
    }catch(err){
        console.log(err)
        return res.status(500).send({message:"Not a Token"})

    }

}