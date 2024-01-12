const jwt=require('jsonwebtoken');
require('dotenv').config();
const requiredAutho=(req,res,next)=>{
    const token=req.header('Authorisation')
    if(!token){
        return res.status(401).json({messege:'Unauthorised'});
    }
    try{
       const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
       req.body.user=decoded.user;
       next();
    }catch(error){
       console.log(error);
       return res.status(401).json({messege:'Unauthorised'})   
    }
} 

module.exports=requiredAutho;

