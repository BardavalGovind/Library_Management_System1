// LibraryApplicationBackend.js

import axios from "axios";
import { getUserToken } from "../utils/AuthUtil";

const LibraryApplicationBackend = axios.create({
    baseURL: `http://localhost:8080`, // Ensure this is the correct base URL
});

// Axios interceptor to add Authorization header if token exists
LibraryApplicationBackend.interceptors.request.use(
    (config) => {
        const token = getUserToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Properly append Authorization header
            console.log("Authorization header set");
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default LibraryApplicationBackend;
