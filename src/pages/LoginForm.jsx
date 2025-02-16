import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSendOTP = () => {
        if (email.trim() === "") {
            alert("Please enter a valid email.");
            return;
        }
        const generatedOTP = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
        localStorage.setItem("otp", generatedOTP); // Store OTP
        alert(`Your OTP: ${generatedOTP}`); // Show OTP
        navigate("/otp"); // Redirect to OTP page
    };

    return (
        <div className="login-container">
            <h1 className="title">Analytics Dashboard</h1>
            <div className="login-box">
                <div className="login-left">
                    <h2>Sign In</h2>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn" onClick={handleSendOTP}>Send OTP</button>
                </div>
                <div className="login-right">
                    Web Application with Analytics Dashboard
                </div>
            </div>
            <footer> © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</footer>
        </div>
    );
};

export default LoginForm;
