export function initFieldReportAction() {
  return {
    type: "INIT_FIELD_REPORT",
  };
}
export function fieldReportSuccess() {
  return {
    type: "GET_FIELD_REPORT",
  };
}
export function fieldReportError() {
  return {
    type: "ERROR_FIELD_REPORT",
  };
}
