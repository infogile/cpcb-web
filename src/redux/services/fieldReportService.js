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
      .get(`/inspection/getfieldreport?inspectionId=${id}`)
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
          // console.log(responseData)
          data.name = responseData.factory.name;
          data.status = responseData.status;
          data.updatedAt = responseData.updatedAt;
          data.images = responseData.fieldReport?.images || [];
          data.fields = [
            {
              title: "Unit Name",
              value: `${responseData.factory.name} (${responseData.factory.unitcode})`,
            },
            { title: "Unit Sector", value: responseData.factory.sector.name },
            {
              title: "Latitude",
              value: responseData.attendance?.entrylocation?.lat,
            },
            {
              title: "Longitude",
              value: responseData.attendance?.entrylocation?.long,
            },
            {
              title: "Contacted Person",
              value: responseData.fieldReport.poc
                ? responseData.fieldReport.poc.name + ", " + responseData.fieldReport.poc.number + ", " + responseData.fieldReport.poc.email
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
            {
              title: "ETP Operational Status",
              value: responseData.fieldReport.etpos,
            },
            {
              title: "ETP Status Details",
              value: responseData.fieldReport.etposdetail,
            },
            {
              title: "Present Production of Previous Day",
              value: responseData.fieldReport.ppopd,
            },
            {
              title: "Fresh Water Withdrawal Previous Day based on Flow Meter",
              value: responseData.fieldReport.fwwpdbofm,
            },
            {
              title: "Status of NOC from CGWA",
              value: responseData.fieldReport.sonfc,
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
              title: "Valid Consent Under CGWA",
              value: responseData.fieldReport.cc,
            },
            {
              title: "Product Installed Capacity",
              value: responseData.fieldReport.ipc,
            },
            {
              title: "Consented Production Capacity",
              value: responseData.fieldReport.cpc,
            },
            { title: "Source of Water", value: responseData.fieldReport.sfwc },
            {
              title: "Reason for Other Water Source",
              value: responseData.fieldReport.sfwcdetail,
            },
            {
              title: "Flowmeter Installed at Borewell",
              value: responseData.fieldReport.fib,
            },
            {
              title: "Details for Flowmeter Installed at Borewell",
              value: responseData.fieldReport.fibdetail,
            },
            {
              title: "Flowmeter Installed at ETP Inlet",
              value: responseData.fieldReport.fietpinlet,
            },
            {
              title: "Details for Flowmeter Installed at ETP Inlet",
              value: responseData.fieldReport.fietpinletdetail,
            },
            {
              title: "Flowmeter Installed at ETP Outlet",
              value: responseData.fieldReport.fietpoutlent,
            },
            {
              title: "Details for Flowmeter Installed at ETP Outlet",
              value: responseData.fieldReport.fietpoutlentdetail,
            },

            {
              title: "Flow Meter at ETP Outlet Current day Flow (KLD)",
              value: responseData.fieldReport.fmetpoutletcdf,
            },
            {
              title: "Flow Meter at ETP Outlet Previous day Flow (KLD)",
              value: responseData.fieldReport.fmetpoutletpdf,
            },
            {
              title: "OCEMS Status",
              value: responseData.fieldReport.os,
            },
            {
              title: "Details for OCEMS Status",
              value: responseData.fieldReport.osdetail,
            },
            {
              title: "Separate Energy for ETP",
              value: responseData.fieldReport.semfetp,
            },
            {
              title: "Reading of Seprate Energy for ETP",
              value: responseData.fieldReport.semfer,
            },
            {
              title: "Online Connectivity Status",
              value: responseData.fieldReport.ocs,
            },
            {
              title: "Mode to Reach River",
              value: responseData.fieldReport.mrr,
            },
            {
              title: "Mode to Reach River",
              value: responseData.fieldReport.mrr,
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
        // console.log("dipatch in fieldreportservice : ", data);
        dispatch({ ...fieldReportSuccess(), data });
      })
      .catch((err) => {
        // console.log(err);
        // window.location.reload();
        dispatch(fieldReportError());
      });
  };
}
