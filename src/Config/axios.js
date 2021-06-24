import axios from "axios";

export const axiosBaseURL = axios.create({
    baseURL: 'https://localhost:3000/v1/api'
});