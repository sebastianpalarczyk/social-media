import React from "react";
import Dashboard from "../../features/Dashboard";
import LoginPage from "../../features/LoginPage";
import {getLoginDataInLocalStorage} from "../../loginDataLocalStorage";

const HomePage = () => {
    const token = getLoginDataInLocalStorage("token");
    if (token === "null") {
        return (
            <LoginPage />
        )
    }
    return (
        <Dashboard />
    )
}

export default HomePage;