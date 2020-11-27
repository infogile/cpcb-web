import { loginSuccess, initLoginAction, loginError } from "../actions";
import axios from "../../axios";

export function tryLogin(username, password) {
  return (dispatch) => {
    dispatch(initLoginAction());
    axios
<<<<<<< HEAD
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
=======
      .get("/login")
      .then((res) => {
        dispatch(loginSuccess());
      })
      .catch((err) => {
        dispatch(loginSuccess());
>>>>>>> 103609f... initial commit
      });
    // setTimeout(() => dispatch(loginSuccess()), 2000);
  };
}
<<<<<<< HEAD

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
=======
>>>>>>> 103609f... initial commit
