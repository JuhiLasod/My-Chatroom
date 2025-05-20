import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [name,setName]=useState('');
    const [result,setResult]=useState('');
    const navigate=useNavigate();
    const handleLogin=async()=>{
        if(name==='')
        {
            console.log("please login");
        }
        else
        {
            const res=await fetch("http://localhost:8000/api/auth/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name})
            });
            const text=await res.text();
            setResult(text);
            if(text==="success")
            {
                localStorage.setItem('name',name);
                console.log(localStorage.getItem('name'));
                navigate("/dash");
            }
        }
        
    }
    return (
        
        <div>
            enter username
            <input
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
            <button onClick={handleLogin}>login</button>
        </div>
    );
}
export default Login;