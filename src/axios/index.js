import axios from "axios";

export default axios.create({
  // baseURL: window.location.protocol + "//localhost:9090/api",
  baseURL: window.location.protocol + "//" + window.location.host + ":9090/api",
  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
});
