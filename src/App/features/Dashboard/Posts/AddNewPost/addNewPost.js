import axios from "axios";

export const addNewPost = async (post) => {
    const token = getLoginDataInLocalStorage("token");
    const response = await axios.post('http://localhost:8080/app/post', {
        message: post.message,
        headers: {
            "Content-type": "multipart/form-data",
            "Authorization": token,
        }
    })

    if (!response.ok) {
        new Error(response.statusText);
    }

    return console.log(response);
} 