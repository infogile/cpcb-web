import styled from "styled-components";
import { VictoryPie } from 'victory';
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import store from "../../../redux/store";
import { getRiverReport } from "../../../redux/services/";
import { Loading } from "../../../shared/Loading";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../helpers";

const Head = styled.div`
    display : flex;
    margin-left: 20px;
    margin-bottom: 80px;
    widTh: 100%;
`;

const State = styled(Link)`
position: absolute;
background-color:#00A8F3;
color: white;
right:25px;
padding: 10px 30px;
margin-top: 25px;
text-align: center;
border-radius: 5px;
text-decoration: none;
`;

const Graph = styled.span`
display: inline-block;
widTh: 300px;
height: 200px;
padding: 30px 40px;
font-size: 18px;
margin-top: 20px;
margin-left: 13px;
margin-right: 20px;
text-align: center;
margin-bottom: 40px;
`;

const Table= styled.table`
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
  :hover {
    background: #dadada;
  }
`;

const Td = styled.td`
  padding: 20px 10px;
  border: 1px solid #ddd;
  padding: 8px;
  font-size: ${(props) => props.fontSize};
  white-space: ${(props) => props.whiteSpace};
  text-align: center;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left: none;
  }
`;

const ReportLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #00a8f3;
  font-weight: 600;
  padding: 10px 0px;
`;

export const RiverReports =({ title })=>{
const params = useParams();
  const { isLoading, data } = useSelector((state) => state.riverReportReducers);
    useEffect(() => {
        store.dispatch(getRiverReport(params.river_name || ""));
    }, [params.river_name]);
    
    if (isLoading) {
        return <Loading />;
    }
    return (
    <>
    <body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50" left="400px">
        <header>
            <Head>
                <h3 style={{ position:"absolute", left:"30px" ,fontSize: "30px", fontFamily:"Avantgarde, TeX Gyre Adventor, URW GoThic L, sans-serif"}}>
                    <strong>{title}</strong>
                </h3>
                <State to={`/headoffice/tir/${params.river_name}/sectorwise`}>Sector Wise Report</State>
            </Head>      
        </header>
        <div>
            {data.map((inst) => {
                return (
                    <Graph>
                        <VictoryPie 
                            colorScale={["tomato", "green", "gold"]}
                            data={[
                                { x: `Total Alloted:${inst.totalAlloted}`, y: inst.totalAlloted },
                                inst.inspectionReportSubmitted >= 1? ({ x: `Insp Report:${inst.inspectionReportSubmitted}`, y: inst.inspectionReportSubmitted } ) : (null ),
                                inst.fieldReportSubmitted >= 1?{ x: `Field Report:${inst.fieldReportSubmitted}`, y: inst.fieldReportSubmitted } : null,
                            ]}
                            style={{labels: {fontSize: 17, marginTop: "5px"}, }}/>
                        <p style={{ marginTop :  "25px" }}>{inst.insts.toUpperCase()}</p> 
                    </Graph>
                );
            })}         
        </div>
        <div class="container" style={{marginBottom:"100px", marginRight:"20px", marginTop: "100px"}}>
            <Table>
                <Tr>
                    <Th></Th>
                    <Th>Total Inspection</Th>
                    <Th>Inspection Pending</Th>
                    <Th>Field Report Submitted</Th>
                    <Th>Inspection Report Submitted</Th>
                    <Th>Report Submitted WiThin 15 Days</Th>
                    <Th>Submitted More Than 15 Days</Th>
                </Tr>
                {data && data.map((insts)=>{
                    return (
                        <Tr>
                            <Td>{insts.insts.toUpperCase()}</Td>
                            <Td>{insts.totalAlloted &&
                                <ReportLink to={`/headoffice/tir/${params.river_name}/${insts.insts}/totalAlloted`}>
                                    {insts.totalAlloted}
                                </ReportLink>
                            }</Td>
                            <Td>{insts.pending  &&
                                <ReportLink to={`/headoffice/tir/${params.river_name}/${insts.insts}/pending`}>
                                    {insts.pending}
                                </ReportLink>
                            }</Td>
                            <Td>{insts.fieldReportSubmitted  &&
                                <ReportLink to={`/headoffice/tir/${params.river_name}/${insts.insts}/fieldReportSubmitted`}>
                                    {insts.fieldReportSubmitted}
                                </ReportLink>
                            }</Td>
                            <Td>{insts.inspectionReportSubmitted  &&
                                <ReportLink to={`/headoffice/tir/${params.river_name}/${insts.insts}/inspectionReportSubmitted`}>
                                    {insts.inspectionReportSubmitted}
                                </ReportLink>
                            }</Td>
                            <Td>{insts.lessthan15days  &&
                                <ReportLink to={`/headoffice/tir/${params.river_name}/${insts.insts}/lessthan15days`}>
                                    {insts.lessthan15days}
                                </ReportLink>
                            }</Td>
                            <Td>{insts.morethan15days  &&
                                <ReportLink to={`/headoffice/tir/${params.river_name}/${insts.insts}/morethan15days`}>
                                    {insts.morethan15days}
                                </ReportLink>
                            }</Td>
                        </Tr>
                    );
                })}
            </Table>
        </div>
    </body>
    </>
    );
};

export default RiverReports;