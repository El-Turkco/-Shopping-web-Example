const {BasketModel} = require("../models/basket.models")
const axios = require("axios")
const ParsingID =require("../middleware/tokenvalue")

exports.add_products = async function (req,res){
  try{
    // Basket ID validation 
    const basketID = req.params.basketid
    const id = req.params.id

    // BasketID validation  
    const value =req.params.value
    const response = await axios.get("http://127.0.0.1:3003/api/v1/waf/UserBasketID/" + value)
    const UserBasketID = response.data
    if (basketID !== UserBasketID) {
        return res.status(403).send({message:"FORBİDEN İnvalid BasketID"})
    }
 //------------------------------------------------------------------------------------------------    

 // Add product 
    const products = await axios.get(" http://127.0.0.1:4000/api/v1/products/" + id )
   
    const product = new BasketModel({
        Basket_ID: UserBasketID,
        Name : products.data.Name,
        Price:products.data.Price,
        Url:products.data.Url,
    })
    product.save();
    return res.status(200).send({message:"product successfully added"})
//---------------------------------------------------------------------------------------------------
    
}catch(err){
    console.log(err)
    return res.status(500).send({message:"Someting went wrong"})
}} 


exports.getAll_products = async function(req,res){
    try{
// BasketID validation  
        const basketID = req.params.basketid
        console.log( basketID)
        const value =req.params.value

        const response = await axios.get("http://127.0.0.1:3003/api/v1/waf/validation/"+basketID+"/"+ value)
        const UserBasketID = response.data
        const Basketid = UserBasketID.toString()
        console.log(Basketid)
        if (basketID !== Basketid) {
            return res.status(403).send({message:"FORBİDEN İnvalid BasketID"})
        }
 //------------------------------------------------------------------------------------------------    

        const baskets = await BasketModel.find({Basket_ID:Basketid});    
        console.log(baskets.length)
        if( baskets.length == 0 ){
            return res.status(200).send({message:"Your cart is empty, please buy items."})
        }
        
        return res.status(200).send(baskets)

    }catch(err){
        console.log(err)
        return res.status(500).send({message:"Someting went wrong",error:"True"})
    }
}


exports.delete_products = async function(req,res){
    try{    
        const basketID = req.params.basketid
// BasketID validation
    
        const value =req.cookies.jsonwebtoken
        const response = await axios.get("http://127.0.0.1:3003/api/v1/waf/UserBasketID/" + value)
        const UserBasketID = response.data
        if (basketID !== UserBasketID) {
            return res.status(403).send({message:"FORBİDEN İnvalid BasketID"})
        }
//------------------------------------------------------------------------------------------------    
// Product id checkh 
        const idCheck = await BasketModel.findOne({
            Basket_ID:UserBasketID
        })
        if(!idCheck){
            return res.status(400).send({message:"Not found product"})
        }
// Delete product
        await BasketModel.deleteOne({
            _id:req.params.id
        })
        const Basket = await BasketModel.find({Basket_ID:UserBasketID});    
        return res.status(200).send({message:"Product deletion successful",Basket})


    }catch(err){
        console.log(err)
        return res.status(500).send({message:"Someting went wrong"})
    }

}