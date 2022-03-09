import axios from "axios";

export const getExamplePosts = async () => {
    const response = await axios.get(`http://localhost:8080/posts`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
}