import { getCompletedInspection } from "../../../redux/services";
import React, { useEffect } from "react";
import { Loading } from "../../../shared/Loading";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../../../helpers";

const ReportLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #00a8f3;
  font-weight: 600;
  padding: 10px 0px;
`;

const Table = styled.table`
  border-spacing: 0px;
`;

const Th = styled.th`
  border-bottom: solid 1px #cccccc;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left: none;
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
  padding: 20px 10px;
  font-size: ${(props) => props.fontSize};
  white-space: ${(props) => props.whiteSpace};
  text-align: center;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left: none;
  }
`;

export const CompletedInspectionList = () => {
  const { data, isLoading } = useSelector(
    (state) => state.completedInspectionReducer
  );

  const params = useParams();
  useEffect(() => {
    store.dispatch(getCompletedInspection(params.river_name || ""));
  }, [params.river_name]);
  
  let { state , state_shortName } = useSelector((state) => state.loginReducer);
  
  if(state == undefined){
    state = sessionStorage.getItem("state");
  }
  if(state_shortName == undefined){
    state_shortName = sessionStorage.getItem("state_shortName");
  }

  console.log(state, state_shortName, "in completed inspection list");

  if (isLoading) {
    return <Loading />;
  }
  if (data.length === 0) {
    return <h2>No data to be shown yet !</h2>
  }
  console.log("This is the spcb data : ", data);
  var num = 1;
  return (
    <div style={{ marginBottom: "100px", marginRight: "20px" }}>
      <h1>
        {params.river_name
          ? `Inspections of ${capitalizeFirstLetter(params.river_name)}`
          : "All Inspections"}
      </h1>
      <Table id="state">
        <tbody>
          <tr>
            <Th >S. No.</Th>
            <Th>Unit code</Th>
            <Th>Unit name</Th>
            <Th>Sector</Th>
            <Th>Institute</Th>
            <Th>Region</Th>
            <Th>Field report</Th>
            <Th>Final report</Th>
            <Th>Take action</Th>
          </tr>
          {data.map(({ id, status, code, name, sector, region, username, actioncount ,STATE,STATE_shortName}) => {
            if(status>=3 && (STATE == state || STATE_shortName == state_shortName )){
              return (
                <Tr  Color = "green" key={id}>
                  <Td>{num++}</Td>
                  <Td whiteSpace="nowrap">{code}</Td>
                  <Td fontSize="15px">{name}</Td>
                  <Td>{sector}</Td>
                  <Td>{username}</Td>
                  <Td>{region}</Td>
                  <Td fontSize="15px">
                    {status === 0 && "Pending"}
                    {status > 0 && (
                      <ReportLink to={`/spcb/field_report/${id}`}>
                        View Report
                      </ReportLink>
                    )}
                  </Td>
                  <Td fontSize="15px">
                    {(status === 1 || status === 0) && "Pending"}
                    {status >= 2 && (
                      <ReportLink to={`/spcb/inspection_report/${id}`}>
                        View Report
                      </ReportLink>
                    )}
                  </Td>
                  <Td fontSize="15px">
                    {(status === 1 || status === 0) && "Pending"}
                    {status === 2 && (
                      <ReportLink to={`/spcb/take_action/${id}`}>
                        Take Action
                      </ReportLink>
                    )}
                    {status >= 3 && (
                      <ReportLink to={`/spcb/view_action/${id}`}>
                        View Action
                      </ReportLink>
                    )}
                  </Td>
                </Tr>
              );
            } else if(actioncount > 0 && status ===2 && (STATE == state || STATE_shortName == state_shortName )){
              return (
                <Tr  Color = "#cc7a00" key={id}>
                  <Td>{num++}</Td>
                  <Td whiteSpace="nowrap">{code}</Td>
                  <Td fontSize="15px">{name}</Td>
                  <Td>{sector}</Td>
                  <Td>{username}</Td>
                  <Td>{region}</Td>
                  <Td fontSize="15px">
                    {status === 0 && "Pending"}
                    {status > 0 && (
                      <ReportLink to={`/spcb/field_report/${id}`}>
                        View Report
                      </ReportLink>
                    )}
                  </Td>
                  <Td fontSize="15px">
                    {(status === 1 || status === 0) && "Pending"}
                    {status >= 2 && (
                      <ReportLink to={`/spcb/inspection_report/${id}`}>
                        View Report
                      </ReportLink>
                    )}
                  </Td>
                  <Td fontSize="15px">
                    {(status === 1 || status === 0) && "Pending"}
                    {status === 2 && (
                      <ReportLink to={`/spcb/take_action/${id}`}>
                        Take Action
                      </ReportLink>
                    )}
                    {status >= 3 && (
                      <ReportLink to={`/spcb/view_action/${id}`}>
                        View Action
                      </ReportLink>
                    )}
                  </Td>
                </Tr>
              );
            } else if(STATE == state || STATE_shortName == state_shortName ) return(
              <Tr key={id}>
                  <Td >{num++}</Td>
                  <Td whiteSpace="nowrap">{code}</Td>
                  <Td fontSize="15px">{name}</Td>
                  <Td>{sector}</Td>
                  <Td>{username}</Td>
                  <Td>{region}</Td>
                  <Td fontSize="15px">
                    {status === 0 && "Pending"}
                    {status > 0 && (
                      <ReportLink to={`/spcb/field_report/${id}`}>
                        View Report
                      </ReportLink>
                    )}
                  </Td>
                  <Td fontSize="15px">
                    {(status === 1 || status === 0) && "Pending"}
                    {status >= 2 && (
                      <ReportLink to={`/spcb/inspection_report/${id}`}>
                        View Report
                      </ReportLink>
                    )}
                  </Td>
                  <Td fontSize="15px">
                    {(status === 1 || status === 0) && "Pending"}
                    {status === 2 && (
                      <ReportLink to={`/spcb/take_action/${id}`}>
                        Take Action
                      </ReportLink>
                    )}
                    {status >= 3 && (
                      <ReportLink to={`/spcb/view_action/${id}`}>
                        View Action
                      </ReportLink>
                    )}
                  </Td>
                </Tr>
            )
            
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CompletedInspectionList;
