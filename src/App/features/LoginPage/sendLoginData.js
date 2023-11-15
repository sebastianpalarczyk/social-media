import axios from "axios";

export const sendLoginData = async (user) => {
    try {
        const response = await axios.post('http://localhost:8080/login', {
            username: user.username,
            password: user.password,
        });

        console.log(user.username)
        console.log(user.password)

        if (response.status >= 200 && response.status < 300) {
            return response.headers.authorization;
        } else {
            throw new Error(`Błąd logowania: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Wystąpił błąd podczas logowania:', error.message);
        throw error;
    }
}