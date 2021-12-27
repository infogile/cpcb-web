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
        sessionStorage.setItem("role", res.data.role);
        if(res.data.role == 'spcb_user'){
          sessionStorage.setItem("state", res.data.state);
          sessionStorage.setItem("state_shortName", res.data.state_shortName);
        }
        axios.interceptors.request.use(
          (config) => {
            config.headers.authorization = res.data.token;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        console.log("login data:",  res.data);
        if(res.data.role == 'spcb_user'){
          dispatch({
            ...loginSuccess(),
            username: res.data.user,
            role: res.data.role,
            state: res.data.state,
            state_shortName: res.data.state_shortName,   
          });
        }
        dispatch({
          ...loginSuccess(),
          username: res.data.user,
          role: res.data.role,   
        });
      })
      .catch((err) => {
        // console.log(err);
        dispatch(loginError());
      });
    // setTimeout(() => dispatch(loginSuccess()), 2000);
  };
}
