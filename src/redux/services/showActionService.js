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
        const actions = res.data.actions;
        const action = actions[actions.length - 1];
        if (action.date) {
          const iDate = new Date(action.date);
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
        const compliaceTitle = {
          0: "Non-compliace",
          1: "Compliance",
          2: "Temporarily Closed",
          3: "Permanent Closed",
        };
        if (responseData) {
          data.name = responseData.factory.name;
          data.fields = [
            {
              title: "Compliance status as per SPCB",
              value: compliaceTitle[action.complianceStatus],
            },
            {
              title: "Condition of Non-Compliance",
              value: action.complianceStatus
                ? ""
                : action.showcausenoticeStatus
                ? "Show-Cause Notice"
                : "Closure",
            },
            {
              title: "Date",
              value: actionDate,
            },
            {
              title: "Final Recommedation",
              value: action.finalRecommendation,
            },
            {
              title: "Report",
              links: true,
              value: action.reports,
            },
          ];
        }
        dispatch({ ...ShowActionSuccess(), data });
      })
      .catch((err) => {
        // console.log(err);
        dispatch(ShowActionError());
      });
  };
}
