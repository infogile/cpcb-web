import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import FieldReport from "./Action/FieldReport";
import CompletedInspectionList from "./Action/CompletedInspectionList";
import TakeAction from "./Action/TakeAction";
import InspectionReport from "./Action/InspectionReport";
import ViewAction from "./Action/ViewAction";

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "30px" : "230px")};
  transition: margin-left 0.5s;
`;

const MainArea = ({ expand }) => {
  return (
    <MainAreaStyled expand={expand}>
      <Route exact path="/spcb/completed_inspections/:river_name">
        <CompletedInspectionList />
      </Route>
      <Route exact path="/spcb/field_report/:id">
        <FieldReport />
      </Route>
      <Route exact path="/spcb/inspection_report/:id">
        <InspectionReport />
      </Route>
      <Route exact path="/spcb/take_action/:id">
        <TakeAction />
      </Route>
      <Route exact path="/spcb/view_action/:id">
        <ViewAction />
      </Route>
    </MainAreaStyled>
  );
};

export default MainArea;