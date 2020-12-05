export function dashboardReducers(
  state = {
    data: [],
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
