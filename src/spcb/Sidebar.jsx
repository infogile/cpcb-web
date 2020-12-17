import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { capitalizeFirstLetter } from "../helpers";

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
  padding-bottom: 20px;
  padding-left: 20px;
  display: block;
  text-decoration: none;
  color: #5c5c5c;
  :hover {
    color: #858585;
    background: #d7f3ff;
  }
`;

const rivers = ["", "ganga", "yamuna"];

function Sidebar({ show, ...otherProps }) {
  return (
    <StyledSidebar show={show}>
      {rivers.map((river) =>
        river ? (
          <NavItem to={`/spcb/completed_inspections/${river}`} key={river}>
            <strong> {capitalizeFirstLetter(river)}</strong>
          </NavItem>
        ) : (
          <NavItem to={`/spcb`} key={"all"}>
            <strong>All</strong>
          </NavItem>
        )
      )}
    </StyledSidebar>
  );
}

export default Sidebar;
