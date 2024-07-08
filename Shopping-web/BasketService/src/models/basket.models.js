const mongoose = require("mongoose")


const BasketSchema = mongoose.Schema({
        Basket_ID:{
            type:String,
            require:true,
        },
        
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
   
},{timestamps:true});

const BasketModel = mongoose.model('Baskets',BasketSchema)

module.exports = {BasketModel}