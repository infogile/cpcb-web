import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Text } from "../../../shared/Text";
import FieldReport from "./FieldReport";
import InspectionReport from "./InspectionReport";
import InspectionsList from "./InspectionsList";

const ActiveInspectionStyled = styled.div`
  margin-top: 30px;
`;

export const ActiveInspection = ({ title }) => {
  return (
    <ActiveInspectionStyled>
      <Route path="/home/active_inspections" exact>
        <InspectionsList />
      </Route>
      <Route path="/home/active_inspections/field_report/:id">
        <FieldReport />
      </Route>
      <Route path="/home/active_inspections/upload_inspection_report/:id">
        Coming Soon...
      </Route>
    </ActiveInspectionStyled>
  );
};

export default ActiveInspection;
