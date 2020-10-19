import axios from "axios";



const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const loggedInUser = localStorage.getItem("loggedInUser");

const storedUser = JSON.parse(loggedInUser || '""');

api.interceptors.request.use(
  function (config) {
    if (storedUser.token) {
      config.headers = {
        Authorization: `Bearer ${storedUser.token}`,
      };
    }
    return config;
  },
  function (error) {
    console.error(error);
  }
);

export default api;