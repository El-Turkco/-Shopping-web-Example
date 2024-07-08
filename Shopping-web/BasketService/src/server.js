const express = require('express')  
require ("dotenv").config()
const bodyParser = require('body-parser')
const cors = require("cors")
const {Connect} = require("./config")
const BasketRouter = require("./routers/Basket.routers")
const cookieParser = require("cookie-parser");

//main express program 
const PORT = process.env.PORT
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.options('*', cors({
    origin:"http://localhost:3000",
}
))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser());

//Routers 
app.use("/api/v1/basket",BasketRouter);

//Main 
app.use("/", (req,res) => {
    return res.status(200).send("Basket Service")
})


app.listen(PORT, () => {
    try{    
        console.log("Server listenig on ".concat(PORT))
    }catch(err){
        return res.status(500).send("Someting went wrong")
    }
    

})
