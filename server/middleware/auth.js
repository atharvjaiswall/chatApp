import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import cloudinary from "../lib/cloudinary.js";
// middleware to protect the routes
export const protectRoute = async(req,res,next)=>{
  try{
    const token = req.headers.token;
    // this line help you to verify your token using the secret key
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    const user = await User.findById(decoded.userId).select("-password")

    if(!user) return res.json({success:false,message:"User not found"});
    else
    req.user = user;
    next();
  }
  catch(error){
    console.log(error.message);
    
    res.json({success:false,message:error.message});
  }
}
 