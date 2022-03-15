import axios from "axios";

export const sendLoginData = async (user) => {
    const response = await axios.post('http://localhost:8080/login', {
        username: user.username,
        password: user.password,
    })

    if (!response.ok) {
        new Error(response.statusText);
    }

    return response.headers.authorization;
} 