export function techInstituteReportsReducers(
    state = { data: {}, isLoading: true },
    action
  ) {
    const { data, type } = action;
    switch (type) {
      case "INIT_TECH_REPORT":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_TECH_REPORT":
        return {
          ...state,
          data,
          isLoading: false,
        };
      case "ERROR_TECH_REPORT":
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
  