// AuthUtil.js

import { loginUser, logoutUser, signUpUser } from "../apis/user-api";

const getUserToken = () => {
    const token = localStorage.getItem("token");
    console.log("token in getUsertoken: ",token, "Type: ", typeof token);
    return token;
};

const getLocalStorageUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const setUser = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user)); // Stringify user object
};
/*
const loginUserFunction = async ({ email, password }) => {
    try {
        const data = await loginUser({ email, password });
        setUser(data);
        return data.user;
    } catch (error) {
        console.error("Login failed:", error);
        throw error; // Re-throw to handle in calling function
    }
};  */

const loginUserFunction = async ({ email, password }) => {
    try {
        const data = await loginUser({ email, password });
        console.log("login response data: ", data);
        console.log("Login successful. Token:", data.token); // Log token
        setUser(data); // Store user info including token
        return data.user;
    } catch (error) {
        console.error("Login failed:", error);
        throw error; 
    }
};

/*
const logoutUserFunction = async () => {
    const token = getUserToken();
    try{
        await logoutUser(token);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
    catch(error){
        console.error("Logout failed: ", error);
        throw error;
    }
}  */
    const logoutUserFunction = async () => {
        const token = getUserToken(); // Retrieve the token
        console.log("Token before logout:", token); // Check if this token is valid
        try {
            const response = await logoutUser(token); // Call logout API
            console.log("Logout response:", response); // Check API response
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        } catch (error) {
            console.error("Logout failed:", error); // Log errors if any
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

export { getUserToken,
     loginUserFunction as loginUser, 
     signupUserFunction as signUpUser,
      getLocalStorageUser, 
      logoutUserFunction as logoutUser };
