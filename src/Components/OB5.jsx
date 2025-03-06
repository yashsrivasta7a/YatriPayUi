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
      <div className="content-text">
        <p>Unmatched Returns with Staking Annual return with</p>
        <p>30% p.a.</p>
        <p style={{ color: "yellow" }}>yatripay</p>
      </div>
    </div>
  );
}

export default OB5;
