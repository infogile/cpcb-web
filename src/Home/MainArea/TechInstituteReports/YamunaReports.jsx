import React from "react";
import styled from "styled-components";
import "../../../assets/css/tech.css"
import { VictoryPie } from 'victory';


export const YamunaReports =({ title })=>{
    return (
    <body id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
    <div>
        <header>
            <div class="container">
                <h2 class="h1">
                    <p>{title}</p>
                </h2>
            </div>
        </header>
        <div class="container">
                <div class="img-text-wrapper">
                    <span class="graph">
                        <VictoryPie
                            data={[
                            { x: "Ganga", y: 35 },
                            { x: "Yamuna", y: 40 },]}
                           style={{labels: {fontSize: 80},}}/>
                        <p>CPRI</p>
                    </span>
                    <span class="graph">
                        <VictoryPie
                            data={[
                            { x: "Ganga", y: 35 },
                            { x: "Yamuna", y: 40 },]}
                            style={{labels: {fontSize: 80},}}/> 
                        <p>DTU</p>
                    </span>
                    <span class="graph">
                        <VictoryPie
                            data={[
                            { x: "Ganga", y: 35 },
                            { x: "Yamuna", y: 40 },]}
                             style={{labels: {fontSize:80},}}/> 
                        <p>IIT Delhi</p>
                    </span>
                    <span class="graph">
                        <VictoryPie
                            data={[
                            { x: "Ganga", y: 35 },
                            { x: "Yamuna", y: 40 },]}
                            style={{labels: {fontSize: 80},}}/> 
                        <p>IIT Roorkee</p>
                    </span>
                    <span class="graph">
                        <VictoryPie
                            data={[
                            { x: "Ganga", y: 35 },
                            { x: "Yamuna", y: 40 },]}
                           style={{labels: {fontSize: 80},}}/> 
                        <p>NEERI</p>
                    </span>
                    <span class="graph">
                        <VictoryPie
                            data={[
                            { x: "Ganga", y: 35 },
                            { x: "Yamuna", y: 40 },]}
                            style={{labels: {fontSize: 80},}}/> 
                        <p>JMI</p>
                    </span>
                </div>
        </div>
        <div class="container">
            <div class="rectangle">
            </div>
            <div class="rectangle2">
                <div>
                    <table>
                        <tr>
                            <td><span class="texts">Total Inspection</span><p class="line"></p></td>
                            <td><span class="texts">Inspection Pending</span><p class="line"></p></td>
                            <td><span class="texts">Field Report Submitted</span><p class="line"></p></td>
                            <td><span class="texts">Inspection Report Submitted</span><p class="line"></p></td>
                            <td><span class="texts">Report Submitted Within 10 Days</span><p class="line"></p></td>
                            <td><span class="texts">Submitted More Than 10 Days</span><p class="line"></p></td>
                        
                        </tr>
                    </table>
                </div>
                <div class="p1">
                    <table>
                        <tr ><td>CPRI</td></tr>
                        <tr ><td>DTU</td></tr>
                        <tr ><td>IIT Delhi</td></tr>
                        <tr ><td>IIT Roorkee</td></tr>
                        <tr ><td>CPRI</td></tr>
                        <tr ><td>NEERI</td></tr>
                        <tr ><td>JMI</td></tr>
                    </table>
                </div>
                <div class="row">
                    <div class="rectangle3" style={{ left: "210px" }}>
                        <p class="n">3576</p>
                    </div>
                    <div class="rectangle3" style={{ left: "375px" }}>
                        <p class="n">123</p>
                    </div>
                    <div class="rectangle3" style={{ left: "530px" }}>
                        <p class="n">3445</p>
                    </div>
                    <div class="rectangle3" style={{ left: "670px" }}>
                        <p class="n">2222</p>
                    </div>
                    <div class="rectangle3" style={{ left: "815px" }}>
                        <p class="n">73737</p>
                    </div>
                    <div class="rectangle3" style={{ left: "990px" }}>
                        <p class="n">3333</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    );
};

export default YamunaReports;