import axios from "axios";
import { getLoginDataInLocalStorage } from "../../../loginDataLocalStorage";

export const getExamplePosts = async () => {
    const token = getLoginDataInLocalStorage("token");
    const response = await axios.get(`http://localhost:8080/app/posts`, {
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.data;
}