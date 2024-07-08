const express = require('express') 
const cors = require('cors') 
require ("dotenv").config()
const bodyParser = require('body-parser')
const {Connect} = require("./DB/config")
const ProductRouter = require("./routers/product.routers") 

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
app.use(bodyParser.urlencoded({extends:true}))


//Routers 
app.use("/api/v1",ProductRouter)

//Main 
app.use("/", (req,res) => {
    return res.status(200).send("Products Service")
})


app.listen(PORT, () => {
    try{    
        console.log("Server listenig on ".concat(PORT))
    }catch(err){
        return res.status(500).send("Someting went wrong")
    }
    

})
