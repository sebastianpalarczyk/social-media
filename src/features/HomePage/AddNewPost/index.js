import React from "react";
import { Container, Input, Button } from "./styled"

const AddNewPost = () => {
    return (
        <Container>
           <Input placeholder="O czym myślisz?"/>
           <Button>Dodaj post</Button>
           <Input type="file"/>
        </Container>
    )
}
export default AddNewPost;