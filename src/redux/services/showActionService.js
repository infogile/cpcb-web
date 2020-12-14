import {
    initShowActionAction,
    ShowActionSuccess,
    ShowActionError,
  } from "../actions";
  import axios from "../../axios";
  
  export function getShowAction(id) {
    return (dispatch) => {
      dispatch(initShowActionAction());
      axios
        .get(`/inspection/getinspectionreport/${id}`)
        .then((res) => {
          const responseData = res.data;
          let data = {};
          let actionDate = "";
          if (responseData.action.date) {
            const iDate = new Date(responseData.action.date);
            const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
              iDate
            );
            const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(
              iDate
            );
            const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
              iDate
            );
            actionDate = `${da}-${mo}-${ye}`;
          }
          if (responseData) {
            data.name = responseData.factory.name;
            data.fields = [
                {
                    title: "Compliance status as per discharge norms",
                    value: responseData.action.complianceStatus
                      ? "compliance"
                      : "non-compliance",
                },
                {
                    title: "Date",
                    value: actionDate,
                },
                {
                    title: "Final Recommedation",
                    value: responseData.action.finalRecommendation,
                },
                {
                    title: "Report",
                    link: true,
                    value: responseData.action.report,
                }
            ];
          }
          dispatch({ ...ShowActionSuccess(), data });
        })
        .catch((err) => {
          console.log(err);
          dispatch(ShowActionError());
        });
    };
  }