import React from "react";
import useLogin from "../../useLogin";
import { useSelector } from "react-redux";
import { selectToken } from "../../tokenSlice";

const HomePage = () => {
    const token = useSelector(selectToken);
    const view = useLogin(token);

    return (
        <main>
            {view}
        </main>)
}

export default HomePage;
