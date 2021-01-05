import {
    initRiverReportAction, 
    RiverReportSuccess, 
    RiverReportError} 
    from "../actions";
import axios from "../../axios"

export function getRiverReport(river){
    return (dispatch) => {
        dispatch(initRiverReportAction());
        axios
        .get('/inspection/allinspection')
        .then((res) => {
            const data = res.data;
            const inst = ["iitkgp", "iitbhu", "iitr", "iitd", "mnit", "nitp"]
            const institutes = [];
            if (data && data.length > 0) {
              data.forEach((inspection) => {
                  if (inspection.factory.basin.name.includes(river)) {
                    const insts=inspection.assignedTo.username.split(".")[0];
                    if (!institutes[insts]){
                        institutes[insts]={
                            insts : insts,
                            title: river,
                            totalAlloted: 0,
                            pending: 0,
                            fieldReportSubmitted: 0,
                            inspectionReportSubmitted: 0,
                        };
                    }
                    institutes[insts].totalAlloted =
                    institutes[insts].totalAlloted + 1;
                    if (inspection.status === 0) {
                        institutes[insts].pending = institutes[insts].pending + 1;
                    } else if (inspection.status === 1) {
                        institutes[insts].fieldReportSubmitted =
                        institutes[insts].fieldReportSubmitted + 1;
                    } else if (inspection.status === 2 || 3) {
                        institutes[insts].inspectionReportSubmitted =
                        institutes[insts].inspectionReportSubmitted + 1;
                    }
                  }
              });
            }
            const riverReportArray = Object.keys(institutes).map(
                (insts) => institutes[insts]
              );
              console.log(riverReportArray)
              dispatch({ ...RiverReportSuccess(), data : riverReportArray });
          })
        .catch((err) => {
            console.log(err)
            dispatch(RiverReportError());
        });
    };
}