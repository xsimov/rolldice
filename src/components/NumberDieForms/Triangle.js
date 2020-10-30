import React from "react";
import styled from "styled-components";
import { animationCss } from "../utils/animationCss";

const Triangle = ({ animated, className, rolledValue, onClick }) => {
  const height = 70;
  const base = 96;
  const padding = 2;
  return (
    <div onClick={onClick} data-testid="4-faces-die">
      <svg
        className={animated ? `${className} rotate-die` : className}
        version="1.1"
        width="500"
        height="500"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50" y="65" fontSize="60" textAnchor="middle" fill="blue">
          {rolledValue}
        </text>
        <line
          x1={base + padding}
          y1={height + padding}
          x2="50"
          y2={padding}
          stroke="blue"
          strokeWidth="4"
        />
        <circle cx="50" cy={padding} r={padding} fill="blue" />
        <line
          x1="50"
          y1={padding}
          x2={padding}
          y2={height + padding}
          stroke="blue"
          strokeWidth="4"
        />
        <circle
          cx={base + padding}
          cy={height + padding}
          r={padding}
          fill="blue"
        />
        <line
          x1={padding}
          y1={height + padding}
          x2={base + padding}
          y2={height + padding}
          stroke="blue"
          strokeWidth="4"
        />
        <circle cx={padding} cy={height + padding} r={padding} fill="blue" />
      </svg>
    </div>
  );
};

const AnimatedTriangle = styled(Triangle)`
  ${animationCss}
`;

export { AnimatedTriangle, Triangle };
