import React from "react";
import { Container, Header, List, Item } from "./styled";

const Contacts = () => {
    return (
        <Container>
            <Header>
                Kontakty
            </Header>
            <List>
                <Item>
                    Marek Nowak
                </Item>
                <Item>
                    Zdzisław Kowalski
                </Item>
            </List>
        </Container>
    )
}

export default Contacts;