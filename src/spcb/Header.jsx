import styled from "styled-components";
import { Text } from "../shared/Text";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 30px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 2;
  background: #00a8f3;
  box-shadow: 5px 5px 5px #00000059;
`;

function Header({ toggleNav }) {
  return (
    <StyledHeader>
      <span style={{ marginLeft: "40px", textAlign: "left" }}></span>
      <Text fontSize="20px" color="white">
        CPCB Portal
      </Text>
    </StyledHeader>
  );
}

export default Header;
