import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import OB2 from "./Pages/OB2";
import OB3 from "./Pages/OB3";
import OB4 from "./Pages/OB4";
import GlowEffect from "./Components/GlowEffect";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<OB2 />} />
          <Route path="*" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/password" element={<ForgotPassword />} />
          <Route path="/ob2" element={<OB2 />} />
          <Route path="/ob3" element={<OB3 />} />
          <Route path="/ob4" element={<OB4 />} />
        </Routes>
      </div>
      <div className="glow-background">
        <GlowEffect />
      </div>
    </Router>
  );
}

export default App;
