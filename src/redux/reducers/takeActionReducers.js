export function completedInspectionReducer(
    state = { data: [], isLoading: true },
    action
  ) {
    const { data, type } = action;
    switch (type) {
      case "INIT_COMPLETED_INSPECTION":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_COMPLETED_INSPECTION":
        return {
          ...state,
          data,
          isLoading: false,
        };
      case "ERROR_COMPLETED_INSPECTION":
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
  
  export function submitActionformReducer(
    state = { data: {}, isLoading: true },
    action
  ) {
    const { data, type } = action;
    switch (type) {
      case "INIT_SUBMIT_ACTION_FORM":
        return {
          ...state,
          isLoading: true,
        };
      case "SUCCESS_SUBMIT_ACTION_FORM":
        return {
          ...state,
          data,
          isLoading: false,
        };
      case "ERROR_SUBMIT_ACTION_FORM":
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