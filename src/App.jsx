import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import GlowEffect from "./Components/GlowEffect";

import Onboarding from "./Pages/Onboarding";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
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
