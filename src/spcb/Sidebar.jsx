import styled from "styled-components";
import { Link } from "react-router-dom";
import { DashboardIcon, Tech, Basin, Active }from "../icons";
import { useHistory } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'


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
        <Navigation
        activeItemId="/spcb"
        onSelect={({itemId}) => {
          // maybe push to the route
            history.push(itemId)
        }}
        items={[
          {
            title: 'Add ATR',
            itemId: '/spcb',
            elemBefore: () => <Active></Active>,
          subNav: [
            {
              title: 'Ganga',
              itemId: '/spcb/ganga',
            },
            {
              title: 'Yamuna',
              itemId: '/spcb/yamuna',
            },
          ],
          },
        ]}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
