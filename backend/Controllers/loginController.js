import Users from "../Models/Users.js";
export const loginController=async(req,res)=>{
    const {name}=req.body;
    const exist=await Users.findOne({name})
    if(exist)
    {
        return res.send("already exists");
    }
    const newuser=new Users({name});
    await newuser.save();
    res.send("success");
}

export const logout = async (req, res) => {
    const { name } = req.body;
    await Users.findOneAndUpdate({ name }, { isOnline: false });
    res.sendStatus(200);
}
// export default {logout,loginController};