import axios from "axios";
import { getCookie } from "react-use-cookie";

const token = getCookie("w_auth");
console.log("token", token);

export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
