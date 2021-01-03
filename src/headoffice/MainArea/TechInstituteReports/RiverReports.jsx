import styled from "styled-components";
import { VictoryPie } from 'victory';
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import store from "../../../redux/store";
import { getCompletedInspection } from "../../../redux/services";

const Head = styled.div`
    display : flex;
    margin-left: 20px;
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
padding: 10px;
font-size: 18px;
padding-top: 50px;
padding-bottom: 30px;
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


export const RiverReports =({ title })=>{
    const params = useParams();
    useEffect(() => {
    store.dispatch(getCompletedInspection(params.river_name || ""));
  }, [params.river_name]);

    return (
    <>
    <body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50" left="400px">
        <header>
            <div>
                <Head>
                    <h3 style={{ fontSize: "30px", fontFamily:"Avantgarde, TeX Gyre Adventor, URW GoThic L, sans-serif"}}>
                        <sTrong>{title}</sTrong>
                    </h3>
                    <State to="/headoffice/tir/:river_name/statewise">State Wise Report</State>
                </Head>
            </div>
        </header>
        <div>
            <div class="img-text-wrapper">
                <Graph>
                    <span>
                        <VictoryPie
                            data={[
                            { x: "Total Alloted", y: 35 },
                            { x: "Inspected", y: 40 },]}
                        style={{labels: {fontSize: 30},}}/>
                        CPRI
                    </span>
                </Graph>
                <Graph>
                    <span>
                        <VictoryPie
                            data={[
                            { x: "Total Alloted", y: 35 },
                            { x: "Inspected", y: 40 },]}
                            style={{labels: {fontSize: 30},}}/> 
                        <p>DTU</p>
                    </span>
                </Graph>
                <Graph>
                    <span>
                        <VictoryPie
                            data={[
                            { x: "Total Alloted", y: 35 },
                            { x: "Inspected", y: 40 },]}
                            style={{labels: {fontSize:30},}}/> 
                        <p>IIT Delhi</p>
                    </span>
                </Graph>
                <Graph>
                    <span>
                        <VictoryPie
                            data={[
                            { x: "Total Alloted", y: 35 },
                            { x: "Inspected", y: 40 },]}
                            style={{labels: {fontSize: 30},}}/> 
                        <p>IIT Roorkee</p>
                    </span>
                </Graph>
                <Graph>
                    <span>
                        <VictoryPie
                            data={[
                            { x: "Total Alloted", y: 35 },
                            { x: "Inspected", y: 40 },]}
                        style={{labels: {fontSize: 30},}}/> 
                        <p>NEERI</p>
                    </span>
                </Graph>
                <Graph>
                    <span>
                        <VictoryPie
                            data={[
                            { x: "Total Alloted", y: 35 },
                            { x: "Inspected", y: 40 },]}
                            style={{labels: {fontSize: 30},}}/> 
                        <p>JMI</p>
                    </span>
                </Graph>
            </div>         
        </div>
        <div class="container" style={{marginBottom:"100px", marginRight:"20px", marginTop: "100px"}}>
            <Table>
                <Tr>
                    <Th></Th>
                    <Th>Total Inspection</Th>
                    <Th>Inspection Pending</Th>
                    <Th>Field Report Submitted</Th>
                    <Th>Inspection Report Submitted</Th>
                    <Th>Report Submitted WiThin 10 Days</Th>
                    <Th>Submitted More Than 10 Days</Th>
                </Tr>
                <Tr>
                    <Td>CPRI</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>DTU</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>IIT Delhi</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
                <Tr>
                    <Td>IIT Roorkee</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </Tr>
            </Table>
        </div>
    </body>
    </>
    );
};

export default RiverReports;