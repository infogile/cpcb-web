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
          for (let x = 0; x < responseData.length; x++) {
            if (responseData[x].status > 0) {
              let temp_data = {
                id: responseData[x]._id,
                code: responseData[x].factory.unitcode,
                name: responseData[x].factory.name,
                status: responseData[x].status,
              }
              data.push(temp_data)
            }
          }
        }
        data.sort(function (a, b) {
          const a_array = a.code.split("-");
          const b_array = b.code.split("-");

          var a_num = -1, b_num = -1;

          if (a_array.length > 1) a_num = a_array[a_array.length-1];
          else a_num = a_array[0];

          // console.log(a_array);

          if (b_array.length > 1) b_num = b_array[b_array.length-1];
          else b_num = b_array[0];

          // console.log(b_array);

          return parseInt(a_num) - parseInt(b_num)
        });
        console.log("This is supposed to the sorted array : ")
        console.log(data);
        dispatch({ ...activeInspectionSuccess(), data });
      })
      .catch((err) => {
        dispatch(activeInspectionError());
      });
  };
}
