import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getTechInstituteReposrts } from "../../../redux/services/";


const TechInstituteReportStyled = styled.div`
  margin-top: 30px;
`;

export const TechInstituteReports = ()=>{
    const { data, isLoading } = useSelector(
        (state) => state.techInstituteReportsReducers
      );
      useEffect(() => {
        store.dispatch(getTechInstituteReports());
      }, []);
    
      if (isLoading) {
        return "loading...";
      }
    return (
        <TechInstituteReportStyled>
            <Route path="/home/tir" exact>
                <Dashboard title="Technical Institute Reports: Dashboard"/>
            </Route>
        </TechInstituteReportStyled>
    );
};
export default TechInstituteReports;