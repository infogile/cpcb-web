import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {StateRiverReports} from "./StateRiverReport";

const StateWiseStyled = styled.div`
position: relative;
margin-left: ${(props) => (props.expand ? "10px" : "40px")};
transition: margin-left 0.5s;
`;

export const StateWise = ({ expand }) => {
    return (
        <StateWiseStyled expand={expand}>
            <Route exact path="/headoffice/statewise/:river_name">
              <StateRiverReports title="State Board Reports: Dashboard"/>
            </Route>
        </StateWiseStyled>
    )
}