import express from "express";
// import { Router } from "express";
import { loginController } from "../Controllers/loginController.js";
const authRoutes=express.Router();
authRoutes.post("/login",loginController);
export default authRoutes;