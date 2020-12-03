export function inspectionformReducers(
  state = { data: [], isLoading: true },
  action
) {
  const { data, type } = action;
  switch (type) {
    case "INIT_ACTIVE_INSPECTION_FORM":
      return {
        ...state,
        isLoading: true,
      };
    case "SUBMIT_ACTIVE_INSPECTION_FORM":
      return {
        ...state,
        data,
        isLoading: false,
      };
    case "ERROR_ACTIVE_INSPECTION_FORM":
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
