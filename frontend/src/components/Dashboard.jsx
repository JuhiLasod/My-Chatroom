import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard(){
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('name');
        navigate("/");
    }
    return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
}
export default Dashboard;