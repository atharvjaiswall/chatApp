import { response } from "express";
import Message from "../models/Message.js";
import User from "../models/User.js"; 
import cloudinary from "../lib/cloudinary.js";
import {io,userSocketMap} from '../server.js';

// get all user except the logged in user
export const getUsersForSidebar = async(req,res)=>{
  try{
    // find id whose ._id is not equal to userId bacause req.user._id and req.user._id comes from the authentication middleware, which attaches the logged-in user's data to the request.
    const userId = req.user._id;
    const filteredUsers = await User.find({_id:{$ne:userId}}).select("-password");

    // count no. of unseen messages
    const unseenMessages = {}
    const promises = filteredUsers.map(async(user)=>{

      // “How many messages has this person sent to me that I have NOT seen yet?”
      // to get all the unseen messages where receiver is userId
      const messages = await Message.find({senderId:user._id,receiverId:userId,seen:false})
      if (messages.length>0){
        unseenMessages[user._id] = messages.length;
       }
    })
    await Promise.all(promises);
    res.json({success:true,users:filteredUsers,unseenMessages})  
  }
  catch(error){
    console.log(error.message);
    res.json({success:false,message:error.message}) 
  }
}
// api to get all the messages for selected user
export const getMessages = async(req,res)=>{
  try{
    const {id:selectedUserId}  = req.params;
    const myId = req.user._id;
    const messages=await Message.find({
      $or:[
        {senderId:myId,receiverId:selectedUserId},
        {senderId:selectedUserId,receiverId:myId},
      ]
    })
    // to mark the message as received
    await Message.updateMany({senderId:selectedUserId,receiverId:myId},
      {seen:true});
      res.json({success:true,messages})
  }
  catch(error){
    console.log(error.message);
    res.json({success:false,message:error.message})
  }
}

// api to mark the message as seen
export const markMessageAsSeen = async(req,res)=>{
  try{
    const {id} = req.params;
    await Message.findByIdAndUpdate(id,{seen:true})
    res.json({success:true})
  }catch(error){
    console.log(error.message);
    res.json({success:false,message:error.message})
  }
}

// send messages to selectd user
export const sendMessages = async(req,res)=>{
  try{
    const {text,image} = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let imageUrl;
    // we can also send images while chatting
    if(image){
      const uploadResponse = await cloudinary.uploader.upload(image)
      imageUrl=uploadResponse.secure_url;
    }
    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
      image:imageUrl
    })
    // to display the message in real time in the receiver side we use socket.io which emit the new  message to the reciver socket
    const receiverSocketId = userSocketMap[receiverId];
    if(receiverSocketId){
      io.to(receiverSocketId).emit("newMessage",newMessage)
    }
    res.json({success:true,newMessage})
  }
  catch(error){
    console.log(error.message);
    res.json({success:false,message:error.message})
  }
}