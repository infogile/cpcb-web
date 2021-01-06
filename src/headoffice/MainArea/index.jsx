import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {InspectionDetails} from "./Dashboard/InspectionDetails";
import {TechInstituteReports} from "./TechInstituteReports/TechInstituteReports"
import { FactoryLists } from "./Dashboard/FactoryLists";
import { FieldReport } from "../../spcb/MainArea/Action/FieldReport";
import { InspectionReport } from "../../spcb/MainArea/Action/InspectionReport";
import { ViewAction } from "../../spcb/MainArea/Action/ViewAction";


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
        <Route path="/headoffice/:status/:river">
          <FactoryLists />
        </Route>
        <Route path="/headoffice/field_report/:id">
        <FieldReport />
        </Route>
        <Route path="/headoffice/inspection_report/:id">
          <InspectionReport />
        </Route>
        <Route path="/headoffice/view_action/:id">
          <ViewAction />
        </Route>
      </MainAreaStyled>
    );
  };
  
  export default MainArea;