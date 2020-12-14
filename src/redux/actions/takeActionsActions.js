export function initCompletedInspectionAction() {
  return {
    type: "INIT_COMPLETED_INSPECTION",
  };
}
export function getCompletedInspectionSuccess() {
  return {
    type: "GET_COMPLETED_INSPECTION",
  };
}
export function getCompletedInspectionError() {
  return {
    type: "ERROR_COMPLETED_INSPECTION",
  };
}

export function initSubmitActionFormAction() {
  return {
    type: "INIT_SUBMIT_ACTION_FORM",
  };
}
export function submitActionFormSuccess() {
  return {
    type: "SUCCESS_SUBMIT_ACTION_FORM",
  };
}
export function submitActionFormError() {
  return {
    type: "ERROR_SUBMIT_ACTION_FORM",
  };
}
