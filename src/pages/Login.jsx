import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // Dummy authentication check
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/dashboard"); // Navigate to dashboard
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default Login;