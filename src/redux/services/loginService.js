import { loginSuccess, initLoginAction, loginError } from "../actions";
import axios from "../../axios";

export function tryLogin(username, password) {
  return (dispatch) => {
    dispatch(initLoginAction());
    axios
      .get("/login")
      .then((res) => {
        dispatch(loginSuccess());
      })
      .catch((err) => {
        dispatch(loginSuccess());
      });
    // setTimeout(() => dispatch(loginSuccess()), 2000);
  };
}
