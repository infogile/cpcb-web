import { loginSuccess, initLoginAction, loginError } from "../actions";
import axios from "../../axios";

export function tryLogin(username, password) {
  console.log("logging in");
  return (dispatch) => {
    dispatch(initLoginAction());
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        axios.interceptors.request.use(
          (config) => {
            config.headers.authorization = res.data.token;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        setTimeout(dispatch(loginSuccess()), 0);
      })
      .catch((err) => {
        dispatch(loginError());
      });
    // setTimeout(() => dispatch(loginSuccess()), 2000);
  };
}

export function doLogout() {
  sessionStorage.setItem("token", null);
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = null;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
