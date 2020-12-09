import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWrapper = styled.div`
  margin-top: 50px;
`;

const RiverStatsStyled = styled.div`
  display: inline-block;
  margin-top: 50px;
  :first-child {
    margin-top: 10px;
  }
`;

export const RiverStats = ({ title, data }) => {
  return (
    <RiverStatsStyled>
      <Text style={{ fontSize: "30px", fontFamily:"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif" }} marginLeft="60px" >
        <strong>{title}</strong>
      </Text>
      <CardWrapper>
        <Card
          bg="linear-gradient(270deg,#d83cff -3.15%,#a05cff 103.51%,#9b6bff 103.52%)"
          number={data.totalAlloted}
          status="Total Alloted"
        />
        <Card
          bg="linear-gradient(278.13deg, #5AD7FF 3.53%, #A05CFF 112.63%, #0EF1FF 112.64%);"
          number={data.pending}
          status="Pending"
        />
        <Card
          bg="linear-gradient(276.51deg, #60C86A 20.09%, #4881D6 102.62%);"
          number={data.fieldReportSubmitted}
          status="Field Report Submitted"
        />
        <Card
          bg="linear-gradient(278.13deg, #FFB169 3.53%, #D267B4 112.64%);"
          number={data.inspectionReportSubmitted}
          status="Inspection Report Submitted"
        />
      </CardWrapper>
    </RiverStatsStyled>
  );
};

export default RiverStats;
