// AuthUtil.js

import { loginUser, signUpUser } from "../apis/user-api";

const getUserToken = () => {
    return localStorage.getItem("token");
};

const setUser = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user); // Stringify user object
};

const loginUserFunction = async ({ email, password }) => {
    try {
        const data = await loginUser({ email, password });
        setUser(data);
        return data.user;
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Re-throw to handle in calling function
    }
};

const signupUserFunction = async (userData) => {
    try {
        const data = await signUpUser(userData);
        setUser(data);
        return data.user;
    } catch (error) {
        console.error("Signup failed:", error);
        throw error; // Re-throw to handle in calling function
    }
};

export { getUserToken, loginUserFunction as loginUser, signupUserFunction as signUpUser };
