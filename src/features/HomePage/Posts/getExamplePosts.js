import axios from "axios";

export const getExamplePosts = async () => {
    const response = await axios.get(`/social-media/example.json`);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
}