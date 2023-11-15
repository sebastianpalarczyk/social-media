import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLogin } from "../loginSlice";
import { Form, Input, Button, Span } from "./styled";

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(addLogin({ username, password }));
        } catch (error) {
            console.error("Błąd podczas wysyłania akcji:", error);
        }
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Input
                id="username"
                name="username"
                autocomplete="current-username"
                value={username}
                placeholder="Adres e-mail"
                onChange={({ target }) => setUsername(target.value)} />
            <Input
                id="password"
                name="password"
                autocomplete="current-password"
                value={password}
                placeholder="Hasło"
                onChange={({ target }) => setPassword(target.value)} />
            <Button>Zaloguj</Button>
            <Span>Nie pamiętasz hasła?</Span>
            <Button primary>Utwórz nowe konto</Button>
        </Form>
    )
}

export default FormLogin;