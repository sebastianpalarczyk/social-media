import React from "react";
import Dashboard from "./features/Dashboard";
import LoginPage from "./features/LoginPage";

const useHomePage = (token) => {
    let view;

    if (token === "null") {
        view = <LoginPage />;
    } else {
        view = <Dashboard />;
    }
    return view;
}

export default useHomePage; 