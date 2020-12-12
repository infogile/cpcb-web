import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { dashboardReducers } from "./dashboardReducers";
import { activeInspectionReducers } from "./activeInspectionReducers";
import { fieldReportReducers } from "./fieldReportReducers";
import { inspectionformReducers } from "./inspectionformReducers";
import { actionGangaReducers } from "./actionGangaYamunaReducers";

export const rootReducer = combineReducers({
  loginReducer,
  dashboardReducers,
  activeInspectionReducers,
  fieldReportReducers,
  inspectionformReducers,
  actionGangaReducers,

});
