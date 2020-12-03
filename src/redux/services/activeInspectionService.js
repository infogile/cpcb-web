import {
  initActiveInspectionAction,
  activeInspectionSuccess,
  activeInspectionError,
} from "../actions";
import axios from "../../axios";

export function getActiveInspections() {
  return (dispatch) => {
    dispatch(initActiveInspectionAction());
    axios
      .post(`/inspection/myactiveinspection`)
      .then((res) => {
        const responseData = res.data;
        let data = [];
        if (responseData) {
          data = responseData.map((inspection) => ({
            id: inspection._id,
            code: inspection.factory.unitcode,
            name: inspection.factory.name,
          }));
        }
        dispatch({ ...activeInspectionSuccess(), data });
      })
      .catch((err) => {
        dispatch(activeInspectionError());
      });
  };
}
