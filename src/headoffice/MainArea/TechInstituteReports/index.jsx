import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import RiverReports from "./RiverReports";
import StateWise from './StateWise';
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getTechInstituteReports } from "../../../redux/services/";
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
            <Route exact path="/headoffice/tir/:river_name/statewise">
                <StateWise title="Technical Institute Reports: State Wise"/>
            </Route>
        </TechInstituteReportStyled>
    );
};
export default TechInstituteReports;