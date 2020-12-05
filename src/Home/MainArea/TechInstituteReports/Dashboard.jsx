import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import StateWise from './StateWise';
import { Link } from "react-router-dom";


const Percentage= styled.div`
position: absolute;
width: 257px;
height: 205px;
left: 352px;
top: 125px;

background: url(image.png);
border-radius: 102.5px;
`;

const box1 = styled.div`
position: absolute;
width: 1140px;
height: 487px;
left: 292px;
top: 588px;

background: #F7F7F7;
`;

export const Dashboard =({ title })=>{
    return (
        <>
        <Text as="h2" marginLeft="10px">
            {title}
        </Text>
        <div>
            <nav>
                <p><Link to="tir/statewise">State Wise</Link><Route path="home/tir/statewise" component={StateWise} exact/></p>
            </nav>
        </div>
        </>
    );
};

export default Dashboard;