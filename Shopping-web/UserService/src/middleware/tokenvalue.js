const cookieparser = require("cookie-parser")
const jwt = require("jsonwebtoken")

// Get the jwt token value in the cookie  with middleware

module.exports = function  jwttoken(value) {
    const token = cookieparser.JSONCookies(value);
    const validtoken = token.split("=")[1];
    const decodedToken = jwt.verify(validtoken,process.env.JWT_KEY);

    return decodedToken;
}

