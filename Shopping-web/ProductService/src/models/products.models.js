const mongoose = require("mongoose")
const joi = require("joi")


const ProductSchema = mongoose.Schema({
    
    Name:{
            type:String,
            require:true
    },
    Price:{
            type:String,
            require:true
    },
    Url:{
            type:String,
    }
 
},
{timestamps:true});

const ProductsModel = mongoose.model('Products',ProductSchema)


module.exports = {ProductsModel}