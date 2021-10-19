import axios from "axios";

export const api = axios.create({
    baseURL: "https://study-box-api.herokuapp.com/api",
    timeout: 5000
});