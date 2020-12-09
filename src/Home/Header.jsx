import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "../shared/Text";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import store from "../redux/store";
import { doLogout } from "../redux/services";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 50px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 2;
  background: #00a8f3;
  box-shadow: 5px 5px 5px #00000059;
`;

const Logout = styled.span`
  cursor: pointer;
  margin-right: 40px;
  text-align: right;
  :hover {
    color: #636363;
  }
`;

function Header({ toggleNav }) {
  const history = useHistory();
  const onLogout = () => {
    doLogout();
    setTimeout(history.push("/"), 0);
  };
  return (
    <StyledHeader>
      <span style={{ marginLeft: "40px", textAlign: "left" }}>
        <FontAwesomeIcon
          icon={faBars}
          size={"2x"}
          onClick={toggleNav}
          cursor="pointer"
        />
      </span>
      <Text fontSize="20px" color="white">
        CPCB Portal
      </Text>
      <Logout onClick={onLogout}>Logout</Logout>
    </StyledHeader>
  );
}

export default Header;
