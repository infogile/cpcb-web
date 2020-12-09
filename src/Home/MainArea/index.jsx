import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import ActiveInspection from "./ActiveInspection";
import TechInstituteReports from "./TechInstituteReports";
import GangaReports from "./TechInstituteReports/GangaReports";
import YamunaReports from "./TechInstituteReports/YamunaReports";

const MainAreaStyled = styled.div`
  position: absolute;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "50px" : "310px")};
  transition: margin-left 0.5s;
`;

export const MainArea = ({ expand }) => {
  return (
    <MainAreaStyled expand={expand}>
      <Route path="/home" exact>
        <Dashboard />
      </Route>
      <Route path="/home/tir/ganga">
        <TechInstituteReports />
      </Route>
      <Route path="/home/tir/yamuna">
        <TechInstituteReports />
      </Route>
      <Route path="/home/active_inspections">
        <ActiveInspection />
      </Route>
      {/* <Route path="/home/schedule">Schedule</Route> */}
    </MainAreaStyled>
  );
};

export default MainArea;
