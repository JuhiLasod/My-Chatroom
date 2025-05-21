import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") {
      alert("Please enter a username");
    } else {
      localStorage.setItem("name", name.trim());
      navigate("/dash");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2vh 4vw",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          padding: "8vw 6vw",
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1.5em", color: "#333", fontSize: "1.5em" }}>
          Welcome to My-Chatroom
        </h2>
        <input
          type="text"
          value={name}
          placeholder="Enter your username"
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.8em 1em",
            fontSize: "1em",
            borderRadius: 8,
            border: "1px solid #ccc",
            marginBottom: "1.2em",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.9em",
            fontSize: "1em",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
