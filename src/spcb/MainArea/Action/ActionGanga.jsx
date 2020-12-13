import "../../../assets/css/tech.css";
import "../../../assets/css/state.css"
import { getActionGanga } from "../../../redux/services";
import React, { useEffect } from "react";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ReportLink = styled(Link)`
  text-align: center;
  padding: 10px 0px;
`;

export const GangaAtr = ({ title }) => {
    const { data, isLoading } = useSelector(
      (state) => state.actionGangaReducers
    );
    const { username } = useSelector((state) => state.loginReducer);
    useEffect(() => {
      store.dispatch(getActionGanga());
    }, []);

    if (isLoading) {
      return "loading...";

    }
    var num =1 ;
    return(
        <div class="container" style={{marginBottom:"100px", marginRight:"20px"}}>
            <table id="state" >
                <tr>
                    <th>S. No.</th>
                    <th>Unit code</th>
                    <th>Unit name</th>
                    <th>Sector</th>
                    <th>Instittute</th>
                    <th>Region</th>
                    <th>Field report</th>
                    <th>Final report</th>
                    <th>Take action</th>
                </tr>
                <tbody>
                    {data.map(({id, status, code, name, sector, region, username }) => { 
                        if(status===1){
                            return (
                            <tr>
                                <td>{num++}</td>
                                <td>{code}</td>
                                <td>{name}</td>
                                <td>{sector}</td>
                                <td>{username}</td>
                                <td>{region}</td>
                                <td><ReportLink to={`/spcb/ganga/field_report/${id}`}>
                                        View Report
                                    </ReportLink>
                                </td>
                                <td><a href="">Pending Inspection Report</a></td>
                                <td><a href="">Pending Acions</a></td>
                            </tr>
                            );
                        }
                        else if(status===2){
                            return (
                                <tr>
                                    <td>{num++}</td>
                                    <td>{code}</td>
                                    <td>{name}</td>
                                    <td>{sector}</td>
                                    <td>{username}</td>
                                    <td>{region}</td>
                                    <td><ReportLink to={`/spcb/ganga/field_report/${id}`}>
                                        View Report
                                        </ReportLink>
                                    </td>
                                    <td><ReportLink to={`/spcb/ganga/take_action/${id}`}>
                                        View Report
                                        </ReportLink>
                                    </td>
                                    <td><ReportLink to={`/spcb/ganga/take_action/${id}`}>
                                        Take Action
                                        </ReportLink>
                                    </td>
                                </tr>
                            );
                        }
                        else if(status===3){
                            return (
                                <tr>
                                    <td>{num++}</td>
                                    <td>{code}</td>
                                    <td>{name}</td>
                                    <td>{sector}</td>
                                    <td>{username}</td>
                                    <td>{region}</td>
                                    <td><ReportLink to={`/spcb/ganga/field_report/${id}`}>
                                        View Report
                                        </ReportLink>
                                    </td>
                                    <td><ReportLink to={`/spcb/ganga/field_report/${id}`}>
                                        View Inspection Report
                                        </ReportLink>
                                    </td>
                                    <td><ReportLink to={`/spcb/ganga/field_report/${id}`}>
                                        View Action
                                    </ReportLink>
                                    </td>
                                </tr>
                            );     
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default GangaAtr;