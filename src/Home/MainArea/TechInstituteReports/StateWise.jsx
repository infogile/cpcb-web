import React, { useEffect } from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { Link } from "react-router-dom";
import { Grid } from "../../../shared/Grid";
import image from "../../../assets/img/image 2.png";
import "../../../assets/css/state.css"


export const StateWise =({ title })=>{
    return (
        <div>
            <header>
                <div class="container">
                    <h2 class="h1">
                        <p>{title}</p>
                    </h2>
                </div>
            </header>
            <body>
                <div>
                    <article class="sc-fznMAR iaBNQP">
                        <div class="fVgyOA">
                            <div class="food">
                                <div class="f1"> 
                                    <p class="style">Food and Beverages</p><div class="rect"><p>Export</p></div>
                                </div>
                            </div>
                            <div class="tab">
                                <table id="state">
                                    <tr>
                                        <th>S. NO.</th>
                                        <th>UNIT CODE</th>
                                        <th>UNIT NAME</th>
                                        <th>REGION</th>
                                        <th>SECTOR</th>
                                        <th>INSPECTION DATE</th>
                                        <th>FIELD REPORT</th>
                                        <th>FINAL REPORT</th>
                                    </tr>
                                    <tr>
                                        <td>Alfreds Futterkiste</td>
                                        <td>Maria Anders</td>
                                        <td>Germany</td>
                                        <td>abc</td>
                                        <td>segsedgf</td>
                                        <td></td>
                                        <td><a href="">View</a></td>
                                        <td><a href="">View</a></td>
                                    </tr>
                                    <tr>
                                        <td>Berglunds snabbköp</td>
                                        <td>Christina Berglund</td>
                                        <td>Sweden</td>
                                    </tr>
                                    <tr>
                                        <td>Centro comercial Moctezuma</td>
                                        <td>Francisco Chang</td>
                                        <td>Mexico</td>
                                    </tr>
                                    <tr>
                                        <td>Ernst Handel</td>
                                        <td>Roland Mendel</td>
                                        <td>Austria</td>
                                    </tr>
                                    <tr>
                                        <td>Island Trading</td>
                                        <td>Helen Bennett</td>
                                        <td>UK</td>
                                    </tr>
                                    <tr>
                                        <td>Königlich Essen</td>
                                        <td>Philip Cramer</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Laughing Bacchus Winecellars</td>
                                        <td>Yoshi Tannamuri</td>
                                        <td>Canada</td>
                                        </tr>
                                    <tr>
                                        <td>Magazzini Alimentari Riuniti</td>
                                        <td>Giovanni Rovelli</td>
                                        <td>Italy</td>
                                    </tr>
                                    <tr>
                                        <td>North/South</td>
                                        <td>Simon Crowther</td>
                                        <td>UK</td>
                                    </tr>
                                    <tr>
                                        <td>Paris spécialités</td>
                                        <td>Marie Bertrand</td>
                                        <td>France</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </article>
                    <div class="a">
                            <div class="tan" style={{background: "#D7F9DB"}}>
                                <p>Tannery</p>
                            </div>
                            <div class="tan" style={{background: "#E3CFFF"}}>
                                <p>Sugar</p>
                            </div>
                            <div class="tan" style={{background: "#F7D0AC"}}>
                                <p>Pharmaceutical</p>
                            </div>
                            <div class="tan" style={{background: "#BBEBFB"}}>
                                <p>Food, Dairy and Beverages</p>
                            </div>
                        </div>
                </div>
            </body>
        </div>
    );
};

export default StateWise;