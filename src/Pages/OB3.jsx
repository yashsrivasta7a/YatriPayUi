import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import ob3 from "../assets/ob3.svg";
import logo from "../assets/yatripay_logo.svg"
function OB3() {
  const navigate = useNavigate();
  return (
      <div className="content">
        <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <div className="OB2-text">
          <h1>Performance Overview
         </h1>
        </div>
        <img src={ob3} alt="performance" className="performance" />
        <button className="btn" onClick={() => navigate("/ob4")}>
          Next
        </button>
      </div>

  );
}

export default OB3;
