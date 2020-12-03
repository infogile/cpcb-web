export function dashboardReducers(
  state = {
    data: {
      ganga: {
        totalAlloted: 0,
        pending: 0,
        fieldReportSubmitted: 0,
        inspectionReportSubmitted: 0,
      },
      yamuna: {
        totalAlloted: 0,
        pending: 0,
        fieldReportSubmitted: 0,
        inspectionReportSubmitted: 0,
      },
    },
    isLoading: true,
  },
  action
) {
  const { data, type } = action;
  switch (type) {
    case "INIT_DASHBAORD":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_DASHBAORD":
      return {
        ...state,
        data,
        isLoading: false,
      };
    case "ERROR_DASHBAORD":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
