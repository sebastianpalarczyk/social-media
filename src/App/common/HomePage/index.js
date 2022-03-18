import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../tokenSlice";
import useHomePage from "../../useHomePage";

const HomePage = () => {
    const token = useSelector(selectToken);
    const view = useHomePage(token);

    return (
        <main>
            {view}
        </main>)
}

export default HomePage;
