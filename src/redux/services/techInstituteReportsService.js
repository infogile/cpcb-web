import {
    initTechDashboardAction,
    techDashboardSuccess,
    techDashboardError,
  } from "../actions";
  import axios from "../../axios";
  
  export function getTechInstituteReports() {
    return (dispatch) => {
      dispatch(initTechDashboardAction());
      axios
        .post(`/inspection/techinstitutereports`)
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
          dispatch({ ...techDashboardSuccess(), data });
        })
        .catch((err) => {
          dispatch(techDashboardError());
        });
    };
  }
  