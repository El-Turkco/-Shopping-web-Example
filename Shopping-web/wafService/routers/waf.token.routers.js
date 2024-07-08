const express = require("express");
const router = express.Router();
const {token_validation,return_token,token} = require("../controller/token.controller")



router.get("/validation/:basketid/:value",token_validation)

router.get("/UserBasketID/:value",return_token)



module.exports = router;