import {
  initDashboardAction,
  dashboardSuccess,
  dashboardError,
} from "../actions";
import axios from "../../axios";

export function getInspections() {
  return (dispatch) => {
    dispatch(initDashboardAction());
    axios
      .post(`/inspection/myallinspection`)
      .then((res) => {
        const data = res.data;
        const rivers = ["Ganga", "Yamuna"];
        const dashboard = {};
        if (data && data.length > 0) {
          data.forEach((inspection) => {
            rivers.forEach((river) => {
              if (inspection.factory.basin.name.includes(river)) {
                if (!dashboard[river]) {
                  dashboard[river] = {
                    title: river,
                    totalAlloted: 0,
                    pending: 0,
                    fieldReportSubmitted: 0,
                    inspectionReportSubmitted: 0,
                  };
                }
                dashboard[river].totalAlloted =
                  dashboard[river].totalAlloted + 1;
                if (inspection.status === 0) {
                  dashboard[river].pending = dashboard[river].pending + 1;
                } else if (inspection.status === 1 || inspection.status === 2 || inspection.status === 3) {
                  dashboard[river].fieldReportSubmitted =
                    dashboard[river].fieldReportSubmitted + 1;
                } else if (inspection.status === 2 || inspection.status === 3) {
                  dashboard[river].inspectionReportSubmitted =
                    dashboard[river].inspectionReportSubmitted + 1;
                }
              }
            });
          });
        }
        const dashboardArray = Object.keys(dashboard).map(
          (river) => dashboard[river]
        );
        // console.log("aaaaaaaaaaaaaaaaaaaaaaaaa dashboard : ", dashboardArray);
        dispatch({ ...dashboardSuccess(), data: dashboardArray });
      })
      .catch((err) => {
        // console.log(err);
        dispatch(dashboardError());
      });
  };
}
