import React, { useState } from "react";
import "./LoginPage.css";
import logo from './google.svg';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const isEnabled = email.trim().length > 0;
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError("Please enter a valid email address")
        return;
    }

    setError("");
    navigate("/auction-items");
    // alert("valid email entered!!!")
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Customer Sign In</h2>

        <label className="label">Email :</label>
        <input
          type="email"
          className="input"
          placeholder="Enter Email Address..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && isEnabled) {
                handleLogin();
            }
          }}
        />

        {error && <p className="error-text">{error}</p>}    
        <button
          className={`login-btn ${isEnabled ? "active" : ""}`}
          disabled={!isEnabled}
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="divider">
          <span className="line" /> <span className="or">or</span>{" "}
          <span className="line" />
        </div>

        <button className="google-btn">
          <img
            src={logo}
            alt="G"
          />
          Continue with Google
        </button>

        <button className="phone-btn">
          <span className="phone-icon">📞</span>
          Continue with Phone Number
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

