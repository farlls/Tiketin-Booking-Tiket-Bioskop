import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000/api",
});

instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;