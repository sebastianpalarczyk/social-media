import axios from "axios";
import { getLoginDataInLocalStorage } from "../../../../loginDataLocalStorage";

export const addNewPost = async (post) => {
    const token = getLoginDataInLocalStorage("token");
    const content = "multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p";
    let formData = new FormData();
    console.log(post.file)
    // formData.append("file", post.file);
    console.log(formData)
    const response = await axios.post('http://localhost:8080/app/post', {
        body: formData
    },{
        headers: {
            "Authorization": token,
            "Content-Type":"multipart/form-data"
        }
    })

    if (!response.ok) {
        new Error(response.statusText);
    }

    return console.log(response);
} 