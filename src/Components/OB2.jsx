import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import ob2 from "../assets/OB2.svg";
import logo from "../assets/Yatripay_logo.svg"
function OB2() {
  const navigate = useNavigate();
  return (
      <div className="content">
        <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <div className="OB2-text">
          <h1>Book Hotel
         </h1>
          <h1> & Flights</h1>
        </div>
        <img src={ob2} alt="hotelbooking" className="Flight" />

      </div>

  );
}

export default OB2;
