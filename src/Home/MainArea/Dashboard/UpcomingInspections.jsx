import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { Text } from "../../../shared/Text";

const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background: white;
  box-shadow: 0px 2px 5px 0px #17171747;
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 20px;
  :first-child {
    margin-top: 0px;
  }
`;

const State = styled.div`
  text-align: left;
`;

const Date = styled.div`
  text-align: right;
`;

const List = styled.div`
  display: block;
  margin-top: 22px;
  margin-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 900px;
  background: #f6f6f6;
  :first-child {
    margin-top: 10px;
  }
`;

const UpcomingInspectionsStyled = styled.div`
  margin-top: 30px;
`;

export const UpcomingInspections = ({ title }) => {
  return (
    <UpcomingInspectionsStyled>
      <Text marginLeft="10px">Upcoming Inspection</Text>
      <List>
        <ListItem>
          <State>test</State>
          <Date>test</Date>
        </ListItem>
        <ListItem>
          <State>test</State>
          <Date>test</Date>
        </ListItem>
        <ListItem>
          <State>test</State>
          <Date>test</Date>
        </ListItem>
        <ListItem>
          <State>test</State>
          <Date>test</Date>
        </ListItem>
      </List>
    </UpcomingInspectionsStyled>
  );
};

export default UpcomingInspections;
