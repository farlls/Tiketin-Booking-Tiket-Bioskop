// client/src/services/authService.js
import axios from "../utils/axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";

const authService = {
  login: async (email, password) => {
    try {
      console.log("Attempting login with:", { email }); // Debugging
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      console.log("Login response:", response.data); // Debugging
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response?.data || error); // Debugging
      throw error.response?.data || { message: "Network error" };
    }
  },

  register: async (name, email, password, phoneNumber) => {
    try {
      console.log("Attempting registration:", { name, email, phoneNumber }); // Debugging
      const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
        phoneNumber,
      });
      console.log("Registration response:", response.data); // Debugging
      return response.data;
    } catch (error) {
      console.error("Registration error:", error.response?.data || error); // Debugging
      throw error.response?.data || { message: "Network error" };
    }
  },
};

export default authService;
