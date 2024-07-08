const express = require("express");
const router = express.Router();
const {add_products,getAll_products,delete_products} = require("../controll/Basket.controller")
const auth = require("../middleware/authCheck")


// Add product to Basket
///8867/add/products/:id 
router.post("/:basketid/add/products/:id/:value",add_products)

// Get Products 

router.get("/:basketid/:value",getAll_products)


// Delete product to Basket
router.delete("/:basketid/products/delete/:id/:value",delete_products)




module.exports = router;