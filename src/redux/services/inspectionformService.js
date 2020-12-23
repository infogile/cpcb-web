import {
  initInspectionformAction,
  inspectionformActionSuccess,
  inspectionformActionError,
} from "../actions";
import axios from "../../axios";

export function submitInspectionform(id, formdata) {
  return (dispatch) => {
    dispatch(initInspectionformAction());
    const form = {
      status: 2,
      teamNames: formdata.teamnames,
      finalRecommendation: formdata.finalrecommendation,
      complianceStatus: formdata.compliancestatus === "compliance",
      wasteWaterGeneration: formdata.watergeneration,
      wasteWaterDischarge: formdata.waterdischarge,
      bod: formdata.BOD,
      bodLoad: formdata.BODload,
      cod: formdata.COD,
      codLoad: formdata.CODload,
      otherChars: formdata.othercharacterestics,
      nonInstallationofOCEMS: formdata.nonInstallationofOCEMS,
      temperedOCEMS: formdata.temperedOCEMS,
      dissentBypassArrangement: formdata.dissentBypassArrangement,
      provision: formdata.provision,
      defunctETP: formdata.defunctETP,
      ZLDnorms: formdata.ZLDnorms,
      standardExceedance: formdata.standardExceedance,
      dilutionInETP: formdata.dilutionInETP,
      dissentWaterDischarge: formdata.dissentWaterDischarge,
      unauthorizedDisposal: formdata.unauthorizedDisposal,
      effluent: formdata.effluent,
      invalidCTO: formdata.invalidCTO,
      inspectionDate: formdata.inspectionDate,
      inspectionReportUploadDate: formdata.inspectionReportUploadDate,
      report: {
        files: Object.keys(formdata.files).map((file) => formdata.files[file]),
      },
    };
    return axios
      .put(`/inspection/${id}`, form)
      .then((res) => {
        dispatch({ ...inspectionformActionSuccess() });
        return res;
      })
      .catch((err) => {
        console.log(err);
        dispatch(inspectionformActionError());
      });
  };
}
