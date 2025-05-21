import express from "express";

import { loginController,logout } from "../Controllers/loginController.js";
const authRoutes=express.Router();
authRoutes.post("/login",loginController);
authRoutes.post("/logout",logout);
export default authRoutes;