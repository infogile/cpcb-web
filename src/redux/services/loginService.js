import { loginSuccess, initLoginAction, loginError } from "../actions";
import axios from "../../axios";

export function tryLogin(username, password) {
  return (dispatch) => {
    dispatch(initLoginAction());
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("username", res.data.user);
        axios.interceptors.request.use(
          (config) => {
            config.headers.authorization = res.data.token;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        dispatch({ ...loginSuccess(), username: res.data.user });
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginError());
      });
    // setTimeout(() => dispatch(loginSuccess()), 2000);
  };
}
