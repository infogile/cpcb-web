import React from "react";
import { Route } from "react-router-dom";
import InspectionDetails from "./InspectionDetails";
import FactoryLists from './FactoryLists';
import FieldReport from "../TechInstituteReports/FieldReport";
import { ViewAction } from "../../../spcb/MainArea/Action/ViewAction";
import InspectionReport from "../TechInstituteReports/InspectionReport";
import styled from "styled-components";

const DashboardStyled = styled.div`
position: relative;
margin-left: ${(props) => (props.expand ? "10px" : "20px")};
transition: margin-left 0.5s;
`;

export const Dashboard = ({ expand })=>{
    return (
        <DashboardStyled expand={expand}>
            <Route exact path="/headoffice">
                <InspectionDetails />
            </Route>
            <Route exact path="/headoffice/dashboard/:status/:river">
                <FactoryLists />
            </Route>
            <Route path="/headoffice/dashboard/:status/:river/field_report/:id" >
                <FieldReport />
            </Route>
            <Route exact path="/headoffice/dashboard/:status/:river/inspection_report/:id">
                <InspectionReport />
            </Route>
            <Route exact path="/headoffice/dashboard/:status/:river/view_action/:id">
                <ViewAction />
            </Route>
        </DashboardStyled>
    );
};