import React from "react";
import {Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
