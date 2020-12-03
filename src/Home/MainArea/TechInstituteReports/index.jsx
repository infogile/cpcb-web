import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import GangaReports from "./GangaReports";
import YamunaReports from "./YamunaReports";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getTechInstituteReports } from "../../../redux/services/";
import styled from "styled-components";

const TechInstituteReportStyled = styled.div`
  margin-top: 30px;
`;

export const TechInstituteReports = ()=>{
    return (
        <TechInstituteReportStyled>
            <Route path="/home/tir" exact>
                <Dashboard title="Technical Institute Reports: Dashboard"/>
            </Route>
            <Route path="/home/tir/ganga">
                <GangaReports title="Technical Institute Reports: Dashboard"/>
            </Route>
            <Route path="/home/tir/yamuna">
                <YamunaReports title="Technical Institute Reports: Dashboard"/>
            </Route>
        </TechInstituteReportStyled>
    );
};
export default TechInstituteReports;