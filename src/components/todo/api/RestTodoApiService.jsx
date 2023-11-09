import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080/',
    }
)

export function retrieveTodosForUserAPI(username){
    return apiClient.get(`users/${username}/todos`)
}

export function deleteTodoByIdAPI(username, id){
    return apiClient.delete(`users/${username}/todos/${id}`)
}

export function retrieveTodoAPI(username, id){
    return apiClient.get(`users/${username}/todos/${id}`);
}

export function updateTodoAPI(username, id, todo){
    return apiClient.put(`users/${username}/todos/${id}`, todo)
}