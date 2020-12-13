import {
    initInspectionReportAction,
    InspectionReportSuccess,
    InspectionReportError,
  } from "../actions";
  import axios from "../../axios";
  
  export function getInspectionReport(id) {
    return (dispatch) => {
      dispatch(initInspectionReportAction());
      axios
        .get(`/inspection/getinspectionreport/${id}`)
        .then((res) => {
          const responseData = res.data;
          let data = {};
          let dateOfInspection = "";
          if (responseData.updatedAt) {
            const updatedAt = new Date(responseData.updatedAt);
            const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
              updatedAt
            );
            const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
              updatedAt
            );
            const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
              updatedAt
            );
            dateOfInspection = `${da}-${mo}-${ye}`;
          }
          if (responseData) {
            data.name = responseData.factory.name;
            data.status = responseData.status;
            data.teamNames = responseData.teamNames;
            data.finalRecommendation = responseData.finalRecommendation;
            data.complianceStatus = responseData.complianceStatus.toString().toUpperCase();
            data.images = responseData.fieldReport?.images || [];
            data.consent = responseData.report.files[0];
            data.inspection = responseData.report.files[1];
            data.fields = [  
              { title: "Unit Name", value: responseData.factory.name },
              { title: "Unit Sector", value: responseData.factory.sector.name },
              {
                title: "Latitude",
                value: responseData.attendance?.entrylocation?.coordinates[0],
              },
              {
                title: "Longitude",
                value: responseData.attendance?.entrylocation?.coordinates[1],
              },
              {
                title: "Point of Contact",
                value: responseData.fieldReport.poc
                  ? responseData.fieldReport.poc.map((p) => p.name).join(",")
                  : "",
              },
              {
                title: "Date of Inspection",
                value: dateOfInspection,
              },
              // {title: "Date of Commisioning", value:  '' },
              {
                title: "Unit Functional Status",
                value: responseData.fieldReport.uos,
              },
              {
                title: "Reasons for Non-operational",
                value: responseData.fieldReport.uosdetail,
              },
            ];
          }
          dispatch({ ...InspectionReportSuccess(), data });
        })
        .catch((err) => {
          console.log(err);
          dispatch(InspectionReportError());
        });
    };
  }
  