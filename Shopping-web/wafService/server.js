const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors")
require("dotenv").config();
const TokenRouter = require("./routers/waf.token.routers"); 
const cookieParser = require("cookie-parser");
 
const PORT = process.env.PORT

//Main express 

const app = express()

//Configurations 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.options('*', cors({
    origin:"http://127.0.0.1:3000"
}))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());


//Routers
app.use("/api/v1/waf/",TokenRouter)

    
app.use("/",(req,res) => {
    return res.status(200).send("WAF SERVİCE")
})

app.listen(PORT,err => {
    if (err){
        console.log(err)
        process.exit(1);
    
    }
    console.log("Server is listenig on port ".concat(PORT));
})

process.on('SIGINT',function(){
    process.exit()
})