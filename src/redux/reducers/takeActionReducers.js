export function submitActionTakenformReducers(
    state = { data: [], isLoading: true },
    action
  ) {
    const { data, type } = action;
    switch (type) {
      case "INIT_SUBMIT_ACTION_TAKEN_FORM":
        return {
          ...state,
          isLoading: true,
        };
      case "SUBMIT_SUBMIT_ACTION_TAKEN_FORM":
        return {
          ...state,
          data,
          isLoading: false,
        };
      case "ERROR_SUBMIT_ACTION_TAKEN_FORM":
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
  