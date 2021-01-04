import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {InspectionDetails} from "./Dashboard/InspectionDetails";
import {TechInstituteReports} from "./TechInstituteReports"

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "50px" : "220px")};
  transition: margin-left 0.5s;
`;


const MainArea = ({ expand }) => {
    return (
      <MainAreaStyled expand={expand}>
        <Route exact path="/headoffice">
          <InspectionDetails />
        </Route>
        <Route path="/headoffice/tir/">
          <TechInstituteReports />
        </Route>
      </MainAreaStyled>
    );
  };
  
  export default MainArea;