import styled from "styled-components";
import { Text } from "../shared/Text";
import { Link } from "react-router-dom";
import { DashboardIcon, Tech, Basin, Active } from "../icons";
import { useHistory } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const StyledSidebar = styled.div`
  position: fixed;
  transform: ${(props) =>
    props.show ? "translate(0px, 0px)" : "translate(-400px, 0px)"};
  text-align: left;
  height: 100%;
  width: 290px;
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
  console.log(history);
  return (
  <StyledSidebar show={show}>
      <Navigation
        activeItemId="/headoffice"
        onSelect={({itemId}) => {
          // maybe push to the route
            history.push(itemId)
        }}

        items={[
          {
            title: 'Dashboard',
            itemId: '/headoffice',
            elemBefore: () => <DashboardIcon
            color={history.location.pathname === "/headoffice" ? "#4759FB" : "#5c5c5c"}
          />
          },
          {
            title: 'Tech Institute Reports',
            elemBefore :() => <Tech
            color={history.location.pathname === "/headoffice" ? "#4759FB" : "#5c5c5c"}
            />, 
            subNav: [
              {
                title: 'Ganga',
                itemId: '/headoffice/tir/ganga',
              },
              {
                title: 'Yamuna',
                itemId: '/headoffice/tir/yamuna',
              },
            ],
          },
        ]}
      />
      {/* <NavItem to="/headoffice/schedule">Schedule</NavItem> */}
    </StyledSidebar>
  );
}

export default Sidebar;
