// api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://jwt-backend-1-funz.onrender.com", // Render backend URL
});

// Example API calls
export const loginUser = (data) => API.post("/api/login", data);
export const registerUser = (data) => API.post("/api/register", data);
