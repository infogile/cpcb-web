export function loginReducer(state, action) {
  switch (action.type) {
    case "INIT_LOGIN":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.username,
        role: action.role,
        state: action.state,
        state_shortName: action.state_shortName,
        loginValidated: true,
        isLoading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loginValidated: false,
        isLoading: false,
      };
    default:
      return {
        ...state,
        loginValidated: false,
        isLoading: false,
      };
  }
}
