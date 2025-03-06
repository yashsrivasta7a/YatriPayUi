import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import logo from "../assets/yatripay_logo.svg"; // Fix the import path

function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="logo">
        <img src={logo} alt="YatriPay" />
      </div>
      <div className="home-text">
        <h1>365 Days</h1>
        <h2>Withdrawal</h2>
      </div>
      <img src={calendar} alt="calendarLogo" className="calendar" />
      <button className="btn" onClick={() => navigate("/signup")}>
        Get Started
      </button>
    </div>
  );
}

export default Home;
