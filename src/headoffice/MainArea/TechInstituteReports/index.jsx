import React from "react";
import { Route } from "react-router-dom";
import RiverReports from "./RiverReports";
import SectorWise from './SectorWise';
import FieldReport from "./FieldReport";
import InspectionReport from "./InspectionReport";
import styled from "styled-components";

const TechInstituteReportStyled = styled.div`
position: relative;
margin-left: ${(props) => (props.expand ? "10px" : "20px")};
transition: margin-left 0.5s;
`;

export const TechInstituteReports = ({ expand })=>{
    return (
        <TechInstituteReportStyled expand={expand}>
            <Route exact path="/headoffice/tir/:river_name">
                <RiverReports title="Technical Institute Reports: Dashboard"/>
            </Route>
            <Route exact path="/headoffice/tir/:river_name/sectorwise">
                <SectorWise title="Technical Institute Reports: Sector Wise"/>
            </Route>
            <Route exact path="/headoffice/tir/:river_name/sectorwise/field_report/:id">
                <FieldReport />
            </Route>
            <Route exact path="/headoffice/tir/:river_name/sectorwise/inspection_report/:id">
                <InspectionReport />
            </Route>
        </TechInstituteReportStyled>
    );
};
export default TechInstituteReports;