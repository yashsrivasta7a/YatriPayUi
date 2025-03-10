import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import required Splide CSS
import { useNavigate } from "react-router";
import OB1 from "../Components/OB1";
import OB2 from "../Components/OB2";
import OB3 from "../Components/OB3";
import OB4 from "../Components/OB4";
import OB5 from "../Components/OB5";
import OB6 from "../Components/OB6";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <Splide
        options={{
          type: "fade", 
          autoplay: true, 
          interval: 3000,
          pauseOnHover: true, 
          pagination: true, 
          arrows: false, 
        }}
      >
        <SplideSlide><OB1 /></SplideSlide>
        <SplideSlide><OB2 /></SplideSlide>
        <SplideSlide><OB3 /></SplideSlide>
        <SplideSlide><OB4 /></SplideSlide>
        <SplideSlide><OB6 /></SplideSlide>
        <SplideSlide><OB5 /></SplideSlide>
      </Splide>

      <button className="navigate-btn" onClick={() => navigate("/home")}>
       Next
      </button>
    </div>
  );
}

export default Onboarding;