import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { Text } from "../../../shared/Text";

const CardWrapper = styled.div`
  margin-top: 20px;
`;

const RiverStatsStyled = styled.div`
  display: inline-block;
  margin-top: 50px;
  :first-child {
    margin-top: 10px;
  }
`;

export const RiverStats = ({ title }) => {
  return (
    <RiverStatsStyled>
      <Text as="h2" marginLeft="10px">
        {title}
      </Text>
      <CardWrapper>
        <Card bg="linear-gradient(270deg,#d83cff -3.15%,#a05cff 103.51%,#9b6bff 103.52%)" />
        <Card bg="linear-gradient(278.13deg, #5AD7FF 3.53%, #A05CFF 112.63%, #0EF1FF 112.64%);" />
        <Card bg="linear-gradient(276.51deg, #60C86A 20.09%, #4881D6 102.62%);" />
        <Card bg="linear-gradient(278.13deg, #FFB169 3.53%, #D267B4 112.64%);" />
      </CardWrapper>
    </RiverStatsStyled>
  );
};

export default RiverStats;
