const mongoose = require("mongoose")
const joi = require("joi")
const jwt = require("jsonwebtoken");
const GenerateID =require("../Helpers/ID.generate") 

const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique : true,
    },
    name: {
        type:String,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{
    methods:{
        createAuthToken(){
            return jwt.sign({_id:this._id,email:this.email,isAdmin:this.isAdmin},process.env.JWT_KEY)
        },
        createBasketID(){
            return GenerateID(this._id);
        }
    }
},

{timestamps:true});

//Validation Schema
const validationUser = new joi.object({
    email:joi.string().email().required(),
    name:joi.string().min(3).max(10).required(),
    password:joi.string().min(10).max(100).required(),
});

//Validation Schema
const validationAuth = new joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(10).max(100).required(),
});

const User = mongoose.model('User',userSchema);

module.exports = {User,validationUser,validationAuth}