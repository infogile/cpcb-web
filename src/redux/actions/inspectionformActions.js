export function initInspectionformAction() {
  return {
    type: "INIT_ACTIVE_INSPECTION_FORM",
  };
}
export function inspectionformActionSuccess() {
  return {
    type: "SUBMIT_ACTIVE_INSPECTION_FORM",
  };
}
export function inspectionformActionError() {
  return {
    type: "ERROR_ACTIVE_INSPECTION_FORM",
  };
}
