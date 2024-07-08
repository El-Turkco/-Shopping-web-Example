const express = require("express");
const router = express.Router();
const {getAll_products,getProductsDetails} = require("../controll/Products.controller")


//Get Products
router.get("/products",getAll_products);


//Get Products Details
router.get("/products/:id",getProductsDetails)


module.exports = router