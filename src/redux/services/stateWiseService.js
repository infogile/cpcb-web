import {
    initStateWiseAction, 
    StateWiseSuccess, 
    StateWiseError } 
    from "../actions";
import axios from "../../axios"

export function getStateWise(river){
    return (dispatch) => {
        dispatch(initStateWiseAction());
        axios
        .get('/inspection/allinspection')
        .then((res) => {
            const data = res.data;
            const states = [];
            // console.log("getStateWise Data : ", data);
            if (data && data.length > 0) {
              data.forEach((inspection) => {
                  if (inspection.factory.basin.name.includes(river)) {
                    const state=inspection.factory.district.state.name;
                    if (!states[state]){
                        states[state]={
                            state : state,
                            title: river,
                            totalAlloted: 0,
                            pending: 0,
                            fieldReportSubmitted: 0,
                            inspectionReportSubmitted: 0,
                            morethan15days: 0,
                            lessthan15days: 0,
                            days: 0,
                        };
                    }
                    states[state].totalAlloted =
                    states[state].totalAlloted + 1;
                    if (inspection.status === 0) {
                        states[state].pending = states[state].pending + 1;
                    } else if (inspection.status === 1) {
                        states[state].fieldReportSubmitted =
                        states[state].fieldReportSubmitted + 1;
                    } else if (inspection.status === 2 || inspection.status === 3) {
                        states[state].inspectionReportSubmitted =
                        states[state].inspectionReportSubmitted + 1;

                        if(inspection.status >= 2){
                            var startDate = Date.parse(inspection.inspectionDate && inspection.inspectionDate.split("T")[0]);
                            var endDate = Date.parse(inspection.inspectionReportUploadDate && inspection.inspectionReportUploadDate.split("T")[0]);
                            var timeDiff = endDate - startDate;
                            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                            if (days>15){
                                states[state].morethan15days =
                                states[state].morethan15days + 1;
                            }else if(days>=0 && days<=15){
                                states[state].lessthan15days =
                                states[state].lessthan15days + 1;
                            }

                        }
                    }
                  }
              });
            }
            const riverReportArray = Object.keys(states).map(
                (state) => states[state]
              );
                // console.log("RiverReportArray : ", riverReportArray)
            
              dispatch({ ...StateWiseSuccess(), data : riverReportArray });
          })
        .catch((err) => {
            // console.log("riverreportarrayaaaaaaaaaaaa : ", err)
            dispatch(StateWiseError());
        });
    };
}