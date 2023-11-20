import axios from "axios";
import { getLoginDataInLocalStorage } from "../../../../loginDataLocalStorage";

export const addNewPost = async (formData) => {
    const token = getLoginDataInLocalStorage("token");

    const headers = {
        "Authorization": token,
        "Content-Type": "multipart/form-data",
    };

    try {
        const response = await axios.post('http://localhost:8080/app/post', formData, { headers });
        console.log('Response:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || 'Wystąpił błąd');
    }
};