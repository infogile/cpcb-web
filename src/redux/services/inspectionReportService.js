import {
  initInspectionReportAction,
  inspectionReportSuccess,
  inspectionReportError,
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
        let inspectionDate = "";
        if (responseData.inspectionDate) {
          const iDate = new Date(responseData.inspectionDate);
          const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
            iDate
          );
          const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
            iDate
          );
          const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
            iDate
          );
          inspectionDate = `${da}-${mo}-${ye}`;
        }
        if (responseData) {
          data.name = responseData.factory.name;
          data.status = responseData.status;
          data.teamNames = responseData.teamNames;
          data.finalRecommendation = responseData.finalRecommendation;
          data.complianceStatus = responseData.complianceStatus
            .toString()
            .toUpperCase();
          // data.images = responseData.fieldReport?.images || [];
          data.consent = responseData.report.files[0];
          data.inspection = responseData.report.files[1];
          data.fields = [
            { title: "Unit Name", value: responseData.factory.name },
            { title: "Unit Sector", value: responseData.factory.sector.name },
            {
              title: "Member of inspection Team",
              value: responseData.teamNames,
            },
            {
              title: "Consen Copy",
              link: true,
              value:
                responseData.report?.files &&
                responseData.report.files.reduce((r, cr) => {
                  if (cr.includes("consentcopy")) {
                    return cr;
                  }
                  return r;
                }),
            },
            {
              title: "Inspection Report",
              link: true,
              value:
                responseData.report?.files &&
                responseData.report.files.reduce((r, cr) => {
                  if (cr.includes("inspectionreport")) {
                    return cr;
                  }
                  return r;
                }),
            },
            {
              title: "Air consent",
              link: true,
              value:
                responseData.report?.files &&
                responseData.report.files.reduce((r, cr) => {
                  if (cr.includes("airconsent")) {
                    return cr;
                  }
                  return r;
                }),
            },
            {
              title: "Water Consent",
              link: true,
              value:
                responseData.report?.files &&
                responseData.report.files.reduce((r, cr) => {
                  if (cr.includes("waterconsent")) {
                    return cr;
                  }
                  return r;
                }),
            },
            {
              title: "CGWA NOC",
              link: true,
              value:
                responseData.report?.files &&
                responseData.report.files.reduce((r, cr) => {
                  if (cr.includes("cgwaNoc")) {
                    return cr;
                  }
                  return r;
                }),
            },
            {
              title: "Hazardous Consent",
              link: true,
              value:
                responseData.report?.files &&
                responseData.report.files.reduce((r, cr) => {
                  if (cr.includes("hazardousconsent")) {
                    return cr;
                  }
                  return r;
                }),
            },
            {
              title: "Final Recommedation",
              value: responseData.finalRecommendation,
            },
            {
              title: "Compliance status as per discharge norms",
              value: responseData.complianceStatus
                ? "compliance"
                : "non-compliance",
            },
            {
              title: "Waste water generation",
              value: responseData.wasteWaterGeneration,
            },
            {
              title: "Waste water discharge",
              value: responseData.wasteWaterDischarge,
            },
            {
              title: "BOD",
              value: responseData.bod,
            },
            {
              title: "BOD Load",
              value: responseData.bodLoad,
            },
            {
              title: "COD",
              value: responseData.cod,
            },
            {
              title: "COD Load",
              value: responseData.codLoad,
            },
            {
              title: "Other characterestics",
              value: responseData.otherChars,
            },
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
              value: inspectionDate,
            },
          ];
        }
        dispatch({ ...inspectionReportSuccess(), data });
      })
      .catch((err) => {
        console.log(err);
        dispatch(inspectionReportError());
      });
  };
}
