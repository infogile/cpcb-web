import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9099",
  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
});
