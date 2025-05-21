import express from "express";

import { messageController } from "../Controllers/messageController.js";
const messageRoutes=express.Router();
messageRoutes.post("/message",messageController);
export default messageRoutes;