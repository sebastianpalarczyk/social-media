const localStorageKey = "token";

export const saveLoginDataInLocalStorage = token =>
    localStorage.setItem(localStorageKey, JSON.stringify(token));

export const getLoginDataInLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || {};