export function inspectionReportReducer(
  state = { data: {}, isLoading: true },
  action
) {
  const { data, type } = action;
  switch (type) {
    case "INIT_INSPECTION_REPORT":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_INSPECTION_REPORT":
      return {
        ...state,
        data,
        isLoading: false,
      };
    case "ERROR_INSPECTION_REPORT":
      return {
        ...state,
        isLoading: false,
      };
    case "REMOVE_INSPECTION_REPORT":
      return {
        ...state,
        data: {},
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
