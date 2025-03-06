import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
function OB5() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="OB5-text">
        <h1>Unmatched Returns</h1>
        <h1>with Staking</h1>
      </div>
      <div className="OB5-TEXT2">
        <h1>30% p.a.</h1>
        <div style={{
          display:'flex',
          gap:'.3rem',
          justifyContent:'center'
        }}>
        <p>Annual return with</p>
        <p style={{color:'yellow'}}>yatripay</p></div>
      </div>
      <button className="btn" onClick={() => navigate("/ob6")}>
        Next
      </button>
    </div>
  );
}

export default OB5;
