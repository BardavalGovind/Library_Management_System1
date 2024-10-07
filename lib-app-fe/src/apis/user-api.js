// user-api.js

import LibraryApplicationBackend from "./LibraryApplicationBackend";

export const loginUser = async ({ email, password }) => {
    try {
        const { data } = await LibraryApplicationBackend.post("/user/login", {
            email,
            password,
        });
        return data;
    } catch (error) {
        console.error("API Login Error:", error);
        throw error;
    }
};

export const signUpUser = async (userData) => {
    try {
        const { data } = await LibraryApplicationBackend.post("/user/signup", userData);
        return data;
    } catch (error) {
        console.error("API Signup Error:", error);
        throw error;
    }
};
