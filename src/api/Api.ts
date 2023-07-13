import axios from "axios";
import { TodoType } from "../types";

const api = axios.create({
    baseURL: "https://605b21f027f0050017c063b9.mockapi.io/api/v3/"
})

export const getTodos = () => api.get('houses')
export const fetchDeleteTodo = (id: number | string) => api.delete('houses/' + id)

export const fetchAddTodos = (data: TodoType) => api.post('houses', data)