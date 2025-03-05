import React from "react";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import GlowEffect from "./Components/GlowEffect";
import Signin from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import OB2 from "./Pages/OB2";
import OB3 from "./Pages/OB3";
import OB4 from "./Pages/OB4";

function App() {
  return (
    <>
      <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
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

      </BrowserRouter>
    </>
  );
}

export default App;
