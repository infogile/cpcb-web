import React, { useEffect } from "react";
import styled from "styled-components";
import store from "../../../redux/store";
import { Loading } from "../../../shared/Loading";
import { useSelector } from "react-redux";
import { getComplianceStatus } from "../../../redux/services/";
import { useParams } from "react-router-dom";


const Table = styled.table`
  border-spacing: 0px;
  margin-top:40px;
  width: 95%;
`;

const Th = styled.th`
  color: #353535;
  border-bottom: solid 1px #cccccc;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left: ;
  }
`;

const Tr = styled.tr`
  color: ${(props) => props.Color};
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background: #dadada;
  }
`;

const Td = styled.td`
  color: #797979;
  padding: 20px 10px;
  font-size: ${(props) => props.fontSize};
  white-space: ${(props) => props.whiteSpace};
  text-align: center;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left:;
  }
`;

export const ComplianceStatusList = () => {

  const params = useParams();

  const { isLoading, data } = useSelector((state) => state.complianceStatusReducers);
    useEffect(() => {
        store.dispatch(getComplianceStatus());
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    var num = 1;

  return (
    <div style={{ marginBottom: "100px", marginRight: "20px" }}>
      <h2>Compliance status</h2>
      <Table key="ganga">
        <tbody>
          
          <tr>
            <Th >S. No.</Th>
            <Th>State</Th>
            <Th>Action Completed</Th>
            <Th>Complied</Th>
            <Th>Temporary Close</Th>
            <Th>Permanent Close</Th>
            <Th>Show Cause Notice <i>(Non Complied)</i></Th>
            <Th>Closer Direction <i>(Non Complied)</i></Th>
            <Th>SCN with Drawn <i>(Revoke)</i></Th>
            <Th>Closure Revoke <i>(Revoke)</i></Th>   
          </tr>
          {data && data.map((stat) => {
            return (<Tr key = {stat.id}>
              <Td>{num++}</Td>
              <Td>{stat.statename}</Td>
              <Td>{stat.actioncompleted}</Td>
              <Td>{stat.complied}</Td>
              <Td>{stat.tempclose}</Td>
              <Td>{stat.permanentclose}</Td>
              <Td>{stat.showcausenotice}</Td>
              <Td>{stat.closerdirection}</Td>
              <Td>{stat.scnwithdrawn}</Td>
              <Td>{stat.closurerevoke}</Td>
          </Tr>
          );
          })};
        </tbody>
      </Table>
    </div>
  );
};

export default ComplianceStatusList;
