const bcrypt = require("bcrypt");
require("dotenv").config();
const {User,validationUser,validationAuth,createAuthToken} = require("../models/users")
const jwttoken = require("../middleware/tokenvalue");
const tokenvalue = require("../middleware/tokenvalue");

//Create User
exports.create_user= async function(req,res){
    //Validation check
    const result = validationUser.validate(req.body);
  
    if (result.error){
        return res.status(500).send(result.error.message);
    }


    // Checking the username to database
    let user = await User.findOne({
        email:req.body.email,
        name:req.body.name
    });
  
    if(user){
        return res.status(400).send({email:req.body.email,message:"This user is already registered"});
    }
  
    try{
        //Password Hashed 
        const hashedPass = await bcrypt.hash(req.body.password,10);
  
        const user = new User({
            email:req.body.email,
            name: req.body.name,
            password:hashedPass
        });
  
  
        await user.save();
        
        return res.status(201).send({name:req.body.name,message:"successful",});
        
    }
  
    catch(err){
        console.log(err)
        return res.status(500).send("Someting went wrong");
    }
  };

exports.auth_user = async function(req,res){

    //Validation check
    const result = validationAuth.validate(req.body);
    if (result.error){
        return res.status(500).send(result.error.message);
    }

  try {
      const userCheck = await User.findOne({
          email:req.body.email,
      });

      //user Check 
      if (!userCheck){
          return res.status(400).send("Not user registration");
      }

      //Password Check 
      const match = await bcrypt.compare(req.body.password,userCheck.password);
      
      if(!match){
          return res.status(400).send("İnvalid name or password");
      }

      const token = userCheck.createAuthToken();
      const BasketID = userCheck.createBasketID();

      res.cookie("jsonwebtoken",token,{
          sameSite:'strict',
          httpOnly:true,
          expires: new Date(new Date().getTime()+5*60*1000
          ),
          secure:true
      });
      res.cookie("Basket-ID",BasketID,{
          sameSite:'strict',
          httpOnly:true,
          expires: new Date(new Date().getTime()+5*60*1000
          ),
          secure:true
      });


      return res.status(200).header("Acces-Token",token).send(
      {
          email:req.body.email,
          token:token,
          BasketID:BasketID,
          succes:true
      });  
      
  }

  catch(err){
      res.status(500).send("Someting went wrong")
      console.log(err)
  }

};

exports.get_profil = async function (req,res){
    try{
        const cookie = req.cookies("jsonwebtoken")
        console.log(cookie)
    }catch(err){
        console.log(err)
        res.status(500).send({message:"Somenting went wrong"})
    }
    
} 

