import { getLoginDataInLocalStorage } from "../../../loginDataLocalStorage";

export const getFile = async () => {
    console.log("Metoda getFile")
    const token = getLoginDataInLocalStorage();
    try {
      const response = await fetch(`http://localhost:8080/images/4/pobrany_plik.jpg`, {
        headers: {
            "Authorization": token,
        },
      });

      console.log("Odpowiedz "+response)
  
      if (!response.ok) {
        throw new Error('Nie udało się pobrać pliku.');
      }
  
      const fileData = await response.blob(); // Pobieranie pliku binarnego
      console.log("GetFile data" +fileData)

      return fileData;
    } catch (error) {
      throw new Error(`Błąd podczas pobierania pliku: ${error.message}`);
    }
  };