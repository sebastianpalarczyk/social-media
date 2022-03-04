import React from "react";
import { Container } from "./styled";
import LoginButton from "./LoginButton";
import LoginInput from "./Input";

const Form = () => {
    return (
        <Container>
            <LoginInput placeholder="login" />
            <LoginInput placeholder="hasło" />
            <LoginButton />
        </Container>
    )
}

export default Form;