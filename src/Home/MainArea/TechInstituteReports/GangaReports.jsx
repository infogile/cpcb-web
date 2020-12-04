import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "../../../shared/Grid";
import image from "../../../assets/img/image 2.png";
import "../../../assets/css/tech.css"

const List = styled.div`
  display: block;
  margin-top: 22px;
  margin-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1000px;
  background: #f6f6f6;
  :first-child {
    margin-top: 10px;
  }
`;
const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 20px;
  :first-child {
    margin-top: 0px;
  }
`;
const ListItemHeader = styled.div`
  text-align: center;
  margin: 10px 0px;
`;
export const GangaReports =({ title })=>{
    return (
    <div>
        <header>
            <div class="container">
                <h2 class="h1">
                    <p>{title}</p>
                </h2>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="img-text-wrapper">
                    <img src={image} style={{ position: "absolute", 
                        width: "257px",
                        height: "205px",
                        left: "352px",
                        top: "225px",
                        border_radius: "102.5px",
                    }}/> 
                    <img src={image} style={{ position: "absolute", 
                        width: "257px",
                        height: "205px",
                        left: "352px",
                        top: "225px",
                        border_radius: "102.5px",
                    }}/>
                    <img src={image} style={{ position: "absolute",
                        width: "257px",
                        height: "205px",
                        left: "753px",
                        top: "225px",
                        border_radius: "102.5px", }}/>
                    <img src={image} style={{ position: "absolute",
                        width: "257px",
                        height: "205px",
                        left: "1132px",
                        top: "225px",
                        border_radius: "102.5px", }}/>
                    <img src={image} style={{ position: "absolute",
                        width: "257px",
                        height: "205px",
                        left: "352px",
                        top: "443px",
                        border_radius: "102.5px",}}/>
                    <img src={image} style={{ position: "absolute",
                        width: "257px",
                        height: "205px",
                        left: "753px",
                        top: "443px",
                        border_radius: "102.5px", }}/>
                    <img src={image} style={{ position: "absolute",
                        width: "257px",
                        height: "205px",
                        left: "1132px",
                        top: "443px",
                        border_radius: "102.5px", }}/>
                </div>
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
    );
};

export default GangaReports;