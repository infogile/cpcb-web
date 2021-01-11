import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {ComplianceStatusList} from "./ComplianceStatusList"

const ComplianceStyled = styled.div`
position: relative;
margin-left: ${(props) => (props.expand ? "10px" : "40px")};
transition: margin-left 0.5s;
`;

export const ComplianceStatus = ({ expand }) => {
    return (
        <ComplianceStyled expand={expand}>
            <Route path="/headoffice/compliance-status">
              <ComplianceStatusList />
            </Route>
        </ComplianceStyled>
    )
}