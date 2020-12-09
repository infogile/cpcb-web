import React, { useEffect } from "react";
import { Route } from "react-router-dom";
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
            <Route exact path="/home/tir/ganga">
                <GangaReports title="Technical Institute Reports:- Dashboard: Ganga"/>
            </Route>
            <Route exact path="/home/tir/yamuna">
                <YamunaReports title="Technical Institute Reports:- Dashboard: Yamuna"/>
            </Route>
            <Route exact path="/home/tir/ganga/statewise">
                <StateWise title="Technical Institute Reports: State Wise"/>
            </Route>
            <Route exact path="/home/tir/yamuna/statewise">
                <StateWise title="Technical Institute Reports: State Wise"/>
            </Route>
        </TechInstituteReportStyled>
    );
};
export default TechInstituteReports;