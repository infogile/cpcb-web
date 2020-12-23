import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {InspectionDetails} from "./Dashboard/InspectionDetails";
import {TechInstituteReports} from "./TechInstituteReports/TechInstituteReports"

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "30px" : "230px")};
  transition: margin-left 0.5s;
`;


const MainArea = ({ expand }) => {
    return (
      <MainAreaStyled expand={expand}>
        <Route exact path="/headoffice">
          <InspectionDetails />
        </Route>
        <Route path="/headoffice/tech-reports">
          <TechInstituteReports />
        </Route>
      </MainAreaStyled>
    );
  };
  
  export default MainArea;