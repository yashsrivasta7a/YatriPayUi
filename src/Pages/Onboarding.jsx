import React, { useState, useEffect } from "react";
import OB2 from "../Components/OB2";
import OB3 from "../Components/OB3";
import OB4 from "../Components/OB4";
import OB5 from "../Components/OB5";
import OB6 from "../Components/OB6";
import { useNavigate } from "react-router";

const components = [OB2, OB3, OB4, OB5, OB6];

function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const CurrentComponent = components[currentStep];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % components.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    // if (currentStep < components.length - 1) {
    //   setCurrentStep(currentStep + 1);
    navigate('/home');
  };

  // const handlePrev = () => {
  //   if (currentStep > 0) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };

  return (
    <div className="content">
      <div className="component-wrapper">
        <CurrentComponent />
      </div>
      <div className="slider-indicators">
        {components.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentStep ? "active" : ""}`}
            onClick={() => setCurrentStep(index)}
          ></span>
        ))}
      </div>
      <div className="slider-controls-wrapper">
        <div className="slider-controls">
          {/* <button className="btn" onClick={handlePrev} disabled={currentStep === 0}>
            Previous
          </button> */}
          <button className="slider-btn" onClick={handleNext} disabled={currentStep === components.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
