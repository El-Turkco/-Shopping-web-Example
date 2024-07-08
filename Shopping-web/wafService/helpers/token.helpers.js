const cookieparser = require("cookie-parser")
const jwt = require("jsonwebtoken")

// Get the jwt token value in the cookie  with middleware
module.exports = function ParsingID (value){
    //Jwt takes the last 5 numbers of the user ID number in the token.         
        const TokenID = jwt.verify(value,process.env.JWT_KEY)
        
        const token = TokenID._id.toString();
        const UserbasketID = token.slice(19,24)
        return UserbasketID;
    
}