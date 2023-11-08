import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080/',
    }
)

export function retrieveTodosForUserAPI(username){
    return apiClient.get(`users/Mohamed/todos`)
}

export function deleteTodoByIdAPI(username, id){
    return apiClient.delete(`users/${username}/todos/${id}`)
}