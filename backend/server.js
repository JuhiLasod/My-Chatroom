import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRoutes.js";
import cors from "cors";
import mongoose from "mongoose";
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("db connected")})
.catch(()=>{console.log("error while connecting")});
app.use("/api/auth",authRoutes);
app.listen(process.env.PORT || 8000,()=>{
    console.log("server running");
});