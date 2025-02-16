import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
    const [otp, setOtp] = useState("");
    const [countdown, setCountdown] = useState(30);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleVerifyOTP = () => {
        const storedOtp = localStorage.getItem("otp");

        if (otp === storedOtp && countdown > 0) {
            alert("OTP Verified Successfully!");
            navigate("/dashboard"); // Redirect to dashboard
        } else {
            alert("Invalid OTP or OTP Expired!");
        }
    };

    const handleResendOTP = () => {
        const newOTP = Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem("otp", newOTP);
        alert(`New OTP: ${newOTP}`);
        setCountdown(30); // Reset timer
    };

    return (
        <div className="otp-container">
            <h1 className="title">Analytics Dashboard</h1>
            <div className="otp-box">
                <div className="otp-left">
                    <h2>Enter OTP sent to Email</h2>
                    <input
                        type="text"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <div className="resend-container">
                        <button
                            className="resend-btn"
                            onClick={handleResendOTP}
                            disabled={countdown > 0}
                        >
                            Resend OTP
                        </button>
                        <span>{countdown.toString().padStart(2, "0")} sec</span>
                    </div>
                    <button className="btn" onClick={handleVerifyOTP}>
                        Validate
                    </button>
                </div>
                <div className="otp-right">
                    <p>Web Application with Analytics Dashboard</p>
                </div>
            </div>
            <footer>© 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.</footer>
        </div>
    );
};

export default OtpPage;
