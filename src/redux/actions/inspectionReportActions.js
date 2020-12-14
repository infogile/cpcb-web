export function initInspectionReportAction() {
  return {
    type: "INIT_INSPECTION_REPORT",
  };
}
export function inspectionReportSuccess() {
  return {
    type: "GET_INSPECTION_REPORT",
  };
}
export function inspectionReportError() {
  return {
    type: "ERROR_INSPECTION_REPORT",
  };
}
