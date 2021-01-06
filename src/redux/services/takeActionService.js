import {
  initCompletedInspectionAction,
  getCompletedInspectionSuccess,
  getCompletedInspectionError,
  initSubmitActionFormAction,
  submitActionFormError,
  submitActionFormSuccess,
} from "../actions";
import axios from "../../axios";

export function getCompletedInspection(river_name) {
  return (dispatch, getState) => {
    dispatch(initCompletedInspectionAction());
    axios
      .get(`inspection/mycompletedinspections`)
      .then((res) => {
        const responseData = res.data;
        let data = [];
        if (responseData && responseData.length > 0) {
          responseData.forEach((inspection) => {
            if (inspection.factory.basin.name.includes(river_name)) {
              data.push({
                id: inspection._id,
                status: inspection.status,
                code: inspection.factory.unitcode,
                name: inspection.factory.name,
                basin: inspection.factory.basin.name,
                sector: inspection.factory.sector.name,
                region: inspection.factory.region,
                username:
                  inspection.assignedTo &&
                  inspection.assignedTo.username.split(".")[0].toUpperCase(),
              });
            }
          });
        }
        dispatch({ ...getCompletedInspectionSuccess(), data });
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCompletedInspectionError());
      });
  };
}

export function submitActionTakenform(id, formdata, submit = false) {
  return (dispatch) => {
    dispatch(initSubmitActionFormAction());
    const form = {
      complianceStatus: formdata.compliancestatus,
      showcausenoticeStatus:
        formdata.showcausenoticestatus === "showcausenotice",
      date: formdata.date,
      finalRecommendation: formdata.finalrecommendation,
      reports: formdata.actionreports,
    };
    return axios
      .put(`/inspection/action/${id}${submit ? "/submit" : ""}`, form)
      .then((res) => {
        dispatch({ ...submitActionFormSuccess() });
        return res;
      })
      .catch((err) => {
        console.log(err);
        dispatch(submitActionFormError());
      });
  };
}
