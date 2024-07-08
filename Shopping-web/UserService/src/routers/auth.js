const express = require("express")
const router = express.Router();
const {create_user,auth_user,get_profil} = require("../controller/auth.controller");
const bcrypt = require("bcrypt");
require("dotenv").config();
const {User,validationUser} = require("../models/users")
const autmid = require("../middleware/authmid")


//User Register 
router.post("/create",create_user)

//User login 
router.post("/login",auth_user)


// User get the profil 
router.get("/profil",get_profil)


// User jwt_token validation request

// router.post("/Token",Tokenvalid)

module.exports = router;