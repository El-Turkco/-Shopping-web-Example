const cookieParser = require("cookie-parser")
const jwttoken = require("../helpers/token.helpers")
const ParsingID = require("../helpers/token.helpers")
const jwt = require("jsonwebtoken")

exports.token_validation = async function(req,res){

    try{
        const BasketID = req.params.basketid
        console.log(BasketID)
        //Helpers Function 
        const value = req.params.value
        const Userbasketid = ParsingID(value)
        console.log(Userbasketid)
        if (BasketID !== Userbasketid ){
            return res.status(403).send({message:"FORBİDEN"})
            
        }
        return res.status(200).send(Userbasketid)
       
    }catch(err){
        console.log(err)
        return res.status(500).send("Someting went wrong") 
    }
}

exports.return_token = async function(req,res){
    const value = req.params.value
    const Userbasketid = ParsingID(value)
    return res.status(200).send(Userbasketid)
}

