import axios from "axios";

export default () => {
  //const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://658acd66ba789a962237d946.mockapi.io/api",
  });
};