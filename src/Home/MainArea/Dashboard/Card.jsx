import React from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";

const StyledCard = styled.div`
  border-radius: 6px;
  text-align: center;
  background-image: ${(props) => props.bg};
  margin: 10px;
  float: left;
  color: white;
  padding: 20px;
  width: 150px;
  height: 60px;
`;

<<<<<<< HEAD
const Card = ({ bg, number, status }) => {
  return (
    <StyledCard bg={bg}>
      <Text color="white" as="div" fontSize="30px">
        {number}
      </Text>
      <Text color="white" fontSize="15px">
        {status}
      </Text>
=======
const Card = ({ bg }) => {
  return (
    <StyledCard bg={bg}>
      <Text color="white" as="div" fontSize="30px">
        50
      </Text>
      <Text color="white">Pending</Text>
>>>>>>> 103609f... initial commit
    </StyledCard>
  );
};

export default Card;
