import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  isOnline: { type: Boolean, default: true }
});



export default mongoose.model("User",userSchema,"users");