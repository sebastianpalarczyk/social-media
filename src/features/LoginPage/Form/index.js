import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "./styled";
import { sendLoginData } from "../sendLoginData";


const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        setUser({username, password});
        console.log(user)  
        dispatch(sendLoginData(user)); 
         
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