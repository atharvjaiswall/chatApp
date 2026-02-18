import mongoose from 'mongoose';

// function to connect to the mongodb database

export const connectDB = async(req,res)=>{
  try{
    mongoose.connection.on('connected',()=>{
      console.log('Databse is connected successfully');  
      
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
  }
  catch(error){
    console.log(error);
  }
}