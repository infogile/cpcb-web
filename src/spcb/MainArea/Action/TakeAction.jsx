import "../../../assets/css/tech.css";
import "../../../assets/css/state.css"
import React, { useEffect } from "react";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFieldReport } from "../../../redux/services/";
import { useParams } from "react-router";

const TakeActionStyled = styled(Link)`
  text-align: center;
  padding: 10px 0px;
`;

export const TakeAction = ({ title }) => {
    const { data, isLoading } = useSelector((state) => state.fieldReportReducers);
    const params = useParams();
    useEffect(() => {
    const id = params.id;
    store.dispatch(getFieldReport(id));
    }, []);
    if (isLoading) {
        return "loading...";
    }
    return(
        <div class="container" style={{marginBottom:"100px", marginRight:"20px"}}>
            <table id="state">
                <tr><th>Details on Going Third Party Inspections</th></tr>
                <tr><td></td></tr>
            </table>
        </div>
    );
};

export default TakeAction;