import axios from "axios";

export default axios.create({
  // baseURL: window.location.protocol + "//localhost:9090/api",
  baseURL: "http://" + window.location.host + "/api",
  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
});
