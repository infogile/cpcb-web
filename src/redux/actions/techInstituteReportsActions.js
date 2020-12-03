export function initTechDashboardAction() {
    return {
      type: "INIT_TECH_DASHBAORD",
    };
  }
  export function techDashboardSuccess() {
    return {
      type: "GET_TECH_DASHBAORD",
    };
  }
  export function techDashboardError() {
    return {
      type: "ERROR_TECH_DASHBAORD",
    };
  }
  