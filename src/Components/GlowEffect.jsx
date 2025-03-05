import React from "react";

const GlowEffect = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="glowAnimation"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        transformOrigin: "center center",
      }}
    >
      <rect width="100" height="100" fill="black" />
      <mask
        id="mask0"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <rect width="100" height="100" fill="black" />
      </mask>
      <g mask="url(#mask0)">
        <g filter="url(#filter0)">
          <circle cx="0" cy="43" r="14" fill="#76FF03" />
        </g>
      </g>
      <mask
        id="mask1"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <rect width="100" height="100" fill="black" />
      </mask>
      <g mask="url(#mask1)">
        <g filter="url(#filter1)">
          <circle
            cx="100"
            cy="57"
            r="14"
            transform="rotate(-180 100 57)"
            fill="#76FF03"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0"
          x="-50"
          y="-7"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="19" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter1"
          x="50"
          y="7"
          width="100"
          height="100"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="19" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default GlowEffect;