import React from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";

const StyledCard = styled.div`
  border-radius: 6px;
  background-image: ${(props) => props.bg};
  margin: 10px;
  float: left;
  text-align: center;
  color: white;
  padding: 20px;
  width: 200px;
  height: 100px;
`;

const Card = ({ bg, number, status }) => {
  return (
    <StyledCard bg={bg}>
      <Text color="white" as="div" fontSize="15px">
        {number}
      </Text>
      <Text color="white" fontSize="20px">
        {status}
      </Text>
    </StyledCard>
  );
};

export default Card;
