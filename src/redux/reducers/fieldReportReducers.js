export function fieldReportReducers(
  state = { data: {}, isLoading: true },
  action
) {
  const { data, type } = action;
  switch (type) {
    case "INIT_FIELD_REPORT":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_FIELD_REPORT":
      return {
        ...state,
        data,
        isLoading: false,
      };
    case "ERROR_FIELD_REPORT":
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
