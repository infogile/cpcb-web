import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import FieldReport from "./Action/FieldReport";
import GangaAtr from "./Action/ActionGanga";
import YamunaAtr from "./Action/ActionYamuna";
import TakeAction from "./Action/TakeAction";

const MainAreaStyled = styled.div`
  position: relative;
  padding-top: 70px;
  margin-left: ${(props) => (props.expand ? "30px" : "230px")};
  transition: margin-left 0.5s;
`;

const MainArea = ({ expand }) => {
  return (
    <MainAreaStyled expand={expand}>
      <Route exact path="/spcb"></Route>
      <Route exact path="/spcb/ganga">
          <GangaAtr />
      </Route>
      <Route exact path="/spcb/yamuna">
          <YamunaAtr />
      </Route>
      <Route exact path="/spcb/ganga/field_report/:id">
            <FieldReport />
        </Route>
        <Route exact path="/spcb/yamuna/field_report/:id">
            <FieldReport />
        </Route>
        <Route exact path="/spcb/ganga/take_action/:id">
            <TakeAction />
        </Route>
        <Route exact path="/spcb/yamuna/take_action/:id">
            <TakeAction />
        </Route>
    </MainAreaStyled>
  );
};

export default MainArea;