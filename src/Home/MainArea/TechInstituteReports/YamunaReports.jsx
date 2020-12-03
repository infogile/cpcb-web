import React, { useEffect } from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { Link } from "react-router-dom";
import { Grid } from "../../../shared/Grid";
import image from "../../../assets/img/image 2.png";
import "../../../assets/css/tech.css"


export const YamunaReports =({ title })=>{
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
                <div class="line" style={{ top: "340px", left: "45px" }}/>
            </div>
            <div class="rectangle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="col-md-8 col-sm-7 text-align-right">
                                <span class="texts" style={{ left: "210px", width: "85px" }}>Total Inspection</span>
                                <span class="texts" style={{ left: "375px", width: "85px" }}>Inspection Pending</span>
                                <span class="texts" style={{ left: "530px", width: "98px" }}>Field Report Submitted</span>
                                <span class="texts" style={{ left: "650px", width: "148px" }}>Inspection Report Submitted</span>
                                <span class="texts" style={{ left: "815px", width: "151px" }}>Report Submitted Within 10 Days</span>
                                <span class="texts" style={{ left: "990px", width: "139px" }}>Submitted More Than 10 Days</span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>


            <div class="rectangle3" style={{ left: "503px" }}>
                <p class="n">3576</p>
                <div class="line"/>
            </div>
            <div class="rectangle3" style={{ left: "666px" }}>
                <p class="n">123</p>
                <div class="line"/>
            </div>
            <div class="rectangle3" style={{ left: "820px" }}>
                <p class="n">3445</p>
                <div class="line"/>
            </div>
            <div class="rectangle3" style={{ left: "971px" }}>
                <p class="n">2222</p>
                <div class="line"/>
            </div>
            <div class="rectangle3" style={{ left: "1138px" }}>
                <p class="n">73737</p>
                <div class="line"/>
            </div>
            <div class="rectangle3" style={{ left: "1306px" }}>
                <p class="n">3333</p>
            </div>
    
        </div>
        </>
    );
};

export default YamunaReports;