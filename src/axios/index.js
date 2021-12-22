import axios from "axios";

export default axios.create({
 // baseURL: window.location.protocol + "//localhost:80/api",
 // baseURL: window.location.protocol + "//localhost:9090/api",
 baseURL: true ? "https://admin.gangagpis.in/webportal" : "http://localhost:8000/webportal",

  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
    // authorization: '"77bf3949-2cdd-4d17-9ffd-01f43aabd440"'
  },
});
