import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import OB2 from "./Components/OB2";
import OB3 from "./Components/OB3";
import OB4 from "./Components/OB4";
import GlowEffect from "./Components/GlowEffect";
import OB5 from "./Components/OB5";
import OB6 from "./Components/OB6";
import Onboarding from "./Pages/Onboarding";

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
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </div>
      <div className="glow-background">
        <GlowEffect />
      </div>
    </Router>
  );
}

export default App;
