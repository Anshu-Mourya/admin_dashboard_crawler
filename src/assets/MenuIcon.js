import React from "react";

const MenuIcon = ({ size, color }) => {
  const c = color ?? "#000";
  return (
    <svg
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `scale(${size ?? 1})`,
      }}
    >
      <g>
        <title>Layer 1</title>
        <rect
          stroke={c}
          rx="2"
          id="svg_1"
          height="4.32432"
          width="43.24324"
          y="10"
          x="14.56757"
          fill={c}
        />
        <rect
          stroke={c}
          rx="2"
          id="svg_3"
          height="4.32432"
          width="50.54054"
          y="30"
          x="7"
          fill={c}
        />
        <rect
          stroke={c}
          rx="2"
          id="svg_4"
          height="4.32432"
          width="31.35135"
          y="50"
          x="26.18919"
          fill={c}
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
