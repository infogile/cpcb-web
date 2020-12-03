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
        const dashboard = {};
        if (data && data.length > 0) {
          data.forEach((inspection) => {
            if (inspection.factory.basin.name.includes("ganga")) {
              if (!dashboard.ganga) {
                dashboard.ganga = {
                  totalAlloted: 0,
                  pending: 0,
                  fieldReportSubmitted: 0,
                  inspectionReportSubmitted: 0,
                };
              }
              dashboard.ganga.totalAlloted = dashboard.ganga.totalAlloted + 1;
              if (inspection.status === 0) {
                dashboard.ganga.pending = dashboard.ganga.pending + 1;
              } else if (inspection.status === 1) {
                dashboard.ganga.fieldReportSubmitted =
                  dashboard.ganga.fieldReportSubmitted + 1;
              } else if (inspection.status === 2 || 3) {
                dashboard.ganga.inspectionReportSubmitted =
                  dashboard.ganga.inspectionReportSubmitted + 1;
              }
            }
            else if (inspection.factory.basin.name.includes("yamuna")) {
              if (!dashboard.yamuna) {
                dashboard.yamuna = {
                  totalAlloted: 0,
                  pending: 0,
                  fieldReportSubmitted: 0,
                  inspectionReportSubmitted: 0,
                };
              }
              dashboard.yamuna.totalAlloted = dashboard.yamuna.totalAlloted + 1;
              if (inspection.status === 0) {
                dashboard.yamuna.pending = dashboard.yamuna.pending + 1;
              } else if (inspection.status === 1) {
                dashboard.yamuna.fieldReportSubmitted =
                  dashboard.yamuna.fieldReportSubmitted + 1;
              } else if (inspection.status === 2 || 3) {
                dashboard.yamuna.inspectionReportSubmitted =
                  dashboard.yamuna.inspectionReportSubmitted + 1;
              }
            }
          });
        } else {
          dashboard.ganga = {
            totalAlloted: 0,
            pending: 0,
            fieldReportSubmitted: 0,
            inspectionReportSubmitted: 0,
          };
          dashboard.yamuna = {
            totalAlloted: 0,
            pending: 0,
            fieldReportSubmitted: 0,
            inspectionReportSubmitted: 0,
          };
        }
        dispatch({ ...dashboardSuccess(), data: dashboard });
      })
      .catch((err) => {
        dispatch(dashboardError());
      });
  };
}
