import Messages from "../Models/Messages.js";
export const messageController=async(req,res)=>{
const messages = await Messages.find().sort({ timestamp: 1 });
  res.json(messages);
}