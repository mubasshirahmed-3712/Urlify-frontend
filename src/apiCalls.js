import axios from "axios";

// Create an axios instance for consistent API calls
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://urlify-backend.onrender.com/api",
  withCredentials: true, // Ensure cookies are sent for session-based authentication
});

// User Login
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await API.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response?.data || "Login failed" });
  }
};

// User Logout
export const logoutCall = async (dispatch) => {
  try {
    await API.post("/auth/logout"); // Ensure you have a logout route in the backend
    dispatch({ type: "LOGOUT" });
  } catch (err) {
    console.error("Logout failed:", err);
  }
};
