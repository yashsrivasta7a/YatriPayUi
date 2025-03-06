import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import logo from "../assets/Yatripay_logo.svg"; 
function OB4() {
  const navigate = useNavigate();
  return (
      <div className="content">
        <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <div className="content-text">
          <p>365 Days Withdrawal</p>
        </div>
        <img src={calendar} alt="hotelbooking" className="Flight" />
      </div>

  );
}

export default OB4;
