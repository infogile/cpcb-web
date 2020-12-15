export function showActionReducer(
    state = { data: {}, isLoading: true },
    action
  ) {
    const { data, type } = action;
    switch (type) {
      case "INIT_SHOW_ACTION":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_SHOW_ACTION":
        return {
          ...state,
          data,
          isLoading: false,
        };
      case "ERROR_SHOW_ACTION":
        return {
          ...state,
          isLoading: false,
        };
      default:
        return {
          ...state,
        };
    };
  }