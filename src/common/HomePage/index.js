import React from "react";
import { getLoginDataInLocalStorage } from "../../loginDataLocalStorage";
import HomePage from "../../features/Dashboard";
import LoginPage from "../../features/LoginPage";

const Home = () => {
    const token = getLoginDataInLocalStorage("token");
    if (token === "null") {
        return (
            <LoginPage />
        )
    }
    return (
        <HomePage />
    )
}

export default Home;