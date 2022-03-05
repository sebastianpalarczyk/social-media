import React from "react";
import { fetchExamplePosts } from "../Posts/postsSlice";
import { useDispatch } from "react-redux";
import { Container, Input, Button } from "./styled"

const AddNewPost = () => {
    const dispatch = useDispatch();
    return (
        <Container>
           <Input placeholder="O czym myślisz?"/>
           <Button onClick={() => dispatch(fetchExamplePosts())}>Dodaj posty</Button>
           <Input type="file"/>
        </Container>
    )
}
export default AddNewPost;