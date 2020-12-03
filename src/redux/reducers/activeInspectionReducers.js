export function activeInspectionReducers(
  state = { data: [], isLoading: true },
  action
) {
  const { data, type } = action;
  switch (type) {
    case "INIT_ACTIVE_INSPECTION":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_ACTIVE_INSPECTION":
      return {
        ...state,
        data,
        isLoading: false,
      };
    case "ERROR_ACTIVE_INSPECTION":
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
