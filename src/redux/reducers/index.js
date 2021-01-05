import { combineReducers } from "redux";
import { loginReducer } from "./loginReducers";
import { dashboardReducers } from "./dashboardReducers";
import { activeInspectionReducers } from "./activeInspectionReducers";
import { fieldReportReducers } from "./fieldReportReducers";
import { inspectionformReducers } from "./inspectionformReducers";
import { inspectionReportReducer } from "./inspectionReportReducers";
import { showActionReducer } from "./showActionReducers";
import {
  submitActionformReducer,
  completedInspectionReducer,
} from "./takeActionReducers";
import {headofficeDashboardReducers} from "./headofficeDashboardReducers"
import { factoryReducers } from "./factorylistReducers";
export const rootReducer = combineReducers({
  loginReducer,
  dashboardReducers,
  activeInspectionReducers,
  fieldReportReducers,
  inspectionformReducers,
  submitActionformReducer,
  completedInspectionReducer,
  inspectionReportReducer,
  showActionReducer,
  headofficeDashboardReducers,
  factoryReducers,
});
