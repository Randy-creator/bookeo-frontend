"use client";

import styled, { keyframes } from "styled-components";

const flipIn = keyframes`
  0% {
    transform: rotateY(-90deg);
    opacity: 0;
  }
  50% {
    transform: rotateY(20deg);
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;

export const AnimatedFormWrapper = styled.div`
  perspective: 1000px;

  .form-inner {
    animation: ${flipIn} 0.7s ease forwards;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
