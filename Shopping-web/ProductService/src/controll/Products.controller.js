const {ProductsModel} = require("../models/products.models");


// Get All Products Request 
exports.getAll_products = async function (req,res){
    try{
        const Products = await ProductsModel.find({});
        return res.status(200).send(Products);


    }catch(err) {
        console.log(err)
        return res.status(500).send({message:"Someting went wrong",error:"True"})
    }

}

//Get Products Details
exports.getProductsDetails = async function(req,res){
    try{
        const Product = await ProductsModel.findOne({
            _id:req.params.id
        }).exec();

        if(!Product){
            return res.status(404).send({message:"Not Products"})
        }
        
        return res.status(200).send(Product)

    }catch(err){
        return res.status(500).send({message:"Someting went wrong",error:"True"})
    }
}