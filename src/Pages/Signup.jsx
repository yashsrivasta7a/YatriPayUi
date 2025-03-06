import React from "react";
import "../assets/Styles/Signup.css";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import logo from "../assets/Yatripay_logo.svg"
import CryptoFloatingIcons from "../Components/CryptoFloatingIcons";
import '../assets/Styles/Crypto.css'
import Signin from "./Signin";

function Signup() {
  return (
    <div className="content">
      <div className="signup-container">
      <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <h2 className="sign-in-text">Sign up with us !</h2>
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
          <input
            type="password"
            className="form-control confirm-password-signin"
            placeholder="Confirm Password"
          />
        </div>
       
        <button className="btn">SUBMIT</button>

        <p className="login-link"> Already a member ? <a href="/signin">Log in</a></p>
        <p className="terms">
          By creating an account, you agree to YatriPay's{" "}
          <a href="#">Terms & Privacy</a>
        </p>
      </div>
      <CryptoFloatingIcons />
    </div>
  );
}

export default Signup;
