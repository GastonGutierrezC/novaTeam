import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7542/api", // Coloca tu URL base completa aquí
});

export const fetchPosts = () => instance.get("/user/getusers");
export const createUser = (user) => instance.post("/user/adduser", user);
// Agrega otras funciones según sea necesario
