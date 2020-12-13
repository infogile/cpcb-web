import {
    initsubmitActionTakenFormAction,
    submitActionTakenFormSuccess,
    submitActionTakenFormError,
  } from "../actions";
  import axios from "../../axios";
  
  export function submitActionTakenform(id, formdata) {
    return (dispatch) => {
      dispatch(initsubmitActionTakenFormAction());
      const form = {
        status: 3,
        finalRecommendation: formdata.finalrecommendation,
        complianceStatus: formdata.compliancestatus === "compliance",
        report: {
          files: Object.keys(formdata.files).map((file) => formdata.files[file]),
        },
      };
      return axios
        .put(`/inspection/${id}`, form)
        .then((res) => {
          dispatch({ ...submitActionTakenFormSuccess() });
          return res;
        })
        .catch((err) => {
          console.log(err);
          dispatch(submitActionTakenFormError());
        });
    };
  }
  