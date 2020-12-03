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
        <>
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
            <div class="rectangle2">
            </div>
            <div class="rectangle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="col-md-8 col-sm-7 text-align-right">
                                <span class="texts">Total Inspection</span>
                                <span class="texts">Inspection Pending</span>
                                <span class="texts">Field Report Submitted</span>
                                <span class="texts">Inspection Report Submitted</span>
                                <span class="texts">Report Submitted Within 10 Days</span>
                                <span class="texts">Submitted More Than 10 Days</span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        </>
    );
};

export default GangaReports;