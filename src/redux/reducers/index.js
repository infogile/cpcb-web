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
import {headofficeDashboardReducers} from "./headofficeDashboardReducers";
import { riverReportReducers } from "./riverReportReducers";
import { sectorWiseReducers } from "./sectorWiseReducers";
import { factoryReducers } from "./factorylistReducers";
import { stateWiseReducers } from "./stateWiseReducers";
import { complianceStatusReducers } from "./complianceStatusReducers";

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
  riverReportReducers,
  sectorWiseReducers,
  factoryReducers,
  stateWiseReducers,
  complianceStatusReducers,
});
