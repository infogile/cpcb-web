import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {Dashboard} from "./Dashboard";
import {TechInstituteReports} from "./TechInstituteReports";
import {ComplianceStatus} from "./ComplianceStatus"

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "50px" : "220px")};
  transition: margin-left 0.5s;
`;


const MainArea = ({ expand }) => {
    return (
      <MainAreaStyled expand={expand}>
        <Route path="/headoffice">
          <Dashboard />
        </Route>
        <Route path="/headoffice/compliance-status">
          <ComplianceStatus />
        </Route>
        <Route path="/headoffice/tir">
          <TechInstituteReports />
        </Route>
      </MainAreaStyled>
    );
  };
  
  export default MainArea;