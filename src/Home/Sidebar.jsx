import styled from "styled-components";
import { Text } from "../shared/Text";
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

  return (
    <StyledSidebar show={show}>
      <NavItem to="/home">
        <DashboardIcon
          color={history.location.pathname === "/home" ? "#4759FB" : "#5c5c5c"}
          size="14px"
          marginRight="10px"
        />
        Dashboard
      </NavItem>
      <NavItem to="/home/active_inspections">
        <DashboardIcon
          color={
            history.location.pathname === "/home/active_inspections"
              ? "#4759FB"
              : "#5c5c5c"
          }
          size="14px"
          marginRight="10px"
        />
        Active Inspections
      </NavItem>
      {/* <NavItem to="/home/schedule">Schedule</NavItem> */}
    </StyledSidebar>
  );
}

export default Sidebar;
