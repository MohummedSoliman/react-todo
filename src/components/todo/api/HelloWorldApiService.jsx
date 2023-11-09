import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
});

export function retrieveHelloWorld() {
  return apiClient.get("hello-world");
}

export function retrieveHelloWorldPath(username) {
  return apiClient.get(`hello-world/path-variable/${username}`);
}
