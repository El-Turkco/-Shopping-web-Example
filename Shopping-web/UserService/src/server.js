const express = require('express')  
require ("dotenv").config()
const bodyParser = require('body-parser')
const {Connect} = require("./config")
const Authrouter = require("./routers/auth")
const cors = require("cors")
const bcrypt = require("bcrypt");
require("dotenv").config();
const {User,validationUser} = require("./models/users")

const PORT = process.env.PORT

//main express program 

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.options('*', cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

//Routers 
app.use("/api/v1/users",Authrouter)



//Main 
app.use("/", (req,res) => {
    return res.status(200).send("User Service")
})


app.listen(PORT, () => {
    try{    
        console.log("Server listenig on ".concat(PORT))
    }catch(err){
        return res.status(500).send("Someting went wrong")
    }
    

})
