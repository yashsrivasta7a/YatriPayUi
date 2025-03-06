import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import ob6 from "../assets/ob6.svg";
import logo from "../assets/Yatripay_logo.svg"
function OB6() {
  const navigate = useNavigate();
  return (
      <div className="content">
        <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <div className="OB2-text">
          <h1>Zero Fees & Cashback Reward
         </h1>
         <h1>on YatriPay Transactions</h1>
        </div>
        <img src={ob6} alt="rewards" className="performance" />
       
      </div>

  );
}

export default OB6;
