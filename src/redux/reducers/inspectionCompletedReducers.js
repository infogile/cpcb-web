export function actionGangaReducers(
    state = { data: [], data1: [], isLoading: true },
    action
  ) {
    const { data, data1, type } = action;
    switch (type) {
      case "INIT_ACTION_GANGA":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_ACTION_GANGA":
        return {
          ...state,
          data,
          data1,
          isLoading: false,
        };
      case "ERROR_ACTION_GANGA":
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
  