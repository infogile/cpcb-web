import axios from "axios";

export default axios.create({
  // baseURL: window.location.protocol + "//localhost:9090/api",
  baseURL: "http://" + window.location.host + ":9090/api",
  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
});
