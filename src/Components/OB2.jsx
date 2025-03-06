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
        <div className="content-text">
          <p>
            Book Hotel & Flights
         </p>
        </div>
        <img src={ob2} alt="hotelbooking" className="Flight" />

      </div>

  );
}

export default OB2;
