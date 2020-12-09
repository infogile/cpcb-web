import styled from "styled-components";
import { Text } from "../shared/Text";
import { Link } from "react-router-dom";
import { DashboardIcon, Tech, Basin, Active } from "../icons";
import { useHistory } from "react-router-dom";
import "../assets/css/tech.css";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


const StyledSidebar = styled.div`
  position: fixed;
  transform: ${(props) =>
    props.show ? "translate(0px, 0px)" : "translate(-400px, 0px)"};
  text-align: left;
  height: 100%;
  width: 285px;
  color: black;
  padding-top: 50px;
  background: white;
  z-index: 1;
  transition: transform 0.5s;
  border-right: 2px solid #f7eded;
  float: left;
`;


function Sidebar({ show, ...otherProps }) {
  const history = useHistory();
  console.log(history);
  return (
  <StyledSidebar show={show}>
      <Navigation
        activeItemId="/home"
        onSelect={({itemId}) => {
          // maybe push to the route
            history.push(itemId)
        }}

        className="navi"

        items={[
          {
            title: 'Dashboard',
            itemId: '/home',
            elemBefore: () => <DashboardIcon
            color={history.location.pathname === "/home" ? "#4759FB" : "#5c5c5c"}
          />
          },
          {
            title: 'Tech Institute Reports',
            elemBefore :() => <Tech
            color={history.location.pathname === "/home" ? "#4759FB" : "#5c5c5c"}
            />, 
            subNav: [
              {
                title: 'Ganga',
                itemId: '/home/tir/ganga',
              },
              {
                title: 'Yamuna',
                itemId: '/home/tir/yamuna',
              },
            ],
          },
          {
            title: 'Active Inspections',
            itemId: '/home/active_inspections',
            elemBefore:()=><Active></Active>
          },
        ]}
      />
      {/* <NavItem to="/home/schedule">Schedule</NavItem> */}
    </StyledSidebar>
  );
}

export default Sidebar;
