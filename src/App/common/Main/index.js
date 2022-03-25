import React from "react";
import { Container } from "./styled";

const Main = ({ children, primary }) => {
    if (primary) {
        return (
            <Container primary>
                {children}
            </Container>
        )
    }

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Main;