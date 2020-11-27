export function loginReducer(state, action) {
<<<<<<< HEAD
=======
  console.log(action.type);
>>>>>>> 103609f... initial commit
  switch (action.type) {
    case "INIT_LOGIN":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
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
