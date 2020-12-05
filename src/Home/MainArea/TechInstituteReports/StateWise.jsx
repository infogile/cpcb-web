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
                        </div>
                    </article>
                </div>
            </body>
        </div>
    );
};

export default StateWise;