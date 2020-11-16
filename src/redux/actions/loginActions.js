export function initLoginAction() {
  return {
    type: "INIT_LOGIN",
  };
}
export function loginSuccess() {
  return {
    type: "LOGIN_SUCCESS",
  };
}
export function loginError() {
  return {
    type: "LOGIN_ERROR",
  };
}
