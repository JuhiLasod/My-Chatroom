import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name: String,
    content: String
});
export default mongoose.model("User",userSchema,"users");