import axios from "axios";

export default axios.create({
 // baseURL: window.location.protocol + "//localhost:80/api",
 // baseURL: window.location.protocol + "//localhost:9090/api",
 baseURL: true ? "https://admin.gangagpis.in/webportal" : "http://localhost:8000/webportal",

  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
    // role: sessionStorage.getItem("role"),
    // state: sessionStorage.getItem("state")!=undefined ? sessionStorage.getItem("state") : null,
    // state_shortName: sessionStorage.getItem("state_shortName")!= undefined ? sessionStorage.getItem("state_shortName") : null,
  },
});
