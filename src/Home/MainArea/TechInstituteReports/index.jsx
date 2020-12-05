import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import GangaReports from "./GangaReports";
import YamunaReports from "./YamunaReports";
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
            <Route path="/home/tir" exact>
                <Dashboard title="Technical Institute Reports: Dashboard"/>
            </Route>
            <Route path="/home/tir/ganga">
                <GangaReports title="Technical Institute Reports: Dashboard"/>
            </Route>
            <Route path="/home/tir/yamuna">
                <YamunaReports title="Technical Institute Reports: Dashboard"/>
            </Route>
            <Route path="/home/tir/statewise">
                <StateWise title="Technical Institute Reports: State Wise"/>
            </Route>
        </TechInstituteReportStyled>
    );
};
export default TechInstituteReports;