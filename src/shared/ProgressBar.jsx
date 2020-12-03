import React from "react";
import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  height: 7px;
  position: relative;
  background: #555;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 3px;
  margin-top: 10px;
`;

export const ProgressBarSpan = styled.span`
  width: ${(props) => `${props.width}%` || 0};
  display: block;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #00a8f3;
  position: relative;
  overflow: hidden;
`;

export const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarSpan width={progress}></ProgressBarSpan>
    </ProgressBarWrapper>
  );
};
