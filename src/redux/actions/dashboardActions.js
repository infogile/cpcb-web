export function initDashboardAction() {
  return {
    type: "INIT_DASHBAORD",
  };
}
export function dashboardSuccess() {
  return {
    type: "GET_DASHBAORD",
  };
}
export function dashboardError() {
  return {
    type: "ERROR_DASHBAORD",
  };
}
