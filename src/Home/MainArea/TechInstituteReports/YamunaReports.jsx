import React from "react";
import styled from "styled-components";
import "../../../assets/css/tech.css";
import { VictoryPie } from 'victory';
import { Link } from "react-router-dom";

export const YamunaReports =({ title })=>{
    return (
        <>
    <body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50" left="100px">
        <header>
            <div class="head">
                <h3 style={{ fontSize: "30px", fontFamily:"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"}}>
                    <strong>{title}</strong>
                </h3>
                <a href="/home/tir/yamuna/statewise" class="statew">State Wise Report</a>
            </div>
        </header>
        <div class="container">
            <div class="img-text-wrapper">
                <span class="graph">
                    <VictoryPie
                        data={[
                        { x: "Total Alloted", y: 35 },
                        { x: "Inspected", y: 40 },]}
                    style={{labels: {fontSize: 50},}}/>
                    <p>CPRI</p>
                </span>
                <span class="graph">
                    <VictoryPie
                        data={[
                        { x: "Total Alloted", y: 35 },
                        { x: "Inspected", y: 40 },]}
                        style={{labels: {fontSize: 50},}}/> 
                    <p>DTU</p>
                </span>
                <span class="graph">
                    <VictoryPie
                        data={[
                        { x: "Total Alloted", y: 35 },
                        { x: "Inspected", y: 40 },]}
                        style={{labels: {fontSize:50},}}/> 
                    <p>IIT Delhi</p>
                </span>
                <span class="graph">
                    <VictoryPie
                        data={[
                        { x: "Total Alloted", y: 35 },
                        { x: "Inspected", y: 40 },]}
                        style={{labels: {fontSize: 50},}}/> 
                    <p>IIT Roorkee</p>
                </span>
                <span class="graph">
                    <VictoryPie
                        data={[
                        { x: "Total Alloted", y: 35 },
                        { x: "Inspected", y: 40 },]}
                    style={{labels: {fontSize: 50},}}/> 
                    <p>NEERI</p>
                </span>
                <span class="graph">
                    <VictoryPie
                        data={[
                        { x: "Total Alloted", y: 35 },
                        { x: "Inspected", y: 40 },]}
                        style={{labels: {fontSize: 50},}}/> 
                    <p>JMI</p>
                </span>
            </div>
        </div>
        <div class="container" style={{marginBottom:"100px", marginRight:"20px"}}>
            <table id="state" >
                <tr>
                    <th></th>
                    <th>Total Inspection</th>
                    <th>Inspection Pending</th>
                    <th>Field Report Submitted</th>
                    <th>Inspection Report Submitted</th>
                    <th>Report Submitted Within 10 Days </th>
                    <th>Submitted More Than 10 Days</th>
                </tr>
                <tr>
                    <td>CPRI</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>DTU</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>IIT Delhi</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>IIT Roorkee</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </body>
    </>
    );
};

export default YamunaReports;