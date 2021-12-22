import {
  initActiveInspectionAction,
  activeInspectionSuccess,
  activeInspectionError,
} from "../actions";
import axios from "../../axios";

export function getActiveInspections() {
  return (dispatch) => {
    dispatch(initActiveInspectionAction());
    console.log("aaaaaaaaaaaaaa ! we just tried fetching shit")
    axios
      .post(`/inspection/myactiveinspection`)
      .then((res) => {
        const responseData = res.data;
        let data = [];
        if (responseData) {
          console.log("hehe this is data");
          data = responseData.map((inspection) => ({
            id: inspection._id,
            code: inspection.factory.unitcode,
            name: inspection.factory.name,
          }));
        }
        console.log(data)
        dispatch({ ...activeInspectionSuccess(), data });
      })
      .catch((err) => {
        console.log("This is the error : ", err);
        console.log("Aaaaaaaaaaaaaaaaaaaaaaaaa error");
        dispatch(activeInspectionError());
      });
  };
}
