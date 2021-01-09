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
                            morethan15days: 0,
                            lessthan15days: 0,
                            days: 0,
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

                        if(inspection.status >= 2){
                            var startDate = Date.parse(inspection.inspectionDate && inspection.inspectionDate.split("T")[0]);
                            var endDate = Date.parse(inspection.inspectionReportUploadDate && inspection.inspectionReportUploadDate.split("T")[0]);
                            var timeDiff = endDate - startDate;
                            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                            if (days>15){
                                institutes[insts].morethan15days =
                                institutes[insts].morethan15days + 1;
                            }else if(days>=0 && days<=15){
                                institutes[insts].lessthan15days =
                                institutes[insts].lessthan15days + 1;
                            }

                        }
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