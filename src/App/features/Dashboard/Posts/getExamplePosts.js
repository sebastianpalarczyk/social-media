import axios from "axios";
import { getLoginDataInLocalStorage } from "../../../loginDataLocalStorage";

// export const getExamplePosts = async () => {
//     const token = getLoginDataInLocalStorage("token");
//     const response = await axios.get(`http://localhost:8080/app/posts`, {
//         headers: {
//             "Authorization": token,
//             "Content-Type": "application/json"
//         }
//     });

//     if (!response.ok) {
//         new Error(response.statusText);
//     }

//     return await response.data;
// }

export const getExamplePosts = async () => {
    try {
        const token = getLoginDataInLocalStorage("token");
        const response = await axios.get(`http://localhost:8080/app/posts`, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }
        });

        // Sprawdź, czy status odpowiedzi mieści się w zakresie sukcesu (2xx)
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            // Rzuć błąd, jeśli odpowiedź nie jest w zakresie sukcesu
            throw new Error(`Błąd pobierania postów: ${response.statusText}`);
        }
    } catch (error) {
        // Obsłuż błędy związane z żądaniem lub innymi problemami
        console.error('Wystąpił błąd podczas pobierania postów:', error.message);
        throw error; // Rzucić błąd, aby komponent wywołujący mógł go obsłużyć
    }
};