import React from "react";
import "../assets/Styles/Signup.css";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import logo from "../assets/Yatripay_logo.svg"
import CryptoFloatingIcons from "../Components/CryptoFloatingIcons";
import '../assets/Styles/Crypto.css'
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  return (
    <div className="content-container">
      <div className="signup-container">
      <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <h2 className="sign-in-text">Sign In </h2>
        <div className="social-login">
          <button className="social-btn facebook-btn">
            <img src={facebook} alt="" srcset="" />
          </button>
          <button className="social-btn google-btn">
            <img src={google} alt="" />
          </button>
        </div>

        <div className="divider-signup-form">
          <div className="divider">
          –––––––––––––––––––––––– or ––––––––––––––––––––––––
          </div>
          
          <div className="small-divider">
          –––––––––––– or ––––––––––––
          </div>

        </div>

        <div className="form-group">
          <input type="text"
            className="form-control email-signin"
            placeholder="Email or username"
          />
          <input
            type="password"
            className="form-control password-signin"
            placeholder="Password"
          />
           <span onClick={() => navigate("/password")} className="forget-pwd-btn" style={{ cursor: "pointer", color: "yellow" }}>
           Forgot Password ?
          </span>
        
        </div>
       
        <button className="btn">SUBMIT</button>

        <p className="login-link">Not signed in yet?  {" "}
        <span onClick={() => navigate("/signup")} style={{ cursor: "pointer", color: "yellow", fontWeight: "bold" }}>
            SignUp
          </span>
        </p>
        <p className="terms">
        Terms of Service & Privacy Policy
        </p>
      </div>
      <CryptoFloatingIcons />
    </div>
  );
}

export default Signin;
