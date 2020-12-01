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
        if (responseData) {
          data = {
            id: responseData._id,
            code: responseData.factory.unitcode,
            name: responseData.factory.name,
            sector: responseData.factory.sector.name,
          };
        }
        dispatch({ ...fieldReportSuccess(), data });
      })
      .catch((err) => {
        dispatch(fieldReportError());
      });
  };
}
