import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("https://my-chatroom-backend.onrender.com");

    socket.current.on("connect", () => {
      console.log("Connected to server");
    });

    socket.current.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      const name = localStorage.getItem("name") || "Anonymous";
      socket.current.emit("sendMessage", { name, message });
      setMessage("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4vh 4vw",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 500,
          backgroundColor: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#333" }}>
          Chat Box
        </h2>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 12,
            height: "300px",
            overflowY: "scroll",
            marginBottom: 16,
            backgroundColor: "#fafafa",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                margin: "8px 0",
                padding: "6px 10px",
                backgroundColor: "#e8f0fe",
                borderRadius: 6,
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.name}: </strong>
              <span>{msg.message}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="text"
            value={message}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              fontSize: 14,
              borderRadius: 6,
              border: "1px solid #ccc",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handleSend}
            style={{
              padding: "10px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
