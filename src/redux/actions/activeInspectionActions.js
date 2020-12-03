export function initActiveInspectionAction() {
  return {
    type: "INIT_ACTIVE_INSPECTION",
  };
}
export function activeInspectionSuccess() {
  return {
    type: "GET_ACTIVE_INSPECTION",
  };
}
export function activeInspectionError() {
  return {
    type: "ERROR_ACTIVE_INSPECTION",
  };
}
