import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";


// Create Express app from http server
const app= express();
const server=http.createServer(app)

// Intialised socket.io server
export const io = new Server(server,{
  cors:{origin:"*"}
})
// store the data of all online users
export const userSocketMap = {}; //{userId:socketId}
// socket.io connection handler
io.on("connection",(socket)=>{
  const userId = socket.handshake.query.userId;
  

  if(userId) userSocketMap[userId] = socket.id;

  // emit online users to all connected clients
  io.emit("getOnlineUsers",Object.keys(userSocketMap));

  // to disconnect the event
  socket.on("disconnect",()=>{
    //Remove the user from online list
    delete userSocketMap[userId];
    io.emit("getOnlineUsers"),Object.keys(userSocketMap)
  })
})

// middleware
app.use(express.json({limit:"4mb"}));
app.use(cors());

// Routes setup
app.use("/api/status",(req,res)=>res.send("Server is live"))
app.use('/api/auth',userRouter)
app.use('/api/messages',messageRouter)
 
// connect to Mongodb
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
  console.log("Server is running on Port:"  + PORT)
})