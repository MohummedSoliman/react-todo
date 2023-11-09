import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
});

export function retrieveTodosForUserAPI(username) {
  return apiClient.get(`users/${username}/todos`, {
    headers: {
      Authorization: { username: "Mohamed", password: "123" },
    },
  });
}

export function deleteTodoByIdAPI(username, id) {
  return apiClient.delete(`users/${username}/todos/${id}`);
}

export function retrieveTodoAPI(username, id) {
  return apiClient.get(`users/${username}/todos/${id}`);
}

export function updateTodoAPI(username, id, todo) {
  return apiClient.put(`users/${username}/todos/${id}`, todo);
}

export function createTodoAPI(username, todo) {
  return apiClient.post(`users/${username}/todos`, todo);
}

export function executeBasicAuthenticationService(token) {
  return apiClient.get("/basicAuth", {
    headers: {
      Authorization: token,
    },
  });
}
