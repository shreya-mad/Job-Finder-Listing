const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const user=require('../models/user');
require('dotenv').config();

const errorHandle=(res,error)=>{
    console.error(error);
    res.status(500).json({error:'internal server error'});
}

router.post('/register',async(req,res)=>{
    try{
        const {name,email,mobileNo,password}=req.body;
        if(!name || !email || !mobileNo || !password)
        {
            return res.status(400).json({error:'all fields are required'});
        }
        const existUser = await User.findOne({email})
        if(existUser){
           return res.status(409).json({error:'email is allready registered'})
        }
        const encryptedPassword=await bcrypt.hash(password,10);
        const user=new User({name,email,mobileNo,password:encryptedPassword});
        await user.save();
        res.json({
            success: true,recruiterName: user.name,user:email, name:name
        })
      }
    catch(error){
        errorHandle(res,error);
    }
})


router.post('/login',async(req,res)=>{
    try{
      const{email,password}=req.body;
      if(!email || !password){
        return res.status(400).json({error:'all fields are required'});
      }
      const user=await User.findOne({email});
      if(!user){
        return res.status(401).json({error:'invalid email or password'})
      }
          isPasswordMatched=await bcrypt.compare(password,user.password);

          if(isPasswordMatched){
           return res.status(401).json({error:'invalid email or password'})  
        }
        const jwttoken=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY);
        res.json({succuss:true,jwttoken,recruiterName:user.name,user: email})
    }
    catch(error){
      errorHandle(res,error);
    }
  })

  module.exports=router;