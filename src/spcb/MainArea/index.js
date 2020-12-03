import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import GangaAtr from "./Ganga"

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "30px" : "230px")};
  transition: margin-left 0.5s;
`;

export const MainArea = ({ expand }) => {
  return (
    <MainAreaStyled expand={expand}>
      <Route path="/spcb" exact>Ganga<GangaAtr/></Route>
      <Route path="/spcb/ganga">Ganga</Route>
      <Route path="/spcb/yamuna">Yamuna</Route>
    </MainAreaStyled>
  );
};

export default MainArea;