import React from "react";
import styled from "styled-components";

const Triangle = ({ animated, className, rolledValue, onClick }) => {
  const height = 70;
  const base = 96;
  const padding = 2;
  return (
    <div
      onClick={onClick}
      data-testid="4-faces-die"
      className={animated ? `rotate-die` : null}
    >
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

const StyledTriangle = styled(Triangle)`
  & {
    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate3d(1, 1, 0, 0deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 1, 0, -360deg);
        transform: rotate3d(1, 1, 1, -360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate3d(1, 1, 0, 0deg);
      }
      50% {
        -webkit-transform: rotate3d(0, 1, 0, -360deg);
        transform: rotate3d(1, 1, 1, -360deg);
      }
      100% {
        -webkit-transform: rotate3d(0, 1, 0, -360deg);
        transform: rotate3d(0, 1, 0, -360deg);
      }
    }

    &.rotate-die {
      animation: rotate-center 1s ease-in-out both;
      -webkit-animation: rotate-center 1s ease-in-out both;
    }
  }
`;

export { StyledTriangle as Triangle };
