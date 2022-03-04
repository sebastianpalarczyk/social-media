import React from "react";
import { Container, Input, Button } from "./styled";


const Form = () => {
    return (
        <Container>
            <Input placeholder="login" />
            <Input placeholder="hasło" />
            <Button>Zaloguj</Button>
        </Container>
    )
}

export default Form;