import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080/',
    }
)

export function retrieveTodosForUser(username){
    return apiClient.get(`users/Mohamed/todos`)
}