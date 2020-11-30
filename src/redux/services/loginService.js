import { loginSuccess, initLoginAction, loginError } from "../actions";
import axios from "../../axios";

export function tryLogin(username, password) {
  return (dispatch) => {
    dispatch(initLoginAction());
    axios
      .post("/api/auth/login", { username, password })
      .then((res) => {
        axios.interceptors.request.use(
          (config) => {
            console.log("set axios");
            sessionStorage.setItem("token", res.data.token);
            config.headers.authorization = res.data.token;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        dispatch(loginSuccess());
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
