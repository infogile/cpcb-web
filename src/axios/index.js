import axios from "axios";

export default axios.create({
  baseURL: window.location.protocol + "//localhost:80/api",
  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
});
