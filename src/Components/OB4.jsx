import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import ob2 from "../assets/OB2.svg";
import logo from "../assets/Yatripay_logo.svg"
function OB4() {
  const navigate = useNavigate();
  return (
      <div className="content">
        <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
        <div className="content-text">
          <p>
            Chance to win an iphone & a trip
         </p>
        </div>
        <img src={ob2} alt="hotelbooking" className="Flight" />
      
      </div>

  );
}

export default OB4;
