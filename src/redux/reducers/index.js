import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { dashboardReducers } from "./dashboardReducers";
import { activeInspectionReducers } from "./activeInspectionReducers";
import { fieldReportReducers } from "./fieldReportReducers";
import { techInstituteReportsReducers } from "./techInstituteReportsReducers";

export const rootReducer = combineReducers({
  loginReducer,
  dashboardReducers,
  activeInspectionReducers,
  fieldReportReducers,
  techInstituteReportsReducers,
});
