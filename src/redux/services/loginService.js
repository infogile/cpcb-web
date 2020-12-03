import { loginSuccess, initLoginAction, loginError } from "../actions";
import axios from "../../axios";

export function tryLogin(username, password) {
  return (dispatch) => {
    dispatch(initLoginAction());
    // console.log(axios);
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
        dispatch({ ...loginSuccess(), username: res.data.user });
      })
      .catch((err) => {
        dispatch(loginError());
        console.log(err);
      });
    // setTimeout(() => dispatch(loginSuccess()), 2000);
  };
}
