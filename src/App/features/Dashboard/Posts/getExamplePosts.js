import { getLoginDataInLocalStorage } from "../../../loginDataLocalStorage";

export const getPosts = async () => {
    const token = getLoginDataInLocalStorage("token");
    
    try {
        const response = await fetch(`http://localhost:8080/app/posts`, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};


