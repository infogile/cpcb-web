import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "30px" : "230px")};
  transition: margin-left 0.5s;
`;

export const MainArea = ({ expand }) => {
  return (
    <MainAreaStyled expand={expand}>
      <Route path="/home" exact>
        <Dashboard />
      </Route>
      <Route path="/home/active_inspections">Active Inspection</Route>
      <Route path="/home/schedule">Schedule</Route>
    </MainAreaStyled>
  );
};

export default MainArea;
