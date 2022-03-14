import axios from "axios";

export const sendLoginData = async (user) => {
    await axios.post('http://localhost:8080/login', {
        username: user.username,
        password: user.password,
}).then(response => console.log(response.headers.authorization))
.catch(error => console.error(error));
} 