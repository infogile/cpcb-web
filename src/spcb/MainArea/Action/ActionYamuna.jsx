import "../../../assets/css/tech.css";
import { Link } from "react-router-dom";
import "../../../assets/css/state.css"
import { getActionGanga } from "../../../redux/services";
import React, { useEffect } from "react";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";
import NoData from "./NoData";

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  background: white;
  box-shadow: 0px 2px 5px 0px #17171747;
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 20px;
  :first-child {
    margin-top: 0px;
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

const UnitCode = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const UnitName = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const ReportLink = styled(Link)`
  text-align: center;
  padding: 10px 0px;
`;

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


export const YamunaAtr = ({title}) => {

    const { data1, isLoading } = useSelector(
        (state) => state.actionGangaReducers
      );
      const { username } = useSelector((state) => state.loginReducer);
      useEffect(() => {
        store.dispatch(getActionGanga());
      }, []);
  
      if (isLoading) {
        return "loading...";
      }
      if(data1.length===0)
      {
          <Route exact path="/spcb/yamuna">
            <NoData />
          </Route>
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
                      <th>Institute</th>
                      <th>Region</th>
                      <th>Field report</th>
                      <th>Final report</th>
                      <th>Take action</th>
                  </tr>
                  <tbody>
                      {data1.map(({id, status, code, name, sector, region, username }) => {
                          if(status===1){
                              return (
                              <tr>
                                  <td>{num++}</td>
                                  <td>{code}</td>
                                  <td>{name}</td>
                                  <td>{sector}</td>
                                  <td>{username}</td>
                                  <td>{region}</td>
                                  <td><ReportLink to={`/spcb/yamuna/field_report/${id}`}>
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
                                      <td><ReportLink to={`/spcb/yamuna/field_report/${id}`}>
                                          View Report
                                          </ReportLink>
                                      </td>
                                      <td><ReportLink to={`/spcb/yamuna/take_action/${id}`}>
                                          View Report
                                          </ReportLink>
                                      </td>
                                      <td><ReportLink to={`/spcb/yamuna/take_action/${id}`}>
                                          View Report
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
                                      <td><ReportLink to={`/spcb/yamuna/field_report/${id}`}>
                                          View Report
                                          </ReportLink>
                                      </td>
                                      <td><ReportLink to={`/spcb/yamuna/field_report/${id}`}>
                                          View Inspection Report
                                          </ReportLink>
                                      </td>
                                      <td><ReportLink to={`/spcb/yamuna/field_report/${id}`}>
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

export default YamunaAtr;