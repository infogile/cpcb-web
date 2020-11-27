import styled from "styled-components";
import { Link } from "react-router-dom";
import { DashboardIcon } from "../icons";
import { useHistory } from "react-router-dom";

const StyledSidebar = styled.div`
  position: fixed;
  transform: ${(props) =>
    props.show ? "translate(0px, 0px)" : "translate(-200px, 0px)"};
  text-align: left;
  height: 100%;
  width: 200px;
  color: black;
  padding-top: 50px;
  background: white;
  z-index: 1;
  transition: transform 0.5s;
  border-right: 2px solid #f7eded;
  float: left;
`;

const NavItem = styled(Link)`
  padding-top: 20px;
  padding-left: 20px;
  margin-top: 20px;
  display: block;
  text-decoration: none;
  color: #5c5c5c;
  :hover {
    color: #858585;
  }
`;

function Sidebar({ show, ...otherProps }) {
  const history = useHistory();
  console.log(otherProps);

  return (
    <StyledSidebar show={show}>
      <NavItem to="/spcb">
        <DashboardIcon
          color={history.location.pathname === "/spcb" ? "#4759FB" : "#5c5c5c"}
          size="14px"
          marginRight="10px"
        />
        Add ATR
      </NavItem>
      <NavItem to="/spcb/ganga">
        <DashboardIcon
          color={history.location.pathname === "/spcb" ? "#4759FB" : "#5c5c5c"}
          size="14px"
          marginRight="10px"
        />
        Ganga
      </NavItem>
      <NavItem to="/spcb/yamuna">
        <DashboardIcon
          color={history.location.pathname === "/spcb" ? "#4759FB" : "#5c5c5c"}
          size="14px"
          marginRight="10px"
        />
        yamuna
      </NavItem>
    </StyledSidebar>
  );
}

export default Sidebar;
