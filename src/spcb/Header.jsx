import styled from "styled-components";
import { useSelector } from "react-redux";
import { Text } from "../shared/Text";
import { BarsIcon } from "../icons";
import { useHistory } from "react-router-dom";
import store from "../redux/store";
import { doLogout } from "../redux/services";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  position: fixed;
  text-align: center;
  width: 100%;
  height: 55px;
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
  const { username } = useSelector((state) => state.loginReducer);
  const onLogout = () => {
    setTimeout(history.push("/"), 0);
    doLogout();
  };
  return (
    <StyledHeader>
      <span style={{ marginLeft: "40px", textAlign: "left" }}>
        <BarsIcon color="white" size="32px" onClick={toggleNav} />
      </span>
      <Text fontSize="20px" color="white">
        {`Hi, ${username || sessionStorage.getItem("username")}`}
      </Text>
      <div style={{ textAlign: "right", paddingTop: "5px" }}>
        <Logout onClick={onLogout}>Logout</Logout>
      </div>
    </StyledHeader>
  );
}

export default Header;
