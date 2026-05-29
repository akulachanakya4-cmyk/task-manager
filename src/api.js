import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authAPI = {
  login: (email, password) => api.post("/auth/login", { email, password }),
  register: (name, email, password) =>
    api.post("/auth/register", { name, email, password }),
};

export const taskAPI = {
  getTasks: () => api.get("/tasks"),
  createTask: (taskData) => api.post("/tasks", taskData),
  deleteTask: (id) => api.delete(`/tasks/${id}`),
};

export default api;
