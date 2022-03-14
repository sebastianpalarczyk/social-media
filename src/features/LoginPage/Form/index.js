import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLogin } from "../loginSlice";
import { Form, Input, Button } from "./styled";


const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        dispatch(addLogin({
            username,
            password
        })); 
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <Input
                value={username}
                placeholder="Login"
                onChange={({ target }) => setUsername(target.value)} />
            <Input
                value={password}
                placeholder="Hasło"
                onChange={({ target }) => setPassword(target.value)} />
            <Button>Zaloguj</Button>
        </Form>
    )
}

export default FormLogin;