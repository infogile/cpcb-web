import axios from "axios";

export default axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:9099",
  headers: {
    authorization: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : null,
  },
=======
  baseURL: "https://localhost:3000/api",
>>>>>>> 103609f... initial commit
});
