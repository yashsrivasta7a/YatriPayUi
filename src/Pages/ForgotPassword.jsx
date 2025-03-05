import React, { useState } from "react";
import "../assets/styles/forgotPassword.css";
import { sendOtp, verifyOtp, resetPassword } from "../services/authService";
import logo from "../assets/yatripay_logo.svg";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Steps: 1 -> Email, 2 -> OTP, 3 -> Reset Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = async () => {
    const response = await sendOtp(email);
    if (true) setStep(2);
    else alert("Error sending OTP");
  };

  const handleOtpSubmit = async () => {
    const response = await verifyOtp(email, otp);
    if (true) setStep(3);
    else alert("Invalid OTP");
  };

  const handlePasswordReset = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await resetPassword(email, password);
    if (true) alert("Password reset successful!");
    else alert("Error resetting password");
  };

  return (
    <div className="content">
      <div>
        <div className="logo">
          <img src={logo} alt="YatriPay" />
        </div>

        <div className="forgot-password-container">
          <h2 className="forget-password-text">Forgot Password?</h2>

          {step === 1 && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="pwd-btn" onClick={handleEmailSubmit}>
                SUBMIT
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <p>OTP</p>
              <input
                type="text"
                placeholder="OTP"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="pwd-btn" onClick={handleOtpSubmit}>
                SUBMIT
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <input
                type="password"
                placeholder="New Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="pwd-btn" onClick={handlePasswordReset}>
                SUBMIT
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
