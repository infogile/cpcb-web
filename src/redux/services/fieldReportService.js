import {
  initFieldReportAction,
  fieldReportSuccess,
  fieldReportError,
} from "../actions";
import axios from "../../axios";

export function getFieldReport(id) {
  return (dispatch) => {
    dispatch(initFieldReportAction());
    axios
      .get(`/inspection/getfieldreport/${id}`)
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
              title: "Date of Inspection",
              value: dateOfInspection,
            },
            // {title: "Date of Commisioning", value:  '' },
            {
              title: "Unit Functional Status",
              value: responseData.fieldReport.uos,
            },
            {
              title: "Valid Consent Under Air Act",
              value: responseData.fieldReport.csac,
            },
            {
              title: "Valid Consent Unser Water Act",
              value: responseData.fieldReport.wc,
            },
            {
              title: "Valid Consent Under Hazardous waste Authorization",
              value: responseData.fieldReport.hc,
            },
            {
              title: "Product Installed Capacity",
              value: responseData.fieldReport.ipc,
            },
            { title: "Source of Water", value: responseData.fieldReport.sfwc },
            {
              title: "Online Connectivity Status",
              value: responseData.fieldReport.ocs,
            },
            {
              title: "Name of Drain/Subdrain",
              value: responseData.fieldReport.mrrname,
            },
            // {
            //   title: "Name of Tributaries",
            //   value: responseData.fieldReport.mrrname,
            // },
            // {title: "Ganga", value:  '' },
            {
              title: "Specific Observations if Any",
              value: responseData.fieldReport.specificobservations,
            },
          ];
        }
        dispatch({ ...fieldReportSuccess(), data });
      })
      .catch((err) => {
        console.log(err);
        dispatch(fieldReportError());
      });
  };
}
