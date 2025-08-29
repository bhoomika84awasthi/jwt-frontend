import axios from "axios";

const API = axios.create({
  baseURL: "https://jwt-backend-1-funz.onrender.com", // 👈 Your Render backend
});

// Example API functions
export const registerUser = (data) => API.post("/api/auth/register", data);
export const loginUser = (data) => API.post("/api/auth/login", data);
export const getProtected = () => API.get("/api/protected");
