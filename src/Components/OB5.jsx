import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Yatripay_logo.svg";
function OB5() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
      <div className="content-text" style={{
        lineHeight:'1',
        
      }}>
        <p  style={{
          fontWeight:"200"
        }} >Unmatched Returns</p>
        <p  style={{
          fontWeight:"200"
        }} >with Staking</p>
        <h1>30% p.a.</h1>
      </div>
      <div style={{
        display:'flex',
        gap:'0.4rem',
        marginTop:'0rem'
      }}>
        <p>Annual return with</p>{" "}<p style={{ color: "yellow" }}>yatripay</p>
      </div>
    </div>
  );
}

export default OB5;

