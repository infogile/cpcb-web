import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {ComplianceStatusList} from "./ComplianceStatusList"
import { FactoryLists } from "../Dashboard/FactoryLists";

const ComplianceStyled = styled.div`
position: relative;
margin-left: ${(props) => (props.expand ? "10px" : "40px")};
transition: margin-left 0.5s;
`;

export const ComplianceStatus = ({ expand }) => {
    return (
        <ComplianceStyled expand={expand}>
            <Route exact path="/headoffice/compliance-status">
                <ComplianceStatusList />
            </Route>
            <Route path="/headoffice/compliance-status/:river/:state/:status">
                <FactoryLists />
            </Route>
        </ComplianceStyled>
    )
}