import axios from "axios";

export const axiosBaseURL = axios.create({
    baseURL: 'https://localhost:4000'
});