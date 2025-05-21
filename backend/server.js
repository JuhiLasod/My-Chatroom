import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000", 
      methods: ["GET", "POST"]
    }
  });
  

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

 
  socket.on("sendMessage", ({name,message}) => {
    console.log("Message received:", message);

   
    io.emit("receiveMessage",{name, message});
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(8000, () => {
  console.log("server running on port 8000");
});
