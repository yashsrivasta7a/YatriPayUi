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
          type: "fade", // Smooth transition
          autoplay: true, // Enable autoplay
          interval: 3000, // Slide changes every 3 seconds
          pauseOnHover: true, // Keep autoplay even on hover
          pagination: true, // Enable pagination
          arrows: false, // Remove navigation arrows
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
        Go to Home
      </button>
    </div>
  );
}

export default Onboarding;