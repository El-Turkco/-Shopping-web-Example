const cookieparser = require("cookie-parser")
const jwttoken = require("../middleware/tokenvalue");

module.exports = function GenerateID (value){
//Jwt takes the last 5 numbers of the user ID number in the token. 
    const token = value.toString();
    const result = token.slice(19,24);


    return result;

}



