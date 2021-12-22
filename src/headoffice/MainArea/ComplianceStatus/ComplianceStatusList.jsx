import React, { useEffect } from "react";
import styled from "styled-components";
import store from "../../../redux/store";
import { Loading } from "../../../shared/Loading";
import { useSelector } from "react-redux";
import { getComplianceStatus } from "../../../redux/services/";
import { Link,useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../helpers";
import {useHistory} from "react-router-dom";

const Table = styled.table`
margin-left: 20px;
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
background: white;
border-spacing: 0px;
text-align: center;
`;

const Th = styled.th`
border-bottom: solid 1px #cccccc;
border-left: solid 1px #cccccc;
:first-child {
  border-left: none;
}
border: 1px solid #ddd;
padding: 8px;
padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: rgb(124, 119, 119);
  color: white;
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

const ReportLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #00a8f3;
  font-weight: 600;
  padding: 10px 0px;
`;

export const ComplianceStatusList = () => {

  const params = useParams();
  const history = useHistory();
  const { isLoading, data } = useSelector((state) => state.complianceStatusReducers);
  useEffect(() => {
    store.dispatch(getComplianceStatus());
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  var i=0;
  console.log("aaaaaaaa : ",data);
  return (
    <div style={{ marginBottom: "100px", marginRight: "20px" }}>
      <h2>Compliance status</h2>
      {data && data.map((river)=>{
        const rivers = ["Ganga", "Yamuna"];
        var num = 1;
        return(
          <>
            <h3>{rivers[i]} GPIs</h3>
            <Table key={rivers[i++]}>
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
                {river && river.map((state) => {
                  return (
                    <Tr key = {state.id}>
                      <Td>{num++}</Td>
                      <Td>{state.statename}</Td>
                      <Td>{state.actioncompleted && 
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/actioncompleted`}>
                          {state.actioncompleted}
                        </ReportLink>
                      }</Td>
                      <Td>{state.complied && 
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/complied`}>
                          {state.complied}
                        </ReportLink>
                      }</Td>
                      <Td>{state.tempclose &&
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/tempclose`}>
                          {state.tempclose}
                        </ReportLink>
                      }</Td>
                      <Td>{state.permanentclose &&
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/permanentclose`}>
                          {state.permanentclose}
                        </ReportLink>
                      }</Td>
                      <Td>{state.showcausenotice &&
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/showcausenotice`} >
                          {state.showcausenotice}
                        </ReportLink>
                      }</Td>
                      <Td>{state.closerdirection &&
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/closerdirection`}>
                          {state.closerdirection}
                        </ReportLink>
                      }</Td>
                      <Td>{state.scnwithdrawn && 
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/tscnwithdrawn`}>
                          {state.scnwithdrawn}
                        </ReportLink>
                      }</Td>
                      <Td>{state.closurerevoke &&
                        <ReportLink to={`/headoffice/compliance-status/${state.title}/${state.statename}/closurerevoke`}>
                          {state.closurerevoke}
                        </ReportLink>
                      }</Td>
                    </Tr>
                  );
                })};
              </tbody>
            </Table>
          </>
        );
      })}
    </div>
  );
};

export default ComplianceStatusList;
