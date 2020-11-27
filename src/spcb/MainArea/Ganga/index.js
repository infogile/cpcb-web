import React from "react";
import { Route } from "react-router";
import styled from "styled-components";

const gangaAtrStyled = styled.div`
   margin-top: 30px;
`;

export const GangaAtr = ({title}) => {
    return(
        <gangaAtrStyled>
            <Route path="spcb/ganga/view/:id" exact>View</Route>
            <Route path="spcb/ganga/add-action/:id" exact>Add Action</Route>
        </gangaAtrStyled>
    );
};

export default GangaAtr;