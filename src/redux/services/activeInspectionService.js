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
          console.log("response data : ", responseData);
          for (let x = 0; x < responseData.length; x++) {
            console.log("inspection : ", responseData[x]);
            if (responseData[x].status > 0) {
              let temp_data = {
                id: responseData[x]._id,
                code: responseData[x].factory.unitcode,
                name: responseData[x].factory.name,
              }
              data.push(temp_data)
            }
          }
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
