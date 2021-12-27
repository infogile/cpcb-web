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
        console.log("This is the backend data", responseData);
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
                actioncount:inspection.actions.length,
                username:
                  inspection.assignedTo &&
                  inspection.assignedTo.username.split(".")[0].toUpperCase(),
                STATE: inspection.factory.state.name,
                STATE_shortName:inspection.factory.state.short_name,  
                
              });
            }
          });
        }
        dispatch({ ...getCompletedInspectionSuccess(), data });
      })
      .catch((err) => {
        // console.log(err);
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
      // reports: formdata.actionreports,
      inspectionId : id
    };
    console.log(`/inspection/action${submit ? "/submit" : ""}${submit ? `?inspectionId=${id}` : ""}`)
    return axios
      .post(`/inspection/action${submit ? "/submit" : ""}`, form)
      .then((res) => {
        dispatch({ ...submitActionFormSuccess() });
        return res;
      })
      .catch((err) => {
        // console.log(err);
        dispatch(submitActionFormError());
      });
  };
}
