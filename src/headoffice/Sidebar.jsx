import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../shared/Text";
import { Link } from "react-router-dom";
import { DashboardIcon, Tech, Basin, Active, UpDown} from "../icons";
import { useHistory } from "react-router-dom";
import { capitalizeFirstLetter } from "../helpers";

const StyledSidebar = styled.div`
  position: fixed;
  transform: ${(props) =>
    props.show ? "translate(0px, 0px)" : "translate(-400px, 0px)"};
  text-align: left;
  height: 100%;
  width: 250px;
  color: black;
  padding-top: 50px;
  background: white;
  z-index: 1;
  transition: transform 0.5s;
  border-right: 2px solid #f7eded;
  float: left;
`;

const Nav =styled.div`
transform: ${(props) =>
  props.showItem ?"translate(20px, 0px)":"translate(20px, -2000px)"};
height: 200px;
width: 200px;
background: white;
z-index: 1;
`;

const NavItem = styled(Link)`
  padding-top: 20px;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  display: block;
  text-decoration: none;
  color: #5c5c5c;
  :hover {
    color: #858585;
  }
`;

const Up= styled.div`
position: fixed;
height: 10px;
width: 10px;
color: black;
background: black;
`;

const rivers = ["ganga", "yamuna"];

function Sidebar({ show, showItem, ...otherProps }) {
  const [showItemNav, setShowItemNav] = useState(true);
  const toggleItem = () => {
    setShowItemNav(!showItemNav);
  };
  const history = useHistory();
  console.log(history);
  return (
    <StyledSidebar show={show}>
        <NavItem to="/headoffice">
          <DashboardIcon
            color={history.location.pathname === "/headoffice" ? "#4759FB" : "#5c5c5c"}
            size="14px"
            marginRight="10px"
          />
        Dashboard
        </NavItem>
        <NavItem to="/headoffice/compliance-status">
          <Tech
            color={history.location.pathname === "/headoffice/compliance-status" ? "#4759FB" : "#5c5c5c"}
            size="14px"
            marginRight="10px"
          />
        Compliance status
        </NavItem>
      <span style={{ marginLeft:"18px", textAlign: "left", marginTop:"30px"}}>
          <Tech
            size="14px"
            marginRight="10px"
          />
          Technical Institute Reports
          <UpDown size="20px" up={showItemNav} onClick={toggleItem} />
      </span>
      <Nav showItem={showItemNav}>
        {rivers.map((river) =>
          river ? (
            <NavItem to={`/headoffice/tir/${river}`}>
              <strong>
                <Basin 
                  color={history.location.pathname === `/headoffice/tir/${river}` ? "#4759FB" : "#5c5c5c"}
                  size="14px"
                  marginRight="10px">
                </Basin>{capitalizeFirstLetter(river)}
              </strong>
            </NavItem>
          ) : (
            <NavItem to={`/headoffice/tir`}>
              <strong>All</strong>
            </NavItem>
          )
        )}
      </Nav>
     
      {/* <NavItem to="/headoffice/schedule">Schedule</NavItem> */}
    </StyledSidebar>
  );
}

export default Sidebar;
